//THIS PART ILL USE CONTEXT AND PROVIDER
//also i use usestate for the coffee list and loading and errors
// i also fetch from here from db.json , my hardcoded data is there
// i save the error in catch and maybe display error occured  then i use and array for data
// i use the length + 1, i refer to canvas
//i use ...coffelist 
//the shopcontext should have the provider hopefully it works
//i confirm in canvas
// i use the patch and get and delete. 
// the crud method quite hard ill check form canvas or i ask my group
// so i add +id after using the fetch so that it tells  the code which id to change specifically



import { createContext, useContext, useState, useEffect } from "react"

const ShopContext = createContext()

export function ShopProvider({ children }) {
    const [coffeeList, setCoffeeList] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(function () {
        fetch('http://localhost:3000/coffee')
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                setCoffeeList(data)
                setLoading(false)
            })
            .catch(function () {
                setError('An error occurred')
                setLoading(false)
            })
    }, [])

    function addCoffee(newCoffee) {
        fetch('http://localhost:3000/coffee', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            setCoffeeList([...coffeeList, data])
        })
    }

    function updateCoffee(id, updates) {
        fetch('http://localhost:3000/coffee/' + id, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updates)
        })
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            const newList = []
            for (let i = 0; i < coffeeList.length; i++) {
                if (coffeeList[i].id === id) {
                    newList.push(data)
                } else {
                    newList.push(coffeeList[i])
                }
            }
            setCoffeeList(newList)
        })
    }


    function deleteCoffee(id) {
        fetch('http://localhost:3000/coffee/' + id, {
            method: 'DELETE'
        })
        .then(function () {
            const newList = []
            for (let i = 0; i < coffeeList.length; i++) {
                if (coffeeList[i].id !== id) {
                    newList.push(coffeeList[i])
                }
            }
            setCoffeeList(newList)
        })
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