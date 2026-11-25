function PizzaDetails({ pizza }) {
  return (
    <article className="pizza-detay">
      <h1>{pizza.name}</h1>

      <div className="pizza-ust-satir">
        <strong className="pizza-fiyat">{pizza.price.toFixed(2)}₺</strong>

        <div className="pizza-meta">
          <span className="puan">{pizza.rating}</span>
          <span className="degerlendirme">({pizza.reviewCount})</span>
        </div>
      </div>

      <p className="pizza-aciklama">{pizza.description}</p>
    </article>
  )
}

export default PizzaDetails
