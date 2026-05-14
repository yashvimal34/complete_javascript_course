function notifyUser(notification){
    notification()
}

const emailSent = () => console.log("Email Sent")
const smsSent = () => console.log("SMS Sent")

notifyUser(emailSent)
notifyUser(smsSent)

/* ------------------------- 
This is a basic callback fucntion example, basically what we have done in this is that we have passed function as arguments to other function 
-------------------------- */