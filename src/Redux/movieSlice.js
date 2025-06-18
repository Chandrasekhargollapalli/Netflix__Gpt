import { createSlice } from "@reduxjs/toolkit";

const movieSlice =  createSlice({
    name:'movies',
    initialState:{
      nowPlayingMovies:null,
      trailerVideos:null
    },
reducers:{
addnowPlayingMovies:(state,action)=>{
    state.nowPlayingMovies = action.payload
},
addTrailerVideos:(state,action)=>{
  state.trailerVideos = action.payload
}
}
})

export  const {addnowPlayingMovies,addTrailerVideos} = movieSlice.actions
export default movieSlice.reducer