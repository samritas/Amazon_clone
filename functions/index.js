/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const functions= require("firebase-functions")
const logger = require("firebase-functions/logger");
const express =require("express")
const cors = require("cors")
const stripe=require("stripe")('sk_test_51OOwT7GAsmpVmdeiPQh9KbTMKfVrDveurlVMVqUk9uENKcLIgCuTZjQ3E6Tvq1hrlP15N1DoKPPSpkrzA5vfGKdT00FFjvsoJE')

const app =express()

app.use(cors({origin:true}))

app.use(express.json())

app.get("/",(req,res)=>res.status(200).send("hello world"))
exports.api=functions.https.onRequest(app)

// http://127.0.0.1:5001/clone-3bd16/us-central1/api


