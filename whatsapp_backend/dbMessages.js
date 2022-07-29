import mongoose from "mongoose";

const whatsappSchema = mongoose.Schema({
    message: String,
    name: String,
    timestamp: String,
    received: Boolean,
});

//collection and its name should be plural
export default mongoose.model('messagecontents', whatsappSchema);