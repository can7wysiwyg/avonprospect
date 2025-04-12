import { ApiUrl } from "../ApiUrl"


export async function getCategories() {
    try {
        const response = await fetch(`${ApiUrl}/public/all_categories`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if(!response.ok) {
            throw new Error('Server Error ')
        }
        
        return await response.json()
    } catch (error) {
        console.log('Error fetching categories:', error)
    }
}


export async function getBrands() {
    try {

        const response = await  fetch(`${ApiUrl}/public/all_brands`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if(!response.ok) {
            throw new Error('Server Error ')
        }
        

        return await response.json()

    } catch (error) {
        console.log('Error fetching brands:', error)
        
    }
}


export async function getProducts() {

    try {

        const response = await fetch(`${ApiUrl}/public/all_products`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'

            }
        })


        if(!response.ok) {
            throw new Error('Server Error ')
        }
        

        return await response.json()

        
    } catch (error) {
        console.log('Error fetching products:', error)
    }

}


export async function getProductByCat(category) {

    try {

        const response = await fetch(`${ApiUrl}/public/products_by_category/${category}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'

            }
        })


        if(!response.ok) {
            throw new Error('Server Error ')
        }
        

        return await response.json()

        
    } catch (error) {
        console.log('Error fetching products:', error)
        
    }
}



export async function getProductByBrand(brand) {

    try {

        const response = await fetch(`${ApiUrl}/public/products_by_brand/${brand}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'

            }
        })


        if(!response.ok) {
            throw new Error('Server Error ')
        }
        

        return await response.json()

        
    } catch (error) {
        console.log('Error fetching products:', error)
        
    }
}



export async function getCategory(catId) {
    try {

        const response = await fetch(`${ApiUrl}/public/category/${catId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if(!response.ok) {
            throw new Error('Server Error ')
        }
        

        return await response.json()


        
    } catch (error) {
        console.log('Error fetching products:', error)
        
    }
}



export async function getBrand(brandId) {
    try {

        const response = await fetch(`${ApiUrl}/public/brand_single/${brandId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if(!response.ok) {
            throw new Error('Server Error ')
        }
        

        return await response.json()


        
    } catch (error) {
        console.log('Error fetching products:', error)
        
    }
}