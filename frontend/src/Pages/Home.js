import React from 'react'

const Home = () => {
  return (
    <div className='container'>
      <div className="container">
        <div className="col-md-10">
        <h1>Hello,Admin </h1>
        </div>
      </div>
      <div className="col-md-6">
        <div className="container">
            <div className="container">
            <form>
            <button className='btn btn-primary'>Upload your Profile Photo</button>
            <button className='btn btn-success'>Save</button>
            <button className='btn btn-danger'>View</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
