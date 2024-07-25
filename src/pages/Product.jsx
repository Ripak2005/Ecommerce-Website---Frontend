import { Badge, Container, FormControl, FormSelect, Pagination, Row } from "react-bootstrap";
import { ProductData } from "../context/ProductContext";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import { Form } from "react-router-dom";
import FormRange from "react-bootstrap/esm/FormRange";

const Product = () => {
  const { products, loading, categories, search, setSearch, category, setCategory, price, totalPages, setPrice, page, setPage } = ProductData();
  return (
    <Container className="mt-4">
      <h2>
        OUR PRODUCTS
        <Badge
          bg="secondary"
          style={{
            fontSize: "0.5em",
            verticalAlign: "super",
            marginLeft: "0.2em",
          }}
        >
          All Products
        </Badge>
      </h2>
      <div
        className="filter"
        style={{
          width: "280px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
        }}
      >
        <h4>Filters</h4>
        <FormControl type='text' placeholder='Search for Products, Brands and More' style={{width:'300px'}} value={search} onChange={e => setSearch(e.target.value)}/>

        <FormSelect aria-label="Default select example" className="mt-3" style={{width:'250px'}} value={category} onChange={e => setCategory(e.target.value)}>
          <option value=''>Categories</option>
          {
            categories && categories.map((e) => (
              <option value={e} key={e}>{e}</option>
            ))
          }
        </FormSelect>

        <div className="range">
          <FormRange className="mt-3" style={{width:'200px'}} min={0} max={100000} value={price} onChange={e => setPrice(e.target.value)}/>
          <p>Minimum Price - ₹ {price}</p>
        </div>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <Row className="justify-content-center" style={{ gap: "1rem" }}>
          {products && products.length > 0 ? (
            products.map((e) => <ProductCard key={e._id} product={e} />)
          ) : (
            <p>No Products Yet.</p>
          )}
        </Row>
      )}

      {
        totalPages && totalPages > 1 && (
          <div style={{
            display: "flex",
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            marginTop:'8px',
          }}>
            <Pagination>
              {[...Array(totalPages)].map((_,i) => (
                <Pagination.Item key={i} onClick={() => setPage(i + 1)} style={{cursor:'pointer'}}>{i + 1}</Pagination.Item>
              ))}
            </Pagination>
          </div>
        )
      }

    </Container>
  );
};

export default Product;
