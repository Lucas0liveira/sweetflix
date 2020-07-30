import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import TemplatePage from '../../components/TemplatePage'

function CadastroCategoria() {
    const [categorias, setCategorias] = useState(['Teste'])
    const valoresIniciais = {
        nome: '',
        descriçao: '',
        cor: "#000000"
    }
    const [values, setValues] = useState(valoresIniciais)

    function handleSubmit(e) {
        e.preventDefault()
        setCategorias([
            ...categorias, values
        ])
    }

    function setValue(key, value) {
        //key pode ser nome, descrição, cor, etc
        setValues({
            ...values,
            [key]:value, //[] torna key dinamica, ela agora vale o mesmo que o parametro
            //caso este seja nome, temos então nome:'calor
        })
    }

    function handleCategoria(e){
        setValue(e.target.getAttribute('name'), e.target.value)
    }

    return(
        <TemplatePage>
            <h1>Cadastro de Categoria: {values.nome}</h1>

            <form onSubmit={handleSubmit}>

                <div>
                    <label>
                        Nome da Categoria: 
                        
                        <input 
                        type="text"
                        name="nome"
                        value={values.nome}
                        onChange ={handleCategoria}
                        />
                    </label>
                </div>

                <div>
                    <label>
                        Descrição: 
                        <textarea
                        type="text"
                        name="descriçao"
                        value={values.descriçao}
                        onChange ={handleCategoria}
                        />
                    </label>
                </div>

                <div>
                    <label>
                        Cor: 
                        <input 
                        type="color"
                        name="cor"
                        value={values.cor}
                        onChange ={handleCategoria}
                        />
                    </label>
                </div>

                <button type="submit">
                    Cadastrar
                </button>
            </form>

            <ul>
                {categorias.map((categoria, indice) => {
                    return (
                        <li key={`${categoria.nome} ${indice}`}>
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>

            <Link to="/">
                Ir para home
            </Link>
        </TemplatePage>
    )
}

export default CadastroCategoria