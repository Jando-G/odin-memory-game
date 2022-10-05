
function Header() {
  const colorGold = {
    color: '#FFFF55'
  }

  const colorGreen = {
    color: '#55FF55'
  }
  return (
    <header className="Header">
      <span style={colorGold}>MC</span> &nbsp; <span>Memory</span> &nbsp; <span style={colorGreen}>Game</span>
    </header>
  );
}

export default Header;
