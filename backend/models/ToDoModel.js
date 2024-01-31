const { default: mongoose } = require("mongoose")
const mangoose = require("mongoose")

const ToDoSchema = new mongoose.Schema({
    toDo : {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    completed: {
           type: Boolean,
       default: false
      },
})


module.exports = mongoose.model("ToDo", ToDoSchema);