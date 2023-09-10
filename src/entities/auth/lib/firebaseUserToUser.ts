import * as firebaseAuth from "firebase/auth";
import { User } from "../../user";


export function firebaseUserToUser(firebaseUser:  firebaseAuth.User): User {
  return new User(firebaseUser.uid, firebaseUser.email!, firebaseUser.displayName, firebaseUser.photoURL);
}
