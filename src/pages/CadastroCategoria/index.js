/* eslint-disable linebreak-style */
/* eslint-disable react/no-array-index-key */
/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TemplatePage from '../../components/TemplatePage';
import FormField from '../../components/FormField';
import Button from '../../components/Button';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState(['Teste']);
  const valoresIniciais = {
    nome: '',
    descriçao: '',
    cor: '#FF3D64',
  };
  const [values, setValues] = useState(valoresIniciais);

  function handleSubmit(e) {
    e.preventDefault();
    setCategorias([
      ...categorias, values,
    ]);
    setValues({ valoresIniciais });
  }

  function setValue(key, value) {
    // key pode ser nome, descrição, cor, etc
    setValues({
      ...values,
      [key]: value, // [] torna key dinamica, ela agora vale o mesmo que o parametro
      // caso este seja nome, temos então nome:'calor
    });
  }

  function handleCategoria(e) {
    setValue(e.target.getAttribute('name'),
      e.target.value);
  }
  //   useeffect recebe dois parametros, o que vai acontecer e quando
  useEffect(() => {
    const URL = window.location.hostname.includes('localhost') ? 
    'http://localhost:8080/categorias' : 'https://satisflix.herokuapp.com'
    fetch(URL).then(async (response) => {
      const resposta = await response.json();
      setCategorias([
        ...resposta,
      ]);
    });
  }, []);

  return (
    <TemplatePage>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form onSubmit={handleSubmit}>

        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleCategoria}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleCategoria}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleCategoria}
        />

        <Button type="submit">
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
      <div>
        Loading...
      </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.nome}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </TemplatePage>
  );
}

export default CadastroCategoria;
