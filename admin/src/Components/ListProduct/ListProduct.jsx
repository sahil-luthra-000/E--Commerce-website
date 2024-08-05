import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import './ListProduct.css';
import cross_icon from '../../assets/Admin_Assets/cross_icon.png';

const ListProduct = () => {
    const [allproducts, setAllProducts] = useState([]);

    const fetchInfo = async () => {
        try {
            const response = await fetch('http://localhost:4000/allproducts');
            const data = await response.json();
            console.log(data); // Log the data to check the API response
            setAllProducts(data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        fetchInfo();
    }, []);

    return (
        <div className='list_product'>
            <h1>All Products List</h1>
            <div className="listproduct-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Old Price</p>
                <p>New Price</p>
                <p>Category</p>
                <p>Remove</p>
            </div>
            <div className="listproduct-allproducts">
                <hr />
                {allproducts.length > 0 ? (
                    allproducts.map((product, index) => (
                        <div key={index} className="listproduct-format-main listproduct-format">
                            <img src={product.image} alt={product.name} className="listproduct-product-icon" />
                            <p>{product.name}</p>
                            <p>${product.old_price}</p>
                            <p>${product.new_price}</p>
                            <p>{product.category}</p>
                            <img src={cross_icon} alt="Remove" className="listproduct-remove-icon" />
                        </div>
                    ))
                ) : (
                    <p>No products available</p> // Show message if no products
                )}
            </div>
        </div>
    );
};

export default ListProduct;
