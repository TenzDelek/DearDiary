"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";

export default function Diary() {
  const [loading, setLoading] = useState(false);
  const [notes, setNotes] = useState([]);
  const [count, setCount] = useState(false);
  const [form, setForm] = useState({
    content: "",
  });
  const [errorMessage, setErrorMessage] = useState({
    content: "",
    modalcontent: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [currentNotes, setCurrentNotes] = useState(null);

  const handleEdit = (note) => {
    setCurrentNotes(note);
    setShowModal(true);
  };

  const handleModalSubmit = async (e) => {
    e.preventDefault();
    if (currentNotes.content === "") {
      setErrorMessage((prev) => ({
        ...prev,
        modalcontent: "Please enter a note",
      }));
      return;
    }
    setShowModal(false);
    try {
      const res = await fetch(`/api/notes/${currentNotes.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(currentNotes),
      });
      const data = await res.json();
    } catch (err) {
      console.log("error while sending the notes details", err);
    } finally {
      setCount((prev) => !prev);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, [count]);

  const sendingData = async (data) => {
    try {
      let res = await fetch("/api/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      res = await res.json();
    } catch (err) {
      console.log("error while sending the notes details", err);
    } finally {
      setLoading((prev) => false);
      setCount((prev) => !prev);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (form.content === "") {
      setErrorMessage((prev) => ({
        modalcontent: "",
        content: "Please enter a note",
      }));
      return;
    }
    setLoading((prev) => true);
    sendingData(form);
    setForm({ content: "" });
  };

  const handleDelete = async (id) => {
    try {
      let res = await fetch(`/api/notes/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      res = await res.json();
    } catch (err) {
      console.log("error while sending the notes details", err);
    } finally {
      setCount((prev) => !prev);
    }
  };

  const fetchNotes = async () => {
    try {
      let res = await fetch("/api/notes", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      res = await res.json();
      setNotes((prev) => res.notes);
    } catch (err) {
      console.log("error while sending the notes details", err);
    }
  };

  return (
    <div className="p-6 m-4 grid grid-cols-1 md:grid-cols-4 gap-6 h-auto md:h-5/6 bg-background">
      {/* Add Notes Card */}
      <Card className="col-span-1 bg-card shadow-lg rounded-lg border border-border">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-card-foreground">
            Add Notes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label className="text-muted-foreground">Note</Label>
                <Input
                  type="text"
                  placeholder="Add your note here"
                  value={form.content}
                  minLength={1}
                  onChange={(e) => {
                    setForm({ ...form, content: e.target.value });
                    if (errorMessage.content)
                      setErrorMessage({ ...errorMessage, content: "" });
                  }}
                  className="bg-input text-foreground placeholder-muted-foreground border border-border rounded-md p-2 focus:ring focus:ring-primary"
                />
              </div>
            </div>
            {errorMessage.content && (
              <p className="text-red-500 mt-2 text-sm">
                {errorMessage.content}
              </p>
            )}
            {loading ? (
              <Button
                className="my-4 w-full bg-muted text-muted-foreground rounded-md py-2"
                disabled
              >
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

      {/* List of Notes */}
      <Card className="col-span-1 md:col-span-3 p-4 gap-4 bg-card shadow-lg border border-border rounded-lg">
        {notes.map((notes, index) => (
          <Card
            key={index}
            className="mb-4 bg-card shadow-md border border-border rounded-lg pt-2"
          >
            <CardContent>
              <p className="text-muted-foreground ">{notes.content}</p>
            </CardContent>
            <div className="flex justify-between px-6 pb-4">
              <Button
                onClick={() => handleEdit(notes)}
                className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-md px-4 py-2"
              >
                Edit
              </Button>
              <Button
                onClick={() => {
                  handleDelete(notes.id);
                }}
                className="bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-md px-4 py-2"
              >
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
              <CardTitle className="text-lg font-semibold text-card-foreground">
                Edit Note
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleModalSubmit}>
                <div className="grid w-full gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label className="text-muted-foreground">Note</Label>
                    <Input
                      type="text"
                      value={currentNotes?.content || ""}
                      onChange={(e) => {
                        setCurrentNotes({
                          ...currentNotes,
                          content: e.target.value,
                        });
                        setErrorMessage((prev) => ({
                          ...prev,
                          modalcontent: "",
                        }));
                      }}
                      className="bg-input text-foreground placeholder-muted-foreground border border-border rounded-md p-2 focus:ring focus:ring-primary"
                    />
                  </div>
                </div>
                {errorMessage.modalcontent && (
                  <p className="text-red-500 mt-2 text-sm">
                    {errorMessage.modalcontent}
                  </p>
                )}
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
