import { useState } from "react";
import LogInForm from "./LogInForm";
import RegisterForm from "./RegisterForm";

type SignInModeType = "LOG-IN" | "REGISTER";

type SetSignInProps = {
  signInMode: SignInModeType;
  setSignInMode: React.Dispatch<React.SetStateAction<SignInModeType>>;
};

const SignInForm: React.FC = () => {
  const [signInMode, setSignInMode] = useState<SignInModeType>("LOG-IN");

  return (
    <div className="mt-4 w-full rounded-lg bg-gradient-to-b from-green-700 to-green-800 sm:max-w-screen-sm md:max-w-screen-md">
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
      <div className="h-0.5 bg-zinc-50"></div>
      <div className="m-2 flex justify-center">
        <button className="rounded-md border-2 border-zinc-50 p-1 text-2xl text-zinc-50 transition hover:bg-gradient-to-br hover:from-red-500 hover:to-red-600 hover:shadow-inner hover:shadow-red-600">
          Continue As Guest
        </button>
      </div>
    </div>
  );
};

export default SignInForm;
