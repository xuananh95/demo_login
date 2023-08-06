// AuthContext.tsx
import React, { createContext, useState, useEffect, useContext, FC } from "react";

// Define the type for the user object
interface User {
  username: string;
  email: string;
  // Add other relevant properties
}

// Define the type for the context
interface AuthContextType {
  user: User | null;
  signIn: () => void;
}

// Create the authentication context
const AuthContext = createContext<AuthContextType>({
  user: null,
  signIn: () => {},
});

const defaultUser: User = {
  username: "test",
  email: "test",
};

// Create the AuthProvider component
export const AuthProvider: FC<any> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  // Use useEffect to check if the user is already logged in on application load
  useEffect(() => {
    // Your logic to check if the user is authenticated (e.g., by verifying a token)
    // If the user is authenticated, update the user state with the user details
    // Otherwise, keep it null or set it to an empty object
    // Example:
    // const isAuthenticated = checkIfUserIsAuthenticated();
    // setUser(isAuthenticated ? userObject : null);
    setUser(user ? user : null);
  }, []);
  const signIn = (): void => {
    setUser(defaultUser);
  };

  return <AuthContext.Provider value={{ user, signIn }}>{children}</AuthContext.Provider>;
};

// Custom hook to consume the AuthContext
export const useAuth = () => useContext(AuthContext);
