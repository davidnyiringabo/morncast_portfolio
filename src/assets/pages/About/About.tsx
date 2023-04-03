import Footer from "../../Components/Footer/Footer"
import about_people from "/whoweare.png"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../../Components/carousel.css"
import davidimg from "/david.png"
import brunoimg from "/bruno.png"
import castellaimg from "/castella.png"
import herInTech from "/herintech.png"
import hackclub from "/hackclub.png"
import canelgy from "/mellonuniversity.png"
import "./about.css"
const About = ()=>{

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2.5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      const items = [
        {
            position: "CEO",
            name: 'MUDACUMURA BRUNO Blaise',
            title: 'Fullstack developer',
            img: brunoimg

        },
        {
            position: "EGO",
            name: 'INEZA CINTA CASTELLA',
            title: 'Backend developer',
            img: castellaimg
             

        },
        {
            position: "CTO",
            name: 'David NYIRINGABO',
            title: 'Fullstack developer',
            img: davidimg

        },
        {
            position: "Ass CTO",
            name: 'Bruno GANZA',
            title: 'Designer',
            img: castellaimg

        },
        {
            position: "HR Manager",
            name: 'Innocent NISHIMWE',
            title: 'HR Manager',
            img: brunoimg

        },
      ]

    return(
        <div className="about-page-container">
            <div className="upper-about-content">
                <div className="left-about-upper">
                    <h1>Who we are....</h1>
                    <p style={{color:'#565656'}}>At Morncast, we believe in a systematic approach for any project be it complex or simple. We are a group of individuals with a various set of skill set varies from Digital Marketing to IoT/Robotics solutions. We have our dedicated team for your project which uses various methods such as agile Scrum & agile Kanban. We ensure top-notch quality, on-time delivery, and agility for your project.</p>
                </div>
                <div className="right-about-upper">
                    <img src={about_people}  />
                </div>
            </div>
            <div className="midde-about-content">
                <h2>Meet Our Team</h2>
                <div className="carousels-wrapper">
                 <Carousel responsive={responsive} >
                    {items.map(item=>{
                     <div className="carousel-item">
                         <img src={item.img} />
                         <h3>{item.title}</h3>
                         <p>{item.position} {item.name}.</p>
                     </div>
                    })}
                        <div className="carousel-item">
                            <img src={items[0].img} />
                            <h3>{items[0].title}</h3>
                            <p><strong>{items[0].position}</strong>{items[0].name}</p>
                        </div>
                        <div className="carousel-item">
                        <img src={items[1].img} />
                            <h3>{items[1].title}</h3>
                            <p><strong>{items[1].position}</strong>{items[1].name}</p>
                        </div>
                        <div className="carousel-item">
                        <img src={items[2].img} />
                            <h3>{items[2].title}</h3>
                            <p><strong>{items[2].position}</strong>{items[2].name}</p>
                        </div>
                        <div className="carousel-item">
                            <img src={items[3].img} />
                            <h3>{items[3].title}</h3>
                            <p><strong>{items[3].position}</strong>{items[3].name}</p>
                        </div>
                        <div className="carousel-item">
                            <img src={items[0].img} />
                            <h3>{items[0].title}</h3>
                            <p><strong>{items[0].position}</strong>{items[0].name}</p>
                        </div>
                </Carousel>
            </div>
            </div>

            <div className="lower-about-content">
                <div className="upper-lower-content">
                        <h1>Who we are engaged with...</h1>
                        <p>We partner with humble, trusting leaders that think strategically. Businessmen and women who believe in the change they're making, embrace their mission and want to bring in a partner to accelerate their growth.</p>
                        <div className="sponsors-container">
                            <img src={herInTech}/>
                            <img src={hackclub}/>
                            <img src={canelgy}/>
                        </div>
                    
                </div>
                <div className="lower-lower-content">
                    <div className="lower-middle-content">
                        <div className="left-lower-middle-content">
                            <h1>Stay in the loop</h1>
                            <p style={{color:'#707070',paddingTop:'3%'}}>if you want to connect with us, this is the right place for that </p>
                        </div>
                        <div className="lower-right-content">
                            <input type="text" name="email" placeholder="Enter email address"/>
                            <button type="button">Continue</button>
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer/>            
        </div>

        
    )
}

export default About