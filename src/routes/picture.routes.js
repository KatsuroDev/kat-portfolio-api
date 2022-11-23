import express from 'express';
import HttpError from 'http-errors';
import httpStatus from 'http-status';
import chalk from 'chalk';
import PictureRepository from '../repositories/picture.repository.js';

const router = express.Router();

class PictureRoutes {
    constructor() {
        router.get('/', this.getAll);
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
}

new PictureRoutes();

export default router;