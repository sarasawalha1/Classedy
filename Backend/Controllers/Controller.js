import express from 'express';
import {StudentData} from '../Models/signUp.js';
import {TeacherData} from '../Models/signUp.js';
import {SurveyData} from '../Models/survey.js';
import Chat from '../Models/chats.js';
import asyncHandler from 'express-async-handler'

/*
export const getAccount = async(req, res)=>{
    try {
        const account = await StudentData.find();
        res.status(200).json(account);
    } catch (error) {
        res.status(404).json({message:error.message});   
    }
}
*/
export const postStudentData = (req, res) => {
    const {isStudent, StudentEmailAddress, StudentName, StudentPassword} = req.body;
    console.log(req.body);
    if (isStudent){
        StudentData.findOne({StudentEmailAddress:StudentEmailAddress}, (err,oldAccount)=>{
            if(oldAccount){
                res.status(409).json({message:"this account already exis"})
            }
            else{
                const newAccount = new StudentData({StudentEmailAddress, StudentName, StudentPassword, isStudent});
                try {
                    newAccount.save();
                    res.status(201).json(newAccount);
                } catch (error) {
                    res.status(409).json({message:error.message}) ;   
                }
            }
        })
    }
}
export const postTeacherData = (req, res) => {
    const {isTeacher, TeacherEmailAddress, TeacherName, TeacherPassword} = req.body;
    console.log(req.body);
    if (isTeacher){
        TeacherData.findOne({TeacherEmailAddress:TeacherEmailAddress}, (err,oldAccount)=>{
            if(oldAccount){
                res.status(409).json({message:"this account already exis"})
            }
            else{
                const newAccount = new TeacherData({TeacherEmailAddress, TeacherName, TeacherPassword, isTeacher});
                try {
                    newAccount.save();
                    res.status(201).json(newAccount);
                } catch (error) {
                    res.status(409).json({message:error.message}) ;   
                }
        }
        })
    }
}

export const teacherLogin = (req, res) =>{
    const {TeacherEmailAddress, TeacherPassword} = req.body;
//    console.log(req.body)
//    console.log(emailAddress)
//    console.log(password)
    TeacherData.findOne({TeacherEmailAddress:TeacherEmailAddress}, (err, account)=>{
        if(account){
            if(TeacherPassword == account.TeacherPassword){
                console.log("password is true");
                res.status(200).json({message:"Done"})
            }

            else{
                res.status(401).json({message:"wrong password"})
            }
        }
        else{
            console.log("user doesn't exist");
            res.status(404).json({message:"try to sign up"})
        }
    })
}
export const studentLogin = (req, res) =>{
    const {StudentEmailAddress, StudentPassword} = req.body;
//    console.log(req.body)
//    console.log(emailAddress)
//    console.log(password)
    StudentData.findOne({StudentEmailAddress:StudentEmailAddress}, (err, account)=>{
        if(account){
            if(StudentPassword == account.StudentPassword){
                console.log("password is true");
                res.status(200).json({message:"Done"})
            }
            else{
                res.status(401).json({message:"wrong password"})
            }
        }
        else{
            console.log("user doesn't exist");
            res.status(404).json({message:"try to sign up"})
        }
    })
}
export const postSurvey = (req, res) =>{
    const {title, questions} = req.body;
    console.log(req.body);
    SurveyData.findOne({title:title}, (err, sameTilte)=>{
        if(sameTilte){
            res.status(409).json({message:"this survey already made"})
        }
        else {
            const newServey = new SurveyData({title, questions});
            try {
                newServey.save();
                res.status(201).json(newServey);
            } catch (error) {
                res.status(409).json({message:error.message});
            }
        }
    });
}
export const showSurvey = async (req, res) =>{
    try { 
        const survey = await SurveyData.find();
        res.status(200).json(survey);
    } catch (error) {
        res .status(404).json({message:error.message})

    }
}
export const sendReport = async(rew, res) =>{
    const{title, content, anonymously} = req.body;
    console.log(req.body);
    
}

/*
export const createNewChat = asyncHandler(async (req, res) =>{
    const {userId} = req.body;
    if (!userId) { 
        console.log("UserId params not sent with request")
        return res.sendStatus(400)   
    }
    var isChat = await Chat.find({
        $and:[
            {users:{$elemMatch : {$eq : req.user._id}}},
            {users : { elemMatch : {$eq : req.user._id}}},
        ]  
    })
    .populate("users", "-password")
    .populate("latestMessage")
     
    isTChat = await TeacherData.populate(isChat, {
        path : "latestMessage.sender",
        select: "name pic email"

    })
    isSChat = await TeacherData.populate(isChat, {
        path : "latestMessage.sender",
        select: "name pic email"

    })

    if (isTChat.length > 0){
        res.send(isChat[0]);
    }
    if (isSChat.length > 0){
        res.send(isChat[0]);
    }
    
    else{
        var chatData = {
            chatName : "sender",
            users : [req.user._id, userId]
        }
        try {
            const createChat =await Chat.create(userId);
            const FullChat = await Chat.findOne({_id : createedChat})
        } catch (error) {
            res.status(400);
            throw new Error(error.message)
        }
    }
})
*/