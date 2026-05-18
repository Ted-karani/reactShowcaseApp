import { createContext, useContext, useState, useEffect } from "react"

const ShopContext = createContext()

export function ShopProvider({ children }) {
    const [coffeeList, setCoffeeList] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(function () {
    fetch('/db.json')
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            setCoffeeList(data.coffee)
            setLoading(false)
        })
        .catch(function (err) {
            console.log('Fetch error:', err)
            setError('An error occurred')
            setLoading(false)
        })
}, [])

    function addCoffee(newCoffee) {
        const newId = coffeeList.length + 1
        const coffeeToAdd = {
            id: newId,
            name: newCoffee.name,
            description: newCoffee.description,
            origin: newCoffee.origin,
            price: newCoffee.price,
            location: newCoffee.location,
        }
        const newList = [...coffeeList, coffeeToAdd]
        setCoffeeList(newList)
    }

    function updateCoffee(id, updates) {
        const newList = []
        for (let i = 0; i < coffeeList.length; i++) {
            if (coffeeList[i].id === id) {
                newList.push(updates)
            } else {
                newList.push(coffeeList[i])
            }
        }
        setCoffeeList(newList)
    }

    function deleteCoffee(id) {
        const newList = []
        for (let i = 0; i < coffeeList.length; i++) {
            if (coffeeList[i].id !== id) {
                newList.push(coffeeList[i])
            }
        }
        setCoffeeList(newList)
    }

    return (
        <ShopContext.Provider
            value={{
                coffeeList,
                loading,
                error,
                addCoffee,
                updateCoffee,
                deleteCoffee,
            }}
        >
            {children}
        </ShopContext.Provider>
    )
}

export function useShop() {
    return useContext(ShopContext)
}