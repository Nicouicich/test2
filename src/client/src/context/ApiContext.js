import React from "react"
import axios from "axios"

const ApiContext = React.createContext()
const { Provider } = ApiContext
const ApiProvider = ({ children }) => {
  const [count, setCount] = React.useState(0)
  const [orders, setOrders] = React.useState([])
  const [ingredients, setIngredients] = React.useState([])
  const [pendingPlates, setPendingPlates] = React.useState([])
  const [purchases, setPurchases] = React.useState([])

  // Create new plate
  const handlePlate = () => {
    axios.post(`${process.env.REACT_APP_URL}/plates`).then((res) => {
      setCount(count + 1)
    }).catch((err) => {
      console.error(err)
    })
  }

  // Get all orders
  const getOrders = () => {
    axios.get(`${process.env.REACT_APP_URL}/plates/all`).then((res) => {
      setOrders(res.data.data.reverse())
    }).catch(err => {
      console.error(err)
    })
  }

  // Get All Ingredients
  const getIngredients = () => {
    axios.get(`${process.env.REACT_APP_URL}/ingredients`).then((res) => {
      setIngredients(res.data.data)
    }).catch(err => {
      console.error(err)
    })
  }
  
  // Get All purchases
  const getPurchases = () => {
    axios.get(`${process.env.REACT_APP_URL}/purchases`).then((res) => {
      setPurchases(res.data.data)
    }).catch(err => {
      console.error(err)
    })
  }

  // Get All plates
  const getPlates = () => {
    axios.get(`${process.env.REACT_APP_URL}/plates/pending`).then((res) => {
      setPendingPlates(res.data.data)
    }).catch(err => {
      console.error(err)
    })
  }

  // Update mount components based on count changes 
  React.useEffect(() => {
    getPlates()
    getOrders()
    getIngredients()
    getPurchases()
  },[count])


   return (
    <Provider
      value={{
        handlePlate,
        count,
        orders,
        purchases,
        ingredients,
        pendingPlates,
      }}
    >
      {children}
    </Provider>
   )
}
export { ApiContext, ApiProvider }