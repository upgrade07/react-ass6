import React from 'react'
const Home = () => {
  return (
    <>
    
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://images.pexels.com/photos/38537/woodland-road-falling-leaf-natural-38537.jpeg" height={"720px"} width={"100vw"} className="d-block w-100" alt="..."/>
    </div>

    <div className="carousel-item">
      <img src="https://images.pexels.com/photos/4051181/pexels-photo-4051181.jpeg?" className="d-block w-100" alt="..." />
    
    </div>
   
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<br /><br />
    </>
  )
}

export default Home