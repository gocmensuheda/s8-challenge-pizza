function PizzaDetails() {
  return (
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
  )
}

export default PizzaDetails
