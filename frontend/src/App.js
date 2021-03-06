import React from 'react';
import data from './data';

function App() {
  return (
    <div className="grid-container">
        <header className="row">
            <div>
                <a className="brand" href="/">amazona</a>
            </div>
            <div>
                <a href="/cart">Cart</a>
                <a href="/signin">Sign In</a>
            </div>
        </header>
        <main>
            <div className="row center">
              {
                data.products.map((product)=>(
                  <div key={product._id} className="card">
                    {/* <a href="product.html"> */}
                    <a href={`/product/${product._id}`}>
                    {/*image size: 680px by 830px*/}
                      {/* <img className="medium" src="./images/p1.jpg" alt="product"/> */}
                      <img className="medium" src={product.image} alt={product.name}/>
                    </a>
                  <div className="card-body">
                      {/* <a href="product.html"> */}
                      <a href={`/product/${product._id}`}>
                          <h2>{product.name}</h2>
                      </a>
                      <div className="rating">
                          <span> <i className="fa fa-star"></i> </span>
                          <span> <i className="fa fa-star"></i> </span>
                          <span> <i className="fa fa-star"></i> </span>
                          <span> <i className="fa fa-star"></i> </span>
                          <span> <i className="fa fa-star"></i> </span>
                      </div>
                      <div className="price">${product.price}</div>                        
                  </div>
              </div>
                ))
              }
                
            </div>
        </main>
        <footer className="row center">All right reserved 2021</footer>
    </div>
  );
}

export default App;
