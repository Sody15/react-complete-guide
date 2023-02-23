import Head from 'next/head';

import MeetupList from '../components/meetups/MeetupList';
import { getMeetupsCollection, getMongoClient } from '../util/mongo-util';

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta
          name='description'
          content='Browse a huge list of highly active React meetups!'
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
};

// export const getServerSideProps = async (context) => {
//   const { req, res } = context;

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// };

// Date fetching - Pre-rendering
export const getStaticProps = async () => {
  const client = await getMongoClient();
  const meetupsCollection = getMeetupsCollection(client);

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10,
  };
};

export default HomePage;
