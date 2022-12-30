import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = ({children}) => {
    return ( 
          <>
            <Header />
              <div className="h-full m-auto container p-3 sm:p-0">
                {children}
              </div>
            <Footer />
          </>
     );
}
 
export default Layout;