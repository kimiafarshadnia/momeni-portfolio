import SocialMedia from "./SocialMedia";

const ContactUs = () => {
    return ( 
        <section className="my-4 flex flex-col items-center justify-center">
            <div className="w-full">
                <h1 className="text-2xl md:text-4xl mb-2">Contact Me</h1>
                <div className="mb-8 h-full flex flex-col md:flex-row items-center justify-center md:justify-between">
                    <form className="w-full md:w-2/5 mb-4 md:mb-0">
                        <div className="mb-3">
                            <input type="text" className="px-2 py-1 w-full border rounded " name="name" id="name" placeholder="full name"/>
                        </div>
                        <div className="mb-3">
                            <input type="email" className="px-2 py-1 w-full border rounded " name="email" id="email" placeholder="Email"/>
                        </div>
                        <div className="mb-3">
                            <textarea  rows="5" className="w-full px-2 py-1 border rounded " placeholder="message..."></textarea>
                        </div>
                        <div className="mb-2 w-full bg-violet-300 text-center text-violet-900 font-semibold rounded p-1 cursor-pointer">
                            <button type="submit">Send</button>
                        </div>
                    </form>
                    <div className="w-full md:w-1/5 md:h-64 md:flex md:justify-betweem">
                        <SocialMedia/>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default ContactUs;