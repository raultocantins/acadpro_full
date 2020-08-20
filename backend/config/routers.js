const admin=require('./admin')
module.exports=app=>{
   //registro de academia
   app.route('/signup')
      .post(app.api.register.gym.save)
   //Signin
   app.route('/signin')
      .post(app.api.auth.signin)
   //Delete de gym
   app.route('/delete/gym')
      .all(app.config.passport.authenticate())
      .delete(app.api.register.gym.remove)   
   //Validate token
   app.route('/validateToken')
      .post(app.api.auth.validateToken)
     
   //alteração de academia
   app.route('/gym/:id')
      .all(app.config.passport.authenticate())
      .put(admin(app.api.register.gym.save))

   // registro de alunos
  app.route('/users')
     .all(app.config.passport.authenticate())
     .post(admin(app.api.register.user.save_user))
     .get(admin(app.api.register.user.get_users))
  // Delete de user
  app.route('/users/:id') 
     .all(app.config.passport.authenticate())
     .get(admin(app.api.register.user.getUser))
     .put(admin(app.api.register.user.save_user))    
     .delete(admin(app.api.register.user.remove))
  //Registro de coachs
  app.route('/coachs')
     .all(app.config.passport.authenticate())
     .post(admin(app.api.register.coach.save_coach))
     .get(admin(app.api.register.coach.get_coachs))
     
  // Buscar coach por id
  app.route('/coachs/:id')
     .all(app.config.passport.authenticate())
     .get(admin(app.api.register.coach.getCoach))
     .delete(admin(app.api.register.coach.remove))
   
}