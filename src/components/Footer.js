import React from 'react'
import Photo from '../z.png'
import { AiOutlineArrowRight } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='wrapper'>
        <div className='left-content'>
            <div className='content'>
            <h1>
                    Invest in skills,
                    <span className='content-sub-text'> earn 10X </span>
                    of what you paid.
            </h1>
            <br></br>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br></br>eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim<br></br>ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut<br></br>aliquip ex ea commodo consequat.</p>
            </div>

                <div className='footer-points'>
                    <div className="check-box">
                       <div className="box-item"></div>
                       <div>
                        <h1>1.2 Cr/Year</h1>
                        <p>highest fresher package</p>
                       </div>
                   </div>
                   <div className="check-box">
                       <div className="box-item"></div>
                       <div>
                        <h1>Multiple 100 ranks</h1>
                        <p>in kickstart last year</p>
                       </div>
                   </div>
                   <div className="check-box">
                       <div className="box-item"></div>
                       <div>
                        <h1>1000+ Offers</h1>
                        <p>from top companies</p>
                       </div>
                   </div>
                   <div className="check-box">
                       <div className="box-item"></div>
                       <div>
                        <h1>Trusted by IITians</h1>
                        <p>for their career prep</p>
                       </div>
                   </div>
                </div>
        </div>

        <div className='right-content'>
            <div className='prices'>
                <div className='p'>
                    <p className='p1'>Premium Victory Batch</p>
                    <p><s>₹19,999</s></p>
                    <p className='p2'>₹13,999</p>
                </div>
                <div className='z'>
                <img src={Photo} alt="logo"/>
                </div>
            </div>

            <div className='hello-ji'>
            <div className="check-box">
                       <div className="box-item"></div>
                       <p>100+ Hrs Live Content</p>
                   </div>
                   <div className="check-box">
                       <div className="box-item"></div>
                       <p>50+ Hrs Contest</p>
                   </div>
                   <div className="check-box">
                       <div className="box-item"></div>
                       <p>Includes an interview bootcamp and<br></br>access to a mentor network</p>
                   </div>
                   <div className="check-box">
                       <div className="box-item"></div>
                       <p>Enjoy access to our content for one year<br></br>(paid extensions available)</p>
                   </div>
                   <div className="check-box">
                       <div className="box-item"></div>
                       <p>500+ Problems</p>
                   </div>
                   <div className="check-box">
                       <div className="box-item"></div>
                       <p>Flexible payment options, including no-<br></br>cost EMI, are available.</p>
                   </div>
            </div>
            
            <button className='btn-3'> Join Now <AiOutlineArrowRight /></button>
            
        </div>

        
    </div>
  )
}

export default Footer