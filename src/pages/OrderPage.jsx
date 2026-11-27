import OrderForm from '../components/OrderForm.jsx'
import PizzaDetails from '../components/PizzaDetails.jsx'
import SiteHeader from '../components/SiteHeader.jsx'

function OrderPage() {
  return (
    <>
      <SiteHeader />
      <main id="siparis-olustur">
        <PizzaDetails />
        <OrderForm />
      </main>
    </>
  )
}

export default OrderPage
