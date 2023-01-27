import express from 'express';
import HttpError from 'http-errors';
import httpStatus from 'http-status';
import chalk from 'chalk';
import PictureRepository from '../repositories/picture.repository.js';
import pictureRepository from '../repositories/picture.repository.js';

const router = express.Router();

class PictureRoutes {
    constructor() {
        router.get('/', this.getAll);
        router.post('/', this.post);
    }

    async getAll(req, res, next) {
        try {
            let pictures = await PictureRepository.retrieveAll();

            pictures = pictures.map(picture => {
                picture = picture.toObject({getters:false, virtuals:false});
                return picture;
            });

            res.status(httpStatus.OK).json(pictures);
        } catch (err) {
            console.log(chalk.red('Error encountered\n' + err));
            res.end();
            return;
        }
    }

    async post(req, res, next) {
        const newPicture =  req.body;
        try {
            let pictureAdded = await pictureRepository.create(newPicture);
            pictureAdded = pictureAdded.toObject({getters:false,virtuals:false});

            res.status(httpStatus.CREATED).json(pictureAdded);
        } catch (err) {
            console.log(chalk.red('Error encountered\n' + err));
            res.status(httpStatus.BAD_REQUEST).end();
            return;
        }
    }
}

new PictureRoutes();

export default router;