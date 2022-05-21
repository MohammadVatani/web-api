
const { getPosts, getSinglePost, getFollowingPosts } = require('./controllers/posts')
const dataparser = require('pionners-dataparser')
const { verifyToken } = require('../../utils/tokenManager')

module.exports.routes = {
  '/api/posts': {
    GET: {
      function: getPosts,
      middlewares: [dataparser, verifyToken]
    }
  },
  '/api/followingPosts':{
    GET:{
      function: getFollowingPosts,
      middlewares:[dataparser, verifyToken]
    }

  },
  '/api/posts/:postId': {
    GET: {
      function: getSinglePost,
      middlewares: [dataparser, verifyToken]
    }
  },
};