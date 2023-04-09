import { json } from "react-router-dom"

// ?add data to local
const addToDb = (id) => {
    let shoppingCart = {}
    // get prev data from local
    const storedCart = localStorage.getItem('shopping-cart')
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart)
    }

    // add quantity
    const quantity = shoppingCart[id]
    if (quantity) {
        const newQuantity = quantity + 1
        shoppingCart[id] = newQuantity
    } else {
        shoppingCart[id] = 1
    }

    // set quantity
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
}

// ? Get stored data from cart

const getStoredCart = () => {
    let shoppingCart = {}
    // get prev data from local
    const storedCart = localStorage.getItem('shopping-cart')
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart)
    }
    return shoppingCart /* get korte return must */
}

// remove specific item from local
const removeFromDB = (id) =>{
     // get prev data from local
     const storedCart = localStorage.getItem('shopping-cart')
     if(storedCart){
        const shoppingCart = JSON.parse(storedCart)
        if(id in shoppingCart){
            delete shoppingCart[id]
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
        }
     }
}

// clear all frm local

const deleteShoppingCart=()=>{
    localStorage.removeItem('shopping-cart')
}

export { addToDb,getStoredCart,removeFromDB,deleteShoppingCart }