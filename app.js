const products = [
    {
        name : "tecno spark 4",
        price : 10000,
    },
    {
        name : "samsung s4",
        price : 20000,
    },
    {
        name : "xiaomi",
        price : 15000,
    },
    {
        name : "infinix s5 ",
        price : 30000,
    },
    {
        name : "realme f5pro",
        price : 25000,
    },
    {
        name : "vivo y21",
        price : 40000,
    },
    {
        name : "iphone 12",
        price : 100000,
    },
]


let main = document.getElementById(container);
let parent = products.map((product) => {
    return  `
    <div class="card">
            <h1>${product.name}</h1>
            <h2>${product.price}</h2>
            <button onclick="Addtocart(index)">Add to Cart</button>
        </div>
    `
})

main.innerHTML = parent.join('');

