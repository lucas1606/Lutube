import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom'
import FormField from '../../../components/FormFIeld';

function CadastroCategoria(){

    const [categorias, setCategorias] = useState([]);
  
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',

    };
    const [values, setValues] = useState(valoresIniciais);
    function setValue(chave, valor) {
        setValues({
            ...values,
            [chave]: valor, // home: 'valor
        })
    }
    function handleChange(infosDoEvento){
        
                    setValue(
                 infosDoEvento.target.getAttribute('name'),
                 infosDoEvento.target.value
                     );   
                }

    return(
        <PageDefault>
            <h1>Cadastro de Categoria: {values.nome}</h1>

    <form style= {{backgound:values.cor}} onSubmit={function handleSUbmit(infosDoEvento){
                infosDoEvento.preventDefault();
                setCategorias([
                    ...categorias,
                     values
                ]);
                setValues(valoresIniciais);
            }}>
                
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
             type="text"
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



            {/*    <div>
                <label>
                Descrição:
                <textarea
                 type = 'text'
                 name = 'descricao'
                 value={values.descricao} 
                onChange={handleChange}
               
                 />
                </label>
                </div>
                <div>


                <label>
               Cor:
                <input
                 type='color'
                 name='cor'
                 value={values.cor} 
                onChange={handleChange} 
                
                 />
                </label>
            </div> */}
                
                <button>
                    Cadastrar
                </button>
            </form>
                <ul>
                    {categorias.map((categoria, indice)=>{
                        return(
                        <li key={`${categoria}${indice}`}>
                            {categoria.nome}
                        </li>
                        )
                    })}
                </ul>


            <Link to="/">
                Ir para home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;