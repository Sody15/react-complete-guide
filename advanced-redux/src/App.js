import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { FIREBASE_URL } from './helper/helper';
import { cartActions } from './store/cart-slice';
import Notification from './components/UI/Notification';

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.products);
  const notification = useSelector((state) => state.cart.notification);

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        cartActions.showNotification({
          status: 'pending',
          title: 'Sending...',
          message: 'Sending cart data!',
        })
      );

      const response = await fetch(FIREBASE_URL + 'cart.json', {
        method: 'PUT',
        body: JSON.stringify(cartProducts),
      }).catch((err) => {
        throw new Error('Sending cart data failed!');
      });

      if (!response.ok) {
        throw new Error('Sending cart data failed!');
      }

      dispatch(
        cartActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Send cart data successfully!',
        })
      );
    };

    if (isInitial) {
      isInitial = false;
      return;
    }

    sendCartData().catch((err) => {
      dispatch(
        cartActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sending cart data failed!',
        })
      );
    });
  }, [cartProducts, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        <Cart />
        <Products />
      </Layout>
    </>
  );
}

export default App;
