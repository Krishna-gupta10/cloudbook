//Understanding Context API in React which lets you create a state variable which can be used in every component

import React from "react";
import noteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const notesInitial =
        [
            {
                "_id": "6510556a0cc8581236f9c3b4b37",
                "user": "64fca0ae6fc80c5ee4837284",
                "title": "Call Emily Tomorrow!",
                "description": "Call her to ask if we are still together!",
                "category": "Priority",
                "createdAt": "2023-09-24T15:27:38.674Z",
                "__v": 0
            },
            {
                "_id": "6510556a0cc8586f339c3b4b37",
                "user": "64fca0ae6fc80c5ee4837284",
                "title": "Call Emily Tomorrow!",
                "description": "Call her to ask if we are still together!",
                "category": "Priority",
                "createdAt": "2023-09-24T15:27:38.674Z",
                "__v": 0
            },
            {
                "_id": "6510556a0cc844586f9c3b4b37",
                "user": "64fca0ae6fc80c5ee4837284",
                "title": "Call Emily Tomorrow!",
                "description": "Call her to ask if we are still together!",
                "category": "Priority",
                "createdAt": "2023-09-24T15:27:38.674Z",
                "__v": 0
            }
        ]


    const [notes, setNotes] = useState(notesInitial);

    // Add a new note
    const addNote = (title, description, category) => {
        const note = {
            "_id": "6510556a0cc844586f9c3b4b37",
            "user": "64fca0ae6fc80c5ee4837284",
            "title": title,
            "description": description,
            "category": category,
            "createdAt": "2023-09-24T15:27:38.674Z",
            "__v": 0
        };
        setNotes(notes.concat(note));
    }

    // Delete a note
    const deleteNote = () => {

    }

    // Edit a Note
    const editNote = () => {

    }

    return (
        <noteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;