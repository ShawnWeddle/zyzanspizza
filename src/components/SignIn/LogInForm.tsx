import { useState } from "react";
import { api } from "../../utils/api";
import { logInUserSchema } from "~/server/api/auth/schema";
import { useAuthContext } from "~/hooks/useAuthContext";

const LogInForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [logInErrors, setLogInErrors] = useState<string[]>([]);

  const { authState, authDispatch } = useAuthContext();
  const user = authState.user;

  const logInUser = api.user.logInUser.useMutation();

  const handleSubmit = () => {
    const userValidation = logInUserSchema.safeParse({
      email: email,
      password: password,
    });
    if (userValidation.success) {
      logInUser.mutate(
        {
          email: email,
          password: password,
        },
        {
          onSuccess(data) {
            authDispatch({
              type: "LOGIN",
              payload: {
                token: data.token,
                userId: data.user.userId,
                email: data.user.email,
                firstName: data.user.firstName,
                lastName: data.user.lastName,
              },
            });
            setLogInErrors([]);
            setIsLoggedIn(true);
          },
          onError(error) {
            if (error.data?.httpStatus === 400) {
              setLogInErrors(["Invalid Email or Password"]);
            } else {
              setLogInErrors(["Unexpected Log In Error has occurred"]);
            }
          },
        }
      );
    } else {
      const userValidationErrors = userValidation.error.issues.map((error) => {
        return error.message;
      });
      setLogInErrors(userValidationErrors);
    }
  };

  const logInErrorList = logInErrors.map((error, index) => {
    return (
      <div key={index} className="m-1 rounded bg-red-50/70 px-2 text-red-600">
        * {error} *
      </div>
    );
  });

  if (user) {
    return (
      <div className="flex flex-col items-center justify-center gap-4">
        <p className="mt-2 text-center text-3xl text-zinc-50">
          You are logged in as {user.email}
        </p>
        <div className="mb-2 flex justify-center">
          <button
            onClick={() => {
              authDispatch({ type: "LOGOUT", payload: null });
            }}
            className="rounded-md border-2 border-zinc-50 p-1 text-2xl text-zinc-50 transition hover:bg-gradient-to-br hover:from-red-500 hover:to-red-600 hover:shadow-inner hover:shadow-red-600"
          >
            Log Out
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div className="flex flex-col justify-between">
          <p className="mt-2 text-center text-3xl text-zinc-50">Log In</p>
          <div className="m-5 grid grid-cols-2">
            <p className="col-span-2 text-lg text-zinc-50">Email</p>
            <input
              className="col-span-2 my-1 rounded bg-white/70 pl-1"
              type="text"
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <p className="text-lg text-zinc-50">Password</p>
            <input
              className="my-1 rounded bg-white/70 pl-1"
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <div></div>
            <div className="flex justify-center">
              <input
                id="log-in-show-password-input"
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
                htmlFor="log-in-show-password-input"
                className="text-sm text-zinc-50"
              >
                Show Password
              </label>
            </div>
          </div>
          <div className="mb-2 flex justify-center">
            <button
              onClick={handleSubmit}
              disabled={logInUser.isLoading}
              className="rounded-md border-2 border-zinc-50 p-1 text-2xl text-zinc-50 transition hover:bg-gradient-to-br hover:from-red-500 hover:to-red-600 hover:shadow-inner hover:shadow-red-600"
            >
              Log In
            </button>
          </div>
          {logInErrors && <div className="mx-1 mb-2">{logInErrorList}</div>}
        </div>
      </>
    );
  }
};

export default LogInForm;
