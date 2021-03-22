import CrudController from './crud.controller';
import { send } from '../../helpers/sender.helper';

export default class EventController extends CrudController {
    constructor ({eventService, cacheService}) {
        super(eventService, cacheService);

        this.addStudent = this.addStudent.bind(this);
        this.removeStudent = this.removeStudent.bind(this);

        this.routes['/:id/student'] = [
            { method: 'put', cb: this.addStudent },
            { method: 'delete', cb: this.removeStudent }
        ];

        this.registerRoutes();
    }

    async addStudent(req, res) {
        await this.service.addStudent(req.body.studentId, req.params.id);
        send(req, res, { success: true });
    }

    async removeStudent(req, res) {
        await this.service.removeStudent(req.body.studentId, req.params.id);

        send(req, res, { success: true });
    }
};