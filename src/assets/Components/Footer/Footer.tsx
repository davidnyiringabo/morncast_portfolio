import "./footer.css"
import logoimg from "/favicon.png"
import instagram from "/Instagram.png"
import youtube from "/Youtube.png"
import twitter from "/Twitter.png"
import facebook from "/Dribbble.png"
import search from "/search.png"
const Footer = ()=>{
        return(
            <div className="footer-container">
                <div className="footer-main-container">
                    <div className="left-footer footer-child">
                        <h2 style={{clear:'right'}}>Shortcuts!</h2>
                        <a href="#" style={{float:'left',clear:'right'}}>Home</a>
                        <a href="/about">About</a>
                        <a href="/services">Services</a>
                        <a href="/news">News</a>
                        <a href="/contact">Contact</a>

                    </div>
                    <hr />
                    <div className="middle-footer footer-child">
                        <h2>Search our services here!</h2>
                        <div className="search-div">
                            <input type="search" name="search" />
                            <div className="yellow"><img src={search}/></div>
                        </div>
                        <a href="https:/cxrgo.ml" className="middle-footer-link" target={"_blank"}>Go to our official Announcements</a>
                    </div>
                    <hr />
                    <div className="right-footer footer-child">
                        <h2>Morncast community always here for you!</h2>
                        <img src={logoimg}/>
                    </div>
                    <div className="footer-socialmedias">
                        <a href="https:/instagram.com" target={"_blank"}><img src={instagram}/></a>
                        <a href="https:/facebook.com" target={"_blank"}><img src={facebook}/></a>
                        <a href="https:/twitter.com" target={"_blank"}><img src={twitter}/></a>
                        <a href="https:/youtube.com" target={"_blank"}><img src={youtube}/></a>

                    </div>
                </div>
                <footer style={{color:'#fff',marginBottom:'-2%'}}>made with 💪 for Morncast</footer>
            </div>
        )
}

export default Footer