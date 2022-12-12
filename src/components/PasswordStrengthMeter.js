import React from "react";
import zxcvbn from "zxcvbn";

function PasswordStrengthMeter({ password }) {
  const testResult = zxcvbn(password);

  const num = (testResult.score * 100) / 4;

  const changePasswordColor = () => ({
    width: `${num}%`,
    background: progressColor(),
  });

  const progressColor = () => {
    switch (testResult.score) {
      case 0:
        return "#818181";
      case 1:
        return "#ea1111";
      case 2:
        return "#ffad00";
      case 3:
        return "#9bc158";
      case 4:
        return "#00b500";
      default:
        return "none";
    }
  };
  const progressName = () => {
     switch (testResult.score) {
       case 0:
         return "";
       case 1:
         return "ضعیف";
       case 2:
         return "متوسط";
       case 3:
         return "#قوی";
       case 4:
         return "#بسیار قوی";
       default:
         return "";
     }
   };

  return (
    <div>
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={changePasswordColor()}
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <p style={{ color: progressColor() }}>
        {progressName()}
      </p>
    </div>
  );
}

export default PasswordStrengthMeter;
