const router = require("express").Router();
const {
    createProduct,
    getProducts,
    getProductById,
    removeProduct,
} = require('./controller');
const multerInstance = require('../../Utils/libs/multer');

router.post('/', multerInstance.upload.single('image'), createProduct);
router.get("/", getProducts);
router.get("/:id", getProductById);
router.delete("/:id", removeProduct);
module.exports.productRouter = router;