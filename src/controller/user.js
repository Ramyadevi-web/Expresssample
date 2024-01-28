const user = [
    {
        id : 1,
        name : "Ramya",
        email : "ramyadevim7@gmail.com",
        username: "ramyadevi",
        password : "Akshaya23*",
        mobile:"7397617185",
        status : true
    }
]

const getAllUsers = (req,res)=>{
   try {
    res.status(200).send({
        message : "Data Fetched Successfully",
        user
    })
   } catch (error) {
       res.status(500).send({
        message: "Internal Server Error"
       })
   }
}
const findIndex = (array,id)=>{
for(let i = 0; i <array.length;i++){
    if(id == array[i].id)
        return i;
 }
return -1;
}
const getUserById = (req,res)=>{
  
    try {
        let {id} = req.params;
        let index = findIndex(user,id)
        if(index !== -1){
           res.status(200).send({
            message:"User Data Fetched Successfully",
            user:user[index]
           })
          }else{
            res.status(400).send({
                message:'Invalid User Id'})
          }
    } catch (error) {
        res.status(500).send({
            message:"Internal Server Error"
        })
    }
}
const addUser = (req,res)=>{
    console.log(req.body)
    let id = user[user.length-1].id + 1;
    let data = req.body;
    data.id=id;
    user.push(data)

    res.status(201).send({
        message:"User Created Successfully"
    }
    )
}

const editByUserId = (req,res)=>{
 
    try {
        let {id} = req.params;
        let index = findIndex(user,id)
        if(index !== -1){
            req.body.id = Number(id)
            user.splice(index,1,req.body)
           res.status(200).send({
            message:"User Data Edited Successfully",
            user:user[index]
           })
          }else{
            res.status(400).send({
                message:'Invalid User Id'})
          }
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message:"Internal Server Error"
        })
    }
}

const deleteByUserId = (req,res)=>{
  
    try {
        let {id} = req.params;
        let index = findIndex(user,id)
     
        if(index !== -1){
            user.splice(index,1)
           res.status(200).send({
            message:"User Data Deleted Successfully"
           })
          }else{
            res.status(400).send({
                message:'Invalid User Id'})
          }
    } catch (error) {
        res.status(500).send({
            message:"Internal Server Error"
        })
    }
}

export default {
    getAllUsers,
    getUserById,
    addUser,
    editByUserId,
    deleteByUserId
}