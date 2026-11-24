function Footer(){
    return (
        <div className="container-fluid bg-dark footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-3 col-md-6">
                    <h1 className="fw-bold text-primary mb-4">F<span className="text-secondary">oo</span>dy</h1>
                    <p>Fresh fruits and vegetables for weeknight dinners, lunchboxes, and everything in between.</p>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-light mb-4">Shop Foody</h4>
                    <a className="btn btn-link" href="/#produce">Fresh fruits and vegetables</a>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-light mb-4">Quick Links</h4>
                    <a className="btn btn-link" href="/#about">About Foody</a>
                    <a className="btn btn-link" href="/">Home</a>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-light mb-4">Newsletter</h4>
                    <p>Get produce picks and simple meal ideas in your inbox.</p>
                    <div className="position-relative mx-auto" style={{ maxWidth: "400px" }}>
                        <input className="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email"/>
                        <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">Sign up</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid copyright">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        &copy; <a href="/">Foody</a>. All rights reserved.
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                        Designed By <a href="https://htmlcodex.com">HTML Codex</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;