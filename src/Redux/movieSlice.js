import { createSlice } from "@reduxjs/toolkit";

const movieSlice =  createSlice({
    name:'movies',
    initialState:{
      nowPlayingMovies:null,
      trailerVideos:null,
      trendingmovies:null,
      toprated:null,
      upcoming:null
    },
reducers:{
addnowPlayingMovies:(state,action)=>{
    state.nowPlayingMovies = action.payload
},
addTrailerVideos:(state,action)=>{
  state.trailerVideos = action.payload
},
addtrendingmovies:(state,action)=>{
  state.trendingmovies = action.payload
},
addttoprated:(state,action)=>{
  state.toprated = action.payload
},
addupcoming:(state,action)=>{
  state.upcoming = action.payload
}
}
})

export  const {addnowPlayingMovies,addTrailerVideos,addtrendingmovies,addttoprated,addupcoming} = movieSlice.actions
export default movieSlice.reducer