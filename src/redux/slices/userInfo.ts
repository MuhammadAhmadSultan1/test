import { PayloadAction, createSlice } from "@reduxjs/toolkit/react";
import { IUserCard } from "../../types/user";

const initialState: IUserCard = {
  companyName: '',
  email: "",
  website: "",
  clientInitials: "",
  serviceName: "",
  serviceNameArray: [],
  targetAudience: "",
  targetAudienceArray: [],
  aboutCompany: "",
  goals: "",
  logo: "",
  sessionId: "",
  logoURL: "",
  colors: [],
  clientName: "",
  address: "",
  designation: "",
  showHeaderAndStepper: true
};

const userSlice = createSlice({
  name: "userCard",
  initialState: initialState,
  reducers: {
    setUserCardInfo: (state, action: PayloadAction<IUserCard>) => {
      return { ...state, ...action.payload };
    },
    clearUserCardInfo: () => {
      return initialState;
    },
  },
});

export const { setUserCardInfo, clearUserCardInfo } = userSlice.actions;

export default userSlice.reducer;
