export const Category = async() =>{
    const response = await fetch("https://fakestoreapi.com/products/categories")
    const data = response.json()
    return data
}