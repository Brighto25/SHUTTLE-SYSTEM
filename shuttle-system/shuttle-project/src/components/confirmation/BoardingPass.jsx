import BoardingPassHeader from "./BoardingPassHeader";
import RouteDisplay from "./RouteDisplay";
import TripDetails from "./TripDetails";
import CodesSection from "./CodesSection";
import Barcode from "./Barcode";

function BoardingPass({ user, bookingData, bookingId, otp }) {
  return (
    <div className="boarding-pass">
      <BoardingPassHeader />

      <RouteDisplay from={bookingData.from} to={bookingData.to} />

      <TripDetails user={user} bookingData={bookingData} />

      <CodesSection bookingId={bookingId} otp={otp} />

      <Barcode />

      <div className="bp-footer">
        Present this pass to the driver · OTP expires after boarding
        <br />
        For support: shuttle@ucc.edu.gh · 0332-098-000
      </div>
    </div>
  );
}

export default BoardingPass;
