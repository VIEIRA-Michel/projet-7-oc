const express = require('express');
const router = express.Router();
const publicationsController = require('../controllers/publications');
// const checkInput = require('../middlewares/checkInput');
const sanitize = require('../middlewares/sanitizer');


router.post('/', sanitize, publicationsController.createPublication);
router.put('/:id', sanitize, publicationsController.updatePublication);
router.delete('/:id', publicationsController.deletePublication);
router.post('/:id', publicationsController.likePublication);
router.get('/', publicationsController.getAllPublications);
router.get('/:id', publicationsController.getOnePublication);


module.exports = router;