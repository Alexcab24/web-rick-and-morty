


import '../styles/mainPage.css'

export const HomePage = () => {
  return (
    <div className="home">
      <section className="home-hero">
        <div>
          <h1>Bienvenido a la web de Rick y Morty</h1>
          <p>Discubre personajes, episodios y más sobre la serie!</p>
        </div>
      </section>
      <div className="home-explorer">
        <h1>Explora las secciones</h1>
        <div className='home-buttons-container'>
          <div className='home-buttons'>
            <h3>Personajes</h3>
            <p>Ver todos los personajes del programa.</p>
            <a href="/Characters" className="button-1">
              Explora personajes
            </a>
          </div>

          <div className='home-buttons'> 
            <h3>Episodios</h3>
            <p>Navega por la lista de episodios.</p>
            <a href="/Episodes" className="button-2">
              Ir a los episodios
            </a>
          </div>
          <div className='home-buttons'>
            <h3>Buscar personaje</h3>
            <p>Encuentra detalles de cualquier personaje por su nombre.</p>
            <a href="/Character" className="button-3">
              Buscar ahora
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
