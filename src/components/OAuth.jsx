import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { db } from "../firebase";
import { useNavigate } from "react-router";

export default function OAuth() {
  const navigate = useNavigate();

  async function onGoogleClick() {
    try {
      const auth = getAuth();

      const provider = new GoogleAuthProvider();

      const result = await signInWithPopup(auth, provider);

      const user = result.user;

      //check if user is already inside the database

      //create reference for user
      const docRef = doc(db, "users", user.uid);

      const docSnapShot = await getDoc(docRef);

      //if does not exist add to data base
      if (!docSnapShot.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          time: serverTimestamp(),
        });
      }
      navigate("/");
    } catch (error) {
      toast.error("Google Sign in Did Not Work");
    }
  }

  return (
    <button
      type="button"
      onClick={onGoogleClick}
      className="flex items-center justify-center w-full bg-red-600 text-white px-7 py-3 uppercase text-sm font-medium hover:bg-red-800 active:bg-red-900 shadow-md hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out rounded"
    >
      <FcGoogle className="text-2xl bg-white rounded-full mr-3" />
      Sign in with Google
    </button>
  );
}
