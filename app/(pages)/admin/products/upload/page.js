"use client";
import { getSupertoken } from "@/helpers/AccessToken";
import { ApiUrl } from "@/helpers/ApiUrl";
import { getBrands, getCategories } from "@/helpers/core/CoreFuncs";
import axios from "axios";
import React from "react";
import {
  Container,
  Form,
  Row,
  Col,
  Button,
  Spinner,
  Alert,
} from "react-bootstrap";

export default function UploadProduct() {
  const [data, setData] = React.useState({
    name: "",
    category: "",
    price: 0,
    brand: "",
    description: "",
    stockQuantity: ""
  });
  const [photo, setPhoto] = React.useState(null);
  const [categories, setCategories] = React.useState([]);
  const [brands, setBrands] = React.useState([])
  const [loading, setLoading] = React.useState(false);
  const [result, setResult] = React.useState(null);
  const [error, setError] = React.useState(null);

  const usertoken = getSupertoken();

  React.useEffect(() => {
    const fetchData = async () => {
      const cats = await getCategories();
      const blands = await getBrands()
      if (cats && blands) {
        setCategories(cats.categories);
        setBrands(blands.brands)
      } else {
        console.log("Error fetching categories");
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setPhoto(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    if (!data.name) {
      setError("Product name cannot be blank");
      setLoading(false);
      return;
    }

    if (!data.price) {
      setError("Product price cannot be blank");
      setLoading(false);
      return;
    }

    if (!data.category) {
      setError("Product category cannot be blank");
      setLoading(false);
      return;
    }

    if (!data.brand) {
        setError("Product brand cannot be blank");
        setLoading(false);
        return;
      }

      if (!data.description) {
        setError("Product  description cannot be blank");
        setLoading(false);
        return;
      }

      if (!data.stockQuantity) {
        setError("Stock Quantity cannot be blank");
        setLoading(false);
        return;
      }



    if (!photo) {
      setError("Please select a photo");
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("category", data.category);
    formData.append("brand", data.brand);
    formData.append("description", data.description);
    formData.append("stockQuantity", data.stockQuantity);
    formData.append("price", data.price);
    formData.append("photo", photo);

    try {
      const response = await axios.post(
        `${ApiUrl}/admin/add_product`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${usertoken}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setResult(response.data.msg);

      setTimeout(() => {
        window.location.href = "/admin/products";
      }, 2000);
    } catch (err) {
      console.error("Error uploading  info:", err);
      setError(
        err.response?.data?.message ||
          "An error occurred while uploading your information"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Container style={{ fontFamily: "sans-serif", marginTop: "2rem" }}>
        <h4
          style={{
            textAlign: "center",
            marginBottom: "1rem",
            color: "#3a7bd5",
            fontWeight: "bold",
          }}
        >
          Add New Product
        </h4>

        {result && <Alert variant="success">{result}</Alert>}
        {error && <Alert variant="danger">{error}</Alert>}

        <Row className="justify-content-md-center">
          <Col xs={12} md={6}>
            <Form onSubmit={handleSubmit} encType="multipart/form-data">
              <Form.Group className="mb-3" controlId="formBasicProductName">
                <Form.Label>Product Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={data.name}
                  onChange={handleInputChange}
                  placeholder="your product  name"
                  required
                />
              </Form.Group>


              <Form.Group className="mb-3" controlId="formBasicBrand">
                <Form.Label>Product Brand</Form.Label>
                <Form.Select
                  name="brand"
                  value={data.brand}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Brand</option>
                  {brands?.map((item) => (
                    <option key={item._id} value={item._id}>
                      {item?.brandName}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>



    <Form.Group className="mb-3" controlId="formBasicBrand">
  <Form.Label>Product Description</Form.Label>
  <Form.Control
    as="textarea"
    name="description"
    value={data.description}
    onChange={handleInputChange}
    rows={4} 
  />
</Form.Group>


              


              <Form.Group className="mb-4" controlId="formBasicSupplierLicence">
                <Form.Label>Product Photo</Form.Label>
                <Form.Control
                  type="file"
                  onChange={handleImageUpload}
                  required
                  accept=".png, .jpg, .jpeg, .webp"
                  className="form-control"
                />
                <Form.Text className="text-muted">
                  Upload a clear image of your product
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicProductName">
                <Form.Label>Product Price</Form.Label>
                <Form.Control
                  type="number"
                  name="price"
                  value={data.price}
                  onChange={handleInputChange}
                  placeholder="your product price"
                  required
                />
              </Form.Group>


              <Form.Group className="mb-3" controlId="formBasicProductName">
                <Form.Label>Product Quantity</Form.Label>
                <Form.Control
                  type="number"
                  name="stockQuantity"
                  value={data.stockQuantity}
                  onChange={handleInputChange}
                  placeholder="your product stock quantity"
                  required
                />
              </Form.Group>


              <Form.Group className="mb-3" controlId="formBasicCategory">
                <Form.Label>Product Category</Form.Label>
                <Form.Select
                  name="category"
                  value={data.category}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Category</option>
                  {categories?.map((cat) => (
                    <option key={cat._id} value={cat._id}>
                      {cat.catName}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>

              <div className="d-grid gap-2">
                <Button
                  variant="primary"
                  type="submit"
                  disabled={loading}
                  className="py-2"
                >
                  {loading ? (
                    <>
                      <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                      />
                      <span className="ms-2">submiting...</span>
                    </>
                  ) : (
                    "Add Product"
                  )}
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
