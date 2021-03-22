export default (Sequelize, sequelize) => {
    return sequelize.define('groups', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        groupName: {type: Sequelize.STRING},
        description: {type: Sequelize.STRING},
        groupTeacherId: {type: Sequelize.INTEGER}
    });
};
