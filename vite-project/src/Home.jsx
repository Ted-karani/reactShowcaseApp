import { useShop } from './Context'

function Home() {
  const { storeInfo, loading, error } = useShop()

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
      <h1 className="home-title">{storeInfo.name}</h1>
      <p className="home-subtitle">{storeInfo.description}</p>
      <p className="home-phone">Call us: {storeInfo.phone_number}</p>
    </div>
  )
}

export default Home