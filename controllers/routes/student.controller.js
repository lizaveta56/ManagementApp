import CrudController from './crud.controller';
import {send} from '../../helpers/sender.helper';

export default class StudentController extends CrudController {
    constructor ({studentService, cacheService}) {
        super(studentService, cacheService);
        this.registerRoutes();
    }
};