"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";

const initialFormState = {
  title: "",
  content: "",
  tags: [],
};

export default function Diary() {
  const [loading, setLoading] = useState(false);
  const [diaries, setDiaries] = useState([]);
  const [count, setCount] = useState(false);
  const [form, setForm] = useState(initialFormState);
  const [showModal, setShowModal] = useState(false);
  const [currentDiary, setCurrentDiary] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [uniqueTags, setUniqueTags] = useState([]);

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
        body: JSON.stringify({
          title: currentDiary.title,
          content: currentDiary.content,
          tags: currentDiary.tags,
        }),
      });
      await res.json();
      fetchDiaries();
    } catch (err) {
      console.log("Error updating diary:", err);
    } finally {
      setForm(initialFormState);
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
      await res.json();
      fetchDiaries();
    } catch (err) {
      console.log("Error sending diary:", err);
    } finally {
      setLoading(false);
      setForm(initialFormState);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    sendingData(form);
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/diary/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      fetchDiaries();
    } catch (err) {
      console.log("Error deleting diary:", err);
    }
  };

  const fetchDiaries = async () => {
    try {
      let res = await fetch("/api/diary", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      res = await res.json();
      setDiaries(res.diaries);
      setUniqueTags([...new Set(res.diaries.flatMap((diary) => diary.tags))]); // Populate unique tags
    } catch (err) {
      console.log("Error fetching diaries:", err);
    }
  };

  const filteredDiaries = diaries.filter(
    (diary) =>
      diary.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      diary.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      diary.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  return (
    <div className="p-6 m-4 grid grid-cols-1 md:grid-cols-4 gap-6 h-auto md:h-5/6 bg-background">
      <Card className="col-span-1 bg-card shadow-lg rounded-lg border border-border">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-card-foreground">
            Add Diary
          </CardTitle>
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
                  onChange={(e) =>
                    setForm({ ...form, content: e.target.value })
                  }
                  className="bg-input text-foreground placeholder-muted-foreground border border-border rounded-md p-2 focus:ring focus:ring-primary"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label className="text-muted-foreground">
                  Tags (comma separated)
                </Label>
                <Input
                  type="text"
                  placeholder="Tags"
                  value={form.tags.join(", ")}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      tags: e.target.value.split(",").map((tag) => tag.trim()),
                    })
                  }
                  className="bg-input text-foreground placeholder-muted-foreground border border-border rounded-md p-2 focus:ring focus:ring-primary"
                />
              </div>
            </div>
            <Button
              className="my-4 w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-md py-2"
              disabled={loading}
            >
              {loading ? "Loading..." : "Add"}
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card className="col-span-1 md:col-span-3 p-4 gap-4 bg-card shadow-lg border border-border rounded-lg">
        <Input
          type="text"
          placeholder="Search diaries by title, content, or tags"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="mb-4 bg-input text-foreground placeholder-muted-foreground border border-border rounded-md p-2 focus:ring focus:ring-primary"
        />

        <div className="flex flex-wrap gap-2 mb-4">
          {uniqueTags.map((tag) => (
            <Button
              key={tag}
              onClick={() => setSearchQuery(tag)}
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-md px-3 py-1"
            >
              {tag}
            </Button>
          ))}
        </div>

        {filteredDiaries.map((diary, index) => (
          <Card
            key={index}
            className="mb-4 bg-zinc-900 shadow-md border border-border rounded-lg"
          >
              <CardTitle className="text-xl font-semibold text-black bg-white p-2 rounded-lg w-fit ml-5 mt-3 mb-3">
                {diary.title}
              </CardTitle>
            <CardContent>
              <p className="text-muted-foreground border p-2">{diary.content}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {diary.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-zinc-600 text-secondary-foreground px-3 py-1 rounded-lg text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
            <div className="flex justify-between px-6 pb-4">
              <Button
                onClick={() => handleEdit(diary)}
                className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-md px-4 py-2"
              >
                Edit
              </Button>
              <Button
                onClick={() => handleDelete(diary.id)}
                className="bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-md px-4 py-2"
              >
                Delete
              </Button>
            </div>
          </Card>
        ))}
      </Card>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-card rounded-lg shadow-lg p-6 w-11/12 md:w-1/3">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-card-foreground">
                Edit Diary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleModalSubmit}>
                <div className="grid w-full gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label className="text-muted-foreground">Title</Label>
                    <Input
                      type="text"
                      value={currentDiary?.title || ""}
                      onChange={(e) =>
                        setCurrentDiary({
                          ...currentDiary,
                          title: e.target.value,
                        })
                      }
                      className="bg-input text-foreground placeholder-muted-foreground border border-border rounded-md p-2 focus:ring focus:ring-primary"
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label className="text-muted-foreground">Content</Label>
                    <Input
                      type="text"
                      value={currentDiary?.content || ""}
                      onChange={(e) =>
                        setCurrentDiary({
                          ...currentDiary,
                          content: e.target.value,
                        })
                      }
                      className="bg-input text-foreground placeholder-muted-foreground border border-border rounded-md p-2 focus:ring focus:ring-primary"
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label className="text-muted-foreground">
                      Tags (comma separated)
                    </Label>
                    <Input
                      type="text"
                      value={currentDiary?.tags?.join(", ") || ""}
                      onChange={(e) =>
                        setCurrentDiary({
                          ...currentDiary,
                          tags: e.target.value
                            .split(",")
                            .map((tag) => tag.trim()),
                        })
                      }
                      className="bg-input text-foreground placeholder-muted-foreground border border-border rounded-md p-2 focus:ring focus:ring-primary"
                    />
                  </div>
                </div>
                <Button className="my-4 w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-md py-2">
                  Update
                </Button>
              </form>
            </CardContent>
          </div>
        </div>
      )}
    </div>
  );
}
