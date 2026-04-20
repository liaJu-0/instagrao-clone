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

function App() {
  const [imagemAtual, setImagemAtual] = useState(0);
  const [curtido, setCurtido] = useState(false);
  const [modalAberto, setModalAberto] = useState(false);

  const imagens = ["/post-1.jpg", "/post-1-2.jpg", "/post-1-3.jpg", "/post-1-4.jpg"];

  const proximaImagem = (e) => {
    e.stopPropagation();
    setImagemAtual((anterior) => (anterior === imagens.length - 1 ? 0 : anterior + 1));
  };

  const imagemAnterior = (e) => {
    e.stopPropagation();
    setImagemAtual((anterior) => (anterior === 0 ? imagens.length - 1 : anterior - 1));
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
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="circulo-story"></div>
            ))}
          </section>

          <section className="feed">
            <article className="postagem">
              <header className="cabecalho-post">
                <div className="info-usuario-post">
                  <img src="/pfp-1.jpg" alt="usuario" className="foto-autor-post" />
                  <span className="nome-usuario-post">paintedheartss</span>
                  <span className="tempo-post">• 2 h</span>
                </div>
                <button className="opcoes-post">•••</button>
              </header>

              <div className="container-imagem-post">
                <img src={imagens[imagemAtual]} alt="Conteudo post" className="imagem-principal-post" />
                {imagens.length > 1 && (
                  <>
                    <button className="botao-carrossel esquerda" onClick={imagemAnterior}><ChevronLeft size={20} /></button>
                    <button className="botao-carrossel direita" onClick={proximaImagem}><ChevronRight size={20} /></button>
                    <div className="pontos-indicadores">
                      {imagens.map((_, index) => (
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
                      size={24} 
                      className="icone-acao" 
                      onClick={() => setCurtido(!curtido)}
                      fill={curtido ? "red" : "none"}
                      color={curtido ? "red" : "black"}
                    />
                    <MessageCircle size={24} className="icone-acao" onClick={() => setModalAberto(true)} />
                    <Send size={24} className="icone-acao" />
                  </div>
                  <Bookmark size={24} className="icone-acao" />
                </div>
                <section className="conteudo-post">
                  <span className="contagem-curtidas">{curtido ? 946 : 945} curtidas</span>
                  <p><strong>paintedheartss</strong> At first, The Matrix was almost rejected...</p>
                  <span className="ver-comentarios" onClick={() => setModalAberto(true)}>Ver todos comentários</span>
                </section>
              </footer>
            </article>
          </section>
        </div>
      </main>

      {modalAberto && (
        <div className="sobreposicao-modal" onClick={() => setModalAberto(false)}>
          <div className="conteudo-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-esquerda">
              <img src={imagens[imagemAtual]} alt="Conteudo" />
              {imagens.length > 1 && (
                <>
                  <button className="botao-carrossel esquerda" onClick={imagemAnterior}><ChevronLeft size={20} /></button>
                  <button className="botao-carrossel direita" onClick={proximaImagem}><ChevronRight size={20} /></button>
                </>
              )}
            </div>

            <div className="modal-direita">
              <header className="cabecalho-modal">
                <div className="info-usuario-post">
                  <img src="/pfp-1.jpg" alt="usuario" className="foto-autor-post" />
                  <strong>paintedheartss</strong>
                </div>
                <button className="opcoes-post">•••</button>
              </header>

              <div className="area-comentarios-fixa">
                <div className="comentario">
                  <img src="/pfp-1.jpg" alt="usuario" className="foto-autor-post" />
                  <p><strong>paintedheartss</strong> At first, The Matrix was almost rejected because nobody understood the script, which was reportedly described as “the script that nobody understands” and considered too difficult to visualize.<br /><br />                  
                  That confusion is exactly why the Wachowskis created hundreds of detailed storyboards (around 600) before filming, to prove to Warner Bros. that it would work.<br /><br />
                  The Matrix was eventually approved and went on to become one of the most influential movies of all time, winning 4 Academy Awards.</p>
                </div>
                <div className="comentario">
                  <img src="/pfp-1.jpg" alt="usuario" className="foto-autor-post" />
                  <p><strong>r.r_rocha</strong> Muito bom filme 🎥</p>
                </div>
              </div>

              <div className="rodape-modal">
                <div className="acoes-post">
                  <div className="acoes-esquerda">
                    <Heart size={24} onClick={() => setCurtido(!curtido)} fill={curtido ? "red" : "none"} color={curtido ? "red" : "black"} />
                    <MessageCircle size={24} />
                    <Send size={24} />
                  </div>
                  <Bookmark size={24} />
                </div>
                <span className="contagem-curtidas">{curtido ? 946 : 945} curtidas</span>
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