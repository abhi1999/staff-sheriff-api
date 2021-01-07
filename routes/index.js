const express = require('express')
const {EMPLOYEES_COLLECTION, JOB_SITES_COLLECTION,SERVICE_RESPONSE, EMPLOYEE_JOBSITE_COLLECTION} = require("./../config");
const { genericController } = require('../controllers')
const router = express.Router()
const {handleError} = require('../utils');


const employee = new genericController(EMPLOYEES_COLLECTION)

router.get("/employees", employee.getAll);
router.post('/employee', employee.create);
router.get("/employee/:id", employee.getById);
router.put("/employee/:id", employee.updateById);
router.delete("/employee/:id", employee.deleteById);


const jobSites = new genericController(JOB_SITES_COLLECTION)

router.get("/jobSites", jobSites.getAll);
router.post('/jobSite', jobSites.create);
router.get("/jobSite/:id", jobSites.getById);
router.put("/jobSite/:id", jobSites.updateById);
router.delete("/jobSite/:id", jobSites.deleteById);


const empJobSites = new genericController(EMPLOYEE_JOBSITE_COLLECTION)

router.get("/empjobSites", empJobSites.getAll);
router.post('/empjobSite', empJobSites.create);
router.get("/empjobSite/:id", empJobSites.getById);
router.put("/empjobSite/:id", empJobSites.updateById);
router.delete("/empjobSite/:id", empJobSites.deleteById);




module.exports = router