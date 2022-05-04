import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const peopleSlice = createSlice({
  name: "people",
  initialState: {
    listPeople: [],
  },
  reducers: {
    setListPeople: (state, action) => {
      state.listPeople = action.payload;
    },
  },
});

export default peopleSlice.reducer;

export const { setListPeople } = peopleSlice.actions;

export const fetchPeople = () => async (dispatch) => {
  const response = await axios.get("https://swapi.dev/api/people/?page=1");
  dispatch(setListPeople(response.data.results));
};
