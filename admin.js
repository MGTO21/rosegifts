document.addEventListener('DOMContentLoaded', () => {
    const productForm = document.getElementById('productForm');
    const productList = document.getElementById('productList');
    const productIdInput = document.getElementById('productId');
    const productNameInput = document.getElementById('productName');
    const productPriceInput = document.getElementById('productPrice');
    const productImageInput = document.getElementById('productImage');

    let products = JSON.parse(localStorage.getItem('products')) || [];

    function renderProducts() {
        productList.innerHTML = '';
        products.forEach((product, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <img src="${product.image}" alt="${product.name}" width="50">
                <span>${product.name} - ${product.price} جنيه</span>
                <button onclick="editProduct(${index})">تعديل</button>
                <button onclick="deleteProduct(${index})">حذف</button>
            `;
            productList.appendChild(li);
        });
    }

    function saveProducts() {
        localStorage.setItem('products', JSON.stringify(products));
        renderProducts();
    }

    productForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const id = productIdInput.value;
        const name = productNameInput.value;
        const price = productPriceInput.value;
        const image = URL.createObjectURL(productImageInput.files[0]);

        if (id) {
            products[id] = { name, price, image };
        } else {
            products.push({ name, price, image });
        }

        saveProducts();
        productForm.reset();
        productIdInput.value = '';
    });

    window.editProduct = (index) => {
        const product = products[index];
        productIdInput.value = index;
        productNameInput.value = product.name;
        productPriceInput.value = product.price;
        productImageInput.value = '';
    };

    window.deleteProduct = (index) => {
        products.splice(index, 1);
        saveProducts();
    };

    renderProducts();
});
