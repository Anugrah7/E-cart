import {createSlice} from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name:'whishlists',
    initialState: [],
    reducers:{
        addToWhishlist:(state,actionFromView)=>{
            state.push(actionFromView.payload)
        },
        removeItem:(state,actionFromWishlist)=>{
            return state.filter(item=>item.id!=actionFromWishlist.payload)
        }
    }
})

export const {addToWhishlist,removeItem} = wishlistSlice.actions
export default wishlistSlice.reducer