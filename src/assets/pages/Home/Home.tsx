import "./home.css"
import bulb from "/Bulb.png"
import peopleimg from "/peopleimg.png"
import logoimg from "/logo.png"
import arrow from "/arrow.png"
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
                        <img src={logoimg} />
                        <div className="quote-generate">
                            <div className="inner-div">
                                <img src={arrow}/>
                            </div>
                        </div>
                    </div>
                </div>
                 
            </div>
        )
}

export default Home