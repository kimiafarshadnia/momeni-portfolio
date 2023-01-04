import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = ({children}) => {
    return ( 
          <>
            <Header />
              <main className="w-full h-full m-auto ">
                {children}
              </main>
            <Footer />
          </>
     );
}
 
export default Layout;