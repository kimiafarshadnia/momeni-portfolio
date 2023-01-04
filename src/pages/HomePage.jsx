import AboutUs from './../components/AboutUs';
import Slider from './../components/Slider';
import ContactUs from './../components/ContactUs';
import SectionHero from './../components/SectionHero';
import StepOfBiulding from '../components/StepsOfBiulding';

const HomePage = (props) => {
    return ( 
        <div>
            <SectionHero/>
            <AboutUs/>
            <Slider/>
            <StepOfBiulding/>
            <ContactUs/>
        </div>
     );
}
 
export default HomePage;