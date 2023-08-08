import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    'mongodb+srv://timd:NHAZiL53LmaGbtxt@timd.vqmhuc1.mongodb.net/?retryWrites=true&w=majority'
  );

  return client;
}
