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