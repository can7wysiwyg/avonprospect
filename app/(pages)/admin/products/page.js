'use client'
import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { 
  Tags, 
  Package, 
  Layers, 
  BarChart2, 
  ShoppingCart, 
  DollarSign,
  Home
} from 'lucide-react'


export default function ProductManagement() {
  return (
    <>

    <Container className="py-4" style={{marginTop: "30px"}}>
          <Row>
            <Col xs={12}>
              
            </Col>
          </Row>
          
          <div className="d-flex justify-content-center">
            <Row className="w-100">
              <Col xs={12} lg={10} className="mx-auto">
                <Card className="mb-4">
                  <Card.Body>
                    <div className="d-flex align-items-center mb-3">
                      <Home size={24} className="text-success me-2" />
                      <Card.Title className="mb-0">Products Management </Card.Title>
                    </div>
                    <Row>
                      <Col xs={6} md={4} lg={3} className="text-center mb-3">
                        <a href="/admin/categories" className="text-decoration-none">
                          <div className="p-3 bg-light rounded hover-effect">
                            <Tags size={24} className="text-primary mb-2" />
                            <div>Category Management</div>
                          </div>
                        </a>
                      </Col>
                      <Col xs={6} md={4} lg={3} className="text-center mb-3">
                        <a href="/admin/products" className="text-decoration-none">
                          <div className="p-3 bg-light rounded hover-effect">
                            <Package size={24} className="text-primary mb-2" />
                            <div>Product Management</div>
                          </div>
                        </a>
                      </Col>
                      <Col xs={6} md={4} lg={3} className="text-center mb-3">
                        <a href="/admin/inventory" className="text-decoration-none">
                          <div className="p-3 bg-light rounded hover-effect">
                            <Layers size={24} className="text-primary mb-2" />
                            <div>Inventory Management</div>
                          </div>
                        </a>
                      </Col>
                      <Col xs={6} md={4} lg={3} className="text-center mb-3">
                        <a href="/admin/sales" className="text-decoration-none">
                          <div className="p-3 bg-light rounded hover-effect">
                            <BarChart2 size={24} className="text-primary mb-2" />
                            <div>Sales Tracking</div>
                          </div>
                        </a>
                      </Col>
                      <Col xs={6} md={4} lg={3} className="text-center mb-3">
                        <a href="/admin/orders" className="text-decoration-none">
                          <div className="p-3 bg-light rounded hover-effect">
                            <ShoppingCart size={24} className="text-primary mb-2" />
                            <div>Order Management</div>
                          </div>
                        </a>
                      </Col>
                      <Col xs={6} md={4} lg={3} className="text-center mb-3">
                        <a href="/admin/insights" className="text-decoration-none">
                          <div className="p-3 bg-light rounded hover-effect">
                            <DollarSign size={24} className="text-primary mb-2" />
                            <div>Profit Insights</div>
                          </div>
                        </a>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
    
          {/* Quick stats section */}
          <div className="d-flex justify-content-center mt-4">
            <Row className="w-100">
              <Col xs={12} lg={10} className="mx-auto">
                <Row>
                  <Col md={4} className="mb-4">
                    <Card className="text-center h-100">
                      <Card.Body>
                        <Package size={32} className="text-primary mb-2" />
                        <h3>24</h3>
                        <Card.Text>Total Products</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4} className="mb-4">
                    <Card className="text-center h-100">
                      <Card.Body>
                        <ShoppingCart size={32} className="text-success mb-2" />
                        <h3>156</h3>
                        <Card.Text>Total Orders</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4} className="mb-4">
                    <Card className="text-center h-100">
                      <Card.Body>
                        <DollarSign size={32} className="text-info mb-2" />
                        <h3>$4,235</h3>
                        <Card.Text>Monthly Revenue</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Container>
    


    </>
  )
}
