import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import smartattend from "/smartattens.png"
import library from "/library.png"
import eLearning from "/e-learning.png"
import wheelchair from "/wheelchair.png"
// import "./carousel.css"

const Carouselcomponent = ()=>{
    
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 13
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
        return(
            <div className="carousels-wrapper">
                 <Carousel responsive={responsive}>
                    <div className="carousel-item">
                        <img src={smartattend} />
                        <h3>Smart -attendance</h3>
                        <p>This is the best way to control and account the day-to-day attendance of students in classes , staff or else where using barcode technology quick and safe.</p>
                    </div>
                    <div className="carousel-item">
                        <img src={library}/>
                        <h2>Smart -library</h2>
                        <p>This is the best way for protecting books loss among students , in addition to that it will help in accounting of book rendering and payments in schools.</p>
                    </div>
                    <div className="carousel-item">
                        <img src={eLearning}/>
                        <h3>E-learning platform</h3>
                        <p>This is a platform that helps studentsto study while at home likely when they are at school .Share resources live courses and many more services
                        </p>
                    </div>
                    <div className="carousel-item">
                        <img src={wheelchair}/>
                        <h3>Smart -wheel</h3>
                        <p>This is the way to help disabled in movement where there is the detection of cars in roads before a certain  time interval. </p>
                    </div>
                </Carousel>
            </div>
           
        )
}

export default Carouselcomponent