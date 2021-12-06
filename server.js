const express = require('express')
const app = express()
// bodyParser = require("body-parser");
const port = 3000
const fs = require('fs')
var cors = require('cors')
app.use(cors())

'use strict';
const excelToJson = require('convert-excel-to-json');

// app.use(bodyParser.json());
app.use(express.static(process.cwd()+"/staticfrontend/dist/mbuportalclone"));
const result = excelToJson({
    sourceFile: './Excelfiles/Accelerator.xlsx',
    // range: 'A1:H3',
    
    columnToKey: {
      A: 'slno',
      B: 'subscriptionname',
      C: 'acceleratorip',
      D: 'createdon',
      E: 'Comments'
  }

});
 

console.log(result)




app.get('/', (req, res) => {
    res.sendFile(process.cwd()+"/staticfrontend/dist/mbuportalclone/index.html")
});

app.get('/getjsonvaluesofexcel', (req, res) => {
  res.json(result);
  console.log(result);
});



// app.get("/list_movies", (req, res) => {
//     fs.readFile(__dirname + '/' + 'movies.json', 'utf8', (err, data) => {
//         res.end(data);
//         console.log("1")
//         console.log(result)
//     });
// });

// app.get("/convertexceltojson", (req, res) => { 
      
//       res.end(result);
//       console.log("1")
//       console.log(result)
//   });


app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
  });

  