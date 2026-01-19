import { useState } from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import ProductSection from "./components/ProductSection";
import "/xampp/htdocs/mywebsite/freshreact/node_modules/bootstrap/dist/css/bootstrap.css";
import imagePath from "./assets/logo.jpg";


function App() {

  const [quantities, setQuantities] = useState([0, 0, 0]);

 
  const updateQuantity = (productIndex: number, change: number) => {
 
    const newQuantities = [...quantities];


    newQuantities[productIndex] = Math.max(
      0,
      newQuantities[productIndex] + change
    );

  
    setQuantities(newQuantities);
  };


  const totalCartItems = quantities.reduce((sum, qty) => sum + qty, 0);

  return (
    <>
      
      <NavBar imageSrcPath={imagePath} cartCount={totalCartItems} />

      <HeroSection />

    
      <ProductSection
        quantities={quantities}
        onUpdateQuantity={updateQuantity}
      />
    </>
  );
}

export default App;
