'use client'
import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import {
  PlusSquare,
  Edit3
  
} from 'lucide-react'
import Link from 'next/link'

export default function ProductManagement() {
  const actions = [
    {
      icon: <PlusSquare size={24} className="text-success mb-2" />,
      label: 'Upload New Product',
      href: '/admin/products/upload'
    },
    {
      icon: <Edit3 size={24} className="text-primary mb-2" />,
      label: 'Manage Products',
      href: '/admin/products/manage'
    }
    
  ]

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col xs={12} lg={10}>
          <Card className="mb-4 shadow-sm border-0">
            <Card.Body>
              <h4 className="mb-4 fw-bold">Product Management</h4>
              <Row>
                {actions.map((item, idx) => (
                  <Col key={idx}  md={6}  className="text-center mb-4">
                    <Link href={item.href} className="text-decoration-none">
                      <div className="p-3 bg-light rounded shadow-sm h-100">
                        {item.icon}
                        <div className="fw-medium">{item.label}</div>
                      </div>
                    </Link>
                  </Col>
                ))}
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
