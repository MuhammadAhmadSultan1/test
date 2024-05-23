import { PayloadAction, createSlice } from "@reduxjs/toolkit/react";
import { IUserCard } from "../../types/user";

const initialState: IUserCard = {
  companyName: '',
  website: "",
  clientInitials: "",
  serviceName:"",
  targetAudience:"",
  aboutCompany:"",
  goals:"",
  logo:""
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
