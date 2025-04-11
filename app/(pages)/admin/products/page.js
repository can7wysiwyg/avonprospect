'use client'
import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import {
  PlusSquare,
  Edit3,
  Tags,
  Layers,
  Upload,
  Settings,
  Archive
} from 'lucide-react'

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
    },
    {
      icon: <Tags size={24} className="text-warning mb-2" />,
      label: 'Edit Product Categories',
      href: '/admin/categories'
    },
    {
      icon: <Layers size={24} className="text-danger mb-2" />,
      label: 'Stock Management',
      href: '/admin/inventory'
    },
    {
      icon: <Settings size={24} className="text-secondary mb-2" />,
      label: 'Set Discounts & Pricing',
      href: '/admin/pricing'
    },
    {
      icon: <Upload size={24} className="text-teal mb-2" />,
      label: 'Bulk Import Products',
      href: '/admin/products/import'
    },
    {
      icon: <Archive size={24} className="text-dark mb-2" />,
      label: 'Archived Products',
      href: '/admin/products/archived'
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
                  <Col key={idx} xs={6} md={4} lg={3} className="text-center mb-4">
                    <a href={item.href} className="text-decoration-none">
                      <div className="p-3 bg-light rounded shadow-sm h-100">
                        {item.icon}
                        <div className="fw-medium">{item.label}</div>
                      </div>
                    </a>
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
