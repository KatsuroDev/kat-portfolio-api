import Album from '../models/album.model.js';

class AlbumRepository {
    retrieveAll()
    {
        const retrieveQuery = Album.find();
        return retrieveQuery;
    }

    create(album)
    {
        return Album.create(album);
    }
}

export default new AlbumRepository();