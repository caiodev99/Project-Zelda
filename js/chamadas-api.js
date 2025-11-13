import { criaCard } from "./card.js";
import { divResultados } from "./elementos-html.js";

async function buscarCriaturas() {
  try {
    const response = await fetch('https://botw-compendium.herokuapp.com/api/v3/compendium/category/creatures');
    const dados = await response.json();

    console.log(dados);
    
    for (let index = 0; index < dados.data.length; index++) {
      const card = criaCard(dados.data[index]);
      divResultados.appendChild(card);
    }
    
  } catch(erro) {
    console.log('Ocorreu um erro ao buscar os dados na API: ', erro)
  }
}

export {
  buscarCriaturas
}