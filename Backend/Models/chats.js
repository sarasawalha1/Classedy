import mongoose from "mongoose";

const ChatsSchema = mongoose.Schema({
    chatName : {
        type : String,
        trim: true,
    },
    users : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "StudentData"
        },
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "TeacherData"
        },
        

    ],
    latestMessage : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Message"
    },
},
{
    timestamps:true
}
)

const Chat = mongoose.model("Chat", ChatsSchema);
export default Chat;