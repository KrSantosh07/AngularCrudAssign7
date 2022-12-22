const dataModel=require('../model/model');

async function addProduct(req,res){
    const data=new dataModel({
        name:req.body.name,
        price:req.body.price,
        quantity:req.body.quantity,
        category:req.body.category,
        description:req.body.description,
        img:req.body.img
    })
    try{
        const dataSave=await data.save();
        res.status(200).json({"message":"Data Added"})
    }
    catch(error){
        res.status(400).json({"message":error.message})
    }
}

async function getProduct(req,res){
    try{
        const data=await dataModel.find();
        res.status(200).json(data)
    }
    catch(error){
        res.status(400).json({"message":error.message})
    }
}

async function getProductById(req,res){
    try{
        const data=await dataModel.findOne({_id:req.params.id});
        res.status(200).json(data)
    }
    catch(error){
        res.status(400).json({"message":error.message})
    }
}

async function deleteProduct(req,res){
    try{
        const id=req.params.id;
        const data=await dataModel.findByIdAndDelete(id);
        res.status(200).json({"message":"Data Deleted"})
    }
    catch(error){
        res.status(400).json({"message":error.message})
    }
}

async function updateProduct(req,res){
    try{
        const id=req.params.id;
        const updateData=req.body;
        const options={new:true};
        const data=await dataModel.findByIdAndUpdate(id,updateData,options);
        res.status(200).json({"message":"Data Updated"})
    }
    catch(error){
        res.status(400).json({"message":error.message})
    }
}
module.exports={addProduct,getProduct,getProductById,deleteProduct,updateProduct}