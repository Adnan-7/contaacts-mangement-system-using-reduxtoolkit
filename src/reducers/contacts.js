const contactsReducer={

    add:(state,action)=>{
        state.push(action.payload)
    },

    remove:(state,action)=>{
        let index=state.findIndex(contact=> contact.id===action.payload);
        state.splice(index,1)
    }
}

export default contactsReducer;