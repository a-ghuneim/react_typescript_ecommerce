function AboutAndFeatures() {
  return (
    <>
      <div id="about" className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="about-img position-relative overflow-hidden p-5 pe-0">
                <img className="img-fluid w-100" src="img/about.jpg" />
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="display-5 mb-4">
                Fill your basket with fresh produce
              </h1>
              <p className="mb-4">
                Foody is a produce shop for the way you cook and snack at home.
                Pick up fruit for the week or find a few fresh ingredients for
                dinner.
              </p>
              <p>
                <i className="fa fa-check text-primary me-3"></i>Bananas,
                strawberries, and whole pineapples
              </p>
              <p>
                <i className="fa fa-check text-primary me-3"></i>Tomatoes and
                cucumbers for salads
              </p>
              <p>
                <i className="fa fa-check text-primary me-3"></i>Potatoes and
                chili peppers for home cooking
              </p>
              <a
                className="btn btn-primary rounded-pill py-3 px-5 mt-3"
                href="#produce"
              >
                Browse produce
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-light bg-icon my-5 py-6">
        <div className="container">
          <div
            className="section-header text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "500px" }}
          >
            <h1 className="display-5 mb-3">What to make with your produce</h1>
            <p>A few easy ways to use what?s in your basket.</p>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="bg-white text-center h-100 p-4 p-xl-5">
                <img className="img-fluid mb-4" src="img/icon-1.png" alt="" />
                <h4 className="mb-3">Fruit for breakfast and snacks</h4>
                <p className="mb-4">
                  Slice a pineapple for breakfast, pack a banana for later, or
                  add strawberries to your yogurt.
                </p>
                <a
                  className="btn btn-outline-primary border-2 py-2 px-4 rounded-pill"
                  href="#produce"
                >
                  Browse produce
                </a>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="bg-white text-center h-100 p-4 p-xl-5">
                <img className="img-fluid mb-4" src="img/icon-2.png" alt="" />
                <h4 className="mb-3">Vegetables for quick sides</h4>
                <p className="mb-4">
                  Toss cucumbers and tomatoes into a quick salad, or roast
                  potatoes for an easy side.
                </p>
                <a
                  className="btn btn-outline-primary border-2 py-2 px-4 rounded-pill"
                  href="#produce"
                >
                  Browse produce
                </a>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="bg-white text-center h-100 p-4 p-xl-5">
                <img className="img-fluid mb-4" src="img/icon-3.png" alt="" />
                <h4 className="mb-3">Fresh ingredients for salsa</h4>
                <p className="mb-4">
                  Start with tomatoes for a quick salsa and add chili peppers a
                  little at a time for the heat you like.
                </p>
                <a
                  className="btn btn-outline-primary border-2 py-2 px-4 rounded-pill"
                  href="#produce"
                >
                  Browse produce
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AboutAndFeatures;
