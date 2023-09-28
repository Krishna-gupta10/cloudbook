import React, { useContext, useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import './css/Notes.css';
import noteContext from '../context/notes/noteContext';
import Alert from './Alert';

export default function CreateNote(props) {
    const context = useContext(noteContext);
    const { addNote } = context;
    const [note, setNote] = useState({ title: '', description: '', category: '' });

    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.category);
        setNote({ title: '', description: '', category: '' });
        props.showAlert('Note Created Successfully!', 'success');
    };

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    };

    return (
        <>
            <div className="App">
                <Navbar title="Cloudbook" link1="About" />
            </div>
            <Alert />
            <Sidebar />
            <div className="notes container">
                <div className="row">
                    <div className="col-md-7 mb-3">
                        <h5>Title</h5>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            className="form-control"
                            value={note.title}
                            onChange={onChange}
                            placeholder="Example: Shopping List"
                        />
                    </div>
                    <div className="col-md-5 mb-3">
                        <h5>Category</h5>
                        <input
                            type="text"
                            id="category"
                            name="category"
                            className="form-control"
                            value={note.category}
                            onChange={onChange}
                            placeholder="Example: priority, personal"
                        />
                    </div>
                </div>
                <div className="mb-3">
                    <textarea
                        className="form-control custom-textarea"
                        id="description"
                        placeholder="Your Text Goes Here"
                        name="description"
                        rows="15"
                        value={note.description}
                        onChange={onChange}
                    ></textarea>
                </div>
                <button
                    disabled={note.title.length < 5 || note.description.length < 8}
                    type="submit"
                    className="btn btn-primary mb-3"
                    onClick={handleClick}
                >
                    Add Note
                </button>
            </div>
        </>
    );
}
