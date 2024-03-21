import express from 'express'
import pg from 'pg'
import cors from 'cors'


const app = express()
app.use(cors());
app.use(express.json())

const db = new pg.Client({
    user:"postgres",
    host:"localhost",
    database:"abcdpvtltd",
     password:"A1b2c3d4e5@",
     port:5432,
});
db.connect();

app.get('/', function (req, res) {
  res.send('Hello World')
})


app.post('/addEmployee', async function (req, res) {
   
    let {pnumber,pname,buyingprice,bought,amountout,sellingprice,sold,stock,unitprofit,profit} = req.body;
    amountout = buyingprice *bought;
    unitprofit = sellingprice -buyingprice ;
    stock = bought -sold;
    profit = amountout -unitprofit;
    try {
     const result =await db.query("INSERT INTO turnover (pnumber,pname,buyingprice,bought,amountout,sellingprice,sold,stock,unitprofit,profit) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)", [pnumber,pname,buyingprice,bought,amountout,sellingprice,sold,stock,unitprofit,profit]);
     //console.log(result.rows)
     res.json("success")
 } catch (error) {
  console.log(error)   
 }
   })

   app.get('/employeeData', async function (req, res) {
   
    try {
     const result =await db.query("SELECT * FROM turnover");
     //console.log(result.rows)
     res.json(result.rows)
 } catch (error) {
  console.log(error)   
 }
   })

   app.post('/delete', async function (req, res) {

    console.log(req.body)
   
    try {
     const result =await db.query("DELETE FROM turnover WHERE id = $1",[req.body.id])
     //console.log(result.rows)
     res.json("success")

 } catch (error) {
  console.log(error)   
 }
   })

   app.post('/getUpdateData', async function (req, res) {
 
    console.log(req.body)
   
    try {
     const result =await db.query("SELECT * FROM turnover WHERE id=$1 ",[req.body.id])
    //  console.log(result.rows[0])
     res.json(result.rows[0])
     
 } catch (error) {
  console.log(error)   
 }
   })


   app.post('/Update', async function (req, res) {
 
    console.log(req.body)
   let {id,pnumber,pname,buyingprice,bought,amountout,sellingprice,sold,stock,unitprofit,profit} = req.body
   amountout = buyingprice *bought;
    unitprofit = sellingprice *sold;
    stock = bought -sold;
    profit = amountout -unitprofit;
    try {
     const result =await db.query("UPDATE turnover SET pnumber=$2,pname=$3,buyingprice=$4,bought=$5,amountout=$6,sellingprice=$7,sold=$8,stock=$9,unitprofit=$10,profit=$11  WHERE id = $1",
     [id,pnumber,pname,buyingprice,bought,amountout,sellingprice,sold,stock,unitprofit,profit])
    //  console.log(result.rows[0])
    //  console.log(result.rows)
     res.json("success")
     
 } catch (error) {
  console.log(error)   
 }
   })

   app.get('/turnOver', async function (req, res) {

    try {
     const result = await db.query("SELECT * FROM turnover")
    //  console.log(result.rows[0])
     res.json(result.rows)
     
 } catch (error) {
  console.log(error)   
 }
   })
   

app.listen(3001)
