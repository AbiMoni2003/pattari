import registerModel from "../models/register.user.js"

export const createUser = async (req,res) =>{
   const {userName,Phone,Email,Password} = req.body;

   if(!userName || !Email || !Password || !Phone){
    return res.status(400).json({message:"All the fields are Required.."})
   }

   if(Password.length<8){
    return res.status(400).json({message:"Password must be 8.."})
   }

   try {
    const existingUser = await registerModel.findOne({Email})

    if(existingUser){
        return res.status(400).json({message:"Email already Exists.."})
    }
    const newUser = new registerModel({userName,Phone,Email,Password})
    const user = await newUser.save()
    res.status(201).json(user) 
    
   } catch (error) {
    res.status(500).json({message:error.message})
   }
}

export const listAllUSer = async(req,res) =>{
    try {
        const allUser = await registerModel.find()
        res.status(200).json(allUser)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}