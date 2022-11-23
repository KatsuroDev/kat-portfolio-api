import express from 'express';
import HttpError from 'http-errors';
import httpStatus from 'http-status';
import chalk from 'chalk';
import AlbumRepository from '../repositories/album.repository.js';

const router = express.Router();

class AlbumRoutes {
    constructor() {
        router.get('/', this.getAll);
    }

    async getAll(req, res, next) {
        try {
            let albums = await AlbumRepository.retrieveAll();

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
}

new AlbumRoutes();

export default router;
