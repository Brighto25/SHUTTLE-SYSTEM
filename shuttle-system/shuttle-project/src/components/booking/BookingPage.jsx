import { useState } from "react";
import JourneyForm from "./JourneyForm";
import SeatMap from "./SeatMap";
import BookingSummary from "./BookingSummary";

function BookingPage({ user, onProceed, onBack }) {
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [form, setForm] = useState({
    from: "Science Station",
    to: "NLT",
    date: new Date().toISOString().split("T")[0],
    time: "07:30 AM",
  });

  const handleFormChange = (fields) => {
    setForm((prev) => ({ ...prev, ...fields }));
    setSelectedSeat(null);
  };

  return (
    <div id="page-booking">
      <div className="page-header">
        <button className="back-btn" onClick={onBack}>
          ← Back
        </button>
        <h2>Reserve Your Seat</h2>
      </div>

      <div className="booking-layout">
        <div>
          <JourneyForm form={form} onChange={handleFormChange} />
          <SeatMap selectedSeat={selectedSeat} onSelect={setSelectedSeat} />
        </div>

        <BookingSummary
          user={user}
          form={form}
          selectedSeat={selectedSeat}
          onProceed={onProceed}
        />
      </div>
    </div>
  );
}

export default BookingPage;
