import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

//Components
import OfferBanner from "./components/OfferBanner";
import Navbar from "./components/Navbar";

//Pages
import HomePage from "./pages/HomePage";
import ProductList from "./pages/ProductPage";
//import CartPage from "./pages/CartPage";
import CartPage from "./components/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import Footer from "./components/Footer";


function App() {

  const location = useLocation();
  const isSpecialRoute = [
    "/products",
    "/cart",
    "/checkout",
    "/contact",
  ].includes(location.pathname);

  const pageVariants = {
    initial: { opacity: 0, x: -100 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: 100 },
  };

  return (
    <div className="w-full min-h-screen text-black bg-primary text-white">
      <OfferBanner />
      <Navbar />
      {!isSpecialRoute && (
        <>
          <HomePage />
        </>
      )}

      <AnimatePresence>
        <Routes location={location} key={location.key}>
          <Route
            path="/products"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={{ duration: 0.5 }}
              >
                <ProductList />
              </motion.div>
            }
          />
          <Route
            path="/cart"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={{ duration: 1.5 }}
              >
                <CartPage />
              </motion.div>
            }
          />
          <Route
            path="/checkout"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={{ duration: 0.5 }}
              >
                <CheckoutPage />
              </motion.div>
            }
          />
          
        </Routes>
      </AnimatePresence>

      <Footer />
    </div>
  );
}

export default App;
