import mongoose from "mongoose";

const albumSchema = mongoose.Schema({
    name: {type: String, unique: true, required: true},
    description: {type: String, default: ""},
    dateCreated: {type: Date, default: Date.now()},
}, {
    collection: 'albums',
    strict: 'throw'
});

albumSchema.virtual('pictures', {
    ref: 'Picture',
    localField: '_id',
    foreignField: 'album',
    justOne: false
});

export default mongoose.model('Album', albumSchema);