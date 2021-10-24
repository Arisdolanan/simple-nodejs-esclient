const express = require('express');
const router = express.Router();
const elasticController = require("../controllers");

router.post('/test', elasticController.getTestElastic)
router.post('/all', elasticController.getAllElastic)
router.post('/bysearch', elasticController.getAllBySearchElastic)
router.post('/byid', elasticController.getByIdElastic)
router.post('/count', elasticController.getCountDataByIndexElastic)
router.post('/create', elasticController.createDataByIndexElastic)
router.put('/update', elasticController.updateDataByIndexElastic)
router.delete('/delete', elasticController.deleleDataByIdElastic)

module.exports = router;