import AboutUs from './../components/AboutUs';
import Slider from './../components/Slider';
import ContactUs from './../components/ContactUs';
import SectionHero from './../components/SectionHero';

const HomePage = (props) => {
    return ( 
        <div className='p-4 sm:p-3 md:p-0'>
            <SectionHero/>
            <AboutUs/>
            <Slider/>
            <ContactUs/>
        </div>
     );
}
 
export default HomePage;