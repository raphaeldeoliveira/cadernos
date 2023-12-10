import React from "react";
import "./header.css"

export default function Header(props) {
    return (
        <header>
            <h1>Notebooks of {props.username}</h1>
        </header>
    )
}