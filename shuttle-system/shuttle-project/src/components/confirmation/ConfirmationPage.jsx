import { useMemo } from "react";
import BoardingPass from "./BoardingPass";
import generateBookingId from "../../utils/generateBookingId";
import generateOTP from "../../utils/generateOTP";

function ConfirmationPage({ user, bookingData, onBookAnother }) {
  const bookingId = useMemo(() => generateBookingId(), []);
  const otp = useMemo(() => generateOTP(), []);

  return (
    <div id="page-confirm">
      <div className="confirm-wrap">
        <div className="success-badge">
          <div className="success-circle">✓</div>
          <h2>Booking Confirmed!</h2>
          <p>Show this pass to the driver when boarding</p>
        </div>

        <BoardingPass
          user={user}
          bookingData={bookingData}
          bookingId={bookingId}
          otp={otp}
        />

        <div style={{ marginTop: "1.25rem", display: "flex", gap: ".75rem" }}>
          <button
            className="btn btn-outline"
            style={{ flex: 1 }}
            onClick={onBookAnother}
          >
            Book Another
          </button>
          <button
            className="btn btn-primary"
            style={{ flex: 1 }}
            onClick={() => window.print()}
          >
            Save / Print
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationPage;
