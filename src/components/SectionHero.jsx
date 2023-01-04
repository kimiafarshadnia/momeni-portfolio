const SectionHero = () => {
    return ( 
        <section className="h-full p-8 flex items-center justify-center bg-hero-section bg-center bg-cover bg-fixed">
            <div className="w-full flex flex-col sm:flex-row items-center justify-around h-96">
                <div className="w-full md:w-1/2 text-center backdrop-brightness-50 p-12 text-white transition-all">
                    <h1 className="text-xl sm:text-4xl mb-2">
                        RAHMAN MOMENI
                    </h1>
                    <h6 className="capitalize mb-4">civil engineer</h6>
                    <p className="text-xs sm:text-sm">welcome to my portfolio website.
                        <br/>
                        you can contact me for your project 
                    </p>
                </div>
            </div>
        </section>
     );
}
 
export default SectionHero;