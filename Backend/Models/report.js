import mongoose from 'mongoose';

const reportSchema = mongoose.Schema({
    Title : String,
    content : String,
    anonymously : true,
})
export const ReportData = mongoose.model("ReportData", reportSchema)