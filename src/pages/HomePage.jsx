import AboutUs from './../components/AboutUs';
import Slider from './../components/Slider';
import ContactUs from './../components/ContactUs';
import SectionHero from './../components/SectionHero';

const HomePage = (props) => {
    return ( 
        <div>
            <SectionHero/>
            <AboutUs/>
            <Slider/>
            {/* <ContactUs/> */}
        
        </div>
     );
}
 
export default HomePage;