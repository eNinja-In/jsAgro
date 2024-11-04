import React, { useState } from 'react';
// import { useDropzone } from 'react-dropzone';
import { useNavigate } from 'react-router-dom';
import formStyle from './addProduct.module.css';

function AddProductForm({ link }) {
    const navigate = useNavigate();
    const [files, setFiles] = useState([]);
    const [specifications, setSpecifications] = useState([{ key: "", value: "" }]);
    const [product, setProduct] = useState({
        name: "",
        model: "",
        price: "",
        category: "",
        description: "",
        stockQuantity: "",
        supplier: "",
        warrantyPeriod: "",
        ratings: 0,
        tags: "",
    });

    const onDrop = (acceptedFiles) => {
        setFiles([...files, ...acceptedFiles.map(file => Object.assign(file, { preview: URL.createObjectURL(file) }))]);
    };
    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSpecChange = (index, e) => {
        const { name, value } = e.target;
        const newSpecs = [...specifications];
        newSpecs[index][name] = value;
        setSpecifications(newSpecs);
    };

    const addSpecification = () => {
        setSpecifications([...specifications, { key: "", value: "" }]);
    };

    const submitProduct = () => {
        const formData = new FormData();
        formData.append('name', product.name);
        formData.append('model', product.model);
        formData.append('price', product.price);
        formData.append('category', product.category);
        formData.append('description', product.description);
        formData.append('stockQuantity', product.stockQuantity);
        formData.append('supplier', product.supplier);
        formData.append('warrantyPeriod', product.warrantyPeriod);
        formData.append('ratings', product.ratings);
        formData.append('tags', product.tags.split(',').map(tag => tag.trim()));
        formData.append('specifications', JSON.stringify(specifications));

        files.forEach(file => formData.append('images', file));
        const auth = JSON.parse(localStorage.getItem('user'));
        if (auth && auth._id) formData.append('userId', auth._id);

        fetch(`${link}/api/products/add`, { method: 'POST', body: formData })
            .then(response => response.json())
            .then(() => navigate('/'))
            .catch(err => console.error('Error submitting product:', err));
    };

    return (
        <div className={formStyle.main}>
            <h1>Add New Product</h1>
            <form className={formStyle.form}>
                {/* Images Section */}
                <div className={formStyle.section}>
                    <label>Upload Images:</label>
                    <div {...getRootProps({ className: formStyle.dropzone })}>
                        <input {...getInputProps()} />
                        <p>Drag & drop or click to upload images</p>
                    </div>
                    <div className={formStyle.preview}>
                        {files.map((file, idx) => (
                            <img key={idx} src={file.preview} alt="preview" className={formStyle.imagePreview} />
                        ))}
                    </div>
                </div>

                {/* Basic Information */}
                <div className={formStyle.section}>
                    <label>Product Name:</label>
                    <input type="text" name="name" value={product.name} onChange={handleInputChange} placeholder="Enter product name" required />

                    <label>Model:</label>
                    <input type="text" name="model" value={product.model} onChange={handleInputChange} placeholder="Enter model number" required />

                    <label>Price:</label>
                    <input type="number" name="price" value={product.price} onChange={handleInputChange} placeholder="Enter price" required />
                </div>

                {/* Category and Description */}
                <div className={formStyle.section}>
                    <label>Category:</label>
                    <input type="text" name="category" value={product.category} onChange={handleInputChange} placeholder="Enter category" required />

                    <label>Description:</label>
                    <textarea name="description" value={product.description} onChange={handleInputChange} placeholder="Product description" rows="4" required />
                </div>

                {/* Specifications */}
                <div className={formStyle.section}>
                    <label>Specifications:</label>
                    {specifications.map((spec, index) => (
                        <div key={index} className={formStyle.specification}>
                            <input type="text" name="key" value={spec.key} onChange={(e) => handleSpecChange(index, e)} placeholder="Key" />
                            <input type="text" name="value" value={spec.value} onChange={(e) => handleSpecChange(index, e)} placeholder="Value" />
                        </div>
                    ))}
                    <button type="button" onClick={addSpecification} className={formStyle.addSpecButton}>+ Add Specification</button>
                </div>

                {/* Stock, Supplier, Warranty */}
                <div className={formStyle.section}>
                    <label>Stock Quantity:</label>
                    <input type="number" name="stockQuantity" value={product.stockQuantity} onChange={handleInputChange} placeholder="Available stock" />

                    <label>Supplier:</label>
                    <input type="text" name="supplier" value={product.supplier} onChange={handleInputChange} placeholder="Supplier name" />

                    <label>Warranty Period (Months):</label>
                    <input type="number" name="warrantyPeriod" value={product.warrantyPeriod} onChange={handleInputChange} placeholder="Warranty period" />
                </div>

                {/* Ratings and Tags */}
                <div className={formStyle.section}>
                    <label>Ratings (0-5):</label>
                    <input type="number" name="ratings" value={product.ratings} onChange={handleInputChange} min="0" max="5" placeholder="Enter average rating" />

                    <label>Tags (Comma-separated):</label>
                    <input type="text" name="tags" value={product.tags} onChange={handleInputChange} placeholder="e.g., Eco-friendly, New Arrival" />
                </div>

                <button type="button" onClick={submitProduct} className={formStyle.submitButton}>Submit Product</button>
            </form>
        </div>
    );
}

export default AddProductForm;
