import React, { useState } from 'react';
import './App.css';
import logo from './assets/logo.png';
import flecha from './assets/flecha.png'
import imgDeports from './assets/imgDeports.avif'
import deportistas from './assets/deportistas.png'
import logoGmail from './assets/gmail.png'
import logoFacebook from './assets/facebook.png'
import logoInstagram from './assets/instagram.png'

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedTable, setSelectedTable] = useState('Fútbol');


  const tables = {
    Fútbol: {
      title: 'Clasificación de la Premier League',
      data: [
        { Pos: 1, Equipo: 'LIV Liverpool', J: 13, G: 11, DIF: '+18', PTS: 34 },
        { Pos: 2, Equipo: 'ARS Arsenal', J: 13, G: 7, DIF: '+12', PTS: 25 },
        { Pos: 3, Equipo: 'CHE Chelsea', J: 13, G: 7, DIF: '+12', PTS: 25 },
        { Pos: 4, Equipo: 'BHA Brighton', J: 13, G: 6, DIF: '+5', PTS: 23 },
        { Pos: 5, Equipo: 'MCI Manchester City', J: 13, G: 7, DIF: '+3', PTS: 23 },
        { Pos: 6, Equipo: 'FOR Nottingham Forest', J: 13, G: 6, DIF: '+3', PTS: 22 },
        { Pos: 7, Equipo: 'TOT Tottenham', J: 13, G: 6, DIF: '+14', PTS: 20 },
        { Pos: 8, Equipo: 'BRN Brentford', J: 13, G: 6, DIF: '+3', PTS: 20 },
        { Pos: 9, Equipo: 'MUN Manchester United', J: 13, G: 5, DIF: '+4', PTS: 19 },
        { Pos: 10, Equipo: 'FUL Fulham', J: 13, G: 5, DIF: '0', PTS: 19 },
      ],
    },
    Baloncesto: {
      title: 'Tabla de la NBA - Conferencia Este',
      data: [
        { Pos: 1, Equipo: 'CLE Cleveland Cavaliers', '%PG': 0.864, Pts: 22, PJ: 19, PF: 2680 },
        { Pos: 2, Equipo: 'BOS Boston Celtics', '%PG': 0.81, Pts: 21, PJ: 17, PF: 2521 },
        { Pos: 3, Equipo: 'ORL Orlando Magic', '%PG': 0.652, Pts: 23, PJ: 15, PF: 2483 },
        { Pos: 4, Equipo: 'NYK New York Knicks', '%PG': 0.619, Pts: 21, PJ: 13, PF: 2477 },
        { Pos: 5, Equipo: 'MIL Milwaukee Bucks', '%PG': 0.55, Pts: 20, PJ: 11, PF: 2281 },
        { Pos: 6, Equipo: 'ATL Atlanta Hawks', '%PG': 0.5, Pts: 22, PJ: 11, PF: 2563 },
        { Pos: 7, Equipo: 'MIA Miami Heat', '%PG': 0.474, Pts: 19, PJ: 9, PF: 2092 },
        { Pos: 8, Equipo: 'CHI Chicago Bulls', '%PG': 0.409, Pts: 22, PJ: 9, PF: 2616 },
        { Pos: 9, Equipo: 'BRO Brooklyn Nets', '%PG': 0.409, Pts: 22, PJ: 9, PF: 2430 },
        { Pos: 10, Equipo: 'IND Indiana Pacers', '%PG': 0.409, Pts: 22, PJ: 9, PF: 2519 },

      ]
    },
    Tenis: {
      title: 'Ranking ATP',
      data: [
        { Pos: 1, MR: 'MR', Jugador: 'Jannik Sinner', Edad: 23, País: 'ITA', Pts: 11830 },
        { Pos: 2, MR: 'MR', Jugador: 'Alexander Zverev', Edad: 27, País: 'GER', Pts: 7915 },
        { Pos: 3, MR: 1, Jugador: 'Carlos Alcaraz', Edad: 21, País: 'ESP', Pts: 7010 },
        { Pos: 4, MR: 'MR', Jugador: 'Taylor Fritz', Edad: 27, País: 'USA', Pts: 5100 },
        { Pos: 5, MR: 1, Jugador: 'Daniil Medvedev', Edad: 28, País: 'RUS', Pts: 5030 },
        { Pos: 6, MR: 2, Jugador: 'Casper Ruud', Edad: 25, País: 'NOR', Pts: 4255 },
        { Pos: 7, MR: 1, Jugador: 'Novak Djoković', Edad: 37, País: 'SRB', Pts: 3910 },
        { Pos: 8, MR: 5, Jugador: 'Andrey Rublev', Edad: 27, País: 'RUS', Pts: 3760 },
        { Pos: 9, MR: 6, Jugador: 'Alex de Minaur', Edad: 25, País: 'AUS', Pts: 3745 },
        { Pos: 10, MR: 3, Jugador: 'Grigor Dimitrov', Edad: 33, País: 'BUL', Pts: 3350 },

      ]
    },
  };

  const images = [
    { name: 'Fútbol', link: 'https://www.idet.org.mx/wp-content/uploads/2017/07/Fotolia_158253980_Subscription_Monthly_M.jpg' },
    { name: 'Baloncesto', link: 'https://garrampa.es/blog/wp-content/uploads/2022/12/blog-1-a-que-altura-esta-la-canasta-de-baloncesto-768x432-1.jpg' },
    { name: 'Tenis', link: 'https://journey.app/blog/wp-content/uploads/2021/11/reglas-deportivas_Tenis_.jpg' },
    { name: 'Béisbol', link: 'https://blog.marti.mx/wp-content/uploads/2023/05/aprende-a-escoger-pelota-de-beisbol-jpeg.webp' },
    { name: 'Golf', link: 'https://www.civitatis.com/blog/wp-content/uploads/2020/12/campos-golf-bonitos-mundo.jpg' },
    { name: 'Rugby', link: 'https://www.edusport.co.za/wp-content/uploads/2024/09/autumn-internationals-4.png' },
    { name: 'Fútbol Americano', link: 'https://blog.marti.mx/wp-content/uploads/2023/08/americano_estrategia_header-scaled.webp' },
    { name: 'Hockey sobre hielo', link: 'https://journey.app/blog/wp-content/uploads/2024/09/Reglas-del-hockey-sobre-hielo_4.jpg' },
    { name: 'Voleibol', link: 'https://media.istockphoto.com/id/481671830/es/foto/amigos-jugando-voleibol.jpg?s=612x612&w=0&k=20&c=KEBLkcQG_cL9JN_qKVrW0xGD8Y_kBTRTYctesmMQacM=' },
    { name: 'Boxeo', link: 'https://www.englandboxing.org/wp-content/uploads/2024/01/53470349268_7bb51bd03c_o-scaled.jpg' },
    { name: 'Atletismo', link: 'https://sportlifeathletes.com/wp-content/uploads/2024/05/Diseno-sin-titulo-28-1024x1024.png' },
    { name: 'Natación', link: 'https://s2.abcstatics.com/media/summum/2022/07/13/natacion-estilos-beneficios-kwwH--1248x698.jpg' },
    { name: 'Ciclismo', link: 'https://yosoyciclista.s3.amazonaws.com/documentos/smartweb/contenido_propio/65/ACTION_INVERSE_SQUAD_ORANGE_2018_01_ok_thumb.jpg' },
    { name: 'Esquí', link: 'https://cuidateplus.marca.com/sites/default/files/styles/natural/public/cms/hombre-esquiando.jpg.webp?itok=kUPF_Z_h' },
    { name: 'Surf', link: 'https://cdn.forbes.com.mx/2016/03/destinos-surf-mexico.jpg' },
  ];

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 3 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 3) % images.length);
  };

  const handleCollectionClick = (index) => {
    setCurrentIndex(index * 3);
  };
  return (
    <div className="container">
      <header>
        <div className="logo">
          <img className="img-header" src={logo} />
        </div>
        <nav>
          <div className="text-nav">
          <p>Bienvenido Gerardo</p>
          </div>
          <div className="nav-item">
            
            <a href="#Noticias">Noticias</a>
            <a href="#Estadisticas">Estadisticas</a>
            <a href="#Contacto">contacto</a>
            <a >Cerrar sesión</a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero" style={{ backgroundImage: `url(${imgDeports})` }}>
          <h1>Bienvenido a Nuestra Página de Deportes</h1>
          <p>Tu punto de entrada para todo lo relacionado con el deporte.</p>
          <p>Explora los deportes más populares, mantente al día con las últimas noticias y consulta las tablas de las mejores ligas.</p>
          <button>Descubre Más</button>
        </section>

        <section className="deports-section" >
          <div className="deports">
            <h2>Sigue tus deportes favoritos</h2>
            <div className="card" style={{ backgroundImage: `url(${images[currentIndex].link})` }}>
              <p>{images[currentIndex].name}</p>
            </div>
            <div className="card" style={{ backgroundImage: `url(${images[(currentIndex + 1) % images.length].link})` }}>
              <p>{images[(currentIndex + 1) % images.length].name}</p>
            </div>
            <div className="card" style={{ backgroundImage: `url(${images[(currentIndex + 2) % images.length].link})` }}>
              <p>{images[(currentIndex + 2) % images.length].name}</p>
            </div>
            <div className="next-images">
              <button className="btn-next" onClick={handlePrevClick}>
                <img className="img-back" src={flecha} alt="Prev" />
              </button>
              {[...Array(Math.ceil(images.length / 3))].map((_, index) => (
                <div
                  key={index}
                  className={`collection-img ${currentIndex === index * 3 ? 'active' : ''}`}
                  onClick={() => handleCollectionClick(index)}
                >
                  {index + 1}
                </div>
              ))}
              <button className="btn-next" onClick={handleNextClick}>
                <img className="img-next" src={flecha} alt="Next" />
              </button>
            </div>
          </div>

          <div className="notices" id='Noticias'>
            <h2>Noticias relevantes</h2>
            <div className="card-notice">
              <img className="img-notice" src={logo} />
              <div className="description-notice">
                <h3>title</h3>
                <p>
                  djdjakdkkskdaidjasjmdnskkdsnkdsaknknlsakds
                  aknkansdnksaldnksdknasd
                </p>
              </div>
            </div>
            <div className="card-notice">
              <img className="img-notice" src={logo} />
              <div className="description-notice">
                <h3>title</h3>
                <p>
                  djdjakdkkskdaidjasjmdnskkdsnkdsaknknlsakds
                  aknkansdnksaldnksdknasd
                </p>
              </div>
            </div>
            <div className="card-notice">
              <img className="img-notice" src={logo} />
              <div className="description-notice">
                <h3>title</h3>
                <p>
                  djdjakdkkskdaidjasjmdnskkdsnkdsaknknlsakds
                  aknkansdnksaldnksdknasd
                </p>
              </div>
            </div>
            <div className="card-notice">
              <img className="img-notice" src={logo} />
              <div className="description-notice">
                <h3>title</h3>
                <p>
                  djdjakdkkskdaidjasjmdnskkdsnkdsaknknlsakds
                  aknkansdnksaldnksdknasd
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="feature-section">
          <div className="feature">
            <h2>Descubre la historia detrás de tus deportistas favoritos</h2>
            <p>Explora los comienzos, logros y momentos clave de los deportistas que inspiran al mundo.
              Descubre cómo superaron desafíos y alcanzaron la grandeza en sus disciplinas.
            </p>
            <p>
              Conoce las historias detrás de las medallas y el impacto que tienen más allá del deporte.
              Desde sacrificios personales hasta triunfos inolvidables, cada historia es una lección de esfuerzo y pasión.
            </p>

          </div>
          <div className="feature-image">
            <img src={deportistas} className='imgDeportista' alt="Atleta profesional" />
          </div>
        </section>

        <section className="statistics-section" id='Estadisticas'>
          <h2>Consulta los rankings de tus deportes favoritos</h2>
          <div className='tables'>
            {Object.keys(tables).map((sport) => (
              <div
                key={sport}
                className={`table-block ${selectedTable === sport ? 'highlighted' : ''}`}
                onClick={() => setSelectedTable(sport)}
              >
                <h3>{tables[sport].title}</h3>
                <table>
                  <thead>
                    <tr>
                      {Object.keys(tables[sport].data[0]).map((header, index) => (
                        <th key={index}>{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {tables[sport].data.map((item, index) => (
                      <tr key={index}>
                        {Object.values(item).map((value, idx) => (
                          <td key={idx}>{value}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </section>
      </main>

      <aside>
        <div className="footer-links">
          <div className='social-networks' id='Contacto'>
            <img className='logos-net' src={logoFacebook} />
            <img className='logos-net' src={logoInstagram} />
            <img className='logos-net' src={logoGmail} />
          </div>
          <div className='cont-terms'>
            <a href='#'>Politica de privacidad</a>
            <a href='#'>Terminos y condiciones</a>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default App;