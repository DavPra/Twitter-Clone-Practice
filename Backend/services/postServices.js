const { Post } = require('../models');



    async function createPost(post) {
        const newPost = await Post.create(post);
        return newPost;
    }

    async function getPosts() {
        const posts = await Post.findAll();
        return posts;
    }

    async function getPost(id) {
        const post = await Post.findOne({
            where: {
                id
            }
        });
        return post;
    }

    async function deletePost(id) {
        const post = await Post.destroy({
            where: {
                id
            }
        });
        return post;
    }

    const postServices = {
        createPost,
        getPosts,
        getPost,
        updatePost,
        deletePost
    }

module.exports = postServices;