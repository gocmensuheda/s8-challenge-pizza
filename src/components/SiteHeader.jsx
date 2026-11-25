import logo from '../../images/iteration-1-images/logo.svg'
import { NavLink } from 'react-router-dom'

function SiteHeader() {
  return (
    <header>
      <img src={logo} alt="Teknolojik Yemekler" />
      <nav aria-label="Ana menü">
        <ul>
          <li>
            <a href="#anasayfa">Anasayfa</a>
          </li>
          <li>
            <a href="#secenekler">Seçenekler</a>
          </li>
          <li>
            <NavLink to="/siparis-olustur" activeClassName="active">
              Sipariş Oluştur
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default SiteHeader
