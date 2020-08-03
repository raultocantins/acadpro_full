const app=require('express')()
var consign = require('consign');
const db=require('./config/databases/db')
app.db=db
consign()
  .include('./config/passport.js')
  .then('./config/middle.js')
  .then('./api/validation.js')
  .then('./api/auth.js')
  .then('./api/register/gym.js')
  .then('./api/register/user.js')
  .then('./api/register/coach.js')
  .then('./config/routers.js')
  .into(app);

  app.listen(4000,()=>{
    console.log('backend on.')
})