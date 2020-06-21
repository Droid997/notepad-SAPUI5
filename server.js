const express = require('express')
const app = express()
const port = 3000
const mysql = require('mysql');
var bodyParser = require('body-parser');

app.use(express.static(__dirname));

// configure the app to use bodyParser()
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "welcome123",
    database: "notepad",
});

con.connect(function (err) {
    if (err) throw err;
    console.log("DB Connection succesful!");
});

app.get('/notes',function(req,res){
    var sql = "SELECT * FROM noteslist;";
    con.query(sql, function (err, result) {
        if (err) res.send(err);
        res.statusCode=200;
        res.send(result);
    });
});

app.get('/noteDetail',function(req,res){
    var sql = "SELECT * FROM notesdetail where note_id="+req.query.Id+";";
    con.query(sql, function (err, result) {
        if (err) res.send(err);
        res.statusCode=200;
        res.send(result[0]);
    });
});

app.post("/newnote", function (req, res) {

    var note_title = req.body.note_title;

})

function insertIntoNotesDetail(note_description) {
    var flag = false;
    var sql = "INSERT INTO notesdetail (note_description,created_on) VALUES (" + note_description + "," + new Date() + ")";
    con.query(sql, function (err, result) {
        if (err) return flag;
        return !flag;
    });
}
app.listen(port, () => console.log(`Example app listening on port ${port}!`))