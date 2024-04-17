const { default: mongoose } = require("mongoose");

async function connectToDatabase() {
    try {
        await mongoose.connect('mongodb+srv://prashanttalaviya33:mypower123@cluster0.r6dddfx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true });
        console.log('Connected to MongoDB database!'.bgYellow.black);
    } catch (err) {
        console.error('Error connecting to MongoDB database:', err);
    }
}
connectToDatabase();