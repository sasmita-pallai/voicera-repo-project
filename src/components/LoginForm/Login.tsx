import { useState } from "react";

import LoginForm from "./RightPanel/LoginForm";
import ResetPassword from "./RightPanel/ResetPassword";
import Heading from "./LeftPanel/Heading";
import CreatePassword from "./RightPanel/CreatePassword";
import Done from "./RightPanel/Done";
const Login = () => {
  const [step, setStep] = useState<"login" | "forgot" | "update" | "done">(
    "login"
  );

  return (
    <div className="relative flex flex-col min-h-screen overflow-hidden bg-primaryA text-primaryB lg:flex-row">
      <img
        src="/images/LoginImages/pink.svg"
        alt="Pink Bubble"
        className="absolute top-[-100px] left-[-10px] w-[200px] opacity-100 z-0"
      />
      <img
        src="/images/LoginImages/violet.svg"
        alt="Violet Bubble"
        className="absolute top-[150px] left-[50px] w-[200px] opacity-20 z-0"
      />
      <img
        src="/images/LoginImages/Blue.svg"
        alt="Blue Bubble"
        className="absolute top-[10px] right-[20px] w-[150px] opacity-90 z-0"
      />
      <img
        src="/images/LoginImages/violet.svg"
        alt="Violet Bubble"
        className="absolute bottom-[60px] left-[20px] w-[200px] opacity-30 z-0"
      />
      <img
        src="/images/LoginImages/pink.svg"
        alt="Pink Bubble"
        className="absolute bottom-[150px] right-[120px] w-[300px] opacity-90 z-0"
      />
      <img
        src="/images/LoginImages/violet.svg"
        alt="Deep Violet Bubble"
        className="absolute bottom-[200px] left-[700px] w-[200px] opacity-90 z-0"
      />

      <div className="z-10 flex items-center justify-center p-6 lg:w-1/2 lg:p-10">
        <Heading />
      </div>

      <div className="z-10 flex items-center justify-center w-full p-6 lg:w-1/2 lg:p-10">
        {step === "login" && (
          <div>
            <LoginForm
              key={location.pathname}
              onForgot={() => setStep("forgot")}
              onLoginSuccess={() => console.log("Logged in!")}
            />
          </div>
        )}
        {step === "forgot" && (
          <ResetPassword
            onNext={() => setStep("update")}
            onBackToLogin={() => setStep("login")}
          />
        )}
        {step === "update" && (
          <CreatePassword onCreate={() => setStep("done")} />
        )}

        {step === "done" && <Done onLoginAgain={() => setStep("login")} />}
      </div>
    </div>
  );
};

export default Login;
