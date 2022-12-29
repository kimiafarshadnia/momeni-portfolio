import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = ({children}) => {
    return ( 
          <>
            <Header />
              <div>
                {children}
              </div>
            <Footer />
          </>
     );
}
 
export default Layout;