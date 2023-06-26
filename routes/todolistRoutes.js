import express from 'express';
import { addTask, allTask, updateTask ,delTask, filterTask} from '../controller/todolistController.js';


const route=express.Router();

route.post('/addTask',addTask);
route.get('/allTask',allTask);
route.post('/updateTask',updateTask)
route.post('/delTask',delTask)
route.post('/filterTask',filterTask)

export default route