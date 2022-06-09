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
  },
  reducers: {
    setListPeople: (state, action) => {
      state.listPeople = action.payload;
    },
    deletePeople: (state, action) => {
      let data = state.listPeople.filter((item, i) => i !== action.payload);
      state.listPeople = data;
    },
    addPeople: (state, action) => {
      state.listPeople.unshift(action.payload);
    },
    filteredPeople: (state, action) => {
      state.filterData = state.listPeople.filter((people) =>
        people.name.toLowerCase().includes(action.payload)
      );
    },
  },
});

export default peopleSlice.reducer;

export const {
  setListPeople,
  deletePeople,
  addPeople,
  searchPeople,
  filteredPeople,
} = peopleSlice.actions;

export const removePeople = (index) => (dispatch) => {
  dispatch(deletePeople(index));
};

export const addNewPeople = (data) => (dispatch) => {
  dispatch(addPeople(data));
};

export const searchPeopleName = (search) => (dispatch) => {
  dispatch(searchPeople(search));
};
