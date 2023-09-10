import * as firebaseAuth from "firebase/auth";
import { auth } from "../../../../firebase.config";

export const logOutRequest = () => firebaseAuth.signOut(auth);
