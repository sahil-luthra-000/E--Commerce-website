
# Verve Bridge - E-Commerce Website

Welcome to the **Verve Bridge** e-commerce website project! This application is built using the MERN stack (MongoDB, Express.js, React, Node.js) and aims to provide a seamless shopping experience for users. 

## Features

- **Product Catalog**: Browse through a variety of products with filtering and sorting options.
- **User Authentication**: Secure login and registration features.
- **Shopping Cart**: Add products to the cart and manage your orders.
- **Checkout Process**: Easy and secure checkout with payment integration.
- **Admin Dashboard**: Manage products, users, and orders from the admin interface.

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)


## Installation

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Clone the Repository

```bash
git clone https://github.com/sahil-luthra-000/Verve-Bridge-E--Commerce-website.git
cd Verve-Bridge-E--Commerce-website
```

### Install Dependencies

```bash
# For backend
cd backend
npm install

# For frontend
cd ../frontend
npm install
```

### Environment Variables

Create a `.env` file in the `backend` directory and add the following environment variables:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PAYMENT_KEY=your_payment_provider_key
```

### Run the Application

```bash
# Start backend server
cd backend
npm start

# Start frontend development server
cd ../frontend
npm start
```

The application should now be running on [http://localhost:3000](http://localhost:3000) for the frontend and [http://localhost:5000](http://localhost:5000) for the backend.

## Usage

1. **Navigate to the frontend application**: [http://localhost:3000](http://localhost:3000)
2. **Sign up or log in** to access the full features.
3. **Browse products**, add them to your cart, and proceed through the checkout process.

## Contributing

Contributions are welcome! If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

