import React, { useEffect, useState } from 'react';
import '../css/App.css';
import logo from '../assets/logo.png';
import flecha from '../assets/flecha.png'
import imgDeports from '../assets/imgDeports.avif'
import deportistas from '../assets/deportistas.png'
import logoGmail from '../assets/gmail.png'
import logoFacebook from '../assets/facebook.png'
import logoInstagram from '../assets/instagram.png'
import logoLogout from '../assets/cerrar-sesion.png'
import imgEdit from '../assets/edit.png'
import imgDelete from '../assets/trash.png'
import { getSports, getNotices, getRankings, deleteNotice } from '../apis/sports';
import { useNavigate } from 'react-router-dom';
import ModalDelete from '../components/modalDelete';
import UpdateNotice from '../components/updateNotices';
import CreateNotice from '../components/createNotice';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedTable, setSelectedTable] = useState('Baloncesto');
  const [sports, setSports] = useState([]);
  const [notices, setNotices] = useState([]);
  const [rankings, setRankings] = useState([]);
  const [nameUser, setUserName] = useState('');
  const [roleUser, setRoleuser] = useState('');
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [showModalUpdate, setShowModalUpdate] = useState(false);
  const [showModalCreate, setShowModalCreate] = useState(false);
  const [noticeSelect, setNoticeSelect] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Función para cargar datos
    const fetchData = async () => {
      try {
        const storedUser = localStorage.getItem('userSession');
        const userName = storedUser ? JSON.parse(storedUser).username : null;
        const roleUser = storedUser ? JSON.parse(storedUser).role : null;
        setRoleuser(roleUser);
        setUserName(userName);
        // Obtener datos de deportes
        const sportsData = await getSports();
        setSports(sportsData);

        // Obtener datos de noticias
        const noticesData = await getNotices();
        setNotices(noticesData);

        // Obtener datos de rankings
        const rankingsData = await getRankings();
        setRankings(rankingsData);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };

    fetchData();
  }, []);

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 3 + sports.length) % sports.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 3) % sports.length);
  };

  const handleCollectionClick = (index) => {
    setCurrentIndex(index * 3);

  };

  const logout = () => {
    // Eliminar la sesión del localStorage
    localStorage.removeItem('userSession');
    navigate('/');
  };

  const openDelete = (notice) => {
    console.log('idnotice', notice)
    setNoticeSelect(notice);
    setShowModalDelete(true);
  }
  const openUpdate = (notice) => {
    console.log('idnotice', notice)
    setNoticeSelect(notice);
    setShowModalUpdate(true);
  }


  const handleDelete = async () => {
    try {
      //llamada a la api delete notice
      const response = await deleteNotice(noticeSelect._id);
      console.log('response', response)
      if (response && response.message == 'Noticia eliminada con éxito') {
        // Eliminar la noticia del estado
        setNotices(notices.filter((notice) => notice._id !== noticeSelect._id));

      }
    } catch (error) {
      console.error("Error al intentar eliminar la noticia:", error.message);
    } finally {
      setShowModalDelete(false);
    }
  };


  return (
    <div className="container">
      <header>
        <div className="logo">
          <img className="img-header" src={logo} />
        </div>
        <nav>
          <div className="text-nav">
            <p>Bienvenido {nameUser}</p>
          </div>
          <div className="nav-item">
            <a href="#Noticias">Noticias</a>
            <a href="#Estadisticas">Estadisticas</a>
            <a href="#Contacto">contacto</a>
            <a onClick={logout} className='a-logout'>Cerrar sesión</a>
            <img
              src={logoLogout}
              alt="Cerrar sesión"
              className="logout-icon"
              onClick={logout}
            />
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
            {sports.length > 0 && (
              <>
                <div className="card" style={{ backgroundImage: `url(${sports[currentIndex].link})` }}>
                  <p>{sports[currentIndex].name}</p>
                </div>
                <div className="card" style={{ backgroundImage: `url(${sports[(currentIndex + 1) % sports.length].link})` }}>
                  <p>{sports[(currentIndex + 1) % sports.length].name}</p>
                </div>
                <div className="card" style={{ backgroundImage: `url(${sports[(currentIndex + 2) % sports.length].link})` }}>
                  <p>{sports[(currentIndex + 2) % sports.length].name}</p>
                </div>
                <div className="next-images">
                  <button className="btn-next" onClick={handlePrevClick}>
                    <img className="img-back" src={flecha} alt="Prev" />
                  </button>
                  {[...Array(Math.ceil(sports.length / 3))].map((_, index) => (
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
              </>
            )}
          </div>

          <div className="notices" id='Noticias'>
            <h2>Noticias relevantes</h2>
            {notices
              .slice(-4) // Obtiene las últimas 4 noticias
              .map((noticia, index) => (
                <div key={index} className="card-notice">
                  <img className="img-notice" src={noticia.linkImage} alt={noticia.title} />
                  <div className="description-notice">
                    <h3>{noticia.title}</h3>
                    <p>{noticia.description}</p>
                    <a href={noticia.linkNotice} target="_blank" rel="noopener noreferrer">
                      Leer más
                    </a>
                    <img
                      className="icon-actions"
                      src={imgEdit}
                      onClick={() => openUpdate(noticia)}
                      alt="Editar"
                    />
                    <img
                      className="icon-actions"
                      src={imgDelete}
                      onClick={() => openDelete(noticia)}
                      alt="Eliminar"
                    />
                  </div>
                </div>
              ))}

            <button className='AddButton' onClick={() => { setShowModalCreate(true) }}>Agregar noticia</button>
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
            {rankings.map((ranking) => (
              <div
                key={ranking.sport}
                className={`table-block ${selectedTable === ranking.sport ? 'highlighted' : ''}`}
                onClick={() => setSelectedTable(ranking.sport)}
              >
                <h3>{ranking.title}</h3>
                <table>
                  <thead>
                    <tr>
                      {Object.keys(ranking.data[0])
                        .filter(header => header !== '_id')
                        .map((header, index) => (
                          <th key={index}>{header}</th>
                        ))}
                    </tr>
                  </thead>
                  <tbody>
                    {ranking.data.map((item, index) => (
                      <tr key={index}>
                        {Object.entries(item)
                          .filter(([key]) => key !== '_id')
                          .map(([key, value], idx) => (
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
            <a href='#Contacto'>Politica de privacidad</a>
            <a href='#Contacto'>Terminos y condiciones</a>
          </div>
        </div>
      </aside>
      <ModalDelete
        showModal={showModalDelete}
        setShowModal={setShowModalDelete}
        message={'¿Estás seguro de eliminar la noticia?'}
        handleDelete={() => handleDelete(noticeSelect)}
      />
      <UpdateNotice
        visibleModal={showModalUpdate}
        setVisibleModal={setShowModalUpdate}
        dataNotice={noticeSelect}
        notices={notices}
        setnotices={setNotices}
      />
      <CreateNotice visibleModal={showModalCreate}
        setVisibleModal={setShowModalCreate}
        notices={notices}
        setnotices={setNotices} />

    </div>
  );
}

export default App;