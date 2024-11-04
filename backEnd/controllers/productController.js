import productModel from "../models/productModel.js";
import multer from "multer";

// Add a new product
export const addProductController = async (req, res) => {
  try {

    // fetch data from request.body that send by user ot team to add product
    const {
      name,
      Model,
      price,
      category,
      description,
      specifications,
      images,
      productLinks,
      stockQuantity,
      supplier,
      warrantyPeriod,
      ratings,
      reviews,
      tags,
    } = req.body;

    // Ensure required fields are present
    // check some important data that have to be prent 
    if (
      !name ||
      !price ||
      !category ||
      !description ||
      !specifications ||
      !images
    ) {
      return res.status(400).json({
        success: false,
        message: "All required fields must be filled.",
      });
    }

    // Check if product with the same model already exists
    // check model of product in database
    const existingProduct = await productModel.findOne({ Model });
    if (existingProduct) {
      return res.status(409).json({
        success: false,
        message: "Product with this Model already exists.",
      });
    }


    // Configure Multer Storage
    // store the images that are send by user 
    const storage = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, "uploads/");
      },
      filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, uniqueSuffix + "-" + file.originalname);
      },
    });
    const upload = multer({ storage: storage });
    upload.array('images', 5)

    // Create and save the new product
    const newProduct = await new productModel({
      name,
      Model,
      price,
      category,
      description,
      specifications,
      images,
      productLinks,
      stockQuantity,
      supplier,
      warrantyPeriod,
      ratings,
      reviews,
      tags,
    }).save();

    res.status(201).json({
      success: true,
      message: "Product added successfully",
      product: newProduct,
    });
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error while adding product",
      error: error.message,
    });
  }
};

// Get a list of all products
export const listProductsController = async (req, res) => {
  try {
    // Fetch all products from the database
    const products = await productModel.find();

    // Check if products are found
    if (products.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No products found",
      });
    }

    // Send the list of products
    res.status(200).json({
      success: true,
      message: "Products retrieved successfully",
      products,
    });
  } catch (error) {
    console.error("Error retrieving products:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error while retrieving products",
      error: error.message,
    });
  }
};


// Get a product by ID
export const getProductController = async (req, res) => {
  try {
    // get product id from request
    const product = await productModel.findById(req.params.id);

    // check that id is present or not
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }
    // product found then sent to user
    res.status(200).json({
      success: true,
      message: "Product retrieved successfully",
      product,
    });
  } catch (error) {
    console.error("Error retrieving product:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error while retrieving product",
      error: error.message,
    });
  }
};

// Update a product by ID
export const updateProductController = async (req, res) => {
  try {
    // fetch data that user wana update 
    const {
      name,
      Model,
      price,
      category,
      description,
      specifications,
      images,
      productLinks,
      stockQuantity,
      supplier,
      warrantyPeriod,
      ratings,
      reviews,
      tags,
    } = req.body;

    // Update the product fields by finding id of product
    const updatedProduct = await productModel.findByIdAndUpdate(
      req.params.id,
      {
        name,
        Model,
        price,
        category,
        description,
        specifications,
        images,
        productLinks,
        stockQuantity,
        supplier,
        warrantyPeriod,
        ratings,
        reviews,
        tags,
      },
      { new: true, runValidators: true } // Return updated document and validate fields
    );

    // if product not updated then it mens it not present in database then show error
    if (!updatedProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }
    // if product add then no error and send updated product details
    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      product: updatedProduct,
    });
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error while updating product",
      error: error.message,
    });
  }
};

// Delete a product by ID
export const deleteProductController = async (req, res) => {
  try {
    // fetch id to delete the product
    const deletedProduct = await productModel.findByIdAndDelete(req.params.id);

    // if product not found then sent error
    if (!deletedProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }
    // otherwise delete the product and show successfully deleted
    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error while deleting product",
      error: error.message,
    });
  }
};

// Get all products with optional filters for category, price range, and tags
export const getAllProductsController = async (req, res) => {
  try {
    // fetch the critaria on which the user wanna see products
    const { category, minPrice, maxPrice, tags } = req.query;
    const filters = {};

    // Add filters based on query parameters
    if (category) filters.category = category;
    if (minPrice || maxPrice) {
      filters.price = {};
      if (minPrice) filters.price.$gte = minPrice;
      if (maxPrice) filters.price.$lte = maxPrice;
    }
    if (tags) filters.tags = { $in: tags.split(",") };

    const products = await productModel.find(filters);

    res.status(200).json({
      success: true,
      message: "Products retrieved successfully",
      products,
    });
  } catch (error) {
    console.error("Error retrieving products:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error while retrieving products",
      error: error.message,
    });
  }
};
