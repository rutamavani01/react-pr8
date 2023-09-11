import './Style.css';
import Data from './Data';
import { useState, useEffect } from 'react';

const Main = () => {
    
    const [catagory, setCatagory] = useState('all');
    const [search,setSearch] = useState('');
    const [filter,setFilter]= useState([]);
    
    useEffect(()=>{
            let filterData = catagory === 'all' ? Data : Data.filter(item => item.catagory === catagory);

            let namesearch = filterData.filter((item) => {
                return item.name.toLowerCase().includes(search.toLowerCase())
            })
            setFilter(namesearch);
        },[catagory,search])  ;

    return (
        <center>
            <header className='bg-dark.bg-gradient text-white'>
                <div className="container m-5">
                    <div className="d-flex justify-content-between ">
                        <div className="w-33">
                            <h1 className='text-white'> <img src="./image/amazon-prime.jpg" alt="" /></h1>
                        </div>
                        <div className="w-33 fw-bolder">
                            Search : <input type="text" onChange={ (e) => setSearch(e.target.value) } value={search} placeholder='Enter movie name'
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
                        <button className="btn btn-outline-danger rounded-pill" onClick={() => setCatagory('trending')}>Trending</button>
                        <button className="btn btn-outline-warning rounded-pill" onClick={() => setCatagory('latest')}>Latest</button>
                        <button className="btn btn-outline-info rounded-pill" onClick={() => setCatagory('action')}>Action</button>
                        <button className="btn btn-outline-info rounded-pill" onClick={() => setCatagory('horror')}>Horror</button>
                        <button className="btn btn-outline-info rounded-pill" onClick={() => setCatagory('documentry')}>Documentry</button>
                        <button className="btn btn-outline-info rounded-pill" onClick={() => setCatagory('drama')}>Drama</button>
                    </div>
                    <div className="d-flex justify-content-evenly">
                        <button className="btn btn-outline-info rounded-pill" onClick={() => setCatagory('science fiction')}>Science Fiction</button>
                        <button className="btn btn-outline-info rounded-pill" onClick={() => setCatagory('mystry')}>Mystry</button>
                        <button className="btn btn-outline-info rounded-pill" onClick={() => setCatagory('disaster')}>Disaster</button>
                        <button className="btn btn-outline-success rounded-pill" onClick={() => setCatagory('adventure')}>Adventure</button>
                        <button className="btn btn-outline-info rounded-pill" onClick={() => setCatagory('animation')}>Animation</button>
                        <button className="btn btn-outline-info rounded-pill" onClick={() => setCatagory('thriller')}>Thriller</button> 
                        <button className="btn btn-outline-info rounded-pill" onClick={() => setCatagory('all')}>All</button>
                    </div>
                </div>
            </section>

            <div className='container mt-5'>
                <div className='row'>
                    {filter.map((item) => {
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