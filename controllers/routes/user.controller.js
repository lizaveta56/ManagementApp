import CrudController from './crud.controller';
import {send} from '../../helpers/sender.helper';

export default class UserController extends CrudController {
    constructor ({usersService, cacheService}) {
        super(usersService, cacheService);
        this.findUser = this.findUser.bind(this);

        this.routes['/findUser'] = [
            {method: 'post', cb: this.FindUser}
        ];

        this.registerRoutes();
    }

    async findUser (req, res) {
        const item = await this.service.findUser(
            {
                fullName: req.body.userName,
                pass: req.body.pass
            });
            
        send(req, res, item);
    }
};