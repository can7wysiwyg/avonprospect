'use client'

import React from 'react'
import {
    Container,
    Form,
    Row,
    Col,
    Button,
    Spinner,
    Alert,
  } from "react-bootstrap";

  import { getSupertoken } from "@/helpers/AccessToken";
import { ApiUrl } from "@/helpers/ApiUrl";
import axios from 'axios';

  

export default function NewCategory() {
    const[catName, setCatName] = React.useState('')
    const usertoken = getSupertoken();
    const [loading, setLoading] = React.useState(false);
      const [result, setResult] = React.useState(null);
      const [error, setError] = React.useState(null);
    
      const handleInputChange = (e) => {
        setCatName(e.target.value)
      }
    

      const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError(null);
        setResult(null);
    
        if (!catName) {
          setError("Category name is required");
          setLoading(false);
          return;
        }

        try {
            const response = await axios.post(`${ApiUrl}/admin/add_category`, {catName}, {
                headers: {
                    Authorization: `Bearer ${usertoken}`
                }
            })
    
            setResult(response.data.msg);
    
            setTimeout(() => {
              window.location.href = "/admin/categories";
            }, 2000);
    
            
        } catch (err) {

            console.error("Error creating info:", err);
            setError(
              err.response?.data?.message ||
                "An error occurred while uploading your information"
            );
            
        } finally {
            setLoading(false)
        }

    }
    

    
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
              Create New Category
            </h4>
    
            {result && <Alert variant="success">{result}</Alert>}
            {error && <Alert variant="danger">{error}</Alert>}
    
            <Row className="justify-content-md-center">
              <Col xs={12} md={6}>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formBasicCategoryName">
                    <Form.Label>Category Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="catName"
                      value={catName}
                      onChange={handleInputChange}
                      placeholder="your category  name"
                      required
                    />
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
                                      "Create Category"
                                    )}
                                  </Button>
                                </div>


                  </Form>
                  </Col>
                  </Row>
                  </Container>
    
    
    
    
    
    </>
  )
}
