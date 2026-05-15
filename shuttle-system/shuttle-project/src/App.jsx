import { useState } from "react";
import Navbar from "./components/Navbar";
import AuthPage from "./components/auth/AuthPage";
import LandingPage from "./components/landing/LandingPage";
import BookingPage from "./components/booking/BookingPage";
import PaymentPage from "./components/payment/PaymentPage";
import ConfirmationPage from "./components/confirmation/ConfirmationPage";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentPage, setCurrentPage] = useState("auth");
  const [bookingData, setBookingData] = useState({});

  const updateBooking = (newFields) => {
    setBookingData((prev) => ({ ...prev, ...newFields }));
  };

  const handleLogin = (user) => {
    setCurrentUser(user);
    setCurrentPage("landing");
  };

  const handleSelectRoute = (route) => {
    updateBooking(route);
    setCurrentPage("booking");
  };

  const handleBookingProceed = (data) => {
    updateBooking(data);
    setCurrentPage("payment");
  };

  const handlePaymentProceed = (data) => {
    updateBooking(data);
    setCurrentPage("confirm");
  };

  const handleBookAnother = () => {
    setBookingData({});
    setCurrentPage("landing");
  };

  return (
    <>
      {currentUser && <Navbar user={currentUser} />}

      {currentPage === "auth" && <AuthPage onLogin={handleLogin} />}

      {currentPage === "landing" && (
        <LandingPage
          onBook={() => setCurrentPage("booking")}
          onSelectRoute={handleSelectRoute}
        />
      )}

      {currentPage === "booking" && (
        <BookingPage
          user={currentUser}
          onProceed={handleBookingProceed}
          onBack={() => setCurrentPage("landing")}
        />
      )}

      {currentPage === "payment" && (
        <PaymentPage
          bookingData={bookingData}
          onProceed={handlePaymentProceed}
          onBack={() => setCurrentPage("booking")}
        />
      )}

      {currentPage === "confirm" && (
        <ConfirmationPage
          user={currentUser}
          bookingData={bookingData}
          onBookAnother={handleBookAnother}
        />
      )}
    </>
  );
}

export default App;
