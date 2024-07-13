import {v2 as cloudinary} from 'cloudinary'
import albumModel from '../models/albumModel.js'


const addAlbum = async(req,res) => {
    try {
        const name = req.body.name;
        const desc = req.body.desc;
        const bgColor = req.body.bgColor;
        const imageFile = req.file;

        // when upload to cloudinary it will generate a one response and it is stored in the 'audioUpload' variable
        const imageUpload = await cloudinary.uploader.upload(imageFile.path,{resource_type:"image"});
        
        const albumData = {
            name,
            desc,
            bgColor,
            image:imageUpload.secure_url
        }

        const album = albumModel(albumData);
        await album.save();

        res.json({success:true, message:"Album is Added"})


    } catch (error) {
        res.json({success:false});
    }
}

const listAlbum = async(req,res) => {
    try {
        const allAlbum = await albumModel.find({});
        res.json({success:true, album:allAlbum});
        
    } catch (error) {
        res.json({success:false})
    }
}

const removeAlbum = async(req,res) => {
    
}

export {addAlbum,listAlbum,removeAlbum}