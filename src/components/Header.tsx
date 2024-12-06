

export const Header = () => {
  return (
    <header className="header">
      <a href="/" className="headerLogo">Rick and Morty Explorer</a>
      <nav className="headerNav">
        <a href="/Characters">Personajes</a>
        <a href="/Episodes">Episodios</a>
      </nav>
    </header>
  )
}
