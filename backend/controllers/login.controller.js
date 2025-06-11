import CryptoJS from "crypto-js"
import registerModel from "../models/register.user.js"

export const loginUser = async(req,res) =>{
    const {Email,Password} = req.body
    try {

        if(!Email || !Password){
            return res.status(400).json({message:"Fill the Fields"})
        }

        const user = await registerModel.findOne({Email})

        if(!user){
            return res.status(404).json({message:"Register Required.."})
            
        }
        
        const secretKey = "Abishek2003";
        const decryptedPassword = CryptoJS.AES.decrypt(user.Password,secretKey).toString()

        if(decryptedPassword !== Password){
            return res.status(401).json({message:"Invalid Password"})
        }
        res.status(200).json({message:"Login Successfull",
            userName : user.userName,
            userId : user._id,
            Email : user.Email
        })

    } catch (error) {
        res.status(500).json({message:error.message})
    }
}