// !dmbg
import mongoose from 'mongoose'; // Erase if already required

const COLLECTION_NAME = "Users"
const DOCUMENT_NAME = "User"
// Declare the Schema of the Mongo model
var templateSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    collection: COLLECTION_NAME
});

//Export the model
export default mongoose.model(DOCUMENT_NAME, templateSchema);