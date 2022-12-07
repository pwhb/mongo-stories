import { MongoClient } from 'mongodb'

let _mongoClient: MongoClient

export const getMongoClient = async () => {
    if (!_mongoClient) {
        _mongoClient = new MongoClient(import.meta.env.VITE_MONGO_URI)
        await _mongoClient.connect()
    }
    return _mongoClient
}
export const getDb = async () =>
    (await getMongoClient()).db(import.meta.env.VITE_MONGO_DATABASE)
export const getUsersCollection = async () =>
    (await getDb()).collection('users')
export const getPostsCollection = async () =>
    (await getDb()).collection('posts')