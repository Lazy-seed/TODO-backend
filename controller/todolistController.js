import { set } from 'mongoose';
import taskList from '../model/todolistModal.js'

export const addTask = async (req, res) => {
  const newtask = await taskList.create({
    title: req.body.task,
    // date: req.body.date,
    userID: '234'
  })
  await newtask.save();



  const allTask = await taskList.find().sort({ _id: -1 });
  res.status(200).json({
    success: true,
    msg: "task added",
    allTask
  })

}



export const allTask = async (req, res) => {
  const allTask = await taskList.find().sort({ _id: -1 });
  res.status(200).json({
    success: true,
    allTask
  })

}

export const updateTask = async (req, res) => {
  // const task_id = req.params.id;
  const { id } = req.body
  const { job } = await taskList.findOne({ _id: id })
  const new_job = (job === 'done' ? 'undone' : 'done');

  try {
    const updatedTask = await taskList.updateOne({ _id: id },
      {
        $set: {
          job: new_job
        }
      }
    )

    const allTask = await taskList.find().sort({ _id: -1 });
    res.status(200).json({
      success: true,
      msg: "task update",
      allTask
    })
  } catch (error) {

    res.json({
      success: false,
      msg: "task not update ",
    })
  }

}



export const delTask = async (req, res) => {

  const { id } = req.body
  try {
    const del = await taskList.findByIdAndDelete(id);

    const allTask = await taskList.find().sort({ _id: -1 });
    res.status(200).json({
      success: true,
      msg: "task deleted",
      allTask
    })

  } catch (error) {
    res.status(200).json({
      success: false,
      msg: "task not deleted",
    })

  }
}