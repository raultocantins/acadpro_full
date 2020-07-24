const { authSecret } = require('../.env')
const jwt = require('jwt-simple')
const bcrypt = require('bcrypt-nodejs')
module.exports = app => {
    const signin = async (req, res) => {
       
        if (!req.body.email || !req.body.password) {
            return res.status(400).send('Informe o usuário e senha!')
        }
        const user = await app.db('gym')
        .where({ email: req.body.email })
        .whereNull('deletedAt')
        .first()
       
        if (!user) return res.status(400).send('Usuário não encontrado!')
        const isMath = bcrypt.compareSync(req.body.password, user.password)
        if (!isMath) return res.status(401).send('E-mail/senha inválidos!')
        const now = Math.floor(Date.now() / 1000)
        const payload = {
            id: user.id,
            name: user.name,
            email: user.email,
            admin:user.admin,
            iat: now,
            exp: now + (60 * 60 * 24)
        }
        res.json({
            ...payload,
            token: jwt.encode(payload, authSecret)

        })

    }
    const validateToken=async(req,res)=>{
        const userData=req.body || null
        try{
            if(userData.token){
                const token=jwt.decode(userData.token,authSecret)
                if(new Date(token.exp*1000)>new Date()){
                    return res.send(true)
                }
            }
        }catch(e){
// Problema com o token
        }
        res.send(false)
    }

    
return{signin,validateToken}


}