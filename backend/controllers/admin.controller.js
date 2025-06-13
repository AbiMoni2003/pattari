import adminModel from "../models/admin.model.js"


export const adminLogin =async(req,res)=>{
    const {Name,Email,Password} = req.body
    try {

        if(!Name || !Email || !Password){
            return res.status(400).json({message:"Fill the Fields"})
        }

        const user = await adminModel.findOne({Email})

        if(!user){
            return res.status(404).json({message:"Register Required.."})
            
        }

        // const secretKey = "Abishek2003";
        
        // const decryptedPassword = CryptoJS.AES.decrypt(user.Password,secretKey).toString(CryptoJS.enc.Utf8)

        if(user.Password !== Password){
            return res.status(401).json({message:"Invalid Password"})
        }
        res.status(200).json({message:"Login Successfull"})

    } catch (error) {
        res.status(500).json({message:error.message})
    }
} 
