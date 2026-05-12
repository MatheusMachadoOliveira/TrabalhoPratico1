
const dados = {
  jogos: [
    {
      id: 1,
      nome: "The Witcher 3: Wild Hunt",
      descricao: "RPG de mundo aberto com monstros, escolhas morais e magia.",
      conteudo:
        "Geralt de Rívia, um caçador de monstros conhecido como bruxo, parte em busca de Ciri, sua filha adotiva, em meio a uma guerra entre reinos e à perseguição da Caçada Selvagem. Considerado um dos melhores RPGs já feitos, o jogo combina narrativa madura, missões secundárias memoráveis e um vasto mundo aberto.",
      genero: "RPG de Ação",
      estudio: "CD Projekt Red",
      lancamento: "19 de maio de 2015",
      plataforma: "PC / PS4 / PS5 / Xbox One / Xbox Series / Switch",
      nota: "9.8",
      destaque: true,
      imagem_principal: "assets/img/personagens/witcher.jpg",
      personagens: [
        {
          nome: "Geralt de Rívia",
          descricao: "Bruxo caçador de monstros, protagonista da saga.",
          imagem: "https://picsum.photos/seed/geralt/600/400"
        },
        {
          nome: "Ciri",
          descricao: "Filha adotiva de Geralt, herdeira do Sangue Ancião.",
          imagem: "https://picsum.photos/seed/ciri/600/400"
        },
        {
          nome: "Yennefer de Vengerberg",
          descricao: "Poderosa feiticeira e grande amor de Geralt.",
          imagem: "https://picsum.photos/seed/yennefer/600/400"
        }
      ],
      fotos: [
        { titulo: "Cidade de Novigrad", imagem: "https://picsum.photos/seed/witcher1/800/500" },
        { titulo: "Pântanos de Velen", imagem: "https://picsum.photos/seed/witcher2/800/500" },
        { titulo: "Ilhas Skellige", imagem: "https://picsum.photos/seed/witcher3/800/500" }
      ]
    },
    {
      id: 2,
      nome: "Elden Ring",
      descricao: "Action-RPG dark fantasy em mundo aberto criado por Miyazaki e G.R.R. Martin.",
      conteudo:
        "Em um mundo devastado chamado Lands Between, o jogador encarna um Maculado em busca dos fragmentos do Anel Prístino para se tornar o novo Lorde Prístino. O jogo é famoso pela dificuldade, pelo level design vertical e pela liberdade de exploração.",
      genero: "Soulslike / Mundo Aberto",
      estudio: "FromSoftware",
      lancamento: "25 de fevereiro de 2022",
      plataforma: "PC / PS4 / PS5 / Xbox One / Xbox Series",
      nota: "9.7",
      destaque: true,
      imagem_principal: "assets/img/personagens/eldenring.jpg",
      personagens: [
        {
          nome: "Maculado (Tarnished)",
          descricao: "Protagonista personalizável em busca do Anel Prístino.",
          imagem: "https://picsum.photos/seed/tarnished/600/400"
        },
        {
          nome: "Malenia",
          descricao: "Lâmina de Miquella, uma das chefes mais temidas do jogo.",
          imagem: "https://picsum.photos/seed/malenia/600/400"
        },
        {
          nome: "Ranni, a Bruxa",
          descricao: "Semideusa misteriosa que oferece um caminho alternativo.",
          imagem: "https://picsum.photos/seed/ranni/600/400"
        }
      ],
      fotos: [
        { titulo: "Limgrave", imagem: "https://picsum.photos/seed/elden1/800/500" },
        { titulo: "Capital Real de Leyndell", imagem: "https://picsum.photos/seed/elden2/800/500" },
        { titulo: "Caelid", imagem: "https://picsum.photos/seed/elden3/800/500" }
      ]
    },
    {
      id: 3,
      nome: "God of War Ragnarök",
      descricao: "Aventura nórdica épica de Kratos e Atreus rumo ao fim do mundo.",
      conteudo:
        "Continuação direta de God of War (2018), Ragnarök acompanha Kratos e seu filho Atreus enquanto enfrentam deuses nórdicos e tentam evitar — ou cumprir — a profecia do fim do mundo. A jornada combina combate visceral, narrativa emocional e um dos melhores trabalhos de direção do PlayStation.",
      genero: "Ação / Aventura",
      estudio: "Santa Monica Studio",
      lancamento: "9 de novembro de 2022",
      plataforma: "PS4 / PS5 / PC",
      nota: "9.6",
      destaque: true,
      imagem_principal: "assets/img/personagens/godofwar.jpg",
      personagens: [
        {
          nome: "Kratos",
          descricao: "Ex-Deus da Guerra grego vivendo em terras nórdicas.",
          imagem: "https://picsum.photos/seed/kratos/600/400"
        },
        {
          nome: "Atreus",
          descricao: "Filho de Kratos, também conhecido como Loki.",
          imagem: "https://picsum.photos/seed/atreus/600/400"
        },
        {
          nome: "Mimir",
          descricao: "Cabeça falante mais inteligente das nove realms.",
          imagem: "https://picsum.photos/seed/mimir/600/400"
        }
      ],
      fotos: [
        { titulo: "Midgard", imagem: "https://picsum.photos/seed/gow1/800/500" },
        { titulo: "Vanaheim", imagem: "https://picsum.photos/seed/gow2/800/500" },
        { titulo: "Svartalfheim", imagem: "https://picsum.photos/seed/gow3/800/500" }
      ]
    },
    {
      id: 4,
      nome: "Red Dead Redemption 2",
      descricao: "Western em mundo aberto sobre a queda da gangue Van der Linde.",
      conteudo:
        "Ambientado em 1899, o jogo segue Arthur Morgan, braço direito de Dutch van der Linde, conforme o Velho Oeste se transforma e a gangue tenta sobreviver à perseguição da lei. Um dos jogos mais detalhados já feitos, com um mundo vivo e uma narrativa madura sobre lealdade e redenção.",
      genero: "Ação / Aventura / Mundo Aberto",
      estudio: "Rockstar Games",
      lancamento: "26 de outubro de 2018",
      plataforma: "PC / PS4 / Xbox One",
      nota: "9.7",
      destaque: true,
      imagem_principal: "assets/img/personagens/rdr2.jpg",
      personagens: [
        {
          nome: "Arthur Morgan",
          descricao: "Foragido leal a Dutch e protagonista da história.",
          imagem: "https://picsum.photos/seed/arthur/600/400"
        },
        {
          nome: "John Marston",
          descricao: "Membro da gangue e protagonista do primeiro RDR.",
          imagem: "https://picsum.photos/seed/john/600/400"
        },
        {
          nome: "Dutch van der Linde",
          descricao: "Líder carismático e instável da gangue.",
          imagem: "https://picsum.photos/seed/dutch/600/400"
        }
      ],
      fotos: [
        { titulo: "Saint Denis", imagem: "https://picsum.photos/seed/rdr1/800/500" },
        { titulo: "Montanhas Grizzlies", imagem: "https://picsum.photos/seed/rdr2foto/800/500" },
        { titulo: "Valentine", imagem: "https://picsum.photos/seed/rdr3/800/500" }
      ]
    },
    {
      id: 5,
      nome: "The Last of Us Part I",
      descricao: "Drama de sobrevivência pós-apocalíptico em uma América devastada.",
      conteudo:
        "Vinte anos após uma pandemia fúngica colapsar a sociedade, Joel é contratado para escoltar Ellie, uma jovem imune, através do país. Uma história intensa sobre perda, vínculo e moralidade, considerada um marco da narrativa em videogames.",
      genero: "Ação / Survival Horror",
      estudio: "Naughty Dog",
      lancamento: "14 de junho de 2013 (remake em 2022)",
      plataforma: "PS3 / PS4 / PS5 / PC",
      nota: "9.5",
      destaque: false,
      imagem_principal: "assets/img/personagens/tlou.jpg",
      personagens: [
        {
          nome: "Joel Miller",
          descricao: "Sobrevivente endurecido pela perda da filha.",
          imagem: "https://picsum.photos/seed/joel/600/400"
        },
        {
          nome: "Ellie",
          descricao: "Adolescente imune ao fungo Cordyceps.",
          imagem: "https://picsum.photos/seed/ellie/600/400"
        },
        {
          nome: "Tess",
          descricao: "Parceira de Joel no contrabando em Boston.",
          imagem: "https://picsum.photos/seed/tess/600/400"
        }
      ],
      fotos: [
        { titulo: "Boston em quarentena", imagem: "https://picsum.photos/seed/tlou1/800/500" },
        { titulo: "Universidade do Colorado", imagem: "https://picsum.photos/seed/tlou2/800/500" },
        { titulo: "Salt Lake City", imagem: "https://picsum.photos/seed/tlou3/800/500" }
      ]
    }
  ]
};



function montarSliderDestaques() {
  const inner = document.getElementById("carouselInner");
  const indicators = document.getElementById("carouselIndicators");
  if (!inner || !indicators) return;

  const destaques = dados.jogos.filter(j => j.destaque);

  inner.innerHTML = destaques.map((j, i) => `
    <div class="carousel-item ${i === 0 ? "active" : ""}">
      <a href="detalhe.html?id=${j.id}" class="text-decoration-none">
        <img src="${j.imagem_principal}" class="d-block w-100 slider-img" alt="${j.nome}">
        <div class="carousel-caption text-start">
          <span class="badge bg-warning text-dark mb-2">Destaque</span>
          <h2 class="fw-bold">${j.nome}</h2>
          <p class="lead d-none d-md-block">${j.descricao}</p>
        </div>
      </a>
    </div>
  `).join("");

  indicators.innerHTML = destaques.map((_, i) => `
    <button type="button" data-bs-target="#carrosselDestaques" data-bs-slide-to="${i}"
      class="${i === 0 ? "active" : ""}" aria-label="Slide ${i + 1}"
      ${i === 0 ? 'aria-current="true"' : ""}></button>
  `).join("");
}

function montarCardsJogos() {
  const grid = document.getElementById("gridJogos");
  if (!grid) return;

  grid.innerHTML = dados.jogos.map(j => `
    <div class="col-12 col-sm-6 col-lg-4">
      <div class="card h-100 card-jogo shadow-sm">
        <a href="detalhe.html?id=${j.id}" class="text-decoration-none text-reset">
          <img src="${j.imagem_principal}" class="card-img-top card-jogo-img" alt="${j.nome}">
        </a>
        <div class="card-body d-flex flex-column">
          <div class="d-flex justify-content-between align-items-start mb-2">
            <h5 class="card-title mb-0">
              <a href="detalhe.html?id=${j.id}" class="text-decoration-none text-reset">${j.nome}</a>
            </h5>
            <span class="badge bg-success">${j.nota}</span>
          </div>
          <p class="card-text small text-muted mb-2">${j.genero} • ${j.estudio}</p>
          <p class="card-text">${j.descricao}</p>
          <a href="detalhe.html?id=${j.id}" class="btn btn-primary mt-auto">Ver detalhes</a>
        </div>
      </div>
    </div>
  `).join("");
}



function getQueryId() {
  const params = new URLSearchParams(window.location.search);
  return parseInt(params.get("id"), 10);
}

function montarDetalhe() {
  const container = document.getElementById("detalheJogo");
  if (!container) return;

  const id = getQueryId();
  const jogo = dados.jogos.find(j => j.id === id);

  if (!jogo) {
    container.innerHTML = `
      <div class="alert alert-warning text-center my-5">
        <h4>Jogo não encontrado</h4>
        <a href="index.html" class="btn btn-primary mt-3">Voltar à página inicial</a>
      </div>`;
    return;
  }

  document.title = `${jogo.nome} — GameHub`;

  container.innerHTML = `
    <!-- Seção 1: informações gerais -->
    <section class="row g-4 align-items-start mb-5">
      <div class="col-lg-6">
        <img src="${jogo.imagem_principal}" alt="${jogo.nome}" class="img-fluid rounded shadow detalhe-img">
      </div>
      <div class="col-lg-6">
        <span class="badge bg-warning text-dark mb-2">${jogo.genero}</span>
        <h1 class="fw-bold">${jogo.nome}</h1>
        <p class="lead">${jogo.descricao}</p>
        <p>${jogo.conteudo}</p>

        <ul class="list-group list-group-flush my-4 detalhe-info">
          <li class="list-group-item"><strong>Estúdio:</strong> ${jogo.estudio}</li>
          <li class="list-group-item"><strong>Lançamento:</strong> ${jogo.lancamento}</li>
          <li class="list-group-item"><strong>Plataformas:</strong> ${jogo.plataforma}</li>
          <li class="list-group-item"><strong>Gênero:</strong> ${jogo.genero}</li>
          <li class="list-group-item"><strong>Nota:</strong>
            <span class="badge bg-success fs-6">${jogo.nota} / 10</span>
          </li>
        </ul>

        <a href="index.html" class="btn btn-outline-secondary">← Voltar</a>
      </div>
    </section>

    <!-- Personagens principais -->
    <section class="mb-5">
      <h2 class="mb-4">Personagens principais</h2>
      <div class="row g-4">
        ${jogo.personagens.map(p => `
          <div class="col-12 col-md-4">
            <div class="card h-100 shadow-sm">
              <img src="${p.imagem}" class="card-img-top" alt="${p.nome}">
              <div class="card-body">
                <h5 class="card-title">${p.nome}</h5>
                <p class="card-text">${p.descricao}</p>
              </div>
            </div>
          </div>
        `).join("")}
      </div>
    </section>

    <!-- Seção 2: fotos vinculadas -->
    <section class="mb-5">
      <h2 class="mb-4">Galeria de fotos</h2>
      <div class="row g-4">
        ${jogo.fotos.map(f => `
          <div class="col-12 col-md-6 col-lg-4">
            <figure class="figure w-100">
              <img src="${f.imagem}" class="figure-img img-fluid rounded shadow-sm w-100" alt="${f.titulo}">
              <figcaption class="figure-caption text-center">${f.titulo}</figcaption>
            </figure>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}



document.addEventListener("DOMContentLoaded", () => {
  montarSliderDestaques();
  montarCardsJogos();
  montarDetalhe();
});
