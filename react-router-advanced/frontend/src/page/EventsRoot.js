import { Outlet } from 'react-router-dom';

import EventsNavigation from '../components/EventsNavigation';

const EventsRootLayout = () => {
  return (
    <>
      <EventsNavigation />
      <Outlet></Outlet>
    </>
  );
};

export default EventsRootLayout;
