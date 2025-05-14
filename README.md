# FakeStore E-Commerce App

## Project Overview

This project is a front-end e-commerce application built with React, React Router, Axios, and React Bootstrap.
The app interacts with the [FakeStoreAPI](https://fakestoreapi.com/) to display, create, update, and delete products.
It demonstrates state management, API handling, component-based architecture, and multi-page navigation.

**Important:** FakeStoreAPI is a mock testing API. POST, PUT, and DELETE requests will respond successfully, but the data will not persist.

You can view the deployed project here:
**[https://react-fakestore-project-app.netlify.app/](https://react-fakestore-project-app.netlify.app/)**

---

## Features

* View a list of products fetched from the FakeStoreAPI
* View individual product details
* Create new products using a form (POST request)
* Update existing products (PUT request)
* Delete products with confirmation modal (DELETE request)
* Navigation between pages using React Router
* Loading indicators and error handling for API interactions
* Responsive, professional UI design with React Bootstrap
* Sticky navbar that remains visible while scrolling
* Gradient background sections for modern styling

---

## Technologies Used

* React
* Vite
* React Router
* Axios
* React Bootstrap
* Bootstrap 5
* FakeStoreAPI (external API)

---

## Installation Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/fakestore-app.git
   ```

2. Navigate into the project folder:

   ```bash
   cd fakestore-app
   ```

3. Install all dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and navigate to:

   ```
   http://localhost:5173
   ```

---

## Folder Structure

```
/src
  /api
    api.js
  /components
    Navbar.jsx
    ProductCard.jsx
  /pages
    Home.jsx
    ProductList.jsx
    ProductDetails.jsx
    AddProduct.jsx
    EditProduct.jsx
  App.jsx
  main.jsx
  global.css
```

---

## API Endpoints Used

* Fetch all products: `GET https://fakestoreapi.com/products`
* Fetch single product: `GET https://fakestoreapi.com/products/:id`
* Create new product: `POST https://fakestoreapi.com/products`
* Update product: `PUT https://fakestoreapi.com/products/:id`
* Delete product: `DELETE https://fakestoreapi.com/products/:id`

---

## Deployment

This project can be deployed using any static hosting service such as:

* Netlify
* Vercel
* GitHub Pages (with Vite config adjustments)

To deploy:

* Build the app:

  ```bash
  npm run build
  ```
* Upload the `dist` folder to your hosting platform.

Deployed Site URL:
**[https://react-fakestore-project-app.netlify.app/](https://react-fakestore-project-app.netlify.app/)**

---

## Important Notes

* The FakeStoreAPI is for testing purposes. All POST, PUT, and DELETE requests will return a success response, but the database will not actually change.
* This project focuses on front-end API interaction and does not involve building a back-end server.

---
