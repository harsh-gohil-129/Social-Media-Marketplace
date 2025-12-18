import { configureStore } from "@reduxjs/toolkit";
import listingReducer from "./features/listingSlice.js";
import chatReducer from "./features/chatSlice.js";

export const store = configureStore({
  reducer: {
    listing: listingReducer,
    chat: chatReducer,
  },
});
