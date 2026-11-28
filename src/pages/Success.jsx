import logo from '../../images/iteration-1-images/logo.svg'
export default function Success() {
    return (
        <main className="success-hero">
            <div className="success-hero-icerik">
                <img className="success-hero-logo" src={logo} alt="Teknolojik Yemekler" />
                <h1 className="success-slogan">
                    lezzetin yolda
                    <br />
                    SİPARİŞ ALINDI
                </h1>


            </div>
            <section>
                <h2>Position Absolute Acı Pizza</h2>
                <p>Boyut: <strong>{size}</strong></p>
                <p>Hamur: <strong>{dough}</strong></p>
                <p>Ek Malzemeler: <strong>{ingredients.join(", ")}</strong></p>

            </section>
            <section>
                <h2>Sipariş Toplamı</h2>
                <p>Seçimler: <strong>{ingredientPrice}</strong></p>
                <p>Toplam: <strong>{totalPrice}</strong></p>
            </section>

        </main>
    )
}