import { createSlice } from "@reduxjs/toolkit";


const initialState = {
   
        id:"",
        name:"",
        email:"",
        isLogin:false,
        
};

export const userSlice = createSlice({

    
name:"user",
initialState,

reducers:{

    userLogin:(state,action)=>{
        state.id = action.payload.userData._id     
        state.name= action.payload.userData.name
        state.email= action.payload.userData.email
        state.isLogin=true            
    },
    
    userLogout:(state,action)=>{    
state.id = ""
state.email = ""
state.name = ""
state.isLogin = false
    }


}


})


export const { userLogin , userLogout} = userSlice.actions;
export default userSlice.reducer