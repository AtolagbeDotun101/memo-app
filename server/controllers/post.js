const mongoose = require('mongoose');
const postMessage = require('../models/postMessage')
 const getPost = async (req, res) => {
    try {
        const postMessages = await postMessage.find();

        res.status(200).json(postMessages)

    } catch (error) {

        res(404).json({message: error.message})
    }
}
 
const createPost = async (req, res) => {

    const post = req.body;
    const newPost = new postMessage(post)
    try {
        await newPost.save();
        res.status(201).json(newPost)

    } catch (error) {

        res(409).json({message: error.message})
    }
}

const updatePost = async (req, res) => {
    const {id: _id} = req.params;
    const post = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that ID')
    
    const updateDPost = await postMessage.findOnedAndUpdate(_id, { ...post, _id }, { new: true });

    res.json(updateDPost);
}
 

const deletePost = async (req, res) => {
    const { id: _id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) 
    return res.status(404).send('No post with such ID')
    
    await postMessage.findByIdAndDelete(id);
    res.json({ message: 'Deleted succesfully' });

}

const likePost = async (req, res) => {
    const { id: _id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that ID')
    
    const post = await postMessage.findById(id);
    const updateDPost = await postMessage.findOneAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true })
    
    res.json({updateDPost})

}



module.exports = {
    createPost, getPost, deletePost, likePost, updatePost
}
