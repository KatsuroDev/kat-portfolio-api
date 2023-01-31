import express from 'express';
import HttpError from 'http-errors';
import httpStatus from 'http-status';
import chalk from 'chalk';
import albumRepository from '../repositories/album.repository.js';

const router = express.Router();

class AlbumRoutes {
    constructor() {
        router.get('/', this.getAll);
        router.post('/', this.post);
    }

    async getAll(req, res, next) {
        try {
            let albums = await albumRepository.retrieveAll();

            albums = albums.map(album => {
                album = album.toObject({getters:false, virtuals:false});
                return album;
            });

            res.status(httpStatus.OK).json(albums);
        } catch (err) {
            console.log(chalk.red('Error encountered\n' + err));
            res.end();
            return;
        }
    }

    async post(req, res, next) {
        const newAlbum = req.body;
        try {
            let albumAdded = await albumRepository.create(newAlbum);
            albumAdded = albumAdded.toObject({getters:false,virtuals:false});

            res.status(httpStatus.CREATED).json(albumAdded);
        } catch(err) {
            console.log(chalk.red('Error encountered\n' + err));
            res.status(httpStatus.BAD_REQUEST).end();
            return;
        }
    }
}

new AlbumRoutes();

export default router;
