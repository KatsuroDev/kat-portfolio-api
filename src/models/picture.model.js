import mongoose from "mongoose";

const pictureSchema = mongoose.Schema({
    name: {type: String, unique: true, required: true},
    description: {type: String, default: ""},
    album: {type: mongoose.Schema.Types.ObjectId, ref: 'Album'},
    metadata: {type: Object, required: true}

}, {
    collection: 'pictures',
    strict: 'throw'
});

export default mongoose.model('Picture', pictureSchema);