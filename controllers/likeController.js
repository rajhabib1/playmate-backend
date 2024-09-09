const Like = require('../models/Like');
const Post = require('../models/Post');

// Like a post
exports.likePost = async (req, res) => {
  try {
    const postId = req.params.postId;
    const userId = req.body.userId;

    // Check if the like already exists
    const existingLike = await Like.findOne({ postId, userId });
    if (existingLike) {
      return res.status(400).json({ message: 'Post already liked' });
    }

    // Create new like
    const like = new Like({ postId, userId });
    await like.save();

    // Optionally, update the post's like count
    await Post.findByIdAndUpdate(postId, { $inc: { likesCount: 1 } });

    res.status(200).json({ message: 'Post liked' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Unlike a post
exports.unlikePost = async (req, res) => {
  try {
    const postId = req.params.postId;
    const userId = req.body.userId;

    // Remove the like
    const like = await Like.findOneAndDelete({ postId, userId });
    if (!like) {
      return res.status(400).json({ message: 'Like not found' });
    }

    // Optionally, update the post's like count
    await Post.findByIdAndUpdate(postId, { $inc: { likesCount: -1 } });

    res.status(200).json({ message: 'Post unliked' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get likes for a post
exports.getLikes = async (req, res) => {
  try {
    const postId = req.params.postId;
    const likes = await Like.find({ postId }).populate('userId', 'username');
    res.json(likes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
