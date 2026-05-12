const dados = {

                <div class="card h-100 shadow game-card">

                    <img src="${jogo.imagem_principal}" class="card-img-top card-game-img">

                    <div class="card-body d-flex flex-column">

                        <h5>${jogo.nome}</h5>

                        <p>${jogo.descricao}</p>

                        <a href="detalhe.html?id=${jogo.id}" class="btn btn-dark mt-auto">
                            Acessar
                        </a>
                    </div>
                </div>
            </div>
        `;
    });
}


// DETALHES
if(document.getElementById('detalhes-container')) {

    const parametros = new URLSearchParams(window.location.search);

    const id = Number(parametros.get('id'));

    const jogo = dados.jogos.find(item => item.id === id);


    const detalhesContainer = document.getElementById('detalhes-container');

    detalhesContainer.innerHTML = `

        <div class="row align-items-center">

            <div class="col-lg-6">
                <img src="${jogo.imagem_principal}" class="img-fluid detalhe-img">
            </div>

            <div class="col-lg-6">

                <h1>${jogo.nome}</h1>

                <p class="mt-3">
                    ${jogo.conteudo}
                </p>

                <ul class="list-group mt-4">
                    <li class="list-group-item"><strong>Gênero:</strong> ${jogo.genero}</li>
                    <li class="list-group-item"><strong>Estúdio:</strong> ${jogo.estudio}</li>
                    <li class="list-group-item"><strong>Lançamento:</strong> ${jogo.lancamento}</li>
                    <li class="list-group-item"><strong>Plataforma:</strong> ${jogo.plataforma}</li>
                    <li class="list-group-item"><strong>Nota:</strong> ${jogo.nota}</li>
                </ul>
            </div>
        </div>
    `;


    const personagensContainer = document.getElementById('personagens-container');


    jogo.personagens.forEach(personagem => {

        personagensContainer.innerHTML += `

            <div class="col-lg-4 col-md-6 mb-4">

                <div class="card h-100 shadow">

                    <img src="${personagem.imagem}" class="card-img-top personagem-img">

                    <div class="card-body">
                        <h5>${personagem.nome}</h5>
                        <p>${personagem.descricao}</p>
                    </div>
                </div>
            </div>
        `;
    });
}