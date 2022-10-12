import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import AuthContext from './context/auth-context';
import Login from './components/Login';
import Register from './components/Register';
import Welcome from './pages/Welcome';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, fetchCart } from './store/cart-actions';
import CartPage from './pages/CartPage';

function App() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  useEffect(() => {
    dispatch(addItemToCart(cart));
    console.log('cartChanged!');
  }, [cart, dispatch]);

  return (
    <Switch>
      <Route path="/welcome" exact>
        {authCtx.isLoggedIn && <>
          <Header />
          <Welcome />
        </>}
        {!authCtx.isLoggedIn && <Redirect to="/login" />}
      </Route>
      <Route path="/login" exact>
        {authCtx.isLoggedIn && <Redirect to="/welcome" />}
        {!authCtx.isLoggedIn && <Login />}
      </Route>
      <Route path="/register" exact>
        {authCtx.isLoggedIn && <Redirect to="/welcome" />}
        {!authCtx.isLoggedIn && <Register />}
      </Route>
      <Route path="/cart" exact>
        {authCtx.isLoggedIn && <CartPage />}
        {!authCtx.isLoggedIn && <Redirect to="/login" />}
      </Route>
      <Route path="/" exact>
        {authCtx.isLoggedIn && <Redirect to="/welcome" />}
        {!authCtx.isLoggedIn && <Redirect to="/login" />}
      </Route>
      <Route path="*">
        {authCtx.isLoggedIn && <Header />}
        {!authCtx.isLoggedIn && <Redirect to="/login" />}
      </Route>
    </Switch>
  );
}

export default App;
