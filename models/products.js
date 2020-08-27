class Product {
    constructor(id, categoryId, ownerId, title, imageUrl, description, price) {
        this.id = id;
        this.categoryId = categoryId;
        this.ownerId = ownerId;
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }
}

export default Product;