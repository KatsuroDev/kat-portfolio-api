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

    delete(idPicture)
    {
        return Picture.findByIdAndDelete(idPicture);
    }
}

export default new PictureRepository();