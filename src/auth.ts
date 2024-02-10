import { auth } from "./firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword as signIn, sendEmailVerification, signOut as firebaseSignOut, onAuthStateChanged, User } from "firebase/auth";


// Function to register a new user with email and send verification email
export const registerWithEmailAndPassword = async (
  email: string
): Promise<void> => {
  try {
    // Validate email domain
    if (!email.endsWith('@edu')) {
      throw new Error('Only users with "@edu" email addresses are allowed.');
    }

    // Create user with email and password (no password needed)
    const userCredential = await createUserWithEmailAndPassword(auth, email, ''); 
    const user = userCredential.user;

    // Send email verification
    await sendEmailVerification(user);

    // Store the email address in your database as pending verification
    // (You need to implement this part in your backend/database)

  } catch (error: any) {
    console.error("Error registering user:", error.message);
    throw error;
  }
};



// Function to sign in an existing user with email and password
export const signInWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<User> => {
  try {
    const userCredential = await signIn(auth, email, password);
    const user = userCredential.user;
    console.log("User signed in:", user);
    return user;
  } catch (error: any) {
    console.error("Error signing in:", error.message);
    throw error;
  }
};

// Function to sign out the current user
export const signOut = async (): Promise<void> => {
  try {
    await firebaseSignOut(auth);
    console.log("User signed out");
  } catch (error: any) {
    console.error("Error signing out:", error.message);
    throw error;
  }
};

// Function to check the authentication state
export const checkAuthState = (): void => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in
      const uid = user.uid;
      console.log("User is signed in with UID:", uid);
      // Additional logic for signed-in user
    } else {
      // User is signed out
      console.log("User is signed out");
      // Additional logic for signed-out user
    }
  });
};
