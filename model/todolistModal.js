import mongoose from "mongoose";

const todolistSchema=new mongoose.Schema({
    title:{
        type: String
    },
    job:{
        type: String,
        default:'undone'
    },
    date:{
        type: String,
        default:"none"
    },
    userID:{
        type: String
    },
})


const taskList = mongoose.model("todolist", todolistSchema);
export default taskList