'use client'
import { getProduct } from '@/helpers/core/CoreFuncs'
import { useParams, useRouter } from 'next/navigation'
import React, { useState, useEffect } from 'react'
import { Spinner, Button, Card, Modal, Form, Alert } from 'react-bootstrap'
import axios from 'axios'
import { getSupertoken } from '@/helpers/AccessToken'
import { ApiUrl } from '@/helpers/ApiUrl'


export default function PhotoAndDeleteProduct() {
  const { manage } = useParams()
  const router = useRouter()
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)
  const [photoFile, setPhotoFile] = useState(null)
  const [photoPreview, setPhotoPreview] = useState(null)
  const [updating, setUpdating] = useState(false)
  const [deleting, setDeleting] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [showDeleteModal, setShowDeleteModal] = useState(false)

  
  const usertoken = getSupertoken()

    useEffect(() => {
        const modalBackdrops = document.getElementsByClassName('modal-backdrop');
    while(modalBackdrops.length > 0){
      modalBackdrops[0].parentNode.removeChild(modalBackdrops[0]);
    }
    
    // Remove any modal-open class from body
    document.body.classList.remove('modal-open');
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
  }, []);

  useEffect(() => {
    const fetchData = async() => {
      setLoading(true)
      try {
        const data = await getProduct(manage)

        if(data && data.product) {
          setProduct(data.product)
        }
      } catch (error) {
        setError(`Error loading product: ${error.message}`)
        console.log(`server error ${error.message}`)
      } finally {
        setLoading(false)
      }
    }

    if (manage) {
      fetchData()
    }
  }, [manage])

  // Handle photo file selection
  const handlePhotoChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setPhotoFile(file)
      // Create preview URL
      const previewUrl = URL.createObjectURL(file)
      setPhotoPreview(previewUrl)
    }
  }

  // Update photo function
  const handleUpdatePhoto = async () => {
    if (!photoFile) {
      setError('Please select a photo to upload')
      return
    }

    setUpdating(true)
    setError('')
    setSuccess('')

    try {
      const formData = new FormData()
      
      formData.append('photo', photoFile)

      const response = await axios.put(
        `${ApiUrl}/admin/update_product_photo/${manage}`, 
        formData,
        {
          headers: {
            Authorization: `Bearer ${usertoken}`,
            "Content-Type": "multipart/form-data",
          },
        }
      )

      if (response.data.msg) {
        setSuccess('Product photo updated successfully!')

        
        // Clear preview and file selection
        setPhotoPreview(null)
        setPhotoFile(null)

        router.push('/admin/products/manage')
        
  
        
      } else {
        throw new Error(response.data.msg || 'Failed to update product photo')
      }
    } catch (err) {
      setError(err.message || 'An error occurred while updating the photo')
      console.error('Update photo error:', err)
    } finally {
      setUpdating(false)
    }
  }

  // Delete product function
  const handleDeleteProduct = async () => {
    setDeleting(true)
    setError('')
    
    try {
      const response = await axios.delete(
        `${ApiUrl}/admin/delete_product/${product._id}`,
        {
          headers: {
            Authorization: `Bearer ${usertoken}`,
          },
        }
      )

      if (response.data.msg) {
        setSuccess('Product deleted successfully!')
        // Navigate back to products page immediately but with a try-catch to handle errors
        try {
          router.push('/admin/products/manage')
        } catch (navError) {
          console.error('Navigation error:', navError)
          // Fallback to window.location if router fails
          window.location.href = '/admin/products'
        }
      } else {
        throw new Error(response.data.msg || 'Failed to delete product')
      }
    } catch (err) {
      setError(err.message || 'An error occurred while deleting the product')
      console.error('Delete product error:', err)
    } finally {
      setDeleting(false)
      setShowDeleteModal(false)
    }
  }

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '300px' }}>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    )
  }

  return (
    <>
      <Card className="mb-4">
        <Card.Header className="bg-primary text-white">
          <h5 className="mb-0">Manage Product Photo & Settings</h5>
        </Card.Header>
        <Card.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          {success && <Alert variant="success">{success}</Alert>}
          
          <div className="row">
            <div className="col-md-6">
              <h6 className="mb-3">Current Product Photo</h6>
              <div className="border rounded p-2 mb-3" style={{ height: '250px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {product.photo ? (
                  <img 
                    src={product.photo} 
                    alt={product.name} 
                    style={{ maxHeight: '230px', maxWidth: '100%', objectFit: 'contain' }}
                  />
                ) : (
                  <div className="text-center text-muted">No photo available</div>
                )}
              </div>
            </div>
            
            <div className="col-md-6">
              <h6 className="mb-3">Update Product Photo</h6>
              <div className="border rounded p-2 mb-3" style={{ height: '250px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {photoPreview ? (
                  <img 
                    src={photoPreview} 
                    alt="Preview" 
                    style={{ maxHeight: '230px', maxWidth: '100%', objectFit: 'contain' }}
                  />
                ) : (
                  <div className="text-center text-muted">New photo preview</div>
                )}
              </div>
            </div>
          </div>
          
          <div className="mt-4">
            <Form.Group controlId="productPhoto" className="mb-3">
              <Form.Label>Choose New Photo</Form.Label>
              <Form.Control 
                type="file" 
                onChange={handlePhotoChange}
                accept="image/*"
              />
              <Form.Text className="text-muted">
                Recommended size: 800x800 pixels, max file size: 2MB
              </Form.Text>
            </Form.Group>
            
            <Button 
              variant="success" 
              onClick={handleUpdatePhoto} 
              disabled={!photoFile || updating}
              className="me-2"
            >
              {updating ? (
                <>
                  <Spinner animation="border" size="sm" className="me-2" />
                  Updating...
                </>
              ) : 'Update Photo'}
            </Button>
          </div>
          
          <hr className="my-4" />
          
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h6 className="mb-0">Product: {product.name}</h6>
              <small className="text-muted">ID: {product._id}</small>
            </div>
            <Button 
              variant="danger" 
              onClick={() => setShowDeleteModal(true)}
            >
              Delete Product
            </Button>
          </div>
        </Card.Body>
      </Card>
      
      {/* Delete Confirmation Modal */}
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete <strong>{product.name}</strong>? This action cannot be undone.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancel
          </Button>
          <Button 
            variant="danger" 
            onClick={handleDeleteProduct}
            disabled={deleting}
          >
            {deleting ? (
              <>
                <Spinner animation="border" size="sm" className="me-2" />
                Deleting...
              </>
            ) : 'Delete Product'}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}