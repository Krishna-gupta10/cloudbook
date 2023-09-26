import React, { useContext, useEffect, useState, useRef } from 'react'
import noteContext from '../context/notes/noteContext'
import Sidebar from './Sidebar';
import Noteitem from './Noteitem';


export default function Notes() {

    const context = useContext(noteContext);
    const { notes, getNotes, editNote} = context;
    const [note, setNote] = useState({ id: "", etitle: "", edescription: "", ecategory: "" })

    useEffect(() => {
        getNotes();
        //eslint-disable-next-line
    }, [])
    const ref = useRef(null);
    const refClose = useRef(null);

    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, ecategory: currentNote.category });
    }

    const handleClick = (e) => {
        e.preventDefault();
        editNote(note.id, note.etitle, note.edescription, note.ecategory);
        refClose.current.click();
    }


    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    return (
        <>

            <button type="button" className="btn btn-primary d-none" ref={ref} data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="col-md-7 mb-3">
                                <h6>Title</h6>
                                <input type="text" id="etitle" name="etitle" className="form-control" value={note.etitle} onChange={onChange} style={{width: '100%'}}/>
                            </div>
                            <div className="col-md-5 mb-3">
                                <h6>Category</h6>
                                <input type="text" id="ecategory" name="ecategory" className="form-control" value={note.ecategory} onChange={onChange} style={{width: '100%'}}/>
                            </div>
                            <div className="mb-3">
                                <textarea className="form-control custom-textarea" id="edescription" name="edescription" rows="5" value={note.edescription} onChange={onChange}></textarea>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" ref={refClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" disabled = {note.etitle.length < 5 || note.edescription.length < 8} className="btn btn-primary" onClick={handleClick}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>


            <Sidebar />
            <div className="container" style={{ marginLeft: '350px' }}>
                <h1 className="my-3 mx-2">Your Notes</h1>
                {notes.map((note) => {
                    return <Noteitem key={note._id} note={note} updateNote={updateNote} />;
                })
                }
            </div>
        </>

    )
}
