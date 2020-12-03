const sgMail = require('@sendgrid/mail')
const senderMail = 'cu.15bcs1109@gmail.com'
sgMail.setApiKey('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')

const welcomeMail = (email,name)=>{
    sgMail.send({
        to:email,
        from:senderMail,
        subject:'Welcome to Task Manager app',
        text:`Dear ${name} welcome to Gay world. You are officially declared as gay now`
    })
}

const cancelMail = (email,name)=>{
    sgMail.send({
        to:email,
        from:senderMail,
        subject:'Feedback',
        text:`Dear ${name}, we apologise about you not liking our product. we request you to reply us the reason of leaving`
    })
}

module.exports = {welcomeMail,cancelMail}