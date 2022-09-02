import { getVideos } from "./videosAPI";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
    videos: [],
    isLoading: false,
    isError: false,
    error: "",
    totalVideos: 0
};

// async thunk
export const fetchVideos = createAsyncThunk(
    "videos/fetchVideos",
    async ({ tags, search, author, selectedPage }) => {
        const response = await getVideos(tags, search, author, selectedPage);
        const resultObj = {
            data: response.data,
            totalVideos: response.headers["x-total-count"],
        }
        return resultObj;
    }
);

const videoSlice = createSlice({
    name: "videos",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchVideos.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchVideos.fulfilled, (state, action) => {
                state.isLoading = false;
                state.videos = action.payload.data;
                state.totalVideos = action.payload.totalVideos;
            })
            .addCase(fetchVideos.rejected, (state, action) => {
                state.isLoading = false;
                state.videos = [];
                state.isError = true;
                state.error = action.error?.message;
            });
    },
});

export default videoSlice.reducer;
