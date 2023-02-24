import React, { FC, useState, useEffect } from 'react'
import Car from '../image/Car.jpg';
import Mammoth from '../image/Mammoth.jpg'
import download from '../image/download.png'
import BE from '../image/BE.jpg'
import home from '../image/bgr3.png'
import resume from '../image/bgr2.png'
import portfolio from '../image/bgr.png'
import blog from '../image/pen-icon-18-256.png'
import feedback from '../image/feedback.png'
import contacts from '../image/contact.png'
import pic1 from '../image/pic1.png'
import pic2 from '../image/pic2.png'
import pic3 from '../image/pic3.png'

function HomePage () {
//<input type="image" src={Car} className='car'/>
    
    return (
        <div className='grid-container'>
            <div className='header'>
                <form action="/signup">
                    <button className='signup'>Signup</button>
                </form>
                <form action="/login">
                    <button className='login'>Login</button>
                </form>
            </div>
            <div className='pic'>
                <img src={Mammoth} className='image' />
            </div>
            <div className='topic'>
                <div className='name'>Suphanut Chandee</div>
                <div className='download'><img src={download} className='downloadimg'/></div>
                <div className='position'>Junior Front-end Developer</div>
                <div className='be'><img src={BE} className='beimg' /></div>
                <div className='home'><img src={home} className='icon' /> <div className='icontext'>Home</div></div>
                <div className='resume'><img src={resume} className='icon' /> <div className='icontext'>resume</div></div>
                <div className='portfolio'><img src={portfolio} className='icon' /> <div className='icontext'>portfolio</div></div>
                <div className='contacts'><img src={contacts} className='icon' /> <div className='icontext'>contacts</div></div>
                <div className='feedback'><img src={feedback} className='icon' /> <div className='icontext'>feedback</div></div>
                <div className='blog'><img src={blog} className='icon' /> <div className='icontext'>blog</div></div>
            </div>
            <div className='details'>
                <div className='grid-container'>
                <div className='detailstopic'>GRIDUS RESUME HTML TEMPLATE</div>
                <div className='detailssubtopic'>PERFECT FOR CV / RESUME OR PORTFOLIO WEBSITE</div>
                <div className='gridsub'>
                    <img src={pic1} className='gridsubpic' />
                    <div className='subTopic'>MODERN</div>
                    <div></div>
                    <div className='subdetails'>The Gridus Resume Template has an unique modern flat intuitive design. You can choose one of 8 Color schemes.</div>
                </div>
                <div className='gridsub'>
                    <img src={pic2} className='gridsubpic' />
                    <div className='subTopic'>SIMPLE CV</div>
                    <div></div>
                    <div className='subdetails'>Gridus Personal Template is the simple, clean and stylish fully-responsive resume theme with modern creative design.</div>
                </div>
                <div className='gridsub'>
                    <img src={pic3} className='gridsubpic' />
                    <div className='subTopic'>RESPONSIVE</div>
                    <div></div>
                    <div className='subdetails'>Works fast and looks fine on any device with the wide range of the screen resolution. Supports all the Google SEO rules.</div>
                </div>
                </div>
            </div>
            <div className='info'>
                <div className='personalinfo'>PERSONAL INFO</div>
                <div className='gridsub'>
                    <div className='personalinfoTitle'>Name:</div> <div className='personalinfodetails'>Suphanut Chandee</div>
                    <div className='personalinfoTitle'>BIRTH DATE:</div> <div className='personalinfodetails'>xx/xx/xxxx</div>
                    <div className='personalinfoTitle'>ADDRESS:</div> <div className='personalinfodetails'>xxx/xxx XXXhouse XXX District XXX Subdistrict XXX xxxxx</div>
                    <div className='personalinfoTitle'>PHONE:</div> <div className='personalinfodetails'>xxx-xxxxxxx</div>
                    <div className='personalinfoTitle'>EMAIL:</div> <div className='personalinfodetails'>xxxxxx@xx.xx</div>
                </div>
            </div>
        </div>
    )
}

export default HomePage
