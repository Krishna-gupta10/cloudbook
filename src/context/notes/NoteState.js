//Understanding Context API in React which lets you create a state variable which can be used in every component

import React from "react";
import noteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const notesInitial = [];
    const host = "http://localhost:5000"


    const [notes, setNotes] = useState(notesInitial);

    // Fetch all User notes
    const getNotes = async () => {
        const response = await fetch(`${host}/api/notes/fetchnotes`, {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRmY2EwYWU2ZmM4MGM1ZWU0ODM3Mjg0In0sImlhdCI6MTY5NTY2MDIxM30.fCQigvLliSDJ-uX2VS8yHy0b0_C4svHtfygntBavH-g",
            },
        });

        const json = await response.json();
        setNotes(json);
    }

    // Add a new note
    const addNote = async (title, description, category) => {
        //eslint-disable-next-line
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRmY2EwYWU2ZmM4MGM1ZWU0ODM3Mjg0In0sImlhdCI6MTY5NTY2MDIxM30.fCQigvLliSDJ-uX2VS8yHy0b0_C4svHtfygntBavH-g",
            },
            body: JSON.stringify({ title, description, category }),
        });

        const note = await response.json();
        setNotes(notes.concat(note));
    }

    // Delete a note
    const deleteNote = async (id) => {

        //eslint-disable-next-line
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRmY2EwYWU2ZmM4MGM1ZWU0ODM3Mjg0In0sImlhdCI6MTY5NTY2MDIxM30.fCQigvLliSDJ-uX2VS8yHy0b0_C4svHtfygntBavH-g",
            },
        });

        const newNotes = notes.filter((note) => { return note._id !== id });
        setNotes(newNotes);
    }

    // Edit a Note
    const editNote = async (id, title, description, category) => {

        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRmY2EwYWU2ZmM4MGM1ZWU0ODM3Mjg0In0sImlhdCI6MTY5NTY2MDIxM30.fCQigvLliSDJ-uX2VS8yHy0b0_C4svHtfygntBavH-g",
            },
            body: JSON.stringify({ title, description, category }),
        });
        const json = await response.json();
        console.log(json);

        let newNotes = JSON.parse(JSON.stringify(notes));
        for (let index = 0; index < newNotes.length; index++) {
            const element = notes[index];
            if (element._id === id) {
                newNotes[index].title = title;
                newNotes[index].description = description;
                newNotes[index].category = category;
                break;
            }
        }

        setNotes(newNotes);
    }

    return (
        <noteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;