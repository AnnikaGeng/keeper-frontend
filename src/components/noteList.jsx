import React, { useEffect, useState } from "react";
import { URL } from "./App";

const Note = (props) => (
    <div className="note">
        <h1>{props.note.title}</h1>
        <p>{props.note.content}</p>
        <button onClick={
            () => {
                props.deleteNote(props.note._id);
            }
        }>DELETE</button>
    </div>
);

export default function NoteList() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        async function getNotes() {
            const response = await fetch(`${URL}/record/`);

            if(!response.ok) {
                const message = `An error occurred: ${response.statusText}`;
                window.alert(message);
                return;
            }

            const records = await response.json();
            setNotes(records);
        }

        getNotes();

        return;
    }, [notes.length]);

    async function deleteNote(id) {
        await fetch(`${URL}/${id}`, {
            method: "DELETE"
        });

        const newNotes = notes.filter((el) => el._id !== id);
        setNotes(newNotes);
    }

    function noteList() {
        return notes.map((note) => {
            return (
                <Note
                  note={note}
                  deleteNote={() => deleteNote(note._id)}
                  key={note._id}
                />
            )
        })
    }

    return (
        <div>
            {noteList()}
        </div>
    )
}