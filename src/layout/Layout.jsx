import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = ({children}) => {
    return ( 
          <>
            <Header />
              <main className="h-full m-auto container p-3 sm:p-0">
                {children}
              </main>
            <Footer />
          </>
     );
}
 
export default Layout;