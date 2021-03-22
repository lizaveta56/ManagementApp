import { Router } from 'express';

module.exports = ({
  userController,
  eventController,
  groupController,
  studentController
}) => {
  const router = Router();

  router.use('/user', userController.router);
  router.use('/event', eventController.router);
  router.use('/group', groupController.router);
  router.use('/student', studentController.router);

  return router;
};
