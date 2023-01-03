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
            <ContactUs/>
        <p className='text-violet-500 dark:text-orange-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur enim perferendis nisi rem fuga nostrum, iure nihil itaque repudiandae aspernatur rerum expedita esse repellat officia incidunt autem amet minima recusandae!</p>
        </div>
     );
}
 
export default HomePage;