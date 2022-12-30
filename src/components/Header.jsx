import Navigation from './Navigation';

const Header = () => {
    return (  
        <div className="shadow-md sticky top-0 z-40 backdrop-blur left-0 w-full flex p-2 ">
            <Navigation />
            <div className="mx-4">
                <button onClick={()=>console.log("clicked")}>click</button>
            </div>
        </div>
    );
}
 
export default Header;

// sticky top-0 z-40 backdrop-blur w-full p-4 transition-color flex items-center justify-center  text-slate-900 bg-slate-900/10