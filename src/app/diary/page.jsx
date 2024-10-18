"use client"

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";

const initialFormState = {
    title: "",
    content: "",
};

export default function Diary() {
    const [loading, setLoading] = useState(false);
    const [diaries, setDiaries] = useState([]);
    const [count, setCount] = useState(false);
    const [form, setForm] = useState(initialFormState);

    const [showModal, setShowModal] = useState(false);
    const [currentDiary, setCurrentDiary] = useState(null);

    const handleEdit = (diary) => {
        setCurrentDiary(diary);
        setShowModal(true);
    };

    const handleModalSubmit = async (e) => {
        e.preventDefault();
        setShowModal(false);
        try {
            const res = await fetch(`/api/diary/${currentDiary.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(currentDiary),
            });
            const data = await res.json();
        } catch (err) {
            console.log("error while sending the diary details", err);
            setForm(initialFormState);
        } finally {
            setCount((prev) => !prev);
        }
    };

    useEffect(() => {
        fetchDiaries();
    }, [count]);

    const sendingData = async (data) => {
        try {
            let res = await fetch("/api/diary", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            res = await res.json();
        } catch (err) {
            console.log("error while sending the diary details", err);
        } finally {
            setLoading((prev) => false);
            setCount((prev) => !prev);
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading((prev) => true);
        sendingData(form);
    }

    const handleDelete = async (id) => {
        try {
            let res = await fetch(`/api/diary/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            res = await res.json();
        } catch (err) { console.log("error while sending the diary details", err); }
        finally {
            setCount((prev) => !prev);
        }
    }

    const fetchDiaries = async () => {
        try {
            let res = await fetch("/api/diary", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            res = await res.json();
            setDiaries((prev) => res.diaries);
        } catch (err) {
            console.log("error while sending the diary details", err);
        }
    }

    return (
        <div className="p-6 m-4 grid grid-cols-1 md:grid-cols-4 gap-6 h-auto md:h-5/6 bg-background">
            {/* Add Diary Card */}
            <Card className="col-span-1 bg-card shadow-lg rounded-lg border border-border">
                <CardHeader>
                    <CardTitle className="text-lg font-semibold text-card-foreground">Add Diary</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <div className="grid w-full gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label className="text-muted-foreground">Title</Label>
                                <Input
                                    type="text"
                                    placeholder="Title"
                                    value={form.title}
                                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                                    className="bg-input text-foreground placeholder-muted-foreground border border-border rounded-md p-2 focus:ring focus:ring-primary"
                                />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label className="text-muted-foreground">Content</Label>
                                <Input
                                    type="text"
                                    placeholder="Content"
                                    value={form.content}
                                    onChange={(e) => setForm({ ...form, content: e.target.value })}
                                    className="bg-input text-foreground placeholder-muted-foreground border border-border rounded-md p-2 focus:ring focus:ring-primary"
                                />
                            </div>
                        </div>
                        {loading ? (
                            <Button className="my-4 w-full bg-muted text-muted-foreground rounded-md py-2" disabled>
                                Loading...
                            </Button>
                        ) : (
                            <Button className="my-4 w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-md py-2">
                                Add
                            </Button>
                        )}
                    </form>
                </CardContent>
            </Card>

            {/* List of Diaries */}
            <Card className="col-span-1 md:col-span-3 p-4 gap-4 bg-card shadow-lg border border-border rounded-lg">
                {diaries.map((diary, index) => (
                    <Card key={index} className="mb-4 bg-card shadow-md border border-border rounded-lg">
                        <CardHeader>
                            <CardTitle className="text-xl font-semibold text-card-foreground">{diary.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{diary.content}</p>
                        </CardContent>
                        <div className="flex justify-between px-6 pb-4">
                            <Button onClick={() => handleEdit(diary)} className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-md px-4 py-2">
                                Edit
                            </Button>
                            <Button onClick={() => { handleDelete(diary.id) }} className="bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-md px-4 py-2">
                                Delete
                            </Button>
                        </div>
                    </Card>
                ))}
            </Card>

            {/* Modal for Editing */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-card rounded-lg shadow-lg p-6 w-11/12 md:w-1/3">
                        <CardHeader>
                            <CardTitle className="text-lg font-semibold text-card-foreground">Edit Diary</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleModalSubmit}>
                                <div className="grid w-full gap-4">
                                    <div className="flex flex-col space-y-1.5">
                                        <Label className="text-muted-foreground">Title</Label>
                                        <Input
                                            type="text"
                                            value={currentDiary?.title || ""}
                                            onChange={(e) => setCurrentDiary({ ...currentDiary, title: e.target.value })}
                                            className="bg-input text-foreground placeholder-muted-foreground border border-border rounded-md p-2 focus:ring focus:ring-primary"
                                        />
                                    </div>
                                    <div className="flex flex-col space-y-1.5">
                                        <Label className="text-muted-foreground">Content</Label>
                                        <Input
                                            type="text"
                                            value={currentDiary?.content || ""}
                                            onChange={(e) => setCurrentDiary({ ...currentDiary, content: e.target.value })}
                                            className="bg-input text-foreground placeholder-muted-foreground border border-border rounded-md p-2 focus:ring focus:ring-primary"
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-end gap-4 mt-4">
                                    <Button
                                        type="button"
                                        className="bg-muted text-muted-foreground hover:bg-muted/90 rounded-md px-4 py-2"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Cancel
                                    </Button>
                                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4 py-2">
                                        Save
                                    </Button>
                                </div>
                            </form>
                        </CardContent>
                    </div>
                </div>
            )}
        </div>


    );
}