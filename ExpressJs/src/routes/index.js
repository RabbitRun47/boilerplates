import express from 'express';
import healthCheckApis from './healthCheckApis';
var router = express.Router();

/* GET home page. */
router.use('/healthCheck', healthCheckApis);

export default router;
