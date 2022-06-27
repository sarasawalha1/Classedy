import express from 'express';
import mongoose from 'mongoose';
const surveySchema = mongoose.Schema({
    title :{ 
        type : String,
        default : "Untitled"
    },  
    questions:[
        {
            questionType:{
                type : String,
                required : true,
            },
            questionText : {
                type : String,
                required : true,
            },
        },
    ],
})
export const SurveyData = mongoose.model("SurveyData", surveySchema);