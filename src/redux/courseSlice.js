import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courseData: [],
};

export const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    fetchCourses: (state, action) => {
      state.courseData = action.payload;
    },
  },
});

export const { fetchCourses } = courseSlice.actions;

export default courseSlice.reducer;
