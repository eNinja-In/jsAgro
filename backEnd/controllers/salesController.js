import Sales from '../models/salesModel.js'; // Import the Sales model

// Add a new sale
export const addSalesController = async (req, res) => {
    try {
        const { product, quantity, totalAmount, buyer, discountApplied, paymentMethod, status } = req.body;

        // Validate required fields
        if (!product || !quantity || !totalAmount) {
            return res.status(400).json({
                success: false,
                message: "Product, quantity, and total amount are required."
            });
        }

        // Create and save the new sale
        const newSale = await new Sales({
            product,
            quantity,
            totalAmount,
            buyer,
            discountApplied,
            paymentMethod,
            status
        }).save();

        res.status(201).json({
            success: true,
            message: "Sale added successfully.",
            sale: newSale
        });
    } catch (error) {
        console.error("Error adding sale:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error while adding sale.",
            error: error.message
        });
    }
};

// Get sales by parameters such as date range and most sold product
export const getSalesController = async (req, res) => {
    try {
        const { startDate, endDate, productId } = req.query;
        const filters = {};

        // Add date range filter
        if (startDate || endDate) {
            filters.saleDate = {};
            if (startDate) filters.saleDate.$gte = new Date(startDate);
            if (endDate) filters.saleDate.$lte = new Date(endDate);
        }

        // Add product filter if provided
        if (productId) {
            filters.product = productId;
        }

        const sales = await Sales.find(filters).populate('product');

        res.status(200).json({
            success: true,
            message: "Sales retrieved successfully.",
            sales
        });
    } catch (error) {
        console.error("Error retrieving sales:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error while retrieving sales.",
            error: error.message
        });
    }
};

// Get most sold products
export const getMostSoldProductsController = async (req, res) => {
    try {
        const salesData = await Sales.aggregate([
            {
                $group: {
                    _id: '$product',
                    totalQuantity: { $sum: '$quantity' },
                    totalSales: { $sum: '$totalAmount' }
                }
            },
            {
                $lookup: {
                    from: 'products', // Assuming 'products' is the name of your product collection
                    localField: '_id',
                    foreignField: '_id',
                    as: 'productDetails'
                }
            },
            {
                $unwind: '$productDetails'
            },
            {
                $project: {
                    productName: '$productDetails.name',
                    totalQuantity: 1,
                    totalSales: 1
                }
            },
            {
                $sort: { totalQuantity: -1 }
            }
        ]).limit(10); // Get top 10 most sold products

        res.status(200).json({
            success: true,
            message: "Most sold products retrieved successfully.",
            mostSoldProducts: salesData
        });
    } catch (error) {
        console.error("Error retrieving most sold products:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error while retrieving most sold products.",
            error: error.message
        });
    }
};

// Get total sales in a given date range
export const getTotalSalesByDateRangeController = async (req, res) => {
    try {
        const { startDate, endDate } = req.query;
        const filters = {};

        // Add date range filter
        if (startDate || endDate) {
            filters.saleDate = {};
            if (startDate) filters.saleDate.$gte = new Date(startDate);
            if (endDate) filters.saleDate.$lte = new Date(endDate);
        }

        const totalSales = await Sales.aggregate([
            { $match: filters },
            {
                $group: {
                    _id: null,
                    totalSalesAmount: { $sum: '$totalAmount' },
                    totalQuantitySold: { $sum: '$quantity' }
                }
            }
        ]);

        res.status(200).json({
            success: true,
            message: "Total sales in the specified date range retrieved successfully.",
            totalSales: totalSales[0] || { totalSalesAmount: 0, totalQuantitySold: 0 }
        });
    } catch (error) {
        console.error("Error retrieving total sales by date range:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error while retrieving total sales.",
            error: error.message
        });
    }
};

