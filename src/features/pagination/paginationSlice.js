const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    selectedPage: 1
};

const paginationSlice = createSlice({
    name: "pagination",
    initialState,
    reducers: {
        pageSelected: (state, action) => {
            state.selectedPage = action.payload;
        }
    },
});

export default paginationSlice.reducer;
export const { pageSelected } = paginationSlice.actions;
