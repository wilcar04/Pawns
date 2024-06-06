export const getProducts = () => {
    const products = localStorage.getItem('products');
    return products ? JSON.parse(products) : [];
};

export const addProduct = (product) => {
    const products = getProducts();
    products.push(product);
    localStorage.setItem('products', JSON.stringify(products));
};

export const updateProduct = (index, updatedProduct) => {
    const products = getProducts();
    products[index] = updatedProduct;
    localStorage.setItem('products', JSON.stringify(products));
};
