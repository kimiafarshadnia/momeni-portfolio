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
