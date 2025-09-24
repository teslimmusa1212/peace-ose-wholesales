// --- WhatsApp Order System Script ---
document.addEventListener('DOMContentLoaded', () => {
    // 1. Theme Toggle Logic
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        // Update button text based on current mode
        if (body.classList.contains('dark-mode')) {
            themeToggle.textContent = '☀️ Light Mode';
        } else {
            themeToggle.textContent = '🌙 Dark Mode';
        }
    });

    // Set initial toggle text on load
    if (body.classList.contains('dark-mode')) {
        themeToggle.textContent = '☀️ Light Mode';
    } else {
        themeToggle.textContent = '🌙 Dark Mode';
    }


    // 2. WhatsApp Order Submission Logic
    const form = document.querySelector('.order-submit-form');
    const statusMessage = document.getElementById('status-message');
    const productsContainer = document.querySelector('#products .grid-container');

    // Your WhatsApp number (Nigeria format)
    const whatsappNumber = '2348078586366'; 

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Gather Customer Details
        const customerName = document.getElementById('customer-name').value;
        const customerAddress = document.getElementById('customer-address').value;

        // Gather Order Details
        let orderItems = '';
        let hasItems = false;
        
        // Loop through all product cards
        productsContainer.querySelectorAll('.product-item-card').forEach(card => {
            const productName = card.getAttribute('data-product-name');
            // Find the input field within the card
            const quantityInput = card.querySelector('input[type="number"]');
            
            if (quantityInput) {
                const quantity = parseInt(quantityInput.value);

                if (quantity > 0) {
                    orderItems += `* ${productName} (Qty: ${quantity})\n`;
                    hasItems = true;
                }
            }
        });

        if (!hasItems) {
            statusMessage.textContent = "Please select at least one product before ordering.";
            statusMessage.style.color = 'red';
            return;
        }

        // --- FINAL PAYMENT & DELIVERY INSTRUCTIONS ---
        const paymentInstructions = `
==============================
*ORDER & PAYMENT INSTRUCTIONS:*

1. *PAYMENT:* Please make a bank transfer to confirm your order.
    *Bank Name:* Zenith Bank
    *Account Name:* AHMED MUMA S GLOBAL INVESTMENT LTD
    *Account Number:* 1040990755

2. *CONFIRMATION:* Forward the payment receipt to this chat.
    
3. *DELIVERY NOTE:* We will send a confirmation message to this chat *immediately upon reaching your destination* for final delivery.
==============================
`;

        // Assemble the Final WhatsApp Message
        const message = `
*--- NEW ORDER from PEACE OSE Wholesales Website ---*
*Customer Name:* ${customerName}
*Delivery Address:* ${customerAddress}

*ORDER DETAILS:*
${orderItems}

${paymentInstructions}

Thank you for your business!
`;

        // Encode the message and create the WhatsApp link
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

        // Open WhatsApp
        window.open(whatsappUrl, '_blank');

        // Provide success feedback
        statusMessage.textContent = 'Order sent! Check your WhatsApp to complete the process.';
        statusMessage.style.color = '#25d366'; // WhatsApp green color
    });
});