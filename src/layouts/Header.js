import logo from "./../assets/logo.webp";

const Header = () => {
    return(
        <header>
          <img src={logo} className="logo" alt="logo" />
        </header>
    )
}

export default Header;