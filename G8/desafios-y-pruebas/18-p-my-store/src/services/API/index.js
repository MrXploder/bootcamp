import Resource from "./class/Resource";
import productData from "./data/productData";

export let Products = new Resource("/api/products", productData.data);
