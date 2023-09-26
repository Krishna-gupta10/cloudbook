import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext'
import Sidebar from './Sidebar';
import Noteitem from './Noteitem';


export default function Notes() {
    const context = useContext(noteContext);
    const { notes } = context;
    return (
        <>
            <Sidebar />
            <div className="container" style = {{marginLeft: '350px'}}>
                <h1 className= "my-3">Your Notes</h1>
                {notes.map((note) => {
                    return <Noteitem key = {note._id} note={note} />;
                })
                }
            </div>
        </>

    )
}
