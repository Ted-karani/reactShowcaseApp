//this is the home part when the user opens the website
//make sure it has that part of COfee R us and description part
//The go to store for your coffee needs
//and a phone number i can use random i dont think its necessary to copy the one in the mock
// i can use the useShop content in canavs to write the loding and error
// i use useShop and pass in the loading and error in and i create a div part and p for them


import { useShop } from './Context'

function Home() {
  const { loading, error } = useShop()

  if (loading) {
    return (
      <div className="home-page">
        <p>Loading...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="home-page">
        <p>{error}</p>
      </div>
    )
  }

  return (
    <div className="home-page">
      <h1 className="home-title">Coffee R Us</h1>
      <p className="home-subtitle">The go to store for your coffee needs</p>
      <p className="home-phone">Call us: 0712345678</p>
    </div>
  )
}

export default Home