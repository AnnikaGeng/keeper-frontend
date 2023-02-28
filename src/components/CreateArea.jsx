import React, { useState } from "react";
import { useNavigate } from "react-router";
import { URL } from "./App";


export default function CreateArea() {
    const [note, setNote] = useState({
        title: "",
        content: "",
    });
    const navigate = useNavigate();

    function updateNote(value) {
        return setNote((prev) => {
            // console.log(value.title);
            return {...prev, ...value};
        });
    }

    async function onSubmit(e) {
        e.preventDefault();

        const newNote = {...note};
        //console.log(note.title);

        await fetch(`${URL}/record/add`, {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(newNote),
        })
        .catch(error => {
            window.alert(error);
            return;
        });

        // setNote({
        //     title: "",
        //     content: ""
        // });
        navigate("/");
    }

    return (
        <div>
        <h3 className="newNoteTitle">Create new note</h3>
        <form onSubmit={onSubmit}>
            <input
             placeholder="Give a title" 
             className="form-control"
             type="text"
             id="title"
             defaultValue={note.title}
             onChange={(e) => {
                //console.log(e.target.value);
                updateNote({title: e.target.value})
             }} 
             />

            <textarea 
            className="form-control"
            onChange={(e) => updateNote({content: e.target.value})} 
            name="content" 
            placeholder="Take a note..." 
            rows="3" 
            value={note.content}/>
            <button type="submit" className="btn btn-outline-primary">submit</button>
        </form>
        </div>
    );
}

