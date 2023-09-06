import './Style.css';
const Main = () => {
    return (
       <body>
         <center>
            <div className="container p-3">
                <div className="d-flex justify-content-between mb-5">
                    <div className="w-33">
                        <h1 className='text-white'>Amazon Prime</h1>
                    </div>
                    <div className="w-33">
                        Search:- <input type="text"
                        />
                    </div>
                    <div className="w-33">
                        <button>Buy Now</button>
                    </div>
                </div>
            </div> 
            <section>
                <div className="container">
                    <div className="d-flex justify-content-between my-5">   
                        <button className="btn btn-outline-danger">Trending</button>
                        <button className="btn btn-outline-warning">Latest</button>
                        <button className="btn btn-outline-info">Action</button>
                        <button className="btn btn-outline-info">Horror</button>
                        <button className="btn btn-outline-info">Documentry</button>
                        <button className="btn btn-outline-info">Drama</button>
                    </div>
                    <div className="d-flex justify-content-evenly">   
                       <button className="btn btn-outline-info">Science Fiction</button>
                        <button className="btn btn-outline-info">Mystry</button>
                        <button className="btn btn-outline-info">Disaster</button>
                        <button className="btn btn-outline-success">Adventure</button>
                        <button className="btn btn-outline-info">Animation</button>
                        <button className="btn btn-outline-info">Thriller</button>
                    </div>
                </div>
            </section>
        </center>
       </body>
    )
}
export default Main;