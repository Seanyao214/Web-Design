function calculateOrder() {
   
    let productName = document.getElementById('productName').value;
    let productPrice = parseFloat(document.getElementById('productPrice').value);
    let quantity = parseInt(document.getElementById('quantity').value);

    
    let totalPrice = productPrice * quantity;

    
    let orderSummary = `
<h3>Your Order:</h3>
<p>Product Name: ${productName}</p>
<p>Price per Item: $${productPrice.toFixed(2)}</p>
<p>Quantity: ${quantity}</p>
<p><strong>Total Price: $${totalPrice.toFixed(2)}</strong></p>
    `;

    // Displaying the order summary.
    document.getElementById('orderSummary').innerHTML = orderSummary;
}

