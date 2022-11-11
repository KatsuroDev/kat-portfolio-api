import './env.js';
import chalk from 'chalk';

import app from './src/app.js';

const PORT = process.env.PORT; 

app.listen(PORT, err => {
    console.log(chalk.green('Server listening on port: ') + chalk.bold.blue(`${PORT}`));
});