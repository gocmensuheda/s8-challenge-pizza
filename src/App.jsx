import { useState } from 'react'
import reactLogo from './assets/react.svg'
import workintech from '/workintech.svg'
import './App.css'
import logo from "../images/iteration-1-images/logo.svg";

const MALZEMELER = [
  "Pepperoni",
  "Sosis",
  "Kanada Jambonu",
  "Tavuk Izgara",
  "Soğan",
  "Domates",
  "Mısır",
  "Sucuk",
  "Jalepeno",
  "Sarımsak",
  "Biber",
  "Ananas",
  "Kabak",
];

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
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

      <main>
        <article className="pizza-detay">
          <h1>Position Absolute Acılı Pizza</h1>

          <div className="pizza-ust-satir">
            <strong className="pizza-fiyat">85.50₺</strong>

            <div className="pizza-meta">
              <span className="puan">4.9</span>
              <span className="degerlendirme">(200)</span>
            </div>
          </div>

          <p className="pizza-aciklama">
            Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre.
          </p>
        </article>

        {/* fieldset ve legend form elemanlarını gruplar */}
        <form className="siparis-formu">
          <div className="boyut-hamur-satiri">
            <fieldset className="boyut-sec">
              <legend>Boyut Seç</legend>

              <label htmlFor="boyut-kucuk">
                <input
                  type="radio"
                  id="boyut-kucuk"
                  name="boyut"
                  value="Küçük"
                />
                Küçük
              </label>

              <label htmlFor="boyut-orta">
                <input
                  type="radio"
                  id="boyut-orta"
                  name="boyut"
                  value="Orta"
                />
                Orta
              </label>

              <label htmlFor="boyut-buyuk">
                <input
                  type="radio"
                  id="boyut-buyuk"
                  name="boyut"
                  value="Büyük"
                />
                Büyük
              </label>
            </fieldset>

            <div className="hamur-sec">
              <label htmlFor="hamur-kalinligi">Hamur Seç</label>
              <select id="hamur-kalinligi" name="hamurKalinligi" defaultValue="">
                <option value="" disabled>
                  Hamur Kalınlığı
                </option>
                <option value="İnce">İnce</option>
                <option value="Orta">Orta</option>
                <option value="Kalın">Kalın</option>
              </select>
            </div>
          </div>
          <fieldset className="ek-malzemeler">
            <legend className="ek-malzemeler-baslik">Ek Malzemeler</legend>
            <p className="ek-malzemeler-aciklama">En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
            <div className="malzeme-listesi">
              {
                MALZEMELER.map((malzeme) => {
                  const slug = malzeme.toLowerCase().replaceAll(" ", "-");
                  return (
                    <label key={malzeme} htmlFor={`malzeme-${slug}`}>
                      <input
                        type="checkbox"
                        id={`malzeme-${slug}`}
                        name="malzemeler"
                        value={malzeme}
                      />
                      {malzeme}

                    </label>
                  )
                })
              }

            </div>

          </fieldset>
          <div className="isim-alani">
            <label htmlFor="musteri-isim">
              İsim <span className="zorunlu" aria-hidden="true">*</span>
            </label>
            <input
              type="text"
              id="musteri-isim"
              name="isim"
              placeholder="Adınızı girin (en az 3 karakter)"
            />
          </div>
          <div className="not-alani">
            <label htmlFor="siparis-notu">Sipariş Notu</label>
            <textarea
              id="siparis-notu"
              name="siparisNotu"
              placeholder="Siparişine eklemek istediğin bir not var mı?"
            />
          </div>
          <div className="siparis-alt-satir">
            <div className="sayac">
              <button type="button" aria-label="Adedi azalt">-</button>
              <span>1</span>
              <button type="button" aria-label="Adedi artır">+</button>
            </div>

            <div className="ozet-ve-buton">
              <section className="siparis-toplami" aria-labelledby="ozet-baslik">
                <h2 id="ozet-baslik">Sipariş Toplamı</h2>

                <div className="toplam-satir">
                  <span>Seçimler</span>
                  <span>0.00₺</span>
                </div>

                <div className="toplam-satir genel-toplam">
                  <span>Toplam</span>
                  <span>85.50₺</span>
                </div>
              </section>

              <button type="submit" className="siparis-ver-btn">
                SİPARİŞ VER
              </button>
            </div>
          </div> {/* aria-label, simgeyle gösterilen butonların amacını ekran okuyucuya açıklar. */}
        </form>
      </main>


    </>
  )
}

export default App
