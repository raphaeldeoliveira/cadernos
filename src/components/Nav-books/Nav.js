import React from "react";

import "./nav.css"

export default function Nav(props) {

    return (
        <nav>
            {/* esse .livros se refere ao nome do atributo que o get vai retornar. Enquanto o hred de <a> vai direcionar dar outro get na API e substituir os dados do componente "Book" */}
            {/*props.dados.livros.map((item) => (
                <a onClick={props.getLivro(item.id)}>
                    {item.nome}
                </a>
            ))*/}
            <a><label>sadassada</label></a>
            <a><label>sadassada</label></a>
            <a><label>sadassada</label></a>
            <a><label>sadassada</label></a>
            <a><label>sadassada</label></a>
            <a><label>sadassada</label></a>
            <a><label>sadassada</label></a>
            <a><label>sadassada</label></a>
            <a><label>sadassada</label></a>
            <a><label>sadassada</label></a>
            <a><label>sadassada</label></a>
            <a><label>sadassada</label></a>

            <a><label>Add new notepad +</label></a>
        </nav>
    )
}