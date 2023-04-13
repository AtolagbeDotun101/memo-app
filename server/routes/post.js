const express = require('express');
const router =express.Router();
// app = express();

router.get('/', (getPost) )
  
router.delete('/:id', (deletePost))

router.put('/:id', (updatePost))

router.post('/', (createPost))

router.put('/:id/likePost', (likePost))

module.exports = router

// export default router;