import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext'
import Sidebar from './Sidebar';


export default function Notes() {
    const context = useContext(noteContext);
    const { notes, setNotes } = context;
    return (
        <>
            <Sidebar />
            <div className= "container text-center">
                <h1>Your Notes</h1>
                {notes.map((notes) => {
                    return notes.title;
                })
                }
            </div>
        </>

    )
}
