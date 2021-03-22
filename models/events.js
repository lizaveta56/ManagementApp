export default (Sequelize, sequelize) => {
    return sequelize.define('events', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        title: {type: Sequelize.STRING},
        description: {type: Sequelize.STRING},
        date: {type: Sequelize.DATE},
        room: {type: Sequelize.STRING},
        creatorId: {type: Sequelize.INTEGER},
    });
};

