function OrderForm({ ingredients, order, onOrderChange }) {
  function updateToppings(ingredient, isSelected) {
    const toppings = isSelected
      ? [...order.toppings, ingredient]
      : order.toppings.filter((topping) => topping !== ingredient)

    onOrderChange('toppings', toppings)
  }

  return (
    <form className="siparis-formu">
      <div className="boyut-hamur-satiri">
        <fieldset className="boyut-sec">
          <legend>Boyut Seç</legend>

          {['Küçük', 'Orta', 'Büyük'].map((size) => {
            const id = `boyut-${size.toLocaleLowerCase('tr-TR')}`
            return (
              <label key={size} htmlFor={id}>
                <input
                  type="radio"
                  id={id}
                  name="boyut"
                  value={size}
                  checked={order.size === size}
                  onChange={(event) => onOrderChange('size', event.target.value)}
                />
                {size}
              </label>
            )
          })}
        </fieldset>

        <div className="hamur-sec">
          <label htmlFor="hamur-kalinligi">Hamur Seç</label>
          <select
            id="hamur-kalinligi"
            name="hamurKalinligi"
            value={order.crust}
            onChange={(event) => onOrderChange('crust', event.target.value)}
          >
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
          {ingredients.map((ingredient) => {
            const slug = ingredient.toLocaleLowerCase('tr-TR').replaceAll(' ', '-')
            const id = `malzeme-${slug}`

            return (
              <label key={ingredient} htmlFor={id}>
                <input
                  type="checkbox"
                  id={id}
                  name="malzemeler"
                  value={ingredient}
                  checked={order.toppings.includes(ingredient)}
                  onChange={(event) => updateToppings(ingredient, event.target.checked)}
                />
                {ingredient}
              </label>
            )
          })}
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
          value={order.name}
          onChange={(event) => onOrderChange('name', event.target.value)}
        />
      </div>

      <div className="not-alani">
        <label htmlFor="siparis-notu">Sipariş Notu</label>
        <textarea
          id="siparis-notu"
          name="siparisNotu"
          placeholder="Siparişine eklemek istediğin bir not var mı?"
          value={order.note}
          onChange={(event) => onOrderChange('note', event.target.value)}
        />
      </div>

      <div className="siparis-alt-satir">
        <div className="sayac">
          <button
            type="button"
            aria-label="Adedi azalt"
            onClick={() => onOrderChange('quantity', Math.max(1, order.quantity - 1))}
          >
            -
          </button>
          <span>{order.quantity}</span>
          <button
            type="button"
            aria-label="Adedi artır"
            onClick={() => onOrderChange('quantity', order.quantity + 1)}
          >
            +
          </button>
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
      </div>
    </form>
  )
}

export default OrderForm
