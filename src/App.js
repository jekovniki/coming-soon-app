import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import mascott from "./assets/mascott-speeding.webp";

const Header = lazy(() => import('./layouts/Header'));
const Footer = lazy(() => import('./layouts/Footer'));
const MainPage = lazy(() => import('./pages/Main'));
const ThankYouPage = lazy(() => import('./pages/ThankYou'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicy'));
const TermsPage = lazy(() => import('./pages/Terms'));

function App() {

  return (
    <div className="App">
        <Suspense>
          <Header />
        </Suspense>
        <Suspense fallback={<div style={{height:"100vh", display: "flex", alignItems: "center", justifyContent: "center"}}><img src={mascott} alt="Loading" width="70px" height="100px"/></div>}>
          <Routes>
                <Route exact path="/" element={<MainPage />} />
                <Route exact path="/thank-you" element={<ThankYouPage/>} />
                <Route exact path="/privacy" element={<PrivacyPolicyPage/>} />
                <Route exact path="/terms-conditions" element={<TermsPage/>} />
            </Routes>
        </Suspense>
        <Suspense>
          <Footer />
        </Suspense>
    </div>
  );
}

export default App;
