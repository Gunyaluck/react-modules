import "./App.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import ProductSection from "./components/ProductSection";
import FAQ from "./components/FAQ";
import { Provider } from "./components/ui/provider"




function App() {
  return (
    <Provider>
    <div>
      
      <Header />
      <MainContent />
      <ProductSection />
      <FAQ />
      <Footer />
    </div>
    </Provider>
  );
}

export default App;
