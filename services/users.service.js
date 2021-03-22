import CrudService from './crud.service';

export default class User extends CrudService {
    constructor ({context, schemas, errors}) {
        super(context['Users'], schemas['user'], errors);
    }

    async findUser ({fullName, pass}) {
        const user = await this.repository.findOne({where: {fullName: fullName, pass: pass}});

        if (!user) throw this.errors.notFound;
        return user;
    }
}