import React from 'react'
import { Link } from 'react-router-dom'
import TemplatePage from '../../components/TemplatePage'

function CadastroCategoria() {
    return(
        <TemplatePage>
            <h1>Cadastro de Categoria</h1>

            <form>

                <label>
                    Nome da Categoria
                    
                    <input 
                    type="text"
                    />
                </label>

                <button>
                    Cadastrar
                </button>
            </form>
            <Link to="/">
                Ir para home
            </Link>
        </TemplatePage>
    )
}

export default CadastroCategoria