const express = require('express');
const router = express.Router();
const Product = require('../model/product');
const mongoose = require('mongoose');

router.get('/', (req,res,next)=>{
    Product.find()
    .exec()
    .then(result=>{
        res.status(200).json({
            Product:result
        })
    })
})

router.get('/:id', (req,res,next)=>{
    console.log(req.params.id);

    Product.findById(_id)
    .exec()
    .then(result=>{
        res.status(200).json({
            product:result
        });
    })
})

router.post('/', (req,res,next)=>{
    console.log(req.body);
    product = new Product({
    _id:new mongoose.Types.ObjectId,
    code:req.body.code,
    title:req.body.title,
    description:req.body.description,
    mrp:req.body.mrp,
    sp:req.body.sp,
    discountPercent:req.body.discountPercent,
    imagePath:req.body.imagePath
    })

    product.save()
    .then(result=>{
        console.log(result);
        res.status(200).json({
            new_product:result
        });
    })

    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
})


//delete request
router.delete('/:id',(req,res,next)=>{
    Product.remove({_id:req.params.id})
    .then(result=>{
        res.status(200).json({
            message:'product deleted',
            result:result
        })
    })
    .catch(err=>{
        res.status(500).json({
            error:err
        })
    })
})


module.exports = router;