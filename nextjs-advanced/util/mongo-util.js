import { MongoClient } from 'mongodb';

export const getMongoClient = async () => {
  const client = await MongoClient.connect(
    'mongodb+srv://Sody:Coldplay1%21@cluster0.w9w7glg.mongodb.net/?retryWrites=true&w=majority'
  );

  return client;
};

export const getMeetupsCollection = (client) => {
  return client.db().collection('meetups');
};
