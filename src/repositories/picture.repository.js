import Picture from '../models/picture.model.js';

class PictureRepository {
    retrieveAll()
    {
        const retrieveQuery = Picture.find();
        return retrieveQuery;
    }

    create(picture)
    {
        return Picture.create(picture);
    }
}

export default new PictureRepository();