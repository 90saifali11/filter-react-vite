import { Link } from "react-router-dom";

function Header() {
  // Inline styles
  const headerStyle = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#007BFF',
    padding: '15px 20px',
    color: 'rgb(255, 217, 0)',
    fontSize: '2rem',
    height: '80px',
    marginTop: '-30px',
    marginLeft: '-30px',
    width: '102vw'
  };

  const navLinksStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '-30px'
  };

  const navLinkStyle = {
    color: 'rgb(255, 217, 0)',
    textDecoration: 'none',
    margin: '0 15px',
    fontSize: '1rem'
  };

  const navLinkHoverStyle = {
    textDecoration: 'underline'
  };

  const headerTextStyle = {
    color: 'rgb(255, 217, 0)',
    textAlign: 'left',
    margin: '0',
    marginTop: '30px'
  };

  return (
    <header style={headerStyle}>
      <p style={headerTextStyle}>Product E-store</p>
      <nav style={navLinksStyle}>
        <Link to={"/"} style={navLinkStyle} onMouseOver={(e) => e.target.style.textDecoration = 'underline'} onMouseOut={(e) => e.target.style.textDecoration = 'none'}>
          Home
        </Link>
        <Link to={"/about"} style={navLinkStyle} onMouseOver={(e) => e.target.style.textDecoration = 'underline'} onMouseOut={(e) => e.target.style.textDecoration = 'none'}>
          About
        </Link>
        <Link to="/products" style={navLinkStyle} onMouseOver={(e) => e.target.style.textDecoration = 'underline'} onMouseOut={(e) => e.target.style.textDecoration = 'none'}>
          Products
        </Link>
        <Link to="/contact" style={navLinkStyle} onMouseOver={(e) => e.target.style.textDecoration = 'underline'} onMouseOut={(e) => e.target.style.textDecoration = 'none'}>
          Contact
        </Link>
        <Link to="/signIn" style={navLinkStyle} onMouseOver={(e) => e.target.style.textDecoration = 'underline'} onMouseOut={(e) => e.target.style.textDecoration = 'none'}>
          sign in
        </Link>
      </nav>
    </header>
  );
}

export default Header;
