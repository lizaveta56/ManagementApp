export default (Sequelize, sequelize) => {
    return sequelize.define('students', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        fullName: {type: Sequelize.STRING},
        email: {type: Sequelize.STRING},
        groupId: {type: Sequelize.INTEGER}
    });
};

