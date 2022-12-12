import { useState } from "react";
import PasswordStrengthMeter from "./components/PasswordStrengthMeter";

function App() {

  const [password , setPassword] = useState("");

  return (
    <div className="container">
        <div className="col-md-6 mx-auto">
          <h3 className="text-center py-5">پسووردتو بزن</h3>
          <div className="form-group mb-3">
            <input 
              type="text"
              className="form-control"
              placeholder="پسوورد شما"
              onChange={(e)=> setPassword(e.target.value)}
              />
          </div>
          <PasswordStrengthMeter password={password} />
        </div>
    </div>
  );
}

export default App;
