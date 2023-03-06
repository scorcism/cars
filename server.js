const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const dbConnection = require('./db')
const User = require("./models/userModel")
const Booking = require("./models/bookingModel")
const cors = require('cors')
app.use(express.json())
app.use(cors())

app.use('/api/cars/' , require('./routes/carsRoute'))
app.use('/api/users/' , require('./routes/usersRoute'))
app.use('/api/bookings/' , require('./routes/bookingsRoute'))

app.get("/getallusers", async(req, res) => {
    try {

        let newuser  = await User.find()
        res.send({newuser})
    } catch (error) {
      return res.status(400).json(error);
    }
});

app.get("/getallbookings", async(req, res) => {
    try {

        let newuser  = await Booking.find()
        res.send({newuser})
    } catch (error) {
      return res.status(400).json(error);
    }
});

const path = require('path')

if(process.env.NODE_ENV==='production')
{

    app.use('/' , express.static('client/build'))

    app.get('*' , (req , res)=>{

          res.sendFile(path.resolve(__dirname, 'client/build/index.html'));

    })

}

app.get('/', (req, res) => res.send('Hello World!'))


 


app.listen(port, () => console.log(`Node JS Server Started in Port ${port}`))