function BookingSummary({ user, form, selectedSeat, onProceed }) {
  const getPrice = () => {
    return form.from === "Science Station" ? "GH₵ 2.00" : "GH₵ 1.50";
  };

  return (
    <div className="booking-panel" style={{ position: "sticky", top: "70px" }}>
      <h3>Booking Summary</h3>

      <div className="summary-row">
        <span className="summary-label">Passenger</span>
        <span className="summary-val">{user.name}</span>
      </div>
      <div className="summary-row">
        <span className="summary-label">Index No.</span>
        <span className="summary-val">{user.index}</span>
      </div>
      <div className="summary-row">
        <span className="summary-label">From</span>
        <span className="summary-val">{form.from || "—"}</span>
      </div>
      <div className="summary-row">
        <span className="summary-label">To</span>
        <span className="summary-val">{form.to || "—"}</span>
      </div>
      <div className="summary-row">
        <span className="summary-label">Time</span>
        <span className="summary-val">{form.time || "—"}</span>
      </div>
      <div className="summary-row">
        <span className="summary-label">Seat</span>
        <span className="summary-val">
          {selectedSeat ? "Seat " + selectedSeat : "Not selected"}
        </span>
      </div>
      <div
        className="summary-row"
        style={{ border: "none", paddingTop: ".75rem" }}
      >
        <span className="summary-label" style={{ fontSize: "1rem" }}>
          Total
        </span>
        <span className="price-total">{getPrice()}</span>
      </div>

      <button
        className="btn btn-primary"
        style={{ marginTop: "1rem" }}
        onClick={() => {
          if (!selectedSeat) {
            alert("Please select a seat first.");
            return;
          }
          onProceed({ ...form, seat: selectedSeat, price: getPrice() });
        }}
      >
        Proceed to Payment →
      </button>

      <p
        style={{
          fontSize: ".72rem",
          color: "var(--text3)",
          textAlign: "center",
          marginTop: ".6rem",
        }}
      >
        Secured · MoMo / eCash accepted
      </p>
    </div>
  );
}

export default BookingSummary;
