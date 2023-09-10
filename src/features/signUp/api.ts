import * as firebaseAuth from "firebase/auth";
import { auth } from "../../../firebase.config";
import { CredentialsType } from "../../entities/auth";
import { User } from "../../entities/user";
import { firebaseUserToUser } from "../../entities/auth";


export const signUpRequest = async (credentials: CredentialsType): Promise<User> => {
  const firebaseSession = await firebaseAuth.createUserWithEmailAndPassword(auth, credentials.email, credentials.password);

  return firebaseUserToUser(firebaseSession.user)
}
