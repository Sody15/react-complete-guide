import { createBrowserRouter } from 'react-router-dom';

import Root from './components/Root';

import EditEventPage from './page/EditEventPage';
import EventDetailPage from './page/EventDetailPage';
import EventsPage from './page/EventsPage';
import EventsRootLayout from './page/EventsRoot';
import HomePage from './page/HomePage';
import NewEventPage from './page/NewEventPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'events',
        element: <EventsRootLayout />,
        children: [
          { index: true, element: <EventsPage /> },
          { path: 'new', element: <NewEventPage /> },
          { path: ':id', element: <EventDetailPage /> },
          { path: ':id/edit', element: <EditEventPage /> },
        ],
      },
    ],
  },
]);

export default router;
