const SectionHero = () => {
    return ( 
        <section className="">
            <div className="w-full flex flex-col sm:flex-row items-center justify-around h-96">
                <div className="w-full md:w-1/2 text-center">
                    <img src="" alt="" />
                    <h1 className="text-2xl">
                        RAHMAN
                        <br/>
                        MOMENI
                    </h1>
                </div>

                <div className="w-full md:w-1/2">
                    <div className="grid grid-rows-3 grid-flow-col gap-9">
                        <div className="row-span-6 col-span-2 bg-violet-300 rounded h-64">01</div>
                        <div className="col-span-2 row-span-3  bg-violet-300 rounded">02</div>
                        <div className="row-span-3 col-span-2 bg-violet-300 rounded">03</div>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default SectionHero;