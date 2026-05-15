import { useState } from "react";
import JourneyForm from "./JourneyForm";
import BookingSummary from "./BookingSummary";

const TAKEN_SEATS = [2, 5, 9, 14, 18, 22, 27, 31, 35, 38, 42, 46];

const assignSeat = () => {
  const available = [];
  for (let i = 1; i <= 50; i++) {
    if (!TAKEN_SEATS.includes(i)) available.push(i);
  }
  return available[Math.floor(Math.random() * available.length)];
};

function BookingPage({ user, onProceed, onBack }) {
  const [form, setForm] = useState({
    from: "Science Station",
    to: "NLT",
    date: new Date().toISOString().split("T")[0],
    time: "07:30 AM",
  });

  const handleFormChange = (fields) => {
    setForm((prev) => ({ ...prev, ...fields }));
  };

  const handleProceed = () => {
    const seat = assignSeat();
    const price = form.from === "Science Station" ? "GH₵ 2.00" : "GH₵ 1.50";
    onProceed({ ...form, seat, price });
  };

  return (
    <div id="page-booking">
      <div className="page-header">
        <button className="back-btn" onClick={onBack}>
          ← Back
        </button>
        <h2>Reserve Your Seat</h2>
      </div>

      <div
        style={{ maxWidth: "500px", margin: "0 auto", padding: "0 2rem 2rem" }}
      >
        <JourneyForm form={form} onChange={handleFormChange} />

        <div
          className="booking-panel"
          style={{ marginTop: "1rem", textAlign: "center", padding: "1.5rem" }}
        >
          <div style={{ fontSize: "2.5rem", marginBottom: ".5rem" }}>🎲</div>
          <div style={{ fontWeight: 500, marginBottom: ".25rem" }}>
            Seat auto-assigned
          </div>
          <div style={{ fontSize: ".82rem", color: "var(--text2)" }}>
            A seat will be randomly assigned to you when you proceed to payment.
          </div>
        </div>

        <BookingSummary user={user} form={form} onProceed={handleProceed} />
      </div>
    </div>
  );
}

export default BookingPage;
