import { createBrowserRouter } from 'react-router-dom';

import Root from './components/Root';

import EditEventPage from './page/EditEventPage';
import EventDetailPage, {
  loader as eventDetailLoader,
  action as deleteEventaction,
} from './page/EventDetailPage';
import EventsPage, { loader as eventsLoader } from './page/Event';
import EventsRootLayout from './page/EventsRoot';
import HomePage from './page/HomePage';
import NewEventPage from './page/NewEventPage';
import ErrorPage from './page/Error';
import { action as manipulateEventAction } from './components/EventForm';
import NewsletterPage, { action as newsletterAction } from './page/Newletter';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'events',
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: 'new',
            element: <NewEventPage />,
            action: manipulateEventAction,
          },
          {
            path: ':id',
            id: 'event-detail',
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventaction,
              },
              {
                path: 'edit',
                element: <EditEventPage />,
                action: manipulateEventAction,
              },
            ],
          },
        ],
      },
      {
        path: 'newsletter',
        element: <NewsletterPage />,
        action: newsletterAction,
      },
    ],
  },
]);

export default router;
