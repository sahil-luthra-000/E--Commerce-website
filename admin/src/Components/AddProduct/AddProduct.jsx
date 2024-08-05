import React, { useState } from 'react';
import './AddProduct.css';
import upload_area from '../../assets/Admin_Assets/upload_area.svg';

const AddProduct = () => {
  const [image, setImage] = useState(null);
  const [productDetails, setProductDetails] = useState({
    name: "",
    category: "women",
    new_price: "",
    old_price: ""
  });

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file); // Store the file object
    }
  };

  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const Add_Product = async () => {
    let formData = new FormData();
    formData.append('name', productDetails.name);
    formData.append('category', productDetails.category);
    formData.append('new_price', productDetails.new_price);
    formData.append('old_price', productDetails.old_price);
    if (image) {
      formData.append('product', image); // Append the file object
    }

    try {
      // First upload the image
      const imageResponse = await fetch('http://localhost:4000/upload', {
        method: 'POST',
        body: formData,
      });

      const imageData = await imageResponse.json();

      if (imageData.success) {
        // Then add the product with the image URL
        const productResponse = await fetch('http://localhost:4000/addproduct', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: productDetails.name,
            image: imageData.image_url,
            category: productDetails.category,
            new_price: productDetails.new_price,
            old_price: productDetails.old_price,
          }),
        });

        const productData = await productResponse.json();

        if (productData.success) {
          alert("Product Added");
          setProductDetails({
            name: "",
            category: "women",
            new_price: "",
            old_price: ""
          });
          setImage(null);
        } else {
          alert("Failed to add product");
        }
      } else {
        alert("Failed to upload image");
      }
    } catch (error) {
      console.error("Error while adding product:", error);
      alert("An error occurred while adding the product.");
    }
  };

  return (
    <div className='add-product'>
      <div className="addproduct-itemfield">
        <p>Product Title</p>
        <input
          value={productDetails.name}
          onChange={changeHandler}
          type="text"
          name='name'
          placeholder='Type here'
        />
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Price</p>
          <input
            value={productDetails.old_price}
            onChange={changeHandler}
            type="text"
            name='old_price'
            placeholder='Type here'
          />
        </div>
        <div className="addproduct-itemfield">
          <p>Offer Price</p>
          <input
            value={productDetails.new_price}
            onChange={changeHandler}
            type="text"
            name='new_price'
            placeholder='Type here'
          />
        </div>
        <div className="addproduct-itemfield">
          <p>Product Category</p>
          <select
            value={productDetails.category}
            onChange={changeHandler}
            name="category"
            className='add-product-selector'
          >
            <option value="women">Women</option>
            <option value="men">Men</option>
            <option value="kid">Kid</option>
          </select>
        </div>
        <div className="addproduct-itemfield">
          <label htmlFor="file-input">
            <img
              src={image ? URL.createObjectURL(image) : upload_area}
              className='addproduct-thumnail-img'
              alt="Upload Thumbnail"
            />
          </label>
          <input
            type="file"
            name='image'
            id='file-input'
            onChange={handleImageUpload}
            hidden
          />
          <button onClick={Add_Product} className='addproduct-btn'>ADD</button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
