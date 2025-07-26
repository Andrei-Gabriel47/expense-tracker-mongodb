import mongoose from "mongoose";

const connectDB = async () => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/ExpenseDB`);
        console.log("MongoDb connected! DB host :" + connectionInstance.connection.host);
    }
    catch(error)
    {
        console.log(error)
    }
}

export default connectDB;