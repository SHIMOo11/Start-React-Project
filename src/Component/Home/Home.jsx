import React from 'react'
import Star from '../Star/Star'
import avatar from './avataaars.svg'

import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import '@fortawesome/fontawesome-free/css/all.min.css';
// import Portfolio from '../Portfolio/Portfolio';
// import About from '../About/About';
// import Contact from '../Contact/Contact';


export default function Home() {
    return <>
    <div className="home">
        <div className="container home-info">
            {/* <img src={avatar} alt="" className="w-25 mt-5 py-4"/> */}
            <img src="./../../avataaars.svg" alt="" className="w-25 mt-5 py-4"/>
            <h1 className='my-1'>Start React</h1>
            <Star/>
            <h5 className='my-1'>Graphic Artist - Web Designer - Illustrator</h5>

        </div>


    </div>
    {/* <Portfolio/> */}
    {/* <About/> */}
    {/* <Contact/> */}
    
    </>
}