
// ----------------------------------------------------------------------
// Constants
// ----------------------------------------------------------------------

var PRODUCT_URL = "/swallowtailhill/product/counting_sheep_comfort_blanket"


// ----------------------------------------------------------------------
// Handle Message (Click)
// ----------------------------------------------------------------------

chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    addToCart();
});


// ----------------------------------------------------------------------
// Adding to Cart
// ----------------------------------------------------------------------

function addToCart() {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", PRODUCT_URL, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            // Redirect to cart
            window.location = "/cart";
        }
    }
    xhr.send(formData());
}

function formData() {
    var data = new FormData();
    data.append('_method', 'PUT');
    data.append('qty', '1');
    data.append('button_add_to_cart', 'add%20to%20my%20cart');
    return data;
}
