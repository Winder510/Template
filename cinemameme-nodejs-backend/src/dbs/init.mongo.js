import mongoose from 'mongoose';
const connectString = "mongodb+srv://cinemamemese:pHuqI85mNrqjSifr@cinema.dcrku.mongodb.net/cinema";
class Database {
    constructor() {
        this.connect()
    }
    connect() {
        mongoose.connect(connectString, {
            maxPoolSize: 50
        }).then(_ => console.log("Connect success")).catch(err => console.log("Err connect"))
    }
    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance
    }
}

const instanceMongodb = Database.getInstance()
export default instanceMongodb