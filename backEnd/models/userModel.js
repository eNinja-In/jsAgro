import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    social: {
        type: Object
    },
    position: {
        type: String,
        required: true
    },
    // New fields
    department: {
        type: String,
        trim: true
        // Indicates the department the employee works in (e.g., HR, Development, Marketing)
    },
    hireDate: {
        type: Date
        // Date the employee was hired
    },
    salary: {
        type: Number,
        min: 0
        // Employee's salary, set as a positive number
    },
    isActive: {
        type: Boolean,
        default: true
        // Indicates if the employee is currently active in the organization
    },
    address: {
        street: { type: String, trim: true },
        city: { type: String, trim: true },
        state: { type: String, trim: true },
        postalCode: { type: String, trim: true }
        // Nested object for storing address details
    },
    emergencyContact: {
        name: { type: String, trim: true },
        relation: { type: String, trim: true },
        phone: { type: String, trim: true }
        // Stores the employee's emergency contact information
    }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
export default User;
