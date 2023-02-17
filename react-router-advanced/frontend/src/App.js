// Challenge / Exercise

import { RouterProvider } from 'react-router-dom';
import router from './router';

// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

function App() {
  return <RouterProvider router={router} />;
}

export default App;
