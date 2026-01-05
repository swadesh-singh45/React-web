function Footer(){
    return(
        <footer className="bg-light mt-5 py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h5>ShopRed</h5>
                        <p className="text-muted">Your one-stop for everything you love.Quality products, fast shipping,and exceptionalservice</p>
                        <p><i className="bi bi-geo-alt mx-2"></i>123 Market St, Commerce City</p>
                        <p><i className="bi bi-telephone mx-2"></i>(555) 12-4567</p>
                        <p><i className="bi bi-envelope mx-2"></i>support@shopred.com</p>

                    </div>

                    <div className="col-md-3">
                        <h6 className="fw-bold">CUSTOMER SERVICE</h6>
                        <ul className="list-unstyled">
                            <li>Help Center</li>
                            <li>Returns & Exchanges</li>
                            <li>Shipping Info</li>
                            <li>Track Your Order</li>
                            <li>Warranty</li>
                        </ul>
                    </div>

                    <div className="col-md-3">
                        <h6 className="fw-bold">Quick Links</h6>
                        <ul className="list-unstyled">
                            <li>About Us</li>
                            <li>Careers</li>
                            <li>Blog</li>
                            <li>Affiliate Program</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>

                    <div className="col-md-3">
                        <h6 className="fw-bold">STAY UPDATED</h6>
                            <p>Subscribe to get special offer, free giveways and once-in-a-lifetime deals.</p>

                            <input className="form-control" type="email" placeholder="Enter your email"/>

                            <button className="btn btn-danger w-100 mt-2">Subscribe</button>
                    </div>
                </div>

                <hr />
                <div className="text-center text-muted mt-3">
                     © 2026 ShopRed. All Rights Reserved.
                </div>
            </div>
        </footer>
    )
}


export default Footer;
