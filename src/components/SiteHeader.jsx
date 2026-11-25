import logo from '../../images/iteration-1-images/logo.svg'

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
            <a href="#siparis-olustur" className="active">Sipariş Oluştur</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default SiteHeader
