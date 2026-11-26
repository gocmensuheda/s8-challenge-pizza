import logo from '../../images/iteration-1-images/logo.svg'
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <main className="home-hero">
      <div className="home-hero-icerik">
        <header className="home-baslik">
          <img className="home-logo" src={logo} alt="Teknolojik Yemekler" />
        </header>

        <section className="home-slogan-alani" aria-label="Ana slogan">
          <h1 className="home-slogan">
            KOD ACIKTIRIR
            <br />
            PİZZA, DOYURUR
          </h1>

          <Link to='/OrderPage' className="home-aciktim-btn">
            ACIKTIM
          </Link>
        </section>
      </div>
    </main>
  );
}