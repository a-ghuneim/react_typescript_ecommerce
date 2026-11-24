import { Link } from "react-router-dom";

function ProductsHeader({ title = "Products" }: { title?: string }) {
  return (
    <div className="container-fluid page-header mb-5 animated fadeIn">
      <div className="container">
        <h1 className="display-3 mb-3 animated slideInDown">{title}</h1>
        <nav aria-label="Breadcrumb" className="animated slideInDown">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <Link className="text-body" to="/">
                Home
              </Link>
            </li>
            <li
              className="breadcrumb-item text-dark active"
              aria-current="page"
            >
              {title}
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
}

export default ProductsHeader;
