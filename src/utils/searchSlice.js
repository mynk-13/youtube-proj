import { createSlice } from "@reduxjs/toolkit";


const searchSlice = createSlice({

    name: "search",
    initialState: {},  //storing cache in form of Object as searchig a key is O(1) time complexity

    reducers:{

        cacheResults:(state, action) => {

            //{"ip" : ["ip" , "iphone" , "iphone11", "iphone pro max"] }

            state=Object.assign(state, action.payload); //merge the payload and the state
        }
    }
});

export default searchSlice.reducer;

export const {cacheResults} = searchSlice.actions;