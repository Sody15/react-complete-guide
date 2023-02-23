import Head from 'next/head';

import { MongoClient } from 'mongodb';

import MeetupList from '../components/meetups/MeetupList';

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
  const client = await MongoClient.connect(
    'mongodb+srv://Sody:Coldplay1%21@cluster0.w9w7glg.mongodb.net/?retryWrites=true&w=majority'
  );

  const db = client.db();

  const meetupsCollection = db.collection('meetups');

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
