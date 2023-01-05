
const ContactUs = () => {
    return ( 
        <section className="md:h-96 flex items-center justify-center bg-gray-100 py-12">
            <div className="w-full">
               <div className="flex flex-col justify-center items-center mb-8">
                    <h1 className="text-center mb-2">Contact Me</h1>
                    <h3 className="text-center text-2xl font-semibold mb-2 capitalize">way to contact me</h3>
                    <p className="text-center w-full md:w-2/5">Lorem ipsum dolor sit amet consectetur adipisicing  provident optio voluptatem.</p>
               </div>
                <div className="w-full flex flex-col justify-center items-center p-4">
                    <div className="w-full flex flex-col md:flex-row justify-center items-center">
                       <div className="bg-gray-700 border-4 w-full md:w-52 p-2  mb-3">01</div>
                       <div className="bg-gray-700 border-4 w-full md:w-52 p-2  mb-3 md:mx-3">02</div>
                       <div className="bg-gray-700 border-4 w-full md:w-52 p-2  mb-3">03</div>
                    </div>
                    <div className="w-full flex flex-col md:flex-row justify-center items-center">
                       <div className="bg-gray-700 border-4 w-full md:w-52 p-2  mb-3  md:mr-3">04</div>
                       <div className="bg-gray-700 border-4  w-full md:w-52 p-2 mb-3 ">05</div>
                      
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default ContactUs;