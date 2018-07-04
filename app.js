//importing modules
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var app = express();
const http = require('http');
var path = require('path');
const socketIO = require('socket.io')
const route = require('./routes/route');

const server = http.createServer(app)

// This creates our socket using the instance of the server
const io = socketIO(server)

io.on('connection', (socket) => {
    console.log(socket.id);

    socket.on('SEND_MESSAGE', function(data){
        io.emit('RECEIVE_MESSAGE', data);
    })
});
//connect to mongoose db
mongoose.connect('mongodb://shiv:shiv123@ds018168.mlab.com:18168/connectus');
//on connected
mongoose.connection.on('connected',()=>{
console.log('connected to database :)');
});
//on error
mongoose.connection.on('error',(err)=>{
    if(err)
    {
        console.log('error is ' + err);
    }
});
// const MongoClient = require('mongodb').MongoClient;
//
// // replace the uri string with your connection string.
// const uri = "mongodb://shiv:shiv123@ds018168.mlab.com:18168/connectus"
// MongoClient.connect(uri, function(err, client) {
//    if(err) {
//         console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
//    }
//    console.log('Connected...');
//    const collection = client.db("connectus").collection("UserInfo");
//    // perform actions on the collection object
//    client.close();
// });
//port no
const port = 4200;
//adding middleware
app.use(cors());

//body-parser
app.use(bodyparser.json());

//static files

app.use(express.static(path.join(__dirname,'public')));

app.use('/api',route);
app.use(express.static(path.join(__dirname, "client", "build")))

app.get("*", (req, res) => {  
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
    res.sendFile(path.join(__dirname+'/client/build/css/login.css'));;
    res.sendFile(path.join(__dirname+'/client/build/scripts/index.js'));;
});
app.listen(process.env.PORT || port,() => {
console.log('Server started at port :'+port);

});
