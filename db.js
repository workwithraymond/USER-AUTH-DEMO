const Mongoose = require('mongoose')
const RemoteDB = `mongodb+srv://workwithraymond01:NtZAbIynS6D8dyj6@cluster0.bm6il9a.mongodb.net/?retryWrites=true&w=majority`
const connectDB = async () => {
    Mongoose.connect(RemoteDB)
    .then(client => {
        console.log(`MongoDB connection successful`)
    })
}

module.exports = connectDB
