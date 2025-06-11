import registerModel from "../models/register.user.js"

export const resetPass = async(req,res) =>{
    const {userName,Email,Password} = req.body
    console.log(req);
    
    try {
        const user = await registerModel.findOne({userName,Email})

        if(!user){
            return res.status(404).json({message:"User Not Found.."})
        }

        if( user.Email !== Email && user.userName !== userName){
            return res.status(400).json({message:"User Name and Email not match..."})
        }

        if(Password.length<8){
            return res.status(400).json({message:"Password must be 8.."})
        }

        user.Password =  Password
        user.updatedAt = new Date();

        const updatedUser = await user.save();
        res.status(200).json({message:"updated..",user:updatedUser})
    } catch (error) {
       res.status(500).json({message:error.message}) 
    }
}