import sendMail from "../config/nodemailer.js"


const sendMailToRegister = (userMail, token) => {

    return sendMail(
        userMail,
        "Bienvenido a el Sistema de Proyectos de Integracion Curricular de ESFOT",
        `
            <h1>Confirma tu cuenta</h1>
            <p>Hola, haz clic en el siguiente enlace para confirmar tu cuenta:</p>
            <a href="${process.env.URL_BACKEND}confirmar/${token}">
            Confirmar cuenta
            </a>
            <hr>
            <footer>Te damos la bienvenida.</footer>
        `
    )
}

const sendMailToRecoveryPassword=(userMail,token)=>{

    return sendMail(
        userMail,
        "Recuperar Contraseña",
        `
            <h1>ESFOT</h1>
            <p>Has solicitado restablecer tu contraseña.</p>
            <a href="${process.env.URL_BACKEND}recuperarpassword/${token}">
            Clic para restablecer tu contraseña
            </a>
            <hr>
            <footer>Te damos la bienvenida.</footer>
        `
    )
}

export {
    sendMailToRegister,
    sendMailToRecoveryPassword
}