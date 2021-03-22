import config from 'config';
import { events, groups, users, students, eventsStudents } from '../models/index';

export default ({Sequelize}) => {
    const sequelize = new Sequelize(config.db.name, config.db.user, config.db.pass, config.db.options);

    const Events = events(Sequelize, sequelize);
    const Groups = groups(Sequelize, sequelize);
    const Users = users(Sequelize, sequelize);
    const Students = students(Sequelize, sequelize);
    const EventsStudents = eventsStudents(Sequelize, sequelize);

    Users.hasMany(Events, {foreignKey: 'creatorId'});
    Events.belongsTo(Users, {constraints: false, foreignKey: 'creatorId'});

    Users.hasMany(Groups, {foreignKey: 'groupTeacherId'});
    Groups.belongsTo(Users, {constraints: false, foreignKey: 'groupTeacherId'});

    Groups.hasMany(Students, {foreignKey: 'groupId'});
    Students.belongsTo(Groups, {constraints: false, foreignKey: 'groupId'});

    Students.hasMany(EventsStudents, {foreignKey: 'studentId'});
    EventsStudents.belongsTo(Students, {constraints: false, foreignKey: 'studentId'});

    Events.hasMany(EventsStudents, {foreignKey: 'eventId'});
    EventsStudents.belongsTo(Events, {constraints: false, foreignKey: 'eventId'});

    return {
        Events,
        Groups,
        Users,
        Students,
        EventsStudents,
        sequelize,
        Sequelize
    };
};