const bcrypt = require('bcrypt-nodejs')
module.exports = app => {
    const { existsOrError, notExistsOrError, equalsOrError } = app.api.validation
    const encryptPassword = password => {
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(password, salt)
    }
    const save_user = async (req, res) => {


        const user = { ...req.body }


        if (req.params.id) user.id = req.params.id
        if (req.user.id) user.gymId = req.user.id
        if (user) user.createAt = new Date().toLocaleString()

        try {
            existsOrError(user.name, 'Nome não foi informado!')
            existsOrError(user.email, 'E-mail não informado!')
            existsOrError(user.password, 'Senha não informada!')
            equalsOrError(user.password, user.confirmPassword, 'Senhas não conferem!')
            existsOrError(user.number, 'Telefone não informado!')
            existsOrError(user.days, 'Mensalidade não informada!')
            existsOrError(user.height, 'Altura não informada!')
            existsOrError(user.weight, 'Peso não informado!')
            existsOrError(user.fat, 'Percentual de gordura não informado!')
            existsOrError(user.pressure, 'Pressão não informada!')
            existsOrError(user.birth, 'Data de nascimento não informada!')
            existsOrError(user.url, 'Imagem não selecionada!')



            const userFromDB = await app.db('users').where({ email: user.email }).first()
            if (!user.id) {
                notExistsOrError(userFromDB, 'Usuário já cadastrado')
            }

        } catch (msg) {
            return res.status(400).send(msg)
        }
        user.password = encryptPassword(user.password)

        delete user.confirmPassword
        if (user.id) {
            delete user.deletedAt
            app.db('users')
                .update(user)
                .where({ id: user.id ,gymId:user.gymId })
                .then(_ => { res.status(204).send('Atualização concluida!') })
                .catch(err => { res.status(500).send(err) })
        } else if (user.gymId) {
            app.db('users')
                .insert(user)
                .then(_ => res.status(204).send('Inserção concluida!'))
                .catch(err => { res.status(500).send(err) })
        } else { res.status(500).send('Erro ao tentar cadastrar aluno!') }

    }
    const get_users = (req, res) => {

        app.db('users')
            .select('id', 'name', 'email', 'facebook', 'number', 'instagram', 'days', 'admin', 'gymId')
            .where({gymId:req.user.id})
            .whereNull('deletedAt')
            .then(users => {
                res.json(users)
            })
            .catch(_ => res.status(400).send('Nenhum usuário cadastrado!'))
    }
    const remove = async (req, res) => {
        try {
            const rowsDelete = await app.db('users').update({ deletedAt: new Date() }).where({ id: req.params.id,gymId:req.user.id })
            existsOrError(rowsDelete, "Usuário não foi encontrado!")
            res.status(204).send()
        } catch (e) {
            res.status(400).send(e)
        }
    }
    const getUser = async (req, res) => {

        app.db('users')
            .select('id', 'name', 'email', 'facebook', 'number', 'instagram', 'days', 'gymId')
            .where({ id: req.params.id ,gymId:req.user.id})
            .whereNull('deletedAt')
            .first()
            .then(user => { res.json(user) })
            .catch(err=>{res.status(500).send(err)})

    }


    return { save_user, get_users, remove, getUser }


}