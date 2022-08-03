import { getProducts } from "./database.js"

const products = getProducts()

export const Products = () => {
    let html = `<ul>`

    for (const product of products) {
        html += `<li id="product--${product.id}">${product.name}</li>`
    }

    html += "</ul>"

    return html
}

document.addEventListener(
    'click',
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if(itemClicked.id.startsWith('product')) {
            const [,productID] = itemClicked.id.split('--')
            //invoke function
            window.alert(getProductPrice(productID))
        }
    }
)

//function with a parameter
//should recieve a productID 
const getProductPrice = (productIDselected) => {
    let html =" "
    //iterate through the products array of objects
    for(const product of products) {
        //if statement if productID matches the array of objects of products
        if(product.id === parseInt(productIDselected)) {
            //then return a string with the product selected.
            html += `${product.name} costs $${product.price}`
            //large coffee costs $
        }
    }
    return html
}

