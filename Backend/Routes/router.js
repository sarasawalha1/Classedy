import express from 'express';
import { postStudentData } from '../Controllers/Controller.js';
import { postTeacherData } from '../Controllers/Controller.js';
import { teacherLogin } from '../Controllers/Controller.js';
import { studentLogin } from '../Controllers/Controller.js';
import { postSurvey } from '../Controllers/Controller.js';
import { showSurvey } from '../Controllers/Controller.js';
//import { getAccount } from '../Controllers/Controller.js';
const router = express.Router();
router.post('/StudentSignUp', postStudentData)
router.post('/TeacherSignUp', postTeacherData)
router.post('/PostSurvey', postSurvey)
router.post('/TeacherLogin', teacherLogin)
router.post('/StudentLogin', studentLogin)
router.get("/ShowSurvey", showSurvey)
//router.get('/', getAccount)

export default router