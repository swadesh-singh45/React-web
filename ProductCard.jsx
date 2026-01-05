function ProductCard({product = {} }) {
    return (
        <div className="col-md-3 mb-4">
            <div className="card shadow-sm h-100">
                <img src={product.image} className="card img-top p-3" style={{height: "220px", objectFit: "contain"}} />

                <div className="card-body">
                    <h6 className="text-truncate">{product.title}</h6>
                    <p className="fw-bold">${product.price}</p>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;