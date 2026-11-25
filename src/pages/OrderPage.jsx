import OrderForm from '../components/OrderForm.jsx'
import PizzaDetails from '../components/PizzaDetails.jsx'

function OrderPage({ pizza, ingredients, order, onOrderChange }) {
  return (
    <main id="siparis-olustur">
      <PizzaDetails pizza={pizza} />
      <OrderForm
        ingredients={ingredients}
        order={order}
        onOrderChange={onOrderChange}
      />
    </main>
  )
}

export default OrderPage
