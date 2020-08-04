import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormFIeld';
import Button from '../../../components/Button';

function CadastroCategoria() {
  // função inicia setando falores vazios para a estrutura de dados valoresIniciais
  const [categorias, setCategorias] = useState([]);// atrbuí um arrya vazio ao estado categorias

  const valoresIniciais = {
    // Variável Obejeto valoreInicias com 3 chaves e valores vazíos, estrutura de dados
    nome: '',
    descricao: '',
    cor: '',

  };
  const [values, setValues] = useState(valoresIniciais);
  // atribuí a variável valores iniciais ao estado 'values'
  function setValue(chave, valor) {
    // como o estado valores tem um objeto com 3 elementos é criada a função setValues para alterar o estado de Value em suas 3 chaves de valor
    setValues({
      ...values,
      [chave]: valor, // home: 'valor
    });
  }

  function handleChange(infosDoEvento) { // função handle change atribuí ao atributo name o valor
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
    );
  }
  useEffect(() => {
    const URL = 'http://localhost:8080/categorias';
    fetch(URL)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([...resposta,
        ]);
      });

    /* setTimeout(() => {
      setCategorias([
        ...categorias,
        {
          id: 1,
          nome: 'Front End',
          descricao: 'Ensinando a fazer categorias lindas',
          cor: '#cbd1fdf',
        },
        {
          id: 2,
          nome: 'Back End',
          descricao: 'Ensinando a fazer programainhas marotos',
          cor: '#cbd1fdf',
        },
      ]);
    }, 2 * 1000); */
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form
        style={{ backgound: values.cor }}
        onSubmit={function handleSubmit(infosDoEvento) {
          infosDoEvento.preventDefault();
          setCategorias([
            ...categorias,
            values,
          ]);
          setValues(valoresIniciais);
        }}
      >

        <FormField

          label="Nome da Categoria"
          value={values.nome}
          onChange={handleChange}
          type="text"
          name="nome"
        />
        <FormField

          value={values.descricao}
          onChange={handleChange}
          type="textarea"
          name="descricao"
          label="Descrição"
        />

        <FormField

          value={values.cor}
          onChange={handleChange}
          type="color"
          name="cor"
          label="Cor"
        />
        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
      <div>
        Carregando...
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
    </PageDefault>
  );
}

export default CadastroCategoria;
