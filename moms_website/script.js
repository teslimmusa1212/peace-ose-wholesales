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

    // CRITICAL: FINAL UPDATED BANK DETAILS
    const bankDetails = "*PAYMENT DETAILS:* Please make a bank transfer to confirm your order.%0A*Bank Name:* Zenith Bank%0A*Account Name:* AHMED MUMA S GLOBAL INVESTMENT LTD%0A*Account Number:* 1040990755%0A%0A";

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
                orderDetails += `${quantity} x ${productName}%0A`; // %0A is a newline in WhatsApp URL
            }
        });

        if (!hasOrder) {
            statusMessage.textContent = 'Please select a quantity for at least one product.';
            statusMessage.style.color = 'red';
            return;
        }

        // 3. Assemble the WhatsApp Message (CLEANER FORMAT)
        let message = `*NEW WEBSITE ORDER*%0A%0A`;
        
        // CUSTOMER INFO BLOCK
        message += `*Customer Details:*%0A`;
        message += `Name: ${customerName}%0A`;
        message += `Phone: ${customerPhone}%0A`; 
        message += `Address: ${customerAddress}%0A%0A`; // Double newline to separate blocks

        // ORDER DETAILS BLOCK
        message += `*Order Items:*%0A`;
        message += `${orderDetails}%0A`; // The order details already end with a newline

        // PAYMENT AND FINAL INSTRUCTIONS BLOCK
        message += bankDetails; 
        message += `*Please confirm the total cost and delivery details.*`;

        // Encode the message to ensure all characters are URL safe
        const encodedMessage = encodeURIComponent(message);

        // 4. Create the final WhatsApp URL
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

        // 5. Open WhatsApp
        window.open(whatsappURL, '_blank');

        // 6. Reset Form (Optional but good practice)
        form.reset();
        statusMessage.textContent = 'Order message generated! Check your WhatsApp.';
        statusMessage.style.color = 'green';
        setTimeout(() => {
            statusMessage.textContent = '';
        }, 5000);
    });
});
