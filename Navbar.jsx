import Searchbar from "../layout/common/Searchbar";

function Navbar() {
    return (
        <nav className="navbar fixed-top bg-white shadow-sm px-5 ">
            <h4 className="mb-0 fs-3 fw-bold">ShopRed</h4>
            <Searchbar placeholder="Search for products, brands and more.." />

            <div>
                <i className="bi bi-heart mx-3 "></i>
                <i className="bi bi-person "></i>
                <button className="btn btn-danger ms-3 ">
                    <i className="bi bi-cart"></i>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;