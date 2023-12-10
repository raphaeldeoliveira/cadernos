import React from "react";
import "./login.css"

import Spinner from "../../components/Loading-spinner/Spinner";

export default function Login() {

    const [cadastroActive, setCadastroActive] = React.useState(false)

    function handlerCadastroState() {
        setCadastroActive((prevState) => !prevState)
    }

    return (
        <div className="login-page">
            <div className="banner">

            </div>

            <div>
                {!cadastroActive ? (
                    <h1>Welcome back!</h1>
                ) : 
                (
                    <h1>Register now!</h1>
                )}

                {/* aqui deve ficar uma rota. Por padrao ela mostra o formulario de login. porem se o usuario clicar em cadastre-se, ele vai para a rota de cadastro sem ir para outra pagina. Somente mudando o conteudo dessa secção para o outro formulario. Com o router ainda nao esta implementado, vai ser testado com um hook state para transitar entre os dois formularios. Os atributos 'required' foram retirados para os testes */}

                {!cadastroActive ? (
                    <form>

                        <label htmlFor="nome">Username or email</label>
                        <input
                        type="text"
                        id="nome"
                        name="nome"
                        //value={dadosFormulario.nome}
                        //onChange={handleInputChange}
                        />

                        <label htmlFor="senha">Senha:</label>
                        <input
                        type="password"
                        id="senha"
                        name="senha"
                        //value={dadosFormulario.senha}
                        //onChange={handleInputChange}
                        />

                        <button type="submit">Login</button>

                        <button onClick={handlerCadastroState}>Ainda não tem cadastro?</button>

                    </form>
                ) : (
                    <form>

                        <label htmlFor="nome">Nome completo: </label>
                        <input
                        type="text"
                        id="nome"
                        name="nome"
                        //value={dadosFormulario.nome}
                        //onChange={handleInputChange}
                        required
                        />

                        <label htmlFor="senha">Nome de usuario:</label>
                        <input
                        type="password"
                        id="senha"
                        name="senha"
                        //value={dadosFormulario.senha}
                        //onChange={handleInputChange}
                        />

                        <label htmlFor="senha">Email:</label>
                        <input
                        type="password"
                        id="senha"
                        name="senha"
                        //value={dadosFormulario.senha}
                        //onChange={handleInputChange}
                        required
                        />

                        <label htmlFor="senha">Senha:</label>
                        <input
                        type="password"
                        id="senha"
                        name="senha"
                        //value={dadosFormulario.senha}
                        //onChange={handleInputChange}
                        required
                        />

                        <button type="submit">Cadastrar</button>

                        <button onClick={handlerCadastroState}>Ja tenho cadastro!</button>

                    </form>
                )}
                
            </div>
            
        </div>
    )
}