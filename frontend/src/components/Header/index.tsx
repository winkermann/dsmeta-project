import headerLogo from '../../assets/img/logo_header.svg'
import './style.css'

function Header() {
  return(
    <div>
      <header>
        <div className="dsmeta-logo-container">
          <img src={headerLogo} alt="Logo DSMeta" />
          <h1>DSMeta</h1>
          <p>
          Desenvolvido por
          <a href="https://github.com/winkermann">@winkermann</a>
          </p>
        </div>
      </header>    
    </div>
  )
}

export default Header