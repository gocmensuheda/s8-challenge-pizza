import { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import OrderPage from './pages/OrderPage.jsx'
import SiteHeader from './components/SiteHeader.jsx'

const PIZZA = {
  name: 'Position Absolute Acılı Pizza',
  price: 85.5,
  rating: 4.9,
  reviewCount: 200,
  description:
    'Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre.',
}

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

const INITIAL_ORDER = {
  size: '',
  crust: '',
  toppings: [],
  name: '',
  note: '',
  quantity: 1,
}

function App() {
  const [order, setOrder] = useState(INITIAL_ORDER)

  function updateOrder(field, value) {
    setOrder((currentOrder) => ({
      ...currentOrder,
      [field]: value,
    }))
  }

  return (
    <BrowserRouter>
      <SiteHeader />
      <Switch>
        <Route
          exact
          path={['/', '/siparis-olustur']}
          render={() => (
            <OrderPage
              pizza={PIZZA}
              ingredients={INGREDIENTS}
              order={order}
              onOrderChange={updateOrder}
            />
          )}
        />
      </Switch>
    </BrowserRouter>
  )
}

export default App
