const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

const PORT = 3000;
const ordersFilePath = 'orders.txt';

app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Route for the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Route to handle order submissions
app.post('/api/order', (req, res) => {
    const { customerAddress, orderDetails } = req.body;

    // Create a Google Maps URL from the customer's address
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(customerAddress)}`;

    // Format the order details with the clickable address link
    const orderString = `Customer Address: ${customerAddress}\nGoogle Maps Link: ${mapsUrl}\nOrder Details:\n${orderDetails.join('\n')}\n\n`;

    // Append the order to the orders.txt file
    fs.appendFile(ordersFilePath, orderString, (err) => {
        if (err) {
            console.error('Failed to save order:', err);
            return res.status(500).json({ success: false, message: 'Failed to process order.' });
        }
        res.json({ success: true, message: 'Order submitted successfully!' });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
    console.log('Orders will be saved to orders.txt');
});