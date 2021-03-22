import CrudController from './crud.controller';

export default class GroupController extends CrudController {
    constructor ({groupService, cacheService}) {
        super(groupService, cacheService);
        this.registerRoutes();
    }
};