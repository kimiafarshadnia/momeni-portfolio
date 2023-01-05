import villa2  from '../image/villa2.jpg';
import img1  from '../image/img1.jpg';
import img2  from '../image/img2.jpg';
import img3  from '../image/img3.jpg';
const AboutUs = () => {
    return ( 
        <section className="py-8 flex items-center justify-center bg-gray-100">
            <div className="flex flex-col sm:flex-row justify-between items-center">
                <div className=" flex flex-col justify-center items-center mb-8">
                    <h1 className="text-center mb-2">About Me</h1>
                    <h3 className="text-center text-2xl font-semibold mb-2 capitalize">who i am </h3>
                    <p className="text-center p-4 md:w-4/5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum maxime minus pariatur nulla autem quisquam, doloribus ex vitae saepe assumenda facere in eveniet nesciunt necessitatibus sit nostrum, provident optio voluptatem.</p>
               </div>
                <div className="w-full flex flex-col justify-center items-cenetr p-4">
                    <div className="flex justify-center mb-4">
                        <div className="flex justify-center items-center w-full">
                            <img src={villa2}  alt="" srcset="" />
                        </div>
                    </div>

                    <div className="flex justify-between">
                        <div className="flex justify-center items-center mr-2">
                           <img src={img3} alt="" srcset="" />
                        </div>
                        <div className="flex justify-center items-center">
                            <img src={img3} alt="" srcset="" />
                        </div>
                    </div>
                   
                    
                </div>
            </div>
        </section>
     );
}
 
export default AboutUs;