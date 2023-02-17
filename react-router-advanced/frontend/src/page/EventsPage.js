import { Link } from 'react-router-dom';
import EventDetailPage from './EventDetailPage';

const DUMMY_EVENTS = [
  {
    id: '1',
    image: 'image-1',
    title: 'Happy New Years!',
    date: '01-01-2023',
    description: 'Lets go crazy!',
  },
  {
    id: '2',
    image: 'image-2',
    title: 'Happy Fourth!',
    date: '07-04-2023',
    description: 'Happy Fourth of July!',
  },
];

const EventsPage = () => {
  return (
    <>
      <h1>Events</h1>
      {DUMMY_EVENTS.map((event) => {
        return (
          <p key={event.id}>
            <Link to={event.id} relative='path'>
              {event.title}
            </Link>
          </p>
        );
      })}
    </>
  );
};

export default EventsPage;
