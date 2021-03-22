export default (Sequelize, sequelize) => {
    return sequelize.define('users', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        fullName: {type: Sequelize.STRING},
        email: {type: Sequelize.STRING},
        userInfo: {type: Sequelize.STRING},
        pass:  {type: Sequelize.STRING},
        photo:  {type: Sequelize.STRING}
    });
};

