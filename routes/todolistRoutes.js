import express from 'express';
import { addTask, allTask, updateTask ,delTask} from '../controller/todolistController.js';


const route=express.Router();

route.post('/addTask',addTask);
route.get('/allTask',allTask);
route.post('/updateTask',updateTask)
route.post('/delTask',delTask)

export default route