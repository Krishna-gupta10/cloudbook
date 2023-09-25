import React, { useContext, useEffect } from 'react';
import noteContext from '../context/notes/noteContext';

export default function About() {
    const a = useContext(noteContext);

    useEffect(() => {
        a.update();
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            This app is made by {a.state.name} who is in {a.state.class}
        </div>
    )
}
