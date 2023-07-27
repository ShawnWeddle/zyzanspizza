import { useState } from "react";
import LogInForm from "./LogInForm";
import RegisterForm from "./RegisterForm";

type SignInModeType = "LOG-IN" | "REGISTER";

const SignInForm: React.FC = () => {
  const [signInMode, setSignInMode] = useState<SignInModeType>("LOG-IN");

  return (
    <div className="mt-4 w-full bg-gradient-to-b from-green-700 to-green-800 sm:max-w-screen-sm sm:rounded-lg md:max-w-screen-md">
      <div className="flex justify-center">
        {signInMode === "LOG-IN" && (
          <button className="p-2 text-center text-3xl text-zinc-50">
            Log In
          </button>
        )}
        {signInMode === "REGISTER" && (
          <button className="p-2 text-center text-3xl text-zinc-50">
            Sign Up
          </button>
        )}
      </div>

      <div className="flex w-full justify-center sm:max-w-screen-sm md:max-w-screen-md">
        {signInMode === "REGISTER" && (
          <RegisterForm signInMode={signInMode} setSignInMode={setSignInMode} />
        )}
        {signInMode === "LOG-IN" && (
          <LogInForm signInMode={signInMode} setSignInMode={setSignInMode} />
        )}
      </div>
    </div>
  );
};

export default SignInForm;
