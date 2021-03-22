export default (Sequelize, sequelize) => {
    return sequelize.define('eventsStudents', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        eventId: {type: Sequelize.INTEGER},
        studentId: {type: Sequelize.INTEGER},
        isAttended: {type: Sequelize.BOOLEAN}
    });
};
