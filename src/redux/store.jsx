import { configureStore } from "@reduxjs/toolkit";
import people from "./slices/people";

export const store = configureStore({
  reducer: { people },
});
