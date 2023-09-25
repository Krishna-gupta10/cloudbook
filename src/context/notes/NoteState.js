//Understanding Context API in React which lets you create a state variable which can be used in every component

import React from "react";
import noteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const s1 = {
        "name": "Krishna",
        "class": "12th B"
    }

    const[state, setState] = useState(s1);
    const update = ()=> {
        setTimeout(()=> {
            setState({
                "name": "Pappu",
                "class": "Pagalkhaana"
            })
        },2000)
    }

    return (
        <noteContext.Provider value={{state,update}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;