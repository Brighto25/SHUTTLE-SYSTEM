function CodesSection({ bookingId, otp }) {
  return (
    <div className="bp-codes">
      <div className="bp-code-box">
        <label>Booking ID</label>
        <div className="code">{bookingId}</div>
      </div>
      <div className="bp-code-box">
        <label>OTP / Driver Code</label>
        <div className="code otp">{otp}</div>
      </div>
    </div>
  );
}

export default CodesSection;
