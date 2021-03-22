import CrudService from './crud.service';

export default class Student extends CrudService {
    constructor ({context, schemas, errors}) {
        super(context['Students'], schemas['Students'], errors);
    }
}