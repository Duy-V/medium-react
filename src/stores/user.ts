import { create } from "zustand";
type TUserProfile = {
  id: number;
  email: string;
  username: string;
  password: string;
  bio: string;
  image: string;
};
type UserState = {
  isLoggedIn: boolean;
//   userProfile: TUserProfile | undefined;
};
type UserActions = {
  setLoggedIn: (isLoggedIn: boolean) => void;
//   setUserProfile: (userProfile: TUserProfile) => void;
};
type UserStore = UserState & UserActions;
export const useUser = create<UserStore>((set) => ({
  isLoggedIn: false || !!localStorage.getItem("conduit_jwt_token"),
//   userProfile: undefined,
  setLoggedIn: (isLoggedIn: boolean) => set({ isLoggedIn }),
//   setUserProfile: (userProfile: TUserProfile | undefined) =>
    // set({ userProfile }),
}));
