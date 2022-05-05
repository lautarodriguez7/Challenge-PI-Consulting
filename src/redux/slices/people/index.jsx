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
    deletePeople: (state, action) => {
      let data = state.listPeople.filter((item, i) => i !== action.payload);
      state.listPeople = data;
    },
    addPeople: (state, action) => {
      state.listPeople.unshift(action.payload);
    },
    searchPeople: (state, action) => {
      console.log(state.listPeople);
      let searchData = state.listPeople.find((item, index) => {
        if (item.name == action.payload) {
          return true;
        }
      });
      // state.listPeople = [searchData];
      console.log(searchData);
    },
  },
});

export default peopleSlice.reducer;

export const { setListPeople, deletePeople, addPeople, searchPeople } =
  peopleSlice.actions;

export const fetchPeople = () => async (dispatch) => {
  const response = await axios.get("https://swapi.dev/api/people/?page=1");
  dispatch(setListPeople(response.data.results));
};

export const removePeople = (index) => (dispatch) => {
  dispatch(deletePeople(index));
};

export const addNewPeople = (data) => (dispatch) => {
  dispatch(addPeople(data));
};

export const searchPeopleName = (search) => (dispatch) => {
  dispatch(searchPeople(search));
  // console.log(search.target.value);
};
