import { useState } from "react";
import { api } from "../../utils/api";
import { createUserSchema } from "~/server/api/auth/schema";

type SignInModeType = "LOG-IN" | "REGISTER";

type SetSignInProps = {
  signInMode: SignInModeType;
  setSignInMode: React.Dispatch<React.SetStateAction<SignInModeType>>;
};

const RegisterForm: React.FC<SetSignInProps> = (props: SetSignInProps) => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(true);
  const [isSignedUp, setIsSignedUp] = useState<boolean>(false);
  const [signUpErrors, setSignUpErrors] = useState<string[]>([]);

  const registerUser = api.user.registerUser.useMutation();

  const handleSubmit = () => {
    const userValidation = createUserSchema.safeParse({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      passwordConfirm: passwordConfirmation,
    });
    if (userValidation.success) {
      registerUser.mutate(
        {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
          passwordConfirm: passwordConfirmation,
        },
        {
          onSuccess() {
            setSignUpErrors([]);
            setIsSignedUp(true);
          },
          onError() {
            setSignUpErrors(["This email is already in use"]);
          },
        }
      );
    } else {
      const userValidationErrors = userValidation.error.issues.map((error) => {
        return error.message;
      });
      setSignUpErrors(userValidationErrors);
    }
  };

  const signUpErrorList = signUpErrors.map((error, index) => {
    return (
      <div key={index} className="m-1 rounded bg-red-50/70 px-2 text-red-600">
        * {error} *
      </div>
    );
  });

  return (
    <div className="flex flex-col items-center justify-between">
      <div className="m-2 flex flex-col">
        <p className="col-span-2 text-lg text-zinc-50">Name</p>
        <div className="flex justify-start">
          <input
            className="w-32 rounded-l bg-white/70 pl-1"
            type="text"
            placeholder="First"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
          <input
            className="w-32 rounded-r border-l bg-white/70 pl-1"
            type="text"
            placeholder="Last"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-lg text-zinc-50" htmlFor="register-email">
            Email
          </label>
          <input
            id="register-email"
            className="my-1 w-64 rounded bg-white/70 pl-1"
            type="text"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-lg text-zinc-50" htmlFor="register-password">
            Password
          </label>
          <input
            id="register-password"
            className="my-1 w-64 rounded bg-white/70 pl-1"
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className="flex flex-col">
          <label
            className="text-lg text-zinc-50"
            htmlFor="register-password-confirm"
          >
            Confirm Password
          </label>
          <input
            id="register-password-confirm"
            className="my-1 w-64 rounded bg-white/70 pl-1"
            type={showPassword ? "text" : "password"}
            placeholder="Confirm password "
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            value={passwordConfirmation}
          />
        </div>
        <div></div>
        <div className="flex justify-center">
          <input
            id="sign-up-show-password-input"
            className="m-0.5"
            type="checkbox"
            checked={showPassword}
            onChange={(e) => {
              if (e.target.checked) {
                setShowPassword(true);
              } else {
                setShowPassword(false);
              }
            }}
          />
          <label
            htmlFor="sign-up-show-password-input"
            className="text-sm text-zinc-50"
          >
            Show Password
          </label>
        </div>
      </div>
      <div className="mb-2 flex justify-center">
        <button
          onClick={handleSubmit}
          disabled={registerUser.isLoading}
          className="rounded-md border-2 border-zinc-50 p-1 text-2xl text-zinc-50 transition hover:bg-gradient-to-br hover:from-red-500 hover:to-red-600 hover:shadow-inner hover:shadow-red-600"
        >
          Sign Up
        </button>
      </div>

      {isSignedUp && (
        <div className="m-1 rounded bg-red-50/70 p-2 text-center">
          Thank you for signing up! Log in to place an order
        </div>
      )}
      {signUpErrors && <div className="mx-1 mb-2">{signUpErrorList}</div>}
      <p className="m-1 text-center text-zinc-50">
        Already have an account?{" "}
        <button
          className="hover:underline"
          onClick={() => {
            props.setSignInMode("LOG-IN");
          }}
        >
          Log In
        </button>
      </p>
    </div>
  );
};

export default RegisterForm;
