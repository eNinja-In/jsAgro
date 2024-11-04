import mongoose from 'mongoose';

const salesSchema = new mongoose.Schema({
    product: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Product', 
        required: true
        // References the sold product from the Product schema
    },
    quantity: { 
        type: Number, 
        required: true,
        min: 1
        // Number of units sold in this transaction
    },
    saleDate: { 
        type: Date, 
        default: Date.now
        // Date when the sale occurred
    },
    totalAmount: { 
        type: Number, 
        required: true,
        min: 0
        // Total amount of the sale, after any discounts
    },
    buyer: {
        type: String,
        trim: true
        // Buyer's name or ID for tracking customer purchases
    },
    discountApplied: {
        type: Number,
        default: 0,
        min: 0,
        max: 100
        // Discount percentage applied to this sale, if any
    },
    paymentMethod: {
        type: String,
        enum: ['Cash', 'Credit Card', 'Debit Card', 'Online Payment', 'Other'],
        default: 'Cash'
        // Method of payment used in the transaction
    },
    status: {
        type: String,
        enum: ['Completed', 'Pending', 'Refunded'],
        default: 'Completed'
        // Status of the sale transaction
    }
}, { 
    timestamps: true 
});

const Sales = mongoose.model('Sales', salesSchema);
export default Sales;
