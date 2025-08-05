import OTP from "./components/OTP";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <OTP otpLength={6} />
    </div>
  );
}
