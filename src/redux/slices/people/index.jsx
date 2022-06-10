import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPeople = createAsyncThunk("people/getPeople", async () => {
  try {
    const response = await axios.get("https://swapi.dev/api/people/?page=1");
    return response.data.results;
  } catch (error) {
    throw Error(error);
  }
});

export const peopleSlice = createSlice({
  name: "people",
  initialState: {
    listPeople: [],
    filterData: null,
    loading: null,
  },
  extraReducers: {
    [getPeople.pending]: (state, action) => {
      state.listPeople = [];
      state.loading = true;
    },
    [getPeople.fulfilled]: (state, action) => {
      state.listPeople = action.payload;
      state.loading = false;
    },
    [getPeople.rejected]: (state, action) => {
      state.loading = false;
    },
  },
  reducers: {
    deletePeople: (state, action) => {
      let data = state.listPeople.filter((item, i) => i !== action.payload);
      state.listPeople = data;
      state.filterData = data;
    },
    addPeople: (state, action) => {
      state.listPeople.unshift(action.payload);
      state.filterData = state.listPeople;
    },
    filteredPeople: (state, action) => {
      state.filterData = state.listPeople.filter((people) =>
        people.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
  },
});

export default peopleSlice.reducer;

export const { deletePeople, addPeople, filteredPeople } = peopleSlice.actions;

export const removePeople = (index) => (dispatch) => {
  dispatch(deletePeople(index));
};

export const addNewPeople = (data) => (dispatch) => {
  dispatch(addPeople(data));
};
