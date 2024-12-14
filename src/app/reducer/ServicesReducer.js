 const ServicesReducer = (state, action) =>{
    switch (action.type) {
        case "IS_LOADING":
            return{
                ...state,
                isLoading:true,
            }
        case "GET_SERVICE_DATA":
            return{
                ...state,
                isLoading:false,
                serviceData: action.payload
            }
        case "IS_ERROR":
            return{
                ...state,
                isLoading:false,
                isError:true,
            }
    
        default: return state;
    }
}
export default ServicesReducer