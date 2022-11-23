import Picture from '../models/picture.model.js';

class PictureRepository {
    retrieveAll()
    {
        const retrieveQuery = Picture.find();
        return retrieveQuery;
    }
}