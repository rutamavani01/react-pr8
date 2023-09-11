import './Style.css';
import Data from './Data';
import { useState, useEffect } from 'react';

const Main = () => {
    
    let all = localStorage.getItem('crud') ? JSON.parse(localStorage.getItem('crud')) : [];
    const [catagory, setCatagory] = useState('all');
    const [search,setSearch] = useState('');

    const handleShow = (catagory) => {
        setCatagory(catagory);
    }

    const filterData = catagory === 'all' ? Data : Data.filter(v => v.catagory === catagory);
   
        useEffect(()=>{
            let namesearch = all.filter((item) => {
                return item && item.name && item.name.includes(search); 
            });
            setCatagory(namesearch);
        },[search])  ;

    return (
        <center>
            <header className='bg-dark.bg-gradient text-white'>
                <div className="container m-5">
                    <div className="d-flex justify-content-between ">
                        <div className="w-33">
                            <h1 className='text-white'> <img src="./image/amazon-prime.jpg" alt="" /></h1>
                        </div>
                        <div className="w-33 fw-bolder">
                            Search : <input type="text" onChange={ (e) => setSearch(e.target.value) } value={search} 
                            />
                        </div>
                        <div className="w-33 ">
                            <button className='btn btn-primary rounded-pill'>Buy Now</button>
                        </div>
                    </div>
                </div>
            </header>
            <section>
                <div className="container">
                    <div className="d-flex justify-content-between my-5">
                        <button className="btn btn-outline-danger rounded-pill" onClick={() => handleShow('trending')}>Trending</button>
                        <button className="btn btn-outline-warning rounded-pill" onClick={() => handleShow('latest')}>Latest</button>
                        <button className="btn btn-outline-info rounded-pill" onClick={() => handleShow('action')}>Action</button>
                        <button className="btn btn-outline-info rounded-pill" onClick={() => handleShow('horror')}>Horror</button>
                        <button className="btn btn-outline-info rounded-pill" onClick={() => handleShow('documentry')}>Documentry</button>
                        <button className="btn btn-outline-info rounded-pill" onClick={() => handleShow('drama')}>Drama</button>
                    </div>
                    <div className="d-flex justify-content-evenly">
                        <button className="btn btn-outline-info rounded-pill" onClick={() => handleShow('science fiction')}>Science Fiction</button>
                        <button className="btn btn-outline-info rounded-pill" onClick={() => handleShow('mystry')}>Mystry</button>
                        <button className="btn btn-outline-info rounded-pill" onClick={() => handleShow('disaster')}>Disaster</button>
                        <button className="btn btn-outline-success rounded-pill" onClick={() => handleShow('adventure')}>Adventure</button>
                        <button className="btn btn-outline-info rounded-pill" onClick={() => handleShow('animation')}>Animation</button>
                        <button className="btn btn-outline-info rounded-pill" onClick={() => handleShow('thriller')}>Thriller</button> 
                        <button className="btn btn-outline-info rounded-pill" onClick={() => handleShow('all')}>All</button>
                    </div>
                </div>
            </section>

            <div className='container mt-5'>
                <div className='row'>
                    {filterData.map((item) => {
                        const { name, price, catagory, image } = item;
                        return (
                            <div className="card bg-dark text-white">
                                <img src={image} className="card-img" alt="..." />
                                <div className="card-img-overlay">
                                </div>
                                <h5 className="card-title fs-4 m-1 fw-bold text-info">{name}</h5>
                                <p className="card-text fs-6 m-1 fw-bolder text-white">{catagory}</p>
                                <button type='button' className='btn btn-primary'>{price}</button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </center>
    )
}
export default Main;