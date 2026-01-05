import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function ProductList() {

    const[products,setProducts]= useState([]);
    const[loading,setloading]= useState(true);

    useEffect(() =>{
        fetch("https://fakestoreapi.com/products")
        .then((res)=>res.json())
        .then((data)=>{
            setProducts(data);
            setloading(false);
        });
    }, [])

    if (loading){
        return <h4 className="text-muted">Loading products</h4>;
    }

    return (
        <div className="container mt-5 pt-5">
            <small className="text-muted ">AUTUMN COLLECTION 2026</small>
            <h2 className="fw-bold">Featured Products</h2>
            <p className="text-muted">Discover our latest collection tailored just for you.</p>

            <div className="row mt-4">
                {products.map((item) => (
    <ProductCard key={item.id} product={item} />
))}
            </div>
        </div>
    );
}

export default ProductList;