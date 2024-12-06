

export const Header = () => {
  return (
    <header className="header">
      <a href="/" className="headerLogo">Rick and Morty Explorer</a>
      <nav className="headerNav">
        <a href="/characters">Personajes</a>
        <a href="/episodes">Episodios</a>
      </nav>
    </header>
  )
}
