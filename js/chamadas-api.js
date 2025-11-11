async function buscarCriaturas() {
  try {
    const response = await fetch('https://botw-compendium.herokuapp.com/api/v3/compendium/category/creatures');
    const dados = await response.json();
    console.log(dados);
        for (let index = 0; index < dados.data.length; index++) {
      console.log(dados.data[index]);      
    }
    
  } catch(erro) {
    console.log('Ocorreu um erro ao buscar os dados na API: ', erro)
  }
}

export {
  buscarCriaturas
}