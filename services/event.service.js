import CrudService from './crud.service';

export default class Event extends CrudService {
    constructor ({context, schemas, errors}) {
        super(context['Events'], schemas['event'], errors);
        this.studentsRepository = context['Students'];
    }

    async addStudent (studentId, eventId) {
        const student = await this.studentsRepository.findById(studentId);
        if (!student) throw this.errors.notFound;

        const event = await this.repository.findById(eventId);
        if (!event) throw this.errors.notFound;

        return event.addStudent(student);
    }

    async removeStudent (studentId, eventId) {
        const student = await this.studentsRepository.findById(studentId);
        if (!student) throw this.errors.notFound;

        const event = await this.repository.findById(eventId);
        if (!event) throw this.errors.notFound;

        
        return event.removeStudent(student);
    }
}