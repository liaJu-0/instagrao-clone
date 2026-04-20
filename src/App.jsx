import { 
  Home, 
  Search, 
  Compass, 
  Clapperboard, 
  MessageCircle, 
  Heart, 
  PlusSquare, 
  User,
  Send,
  Bookmark,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { useState } from 'react';
import './App.css';
import logoInstagram from './assets/logo.png';

const DADOS_POSTS = [
  {
    id: 1,
    usuario: "paintedheartss",
    fotoPerfil: "/pfp-1.jpg",
    imagens: ["/post-1.jpg", "/post-1-2.jpg", "/post-1-3.jpg", "/post-1-4.jpg"],
    curtidas: 945,
    legenda: "At first, The Matrix was almost rejected because nobody understood the script...",
    legendaCompleta: "At first, The Matrix was almost rejected because nobody understood the script, which was reportedly described as “the script that nobody understands” and considered too difficult to visualize.<br /><br />That confusion is exactly why the Wachowskis created hundreds of detailed storyboards."
  },
  {
    id: 2,
    usuario: "filmesdokacic",
    fotoPerfil: "/pfp-2.jpg",
    imagens: ["/post-2.webp"],
    curtidas: 382,
    legenda: "OFFICIAL: IT: WELCOME TO DERRY Season Two is officially moving forward and the story in Derry is far from over.",
    legendaCompleta: "OFFICIAL: IT: WELCOME TO DERRY Season Two is officially moving forward and the story in Derry is far from over."
  },
  {
    id: 3,
    usuario: "mackysaur",
    fotoPerfil: "/pfp-3.jpg",
    imagens: ["/post-3.webp"],
    curtidas: 1250,
    legenda: "embracing the process... 🎏🍂",
    legendaCompleta: "embracing the process... 🎏🍂"
  },
  {
    id: 4,
    usuario: "dendy.au",
    fotoPerfil: "/pfp-4.jpg",
    imagens: ["/post-4.jpg"],
    curtidas: 540,
    legenda: " IT'S NEVER OVER, JEFF BUCKLEY is coming to Dendy Cinemas April 30 ",
    legendaCompleta: "IT'S NEVER OVER, JEFF BUCKLEY is coming to Dendy Cinemas April 30 💙 See his artistry, vulnerability, and influence on the big screen at Dendy Newtown, Canberra, Southport, Portside, Coorparoo & Portside."
  },
  {
    id: 5,
    usuario: "darksidebooks",
    fotoPerfil: "/pfp-5.jpg",
    imagens: ["/post-5.png"],
    curtidas: 2100,
    legenda: "SEQUÊNCIA CONFIRMADA 🔴",
    legendaCompleta: "Tokyo is a city that never sleeps. The lights, the food, the culture... I'll be back soon!"
  },
  {
    id: 6,
    usuario: "instituto.proa",
    fotoPerfil: "/pfp-6.jpg",
    imagens: ["/post-6.jpg", "/post-6-2.jpg", "/post-6-3.jpg", "/post-6-4.jpg"],
    curtidas: 890,
    legenda: "Longe de serem apenas mentirinhas de 1º de abril, esses mitos circulam durante o ano todo. 🤞",
    legendaCompleta: "Longe de serem apenas mentirinhas de 1º de abril, esses mitos circulam durante o ano todo. 🤞Faça parte da Plataforma PROA e se prepare para o início da sua carreira: link na bio."
  }
];

function Postagem({ dados, aoAbrirModal }) {
  const [imagemAtual, setImagemAtual] = useState(0);
  const [curtido, setCurtido] = useState(false);

  const proximaImagem = (e) => {
    e.stopPropagation();
    setImagemAtual((ant) => (ant === dados.imagens.length - 1 ? 0 : ant + 1));
  };

  const imagemAnterior = (e) => {
    e.stopPropagation();
    setImagemAtual((ant) => (ant === 0 ? dados.imagens.length - 1 : ant - 1));
  };

  return (
    <article className="postagem">
      <header className="cabecalho-post">
        <div className="info-usuario-post">
          <img src={dados.fotoPerfil} alt="usuario" className="foto-autor-post" />
          <span className="nome-usuario-post">{dados.usuario}</span>
          <span className="tempo-post">• 2 h</span>
        </div>
        <button className="botao-opcoes-limpo">•••</button>
      </header>

      <div className="container-imagem-post">
        <img src={dados.imagens[imagemAtual]} alt="Conteudo post" className="imagem-principal-post" />
        {dados.imagens.length > 1 && (
          <>
            <button className="botao-carrossel esquerda" onClick={imagemAnterior}><ChevronLeft size={20} /></button>
            <button className="botao-carrossel direita" onClick={proximaImagem}><ChevronRight size={20} /></button>
            <div className="pontos-indicadores">
              {dados.imagens.map((_, index) => (
                <div key={index} className={`ponto ${index === imagemAtual ? 'ativo' : ''}`} />
              ))}
            </div>
          </>
        )}
      </div>

      <footer className="rodape-post">
        <div className="acoes-post">
          <div className="acoes-esquerda">
            <Heart 
              size={24} className="icone-acao" 
              onClick={() => setCurtido(!curtido)}
              fill={curtido ? "red" : "none"}
              color={curtido ? "red" : "black"}
            />
            <MessageCircle size={24} className="icone-acao" onClick={() => aoAbrirModal(dados, imagemAtual, curtido, setCurtido)} />
            <Send size={24} className="icone-acao" />
          </div>
          <Bookmark size={24} className="icone-acao" />
        </div>
        <section className="conteudo-post">
          <span className="contagem-curtidas">{curtido ? dados.curtidas + 1 : dados.curtidas} curtidas</span>
          <p><strong>{dados.usuario}</strong> {dados.legenda}</p>
          <span className="ver-comentarios" onClick={() => aoAbrirModal(dados, imagemAtual, curtido, setCurtido)}>Ver todos comentários</span>
        </section>
      </footer>
    </article>
  );
}

function App() {
  const [postSelecionado, setPostSelecionado] = useState(null);
  const [modalImgIdx, setModalImgIdx] = useState(0);
  const [modalCurtido, setModalCurtido] = useState(false);
  const [setCurtirOriginal, setSetCurtirOriginal] = useState(null);

  const abrirModal = (dados, imgIdx, curtido, funcSetCurtir) => {
    setPostSelecionado(dados);
    setModalImgIdx(imgIdx);
    setModalCurtido(curtido);
    setSetCurtirOriginal(() => funcSetCurtir);
  };

  const fecharModal = () => setPostSelecionado(null);

  const alternarCurtidaModal = () => {
    const novoEstado = !modalCurtido;
    setModalCurtido(novoEstado);
    if(setCurtirOriginal) setCurtirOriginal(novoEstado);
  };

  const proxImgModal = (e) => {
    e.stopPropagation();
    setModalImgIdx(prev => (prev === postSelecionado.imagens.length - 1 ? 0 : prev + 1));
  };

  const antImgModal = (e) => {
    e.stopPropagation();
    setModalImgIdx(prev => (prev === 0 ? postSelecionado.imagens.length - 1 : prev - 1));
  };

  return (
    <div className="container-app">
      <aside className="barra-lateral">
        <div className="logo-container">
          <img src={logoInstagram} alt="Instagram Logo" className="imagem-logo" />
        </div>
        <nav className="itens-menu">
          <div className="item-menu"><Home size={24} /><span>Página Inicial</span></div>
          <div className="item-menu"><Search size={24} /><span>Pesquisa</span></div>
          <div className="item-menu"><Compass size={24} /><span>Explorar</span></div>
          <div className="item-menu"><Clapperboard size={24} /><span>Reels</span></div>
          <div className="item-menu"><MessageCircle size={24} /><span>Mensagens</span></div>
          <div className="item-menu"><Heart size={24} /><span>Notificações</span></div>
          <div className="item-menu"><PlusSquare size={24} /><span>Criar</span></div>
          <div className="item-menu"><User size={24} /><span>Perfil</span></div>
        </nav>
      </aside>

      <main className="conteudo-principal">
        <div className="container-feed">
          <section className="secao-stories">
            {DADOS_POSTS.map((story) => (
              <div key={story.id} className="item-story">
                <div className="borda-colorida">
                  <img src={story.fotoPerfil} alt={story.usuario} />
                </div>
                <span>{story.usuario}</span>
              </div>
            ))}
          </section>

          <section className="feed">
            {DADOS_POSTS.map(post => (
              <Postagem key={post.id} dados={post} aoAbrirModal={abrirModal} />
            ))}
          </section>
        </div>
      </main>

      <aside className="sidebar-sugestoes">
        <div className="perfil-usuario-logado">
          <img src="/minha-pfp.jpg" alt="meu perfil" />
          <div className="info">
            <strong>jubsp.0</strong>
            <span>Julia⛧</span>
          </div>
          <button className="botao-switch">Mudar</button>
        </div>

        <div className="titulo-sugestoes">
          <span>Sugestões para você</span>
          <button>Ver tudo</button>
        </div>

        <div className="lista-sugestoes">
          <div className="item-sugestao">
            <img src="/pfp-sugestao.jpg" alt="sugestao" />
            <div className="info">
              <strong>cinamoroll</strong>
              <span>Seguido por amigos em comum</span>
            </div>
            <button className="botao-follow">Seguir</button>
          </div>
        </div>

        <footer className="footer-sidebar">
          <p>Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Idioma • Meta Verified</p>
          <p>© 2026 INSTAGRAM FROM META</p>
        </footer>
      </aside>      

      {postSelecionado && (
        <div className="sobreposicao-modal" onClick={fecharModal}>
          <div className="conteudo-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-esquerda">
              <img src={postSelecionado.imagens[modalImgIdx]} alt="Conteudo" />
              {postSelecionado.imagens.length > 1 && (
                <>
                  <button className="botao-carrossel esquerda" onClick={antImgModal}><ChevronLeft size={20} /></button>
                  <button className="botao-carrossel direita" onClick={proxImgModal}><ChevronRight size={20} /></button>
                </>
              )}
            </div>

            <div className="modal-direita">
              <header className="cabecalho-modal">
                <div className="info-usuario-post">
                  <img src={postSelecionado.fotoPerfil} alt="usuario" className="foto-autor-post" />
                  <strong>{postSelecionado.usuario}</strong>
                </div>
                <button className="botao-opcoes-limpo">•••</button>
              </header>

              <div className="area-comentarios-fixa">
                <div className="comentario">
                  <img src={postSelecionado.fotoPerfil} alt="usuario" className="foto-autor-post" />
                  <div className="corpo-texto">
                    <strong>{postSelecionado.usuario}</strong> 
                    <span 
                      className="texto-legenda"
                      dangerouslySetInnerHTML={{ __html: postSelecionado.legendaCompleta }} 
                    />
                  </div>
                </div>
              </div>

              <div className="rodape-modal">
                <div className="acoes-post">
                  <div className="acoes-esquerda">
                    <Heart 
                      size={24} onClick={alternarCurtidaModal} 
                      fill={modalCurtido ? "red" : "none"} 
                      color={modalCurtido ? "red" : "black"} 
                    />
                    <MessageCircle size={24} />
                    <Send size={24} />
                  </div>
                  <Bookmark size={24} />
                </div>
                <span className="contagem-curtidas">
                    {modalCurtido ? postSelecionado.curtidas + 1 : postSelecionado.curtidas} curtidas
                </span>
                <div className="campo-comentario">
                  <input type="text" placeholder="Adicione um comentário..." />
                  <button className="botao-publicar">Publicar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;