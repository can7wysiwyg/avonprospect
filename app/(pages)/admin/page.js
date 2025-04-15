'use client'
import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { 
  Tags, 
  Package, 
   
  ShoppingCart, 
  Home,
  GroupIcon
} from 'lucide-react'
import { getProducts } from '@/helpers/core/CoreFuncs'
import Link from 'next/link'
import { getSupertoken } from '@/helpers/AccessToken'
import axios from 'axios'
import { ApiUrl } from '@/helpers/ApiUrl'


export default function AdminDashboard() {
  const[products, setProducts] = React.useState([])
  const[carts, setCarts] = React.useState([])
  const usertoken = getSupertoken()

  React.useEffect(() => {

    const fetchData = async () => {
          try {
            
           const items = await getProducts()
           if(items ) {
            setProducts(items.products)
           }


           const response = await axios.get(`${ApiUrl}/admin/all_carts`, {
            headers: {
              Authorization: `Bearer ${usertoken}`
            }
           })

           setCarts(response.data.carts)



          
          } catch (error) {
            console.log('Error fetching products:', error)
          } 
        }
        fetchData()


  }, [])

 
  return (
    <Container className="py-4">
      <Row>
        <Col xs={12}>
          <h2 className="mb-4 text-danger">Admin Dashboard</h2>
        </Col>
      </Row>
      
      <div className="d-flex justify-content-center">
        <Row className="w-100">
          <Col xs={12} lg={10} className="mx-auto">
            <Card className="mb-4">
              <Card.Body>
                <div className="d-flex align-items-center mb-3">
                  <Home size={24} className="text-success me-2" />
                  <Card.Title className="mb-0">Admin Management Console</Card.Title>
                </div>
                <Row>
                  <Col xs={6} md={4} lg={3} className="text-center mb-3">
                    <Link href="/admin/categories" className="text-decoration-none">
                      <div className="p-3 bg-light rounded hover-effect">
                        <Tags size={24} className="text-primary mb-2" />
                        <div>Category Management</div>
                      </div>
                    </Link>
                  </Col>

                  <Col xs={6} md={4} lg={3} className="text-center mb-3">
                    <Link href="/admin/brands" className="text-decoration-none">
                      <div className="p-3 bg-light rounded hover-effect">
                        <GroupIcon size={24} className="text-primary mb-2" />
                        <div>Brand Management</div>
                      </div>
                    </Link>
                  </Col>

                  <Col xs={6} md={4} lg={3} className="text-center mb-3">
                    <Link href="/admin/products" className="text-decoration-none">
                      <div className="p-3 bg-light rounded hover-effect">
                        <Package size={24} className="text-primary mb-2" />
                        <div>Product/Inventory Management</div>
                      </div>
                    </Link>
                  </Col>

                  
                  <Col xs={6} md={4} lg={3} className="text-center mb-3">
                    <Link href="/admin/orders" className="text-decoration-none">
                      <div className="p-3 bg-light rounded hover-effect">
                        <ShoppingCart size={24} className="text-primary mb-2" />
                        <div>Order Management</div>
                      </div>
                    </Link>
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
                    <h3>{products?.length}</h3>
                    <Card.Text>Total Products</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className="mb-4">
                <Card className="text-center h-100">
                  <Card.Body>
                    <ShoppingCart size={32} className="text-success mb-2" />
                    

                    {
                      carts?.length && (<h3>{carts?.length}</h3>)
                    }
                    <Card.Text>Total Orders</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              
            </Row>
          </Col>
        </Row>
      </div>
    </Container>
  )
}