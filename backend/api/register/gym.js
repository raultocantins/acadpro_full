const bcrypt = require('bcrypt-nodejs')
module.exports = app => {
    const { existsOrError, notExistsOrError, equalsOrError } = app.api.validation
    const encryptPassword = password => {
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(password, salt)
    }
    const save = async (req, res) => {
        const user = { ...req.body }

        if (req.params.id) user.id = req.params.id
        if (user) user.createAt = new Date().toLocaleString()
        try {
            existsOrError(user.name, 'Nome não foi informado!')
            existsOrError(user.email, 'E-mail não informado!')
            existsOrError(user.password, 'Senha não informada!')
            equalsOrError(user.password, user.confirmPassword, 'Senhas não conferem!')
            existsOrError(user.number, 'Telefone não informado!')
            existsOrError(user.cep, 'Cep não informado!')
            existsOrError(user.kit, "Informe o tipo de Pacote!")
            existsOrError(user.facebook, "Informe o facebook!")
            existsOrError(user.url, 'Selecione uma imagem!')
            existsOrError(user.instagram,'Insira o instagram!')

            const userFromDB = await app.db('gym').where({ email: user.email }).first()
            if (!user.id) {
                notExistsOrError(userFromDB, 'Usuário já cadastrado')
            }

        } catch (msg) {
            return res.status(400).send(msg)
        }

        user.password = encryptPassword(user.password)
        delete user.confirmPassword

        if (user.id ) {
            app.db('gym')
            .update(user)
            .where({ id: user.id ,gymId:req.user.id})
            .then(_ => { res.status(204).send('Atualização concluida!') })
            .catch(err => { res.status(500).send(err) })
        } else {            
            app.db('gym')
            .insert(user)
            .then(_ => res.status(204).send('Inserção concluida!'))
            .catch(err => { res.status(500).send(err) })
        } 
       

    }
    const remove = async (req, res) => {

        try {
            const rowsDelete = await app.db('gym').update({ deletedAt: new Date() }).where({ id: req.user.id })
            existsOrError(rowsDelete, "Usuário não foi encontrado!")
            res.status(204).send()
        } catch (e) {
            res.status(400).send(e)
        }
    }

    return { save, remove }


}