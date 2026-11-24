import { useState } from "react";
import { Link } from "react-router";
import { useCart } from "../contexts/CartContext";
import { useWishlist } from "../contexts/WishlistContext";

function Navbar(){
    const { cartCount } = useCart();
    const { wishlistCount } = useWishlist();
    const [menuOpen, setMenuOpen] = useState(false);

    function closeMenu() {
        setMenuOpen(false);
    }

    return (
        <div className="container-fluid fixed-top px-0 animated fadeIn">
        <div className="top-bar row gx-0 align-items-center d-none d-lg-flex">
            <div className="col-lg-6 px-5 text-start">
                <small>Foody Produce Shop</small>
            </div>
        </div>

        <nav className="navbar navbar-expand-lg navbar-light py-lg-0 px-lg-5">
            <Link to="/" className="navbar-brand ms-4 ms-lg-0" onClick={closeMenu}>
                <h1 className="fw-bold text-primary m-0">F<span className="text-secondary">oo</span>dy</h1>
            </Link>
            <button type="button" className="navbar-toggler me-4" aria-label="Toggle navigation" aria-controls="navbarCollapse" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse${menuOpen ? " show" : ""}`} id="navbarCollapse">
                <div className="navbar-nav ms-auto p-4 p-lg-0">
                    <Link to="/" className="nav-item nav-link" onClick={closeMenu}>Home</Link>
                    <Link to="/products" className="nav-item nav-link" onClick={closeMenu}>Products</Link>
                    <Link to="/checkout" className="nav-item nav-link" onClick={closeMenu}>Checkout</Link>
                    <Link to="/wishlist" className="nav-item nav-link d-lg-none" onClick={closeMenu}>Wishlist ({wishlistCount})</Link>
                    <Link to="/cart" className="nav-item nav-link d-lg-none" onClick={closeMenu}>Cart ({cartCount})</Link>
                </div>
                <div className="d-none d-lg-flex ms-2">
                    <Link className="btn-sm-square bg-white rounded-circle ms-3 position-relative" to="/wishlist" aria-label={`Wishlist (${wishlistCount})`}>
                        <small className="fa fa-heart text-body"></small>
                        {wishlistCount > 0 && <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">{wishlistCount}</span>}
                    </Link>
                    <Link className="btn-sm-square bg-white rounded-circle ms-3 position-relative" to="/cart" aria-label={`Cart (${cartCount})`}>
                        <small className="fa fa-shopping-bag text-body"></small>
                        {cartCount > 0 && <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">{cartCount}</span>}
                    </Link>
                </div>
            </div>
        </nav>
    </div>
    )
}

export default Navbar;
