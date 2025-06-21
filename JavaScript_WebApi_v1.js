//Create a web API using express and JavaScript with routes for products and customers.
const express = require('express');
const app = express();
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
app.use(express.json());
// Sample data
const products = [
    { id: 1, name: 'Laptop', price: 1000 },
    { id: 2, name: 'Smartphone', price: 500 }
];
//create a route for products
app.get('/api/products', (req, res) => {
    res.json(products);
});