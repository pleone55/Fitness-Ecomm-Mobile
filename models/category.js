import Product from './products';

class Category {
    constructor(id, title, imageUrl){
        this.id = id;
        this.title = title;
        this.imageUrl = imageUrl;
        this.products = [];
    }
}

export default Category;