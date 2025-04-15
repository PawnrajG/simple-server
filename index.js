import express from "express";
import twilio from "twilio";

const app = express();
app.use(express.json());


const notifySender = new twilio(AccountSID, AuthToken);
app.listen("3000",()=>{
    console.log("Server is running on port:3000");
})

app.get("/pipeline",(req,res)=>{
    res.send(
        "Jenkins CI/CD with Docker!"
    );
})

app.post("/send-sms",async (req,res)=>{
    const {phone,message} = req.body;
    if(!phone || !message){
        res.status(400).send("Phone number and Message is required!");
    }
    try{
        await notifySender.messages.create({
            body : message,
            from: twilioPhoneNo,
            to: phone
        })
        res.status(200).send("SMS sent successfully!");
    }catch(error){
        res.status(500).send("Failed to send SMS!");
    }
})

