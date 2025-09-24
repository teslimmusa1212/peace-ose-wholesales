document.addEventListener('DOMContentLoaded', () => {
    // --- Theme Toggle Functionality ---
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('light-mode')) {
            body.classList.replace('light-mode', 'dark-mode');
            themeToggle.textContent = '☀️ Light Mode';
        } else {
            body.classList.replace('dark-mode', 'light-mode');
            themeToggle.textContent = '🌙 Dark Mode';
        }
    });

    // --- WhatsApp Order Submission Logic ---
    const form = document.querySelector('.order-submit-form');
    const statusMessage = document.getElementById('status-message');
    
    // CRITICAL: YOUR WHATSAPP NUMBER
    const whatsappNumber = '2348078586366'; 

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // 1. Get Customer Details
        const customerName = document.getElementById('customer-name').value.trim();
        const customerPhone = document.getElementById('customer-phone').value.trim(); 
        const customerAddress = document.getElementById('customer-address').value.trim();

        if (!customerName || !customerPhone || !customerAddress) {
            statusMessage.textContent = 'Please fill in your Name, Phone Number, and Address to submit the order.';
            statusMessage.style.color = 'red';
            return;
        }

        // 2. Get Ordered Products
        let orderDetails = '';
        const productInputs = document.querySelectorAll('.order-controls input[type="number"]');

        let hasOrder = false;
        productInputs.forEach(input => {
            const quantity = parseInt(input.value);
            if (quantity > 0) {
                hasOrder = true;
                const productName = input.closest('.product-item-card').getAttribute('data-product-name');
                orderDetails += `${quantity} x ${productName}\n`; 
            }
        });

        if (!hasOrder) {
            statusMessage.textContent = 'Please select a quantity for at least one product.';
            statusMessage.style.color = 'red';
            return;
        }

        // 3. Assemble the WhatsApp Message (CLEAN MESSAGE SENT TO SELLER)
        let message = `*NEW WEBSITE ORDER*\n\n`;
        
        // CUSTOMER INFO BLOCK
        message += `*Customer Details:*\n`;
        message += `Name: ${customerName}\n`;
        message += `Phone: ${customerPhone}\n`; 
        message += `Address: ${customerAddress}\n\n`;

        // ORDER DETAILS BLOCK
        message += `*Order Items:*\n`;
        message += `${orderDetails}\n`; 

        // FINAL INSTRUCTIONS TO SELLER
        message += `*Awaiting your price confirmation and delivery instructions.*`;

        // Encode the ENTIRE message
        const encodedMessage = encodeURIComponent(message);

        // 4. Create the final WhatsApp URL
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

        // 5. Open WhatsApp
        window.open(whatsappURL, '_blank');

        // 6. Provide Payment Details Separately (VISIBLE ONLY TO CUSTOMER)
        const paymentDetails = `\n\n*Payment Details for Customer:*\nBank Name: Zenith Bank\nAccount Name: AHMED MUMA S GLOBAL INVESTMENT LTD\nAccount Number: 1040990755\n\n*Please confirm total cost with the seller before making any transfer.*`;
        
        // Display payment details to the customer on the website after the message is sent
        statusMessage.textContent = 'Order message generated! Check your WhatsApp to send the order.' + paymentDetails;
        statusMessage.style.color = 'green';
        setTimeout(() => {
            statusMessage.textContent = '';
        }, 15000); // Keep the success message visible longer for payment details

        // Reset Form
        form.reset();
    });
});
