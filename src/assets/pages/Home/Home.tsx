import "./home.css"
import Carouselcomponent from "../../Components/Carousel"
import bulb from "/Bulb.png"
import peopleimg from "/peopleimg.png"
import logoimg from "/logo.png"
import arrow from "/arrow.png"
import diamond from "/diamond.png"
import linechart from "/LineChart.png"
import cyber from "/cyber.png"
import designing from "/designing.png"
import digitalmarketing from "/digitalmarketing.png"
import webapp from "/webapplication.png"
import robotics from "/robotics.png"
import seo from "/seo.png"
import mobileapp from "/mobile.png"
import bigdata from "/bigdat.png"
import Footer from "../../Components/Footer/Footer"
const Home = ()=>{
        return(
            <div className="container-home">
                <div className="upper-content">
                    <div className="upper-header-content" id="upper-content">
                        <h2>WELCOME TO OUR COMMUNITY MORNCAST</h2>
                        <img src={bulb} className="bulb"/>
                        <img src={peopleimg} className="people-img"/>
                    </div>
                    <div className="lower-content">
                        <img src={logoimg}/>
                        <div className="quote-generate">
                            <h6>Get a Quote</h6>
                            <div className="inner-div">
                                <img src={arrow}/>
                            </div>
                        </div>
                    </div>

                    <div className="analysis-section">
                        <div className="analysis-main">
                            <div className="analysis">
                                <h1>46</h1>
                                <h6>Total members</h6>
                            </div>
                            <div className="analysis">
                                <h1>10</h1>
                                <h6>On working projects</h6>
                            </div>
                            <div className="analysis">
                                <h1>1</h1>
                                <h6>Launched event</h6>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="middle-content" id="middle">
                    <div className="upper-middle-container">
                        <h1>What is Morncast</h1>
                        <p style={{color:'#505050',width:'50%'}}>We're a group of high school students who learned to code through creating and sharing. To pay it forward, we're creating a club for high school students for learning and sharing. We use tech to developyoung teenager for their safe development in all sector.</p>
                        <div className="upper-middle-boxes">
                            <div className="middle-box" style={{background:'#FFF'}}>
                                <img src={diamond}/>
                                <h3>Teaching young about tech</h3>
                                <p>Morncast in its different branch in different schools tries to spread theKnowledge of tech young teenagers</p>
                            </div>
                            <div className="middle-box" style={{background:'#F1F1F1'}}>
                                <img src={linechart}/>
                                <h3>Cross problem solving </h3>
                                <p>Morncast add more effort in solving different problems experienced by the society for unlimited development.</p>
                            </div>
                            <div className="middle-box" style={{background:'#F1F1F1'}}>
                                <img src={diamond}/>
                                <h3>Run with time in work</h3>
                                <p>Morncast also adds more effort to make everyday life more easily and efficient to save time and use it in other profitable activities.</p>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-middle-container">
                        <div className="left-middle-container">
                            <h4 style={{color:'yellow'}}>TRENDING EVENT!</h4>
                            <img src={peopleimg}/>
                        </div>
                        <div className="middle-middle-container">
                            <h2>Morncast is organising a youth hackathon</h2>
                            <h2 style={{fontWeight:'300'}}>morncast/kigali-hacks</h2>
                        </div>
                        <div className="right-middle-container">
                            <hr />
                            <a href="https://morncast.live/" target={"_blank"}>Register now</a>
                        </div>
                    </div>
                </div>

                <div className="bottom-content">
                    <div className="bottom-content-upper-boxes">
                        <h1>What we do</h1>
                        <div className="bottom-boxes-container">
                            <div className="bottom-box">
                                <img src={webapp} alt="web-app" />
                                <h2>Web Application</h2>
                                <p>Platform independant business solutions for maximum availability</p>
                            </div>
                            <div className="bottom-box">
                                <img src={designing} alt="designing" />
                                <h2>Designing</h2>
                                <p>We design different things.</p>
                            </div>
                            <div className="bottom-box">
                                <img src={seo} alt="seo" />
                                <h2>SEO</h2>
                                <p>Let the world find you on top of others</p>
                            </div>
                            <div className="bottom-box">
                                <img src={robotics} alt="bigdata" />
                                <h2>Iot/ AI/ RObotic</h2>
                                <p>Advanced autonomous technologies to make life simple</p>
                            </div>
                            <div className="bottom-box">
                                <img src={bigdata} alt="" />
                                <h2>BIG Data</h2>
                                <p>Get your decision making backed by inteligent insight</p>
                            </div>
                            <div className="bottom-box">
                                <img src={cyber} alt="" />
                                <h2>Cyber Security</h2>
                                <p>Make your digital assets secure and protected</p>
                            </div>
                            <div className="bottom-box">
                                <img src={mobileapp} alt="" />
                                <h2>Mobile Applications</h2>
                                <p>The simplest but robust technology to accompany with you</p>
                            </div>
                            <div className="bottom-box">
                                <img src={digitalmarketing} alt="" />
                                <h2>Digital Marketing</h2>
                                <p>Business made easy in a digital world</p>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-bottom-content">
                        <Carouselcomponent/>
                        
                    </div>
                </div>

                 <Footer/>
            </div>
        )
}

export default Home