import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true,
        trim: true
    },
    Model: {
        type:String,
        required:true
    },
    price: { 
        type: Number, 
        required: true,
        min: 0
    },
    category: { 
        type: String, 
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    specifications: {
        type: Object,
        required: true
    },
    images: [{
        type: String, // URL or path to the image
        required: true
    }],
    productLinks: {
        type: Object
    },
    // New fields added
    stockQuantity: {
        type: Number,
        default: 0,
        min: 0
        // Indicates the quantity available in stock
    },
    supplier: {
        type: String,
        trim: true
        // Stores the supplier's name or ID
    },
    warrantyPeriod: {
        type: Number,
        default: 0
        // Warranty period in months (e.g., 12 for one year)
    },
    ratings: {
        type: Number,
        min: 0,
        max: 5,
        default: 0
        // Average rating for the product, on a scale of 0 to 5
    },
    reviews: [{
        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        comment: String,
        rating: { type: Number, min: 0, max: 5 }
        // Stores user reviews with a reference to the user, comment, and rating
    }],
    tags: [{
        type: String,
        trim: true
        // Tags for better product categorization (e.g., 'Eco-friendly', 'New Arrival')
    }]
}, { 
    timestamps: true 
});

const Products = mongoose.model('Product', productSchema); 
export default Products;
