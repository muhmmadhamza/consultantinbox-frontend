import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/ServicesReducer'

const servicesContext = createContext()

const API = "https://web-production-6520b.up.railway.app/services";


const initialState ={
    isLoading: false,
    isError:false,
    serviceData:[]
}

export const ServicesContextProvider = ({children}) =>{

    const [state, dispatch] = useReducer(reducer, initialState);

    const getServicesData = async (url) =>{
        dispatch({type:"IS_LOADING"});
        try {
            const res = await axios.get(url);
            const serviceData =res.data;
            dispatch({type:"GET_SERVICE_DATA", payload:serviceData})
        } catch (error) {
            dispatch({type:"IS_ERROR"})
        }
    }

    useEffect(()=>{
        getServicesData(API)
    }, [])

    return <servicesContext.Provider value={{...state}}>{children}</servicesContext.Provider>
}

export const useServiceContext = () =>{
 return useContext(servicesContext);
}