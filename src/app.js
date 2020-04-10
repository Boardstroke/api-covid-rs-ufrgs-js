const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const EventEmitter = require('events');

const { sequelize } = require("./models");
const config = require("./config/config");

const myEmitter = new EventEmitter();

const app = express();

let runPython = function(){
  return new Promise((resolve, reject)=>{
    const {spawn} = require('child_process');
    const script = spawn('python3', ['./scripts/get_numero_infectados.py', 'http://localhost:8081/municipios/add-infectados']);

    script.stdout.on('data', (data) =>{
      resolve(data.toString());
    });

    script.stderr.on('err', (err) =>{
      reject(err.toString());
    });
  });
};

app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.json());

require("./routes")(app);

function isTime(){
   if(new Date().getHours() == 23){
     myEmitter.emit('event');
   }
}
sequelize.sync().then(() => {
  app.listen(config.port);

  myEmitter.on('event', function(args) {
    runPython()
      .then((data)=>{
        console.log(data);
      })
      .catch((err)=>{
        console.log(err);
      });
  });

  setInterval(isTime, 1000*60*60);
});
