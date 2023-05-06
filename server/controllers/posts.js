import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
  try {
    const post = await PostMessage.find();
    res.status(200).json(post);
  } catch (error) {
    res.status(402).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const { title, details, selectedFile, creator } = req.body;
  const newPost = new PostMessage({
    title,
    details,
    selectedFile,
    creator,
  });
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  const { id } = req.params;
  const post = req.body;
  if (!mongoose.Types.ObjectId.isValid(id))
    res.status(404).send("No post with that id");
  const updatePost = await PostMessage.findByIdAndUpdate(id, post, {
    new: true,
  });
  res.json(updatePost);
};

export const deletePost = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    res.status(404).send("No post with that id");
  const data = await PostMessage.findByIdAndRemove(id);
  res.json(data);
};

export const likePost = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    res.status(404).send("No post with that id");
  const post = await PostMessage.findById(id);
  const updatePost = await PostMessage.findByIdAndUpdate(
    id,
    {
      likeCount: post.likeCount + 1,
    },
    { new: true }
  );
  res.json(updatePost);
};
