import React from 'react'
import Sidebar from './Sidebar'

export default function CreateNote() {
    return (
        <>
            <Sidebar />
            <div className="notes">
                <div className="mb-3">
                    <h5>Title</h5>
                    <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <textarea className="form-control custom-textarea" rows="25"></textarea>
                </div>
                <button type="submit" class="btn btn-primary mb-3">Submit</button>
            </div>4
        </>
    )
}
