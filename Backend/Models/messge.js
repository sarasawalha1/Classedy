import mongoose from "mongoose";
const MessageSchema = mongoose.Schema({
    sender:[
        {type: mongoose.Schema.Types.ObjectId, ref: "StudentData"},
        {type: mongoose.Schema.Types.ObjectId, ref: "TeacherData"},
    ],
    content : {type : String, trim: true},
    chat : {type : mongoose.Schema.Types.ObjectId, ref: "Chat"},

},
{
    timestamps : true
}
)
const Message = mongoose.model("Message", MessageSchema);
export default Message;