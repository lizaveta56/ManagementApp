import CrudService from './crud.service';

export default class Group extends CrudService {
    constructor ({context, schemas, errors}) {
        super(context['Group'], schemas['group'], errors);
    }
}