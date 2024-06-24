import mongoose from 'mongoose';

export const Connection = async () => {
    const URL = `mongodb+srv://blogger:<blogger>@cluster0.zxxyklt.mongodb.net/mydatabase?retryWrites=true&w=majority&appName=Cluster0`;
    try {
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000,
        });
        console.log('Database is connected successfully');
    } catch (error) {
        console.error('Error while connecting with DB:', error.message);
        console.error('Full error details:', error);
    }
}
