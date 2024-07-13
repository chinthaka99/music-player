import {v2 as cloudinary} from 'cloudinary'
import songModel from '../models/songModel.js';


const addSong = async (req, res) => {
    try {
        const name = req.body.name;
        const desc = req.body.desc;
        const album = req.body.album;
        const audioFile = req.files.audio[0];
        const imageFile = req.files.image[0];

        // when upload to cloudinary it will generate a one response and it is stored in the 'audioUpload' variable
        const audioUpload = await cloudinary.uploader.upload(audioFile.path, {resource_type:"video"});
        const imageUpload = await cloudinary.uploader.upload(imageFile.path,{resource_type:"image"});

        console.log(name,desc,album,audioUpload,imageUpload);


    } catch (error) {
        
    }
}

const listSong = async (req, res) => {

}

export {addSong, listSong}