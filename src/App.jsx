import './App.css'
import HomePage from './pages/HomePage.jsx'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import OrderPage from './pages/OrderPage.jsx'

function App() {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/OrderPage" component={OrderPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
