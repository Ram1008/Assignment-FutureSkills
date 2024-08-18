import Header from '../../components/header/Header'; 
import Footer from '../../components/footer/Footer'; 


const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="layout_body">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
