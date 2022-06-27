import express from 'express';
import mongoose from 'mongoose';
const StudentSchema = mongoose.Schema({
    StudentEmailAddress : {
        type : String,
        required : true,    
    },
    StudentName : {
        type : String,
        required : true,    
    },
    StudentPassword : {
        type : Number,
        required : true,    
    },
    isStudent : {
        required : true, 
        type : Boolean,
    },
    pic : {

    }
    
});


const TeacherSchema = mongoose.Schema({
    TeacherEmailAddress : {
        type : String,
        required : true,    
    },
    TeacherName : {
        type : String,
        required : true,    
    },
    TeacherPassword : {
        type : Number,
        required : true,    
    },
    isTeacher : {
        required : true, 
        type : Boolean,
    }
});
export const StudentData = mongoose.model("StudentData", StudentSchema);
export const TeacherData = mongoose.model("TeacherData", TeacherSchema);
