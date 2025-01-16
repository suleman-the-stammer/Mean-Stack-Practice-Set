const express = require('express')
const app = express();
const cors = require('cors')
const PORT = 3000;
app.use(express.json())
app.use(cors())


let user = [];
app.get('/user', (req, res) => {

})
app.post('/createUser', (req, res) => {
  try{  let { name, rollno } = req.body;
    let data = {name,rollno}
    user.push(data)
    res.send(user)
}
catch(err){
    res.send(err)

}


})



app.listen(PORT)


