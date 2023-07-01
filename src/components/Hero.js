import Img from "../Test.png";
import {AiOutlineArrowRight} from "react-icons/ai"
function Hero () {
   return (
           <div className="hello">
               <div className="left">
               <div className="cool">
                   <h1>Be better at DSA & CP</h1>
               </div>

               <div className="para">
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br/> eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
               </div>

               <div className="btn-duo">
                   <div >
                       <button className="btn1">Join now <AiOutlineArrowRight /></button>
                   </div>
                   <div>
                       <button className="btn2">View curriculum</button>
                   </div>
               </div>

               <div className="boxes">
                   <div className="check-box">
                       <div className="box-item"></div>
                       <p>Lorem ipsum dolor sit amet</p>
                   </div>
                   <div className="check-box">
                       <div className="box-item"></div>
                       <p>Lorem ipsum dolor sit amet</p>
                   </div>
                   <div className="check-box">
                       <div className="box-item"></div>
                       <p>Lorem ipsum dolor sit amet</p>
                   </div>
                   <div className="check-box">
                       <div className="box-item"></div>
                       <p>Lorem ipsum dolor sit amet</p>
                   </div>
               </div>
               </div>

               <div className="photo">
                   <img src={Img} alt="logo"/>
               </div>
           </div>
   )
}

export default Hero;