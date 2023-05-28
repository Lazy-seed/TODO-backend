import mongoose from "mongoose";


const connecting = () => {

    // const MONGOOSE_URL='mongodb+srv://aryan:aryan@cluster1.alqtnoa.mongodb.net/?retryWrites=true&w=majority'
    const MONGOOSE_URL='mongodb+srv://aryan:aryan@cluster1.alqtnoa.mongodb.net/TODOO?retryWrites=true&w=majority'
    // const MONGOOSE_URL = 'mongodb://aryan:aryan@ac-krsqijk-shard-00-00.alqtnoa.mongodb.net:27017,ac-krsqijk-shard-00-01.alqtnoa.mongodb.net:27017,ac-krsqijk-shard-00-02.alqtnoa.mongodb.net:27017/TODOO?ssl=true&replicaSet=atlas-xocjqn-shard-0&authSource=admin&retryWrites=true&w=majority'

    mongoose.connect(MONGOOSE_URL,{});


    mongoose.connection.on('connected', (stream) => {
        console.log('database connected!');
    })
    mongoose.connection.on('disconnected', (stream) => {
        console.log('database not connect!');
    })
    mongoose.connection.on('error', (stream) => {
        console.log('database error connect!');
    })
}


export default connecting