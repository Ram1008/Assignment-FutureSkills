import mongoose from 'mongoose';

const connectToDB = async()=>{
    mongoose.set('strictQuery', true);
    try {
        await mongoose.connect(process.env.mongoURI,{
                dbName:'assignment_future-skills',
            }).then(() =>{
                console.log("Connection is successful");
            })
            .catch((error) => {
                console.error('Connection to MongoDB failed:', error);
            });
        
    }
    catch(error){
        console.log(error);
        process.exit(1);
    }
};
export default connectToDB;

