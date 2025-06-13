import express from "express"
import connectDB from "./db/user.db.js";
import registerRouter from "./routes/register.routes.js"
import adminRouter from "./routes/admin.routes.js";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));


connectDB();

const PORT = 8000;
app.use(cors({
    origin:"https://pattarivilai.netlify.app",
    methods:["GET","POST","PUT","DELETE"]
}))
app.use("/user",registerRouter)

app.use("/admin",adminRouter)

app.listen(PORT,()=>{
    console.log(`server is listening in http://localhost:${PORT}`);
    
})