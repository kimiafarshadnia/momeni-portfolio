const SectionHero = () => {
    return ( 
        <section className="h-screen p-4 md:p-8 flex items-center justify-center bg-hero bg-center bg-cover bg-fixed">
            <div className="w-full flex flex-col sm:flex-row items-center justify-around h-80 sm:h-96">
                <div className="w-full md:w-1/2 text-center backdrop-brightness-50 py-12 px-4 sm:px-0 sm:p-12 text-white">
                    <h1 className="text-xl sm:text-4xl mb-2 font-bold">
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