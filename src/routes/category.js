var express = require('express');
const categoryController = require('../controllers/categoryController');
var router = express.Router();

const {
  viewCategories,
  viewCategory,
  createCategory,
  deleteCategory,
} = categoryController;

router.route('/').get(viewCategories);
router.route('/addCategory/').post(createCategory);
router
  .route('/:id')
  .get(viewCategory)
  .delete(deleteCategory);

module.exports = router;
