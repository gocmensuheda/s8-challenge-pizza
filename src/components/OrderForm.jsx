import axios from "axios";
import { useState } from "react";

const INGREDIENTS = [
  'Pepperoni',
  'Sosis',
  'Kanada Jambonu',
  'Tavuk Izgara',
  'Soğan',
  'Domates',
  'Mısır',
  'Sucuk',
  'Jalepeno',
  'Sarımsak',
  'Biber',
  'Ananas',
  'Kabak',
]

function OrderForm() {

  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [size, setSize] = useState("");
  const [dough, setDough] = useState("");

  const isFormValid =
    name.trim().length >= 3 &&
    selectedIngredients.length >= 4 &&
    selectedIngredients.length <= 10 && Boolean(size) &&
    Boolean(dough);

  const handleSubmit =async (event) => {
    event.preventDefault();
    if (name.trim().length < 3) {
      setError("İsim en az 3 karakter olmalıdır.");
      return;
    }
    if (selectedIngredients.length < 4 || selectedIngredients.length > 10) {
      setError("En az 4, en fazla 10 malzeme seçmelisiniz.");
      return;
    }
    if (!size) {
      setError("Lütfen pizza boyutu seçin.");
      return;
    }

    if (!dough) {
      setError("Lütfen hamur kalınlığı seçin.");
      return;
    }
    setError("");
    setIsSubmitting(true);

    const orderData = {
    name: name.trim(),
    size,
    dough,
    ingredients: selectedIngredients,
  };


    console.log("Sipariş gönderildi:", {
      name: name.trim(), size,
      dough, ingredients: selectedIngredients
    });

    
    try {
      const response = await axios.post("https://reqres.in/api/pizza", orderData, {
        headers: { "x-api-key": "reqres-free-v1" },
      })
      console.log("API yanıtı:", response.data)
    } catch (err) {
      setError("Sipariş gönderilirken bir hata oluştu. Lütfen tekrar deneyin.");
    } finally {
      setIsSubmitting(false);//istek başladığında butonu kilitleriz kullanıcı tekrar göndermeye çalışmasın diye.
    }

  }

  const handleChange = (event) => {
    setName(event.target.value);

  }
  const handleSizeChange = (event) => {
  setSize(event.target.value)
}
const handleDoughChange = (event) => {
  setDough(event.target.value)
}
  const handleIngredientChange = (event) => {
    const { checked, value } = event.target
    setSelectedIngredients((prev) => {
      if (checked) {
        return [...prev, value];
      }
      return prev.filter((item) => item !== value);
    })

  }


  return (
    <form className="siparis-formu" onSubmit={handleSubmit}>
      <div className="boyut-hamur-satiri">
        <fieldset className="boyut-sec">
          <legend>
            Boyut Seç <span className="zorunlu" aria-hidden="true">*</span>
          </legend>

          <label htmlFor="boyut-kucuk">
            <input
              type="radio"
              id="boyut-kucuk"
              name="boyut"
              value="Küçük"
              checked={size === 'Küçük'}
              onChange={handleSizeChange}
              required
            />
            Küçük
          </label>

          <label htmlFor="boyut-orta">
            <input
              type="radio"
              id="boyut-orta"
              name="boyut"
              value="Orta"
              checked={size === 'Orta'}
              onChange={handleSizeChange}
              required
            />
            Orta
          </label>

          <label htmlFor="boyut-buyuk">
            <input
              type="radio"
              id="boyut-buyuk"
              name="boyut"
              value="Büyük"
              checked={size === 'Büyük'}
              onChange={handleSizeChange}
              required
            />
            Büyük
          </label>
        </fieldset>

        <div className="hamur-sec">
          <label htmlFor="hamur-kalinligi">
            Hamur Seç <span className="zorunlu" aria-hidden="true">*</span>
          </label>
          <select
            id="hamur-kalinligi"
            name="hamurKalinligi"
            value={dough}
            onChange={handleDoughChange}
            required
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
          {INGREDIENTS.map((ingredient) => {
            const slug = ingredient.toLocaleLowerCase('tr-TR').replaceAll(' ', '-')
            const id = `malzeme-${slug}`

            return (
              <label key={ingredient} htmlFor={id}>
                <input
                  type="checkbox"
                  id={id}
                  name="malzemeler"
                  value={ingredient}
                  checked={selectedIngredients.includes(ingredient)}
                  onChange={handleIngredientChange}
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
          value={name}
          onChange={handleChange}
          required
          minLength={3}
        />
        {error && (
          <p id="isim-hata" className="form-error" role="alert">
            {error}
          </p>
        )}
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
          <button type="button" aria-label="Adedi azalt">
            -
          </button>
          <span>1</span>
          <button type="button" aria-label="Adedi artır">
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

          <button type="submit" className="siparis-ver-btn" disabled={isSubmitting || !isFormValid}>
            {isSubmitting ? "Gönderildi" : "Sipariş Ver"}
          </button>
        </div>
      </div>
    </form>
  )
}

export default OrderForm
