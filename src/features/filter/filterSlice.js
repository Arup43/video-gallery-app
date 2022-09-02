const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    tags: [],
    search: "",
    author: "",
};

const filterSlice = createSlice({
    name: "video",
    initialState,
    reducers: {
        tagSelected: (state, action) => {
            state.tags.push(action.payload);
            state.author = '';
        },
        tagRemoved: (state, action) => {
            const indexToRemove = state.tags.indexOf(action.payload);

            if (indexToRemove !== -1) {
                state.tags.splice(indexToRemove, 1);
            }

            state.author = ''
        },
        searched: (state, action) => {
            state.search = action.payload;
            state.author = '';
        },
        authorSelected: (state, action) => {
            state.author = action.payload;
            state.search = "";
            state.tags = [];
        },
        reset: (state) => {
            state.tags = [];
            state.search = "";
            state.author = "";
        }
    },
});

export default filterSlice.reducer;
export const { tagSelected, tagRemoved, searched, authorSelected, reset } = filterSlice.actions;
