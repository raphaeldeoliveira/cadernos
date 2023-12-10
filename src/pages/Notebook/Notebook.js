import React from "react";

import Nav from "../../components/Nav-books/Nav"
import Book from "../../components/Book/Book"
import Header from "../../components/Header/Header";

import "./notebook.css"

export default function Notebook(props) {

    React.useEffect(() => {
        fetch('https://api.exemplo.com/dados')
        .then(response => response.json())
        .then(data => props.setDados(data))
        .catch(error => console.error('Erro ao buscar dados:', error));
    }, [])

    return (
        <div className="notebook">
            <Nav 
                dados={props.dados}
            />
            <div className="header-and-book">
                <Header />
                <Book />
            </div>
        </div>
    )
}