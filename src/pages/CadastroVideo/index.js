import React from 'react'
import { Link } from 'react-router-dom'
import TemplatePage from '../../components/TemplatePage'

function CadastroVideo() {
    return(
        <TemplatePage>
            <h1>Cadastro de Vídeo</h1>

            <Link to="/cadastro/categoria">
                Cadastrar Categoria
            </Link>
        </TemplatePage>
    )
}

export default CadastroVideo