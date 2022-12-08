import { MongoClient } from 'mongodb'
import { MONGODB_URI, MONGODB_DATABASE } from '$env/static/private'


let _mongoClient: MongoClient

export const getMongoClient = async () => {
    if (!_mongoClient) {
        _mongoClient = new MongoClient(MONGODB_URI)
        try {
            await _mongoClient.connect()
            console.log(MONGODB_URI)
            console.log(MONGODB_DATABASE)
            console.log("DB connected")
        } catch (err) {
            console.log(err)
        }
     
    }
    return _mongoClient
}
export const getDB = async () =>
    (await getMongoClient()).db(MONGODB_DATABASE)