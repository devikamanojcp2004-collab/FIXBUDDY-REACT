const express=require("express")
const mongoose=require("mongoose")
const Booking=require("./model/booking")
const cors=require("cors")
const jwt = require("jsonwebtoken");
const PORT=5000

const app=express()


const SECRET = "mysecretkey";

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/fixbuddy")
.then(()=>console.log("mongoose connected"))
.catch(err=>console.log("error found"))

const user = {
  email: "test@gmail.com",
  password: "123456",
};

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === user.email && password === user.password) {
    const token = jwt.sign({ email }, SECRET, { expiresIn: "1days" });

    res.json({
      message: "Login successful",
      token,
    });
  } else {
    res.status(401).json({
      message: "Invalid email or password",
    });
  }
});

app.get('/',(req,res)=>{
    res.send("backend is runing")
})

app.post('/book',async (req,res)=>{
    try{
        const booking=new Booking(req.body)
        await booking.save()
        res.json({message:"saved successfully"})
    }
    catch{
        res.status(500).json(error)
    }
})

app.get("/bookings", async (req, res) => {
  try {
    const bookings = await Booking.find()
    res.json(bookings)
  } catch (error) {
    res.status(500).json({ message: "error fetching bookings" })
  }
})


app.listen(PORT,()=>{
    console.log(`connected to port ${PORT}`);
    
})