const products = [
    {
        img: 'https://static-01.daraz.pk/p/9fbb80fcc2c30f2c0c5b48395faff1d2.png_750x750.jpg_.webp',
        name: "Redmi A3",
        price: 20000,
    },
    {
        img: "https://static-01.daraz.pk/p/47944f0a498e23c01fd5a7872ed06fe3.jpg_300x0q75.webp",
        name: "Camon 13 pro",
        price: 56499,
    },
    {
        img: "https://static-01.daraz.pk/p/3fd6cd8304c248fcd07990026b77ead1.jpg_300x0q75.webp",
        name: "infinix Smart 8",
        price: 21.899,
    },
    {
        img: "https://static-01.daraz.pk/p/1567820cc22a190dda2d698b0eacdf27.jpg_300x0q75.webp",
        name: "Poco X6 ",
        price: 134999,
    },
    {
        img: "https://static-01.daraz.pk/p/1567820cc22a190dda2d698b0eacdf27.jpg_300x0q75.webp",
        name: "Tecno spark 20",
        price: 25000,
    },
    {
        img: "https://static-01.daraz.pk/p/60adeca95819cafa95b9a8f3f824b138.jpg_750x750.jpg_.webp",
        name: "Vivo Y100",
        price: 40000,
    },
    {
        img: "https://static-01.daraz.pk/p/dba1e68fadf6df2c6212cce52af02714.jpg_300x0q75.webp",
        name: "Neo 7 Ultra",
        price: 100000,
    },
    {
        img: "https://static-01.daraz.pk/p/b889a1c4dc385137d2841a4fa1f32a25.jpg_300x0q75.webp",
        name: "Realme C53",
        price: 100000,
    },
]

let main = document.getElementById('container');
// let count = document.querySelector('.count');

main.innerHTML = products.map((product, index) => {
    return `
    <div class="cards">
        <img src="${product.img}" alt="">
        <h2 class="my-2">${product.name}</h2>
        <h3 class="my-2">${product.price}</h3>
        <button onclick="addToCart(${index})">Add to Cart</button>
    </div>
    `;
}).join('');
let count = document.getElementById('count');
let cart = [];
let carthead = document.getElementById('carthead');

function addToCart(index) {
    let selectedProduct = products[index];
    let existingCartItem = cart.find(item => item.name === selectedProduct.name);

    if (existingCartItem) {
        existingCartItem.quantity += 1;
        Swal.fire({
            icon: 'success',
            title: 'Quantity Increased',
            text: `Quantity of ${selectedProduct.name} increased to ${existingCartItem.quantity}`,
        });
    } else {
        selectedProduct.quantity = 1;
        cart.push(selectedProduct);
        Swal.fire({
            icon: 'success',
            title: 'Item Added',
            text: `${selectedProduct.name} added to cart`,
        });
    }
    count.textContent = cart.length;
    console.log(`Product ${selectedProduct.name} added to cart.`);
    console.log(cart);

    updateModalHeading(); // Call the function to update the modal heading
    updateCartDisplay(); // Call the function to update the cart display
}

function updateModalHeading() {
    if (cart.length === 0) {
        carthead.textContent = 'NO ITEMS FOUND';
    } else {
        carthead.textContent = 'YOUR LISTING';
    }
}

function updateCartDisplay() {
    let div = document.getElementById('cart-div');
    div.innerHTML = cart.map((c, index) => { // Added the index parameter here
        return `
        <div class="card  mb-3" >
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${c.img}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-4">
                    <div class="card-body">
                        <h5 class="card-title">${c.name}</h5>
                        <p class="card-text">Price: ${c.price}</p>
                        <p class="card-text">Quantity: ${c.quantity}</p>
                    </div>
                </div>
               
            </div>
            <div class="buttons">
           
            <button onclick="increment(${index})">+</button>
            <button onclick="decrement(${index})">-</button> <!-- Changed to decrement(${index}) -->
            
            </div>
        </div>
        `;
    }).join('');
    calculateTotalPrice(); 
}

function increment(index) {
    cart[index].quantity += 1;
    updateCartDisplay(); // Update the cart display after incrementing
}


function decrement(index){
if(cart[index].quantity === 1){
alert('0 Quantity Not allowed')
}else{
    cart[index].quantity -= 1;
    updateCartDisplay();
}
}

let total = document.getElementById('total')

function calculateTotalPrice() {
    let totalPrice = cart.reduce((total, product) => total + (product.price * product.quantity), 0);
    total.textContent = `Total: ${totalPrice}`;
}
