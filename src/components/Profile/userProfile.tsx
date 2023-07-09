import { useRouter } from "next/router";
import { useAuthContext } from "~/hooks/useAuthContext";
interface UserProfileProps {
  userId: string;
}

const UserProfile: React.FC<UserProfileProps> = (props: UserProfileProps) => {
  const router = useRouter();
  const { userId } = props;
  const { authState, authDispatch } = useAuthContext();
  const { user } = authState;

  if (userId !== user?.userId) {
    void router.push("/");
  }

  return (
    <div className="mt-2 w-full sm:max-w-screen-sm">
      <div className="bg-gradient-to-br from-blue-700 to-blue-800 p-2 text-center text-4xl text-zinc-50 sm:rounded-t">
        {user?.firstName} {user?.lastName}
      </div>
      <div className="sm:bg-bluegit -800/10 max-h-full border-gray-500 p-3 sm:rounded-b sm:border-2 sm:p-1">
        <p>Email: {user?.email}</p>
        <p>Orders:</p>
        <div>
          <button
            onClick={() => {
              authDispatch({
                type: "LOGOUT",
                payload: null,
              });
              void router.push("/");
            }}
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
