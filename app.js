function pesquisar() {
    // Função responsável por realizar a pesquisa e exibir os resultados na página.
    let section = document.getElementById("resultados-pesquisa"); // Obtém a seção onde os resultados serão exibidos.
   
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    //se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um atleta ou esporte</p>"
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    
    // Inicializa uma string vazia para armazenar os resultados da pesquisa.
    let resultados = ""; 
    let titulo = "";
    let descricao = "";
    let tags  = "";
    
    // Itera sobre cada dado na lista de dados e constrói o HTML para exibir os resultados.
    for (let dado of dados) {
        titulo = dado.titulo.toLocaleLowerCase()
        descricao = dado.descricao.toLocaleLowerCase()
        tags = dado.tags.toLocaleLowerCase()

        //se titulo includeso campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            //cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank"> Mais informações</a>
            </div>
        `;

        }   
    }

    if (!resultados){
        resultados = "<p>Nada foi enconstrado</p>"

    }


    // Atribui o HTML gerado à seção de resultados.
    section.innerHTML = resultados;
}