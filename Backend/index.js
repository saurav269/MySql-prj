import express from 'express'
import mysql from 'mysql2'
import cors from 'cors'

const app = express()

//CREATE CONNECTION WITH DATABASE
const db = mysql.createConnection({
    host : "localhost",
    user:"root",
    password : "sauravmallik",
    database:"test"
})

app.use(express.json())
app.use(cors())

//ROUTE
app.get("/", (req,res) =>{ 
    res.send("Hello this is my backend")
})

app.get("/books", (req,res) => {
    const q = "SELECT * FROM books"
    try{
        db.query(q,(err,data)=>{
            if(err){
               return res.send(err)
            }else{
                return res.send(data)
            }
        })

    }catch(err){
        console.log(err)
    }
})

//create books
app.post('/books/add', (req,res)=>{
    const q = "INSERT INTO books (`title`,`desc`,`cover`) VALUES(?)"
    const values = [
        req.body.title,
        req.body.desc,
        req.body.cover
    ];
    try{
        db.query(q,[values], (err,data)=>{
            if(err){
                return res.send(err)
            }else{
                return res.send("book has been added successfully")
            }
        })

    }catch(err){
        console.log(err)
    }
})


app.listen(8800, () => {
    console.log("Connected to backend")
})