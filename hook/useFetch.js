import { useState,useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint,query)=>{
    const [data,setData]=useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error,setError] = useState(null)

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
          'X-RapidAPI-Key': 'ab6dccc1d2msh981ac965cf58600p1d31d3jsnd38bc0808b40',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: {...query},
      };
      const fetchData = async () => {                               //       const fetchData = aynsc () => {
        setIsLoading(true);                                         //         setIsLoading(true);
    
        try {                                                       //         try{
          const response = await axios.request(options);            //           const response = await axios.request(options);
    
          setData(response.data.data);                              //           setData(response.data.data);
          setIsLoading(false);                                      //           setIsLoading(false);
        } catch (error) {                                           //         }catch(error){
          setError(error);                                          //           setError(error)
          console.log(error)                                        //           console.log( error)
        } finally {                                                 //         }finally{
          setIsLoading(false);                                      //             setIsLoading(false);
        }                                                           //         }
      };                                                            //       };
    
      useEffect(() => {                                             //       useEffect(()=>{
        fetchData();                                                //         fetchData();
      }, []);                                                       //       },[]);
    
      const refetch = () => {                                       //       const refetch = ()=>{
        setIsLoading(true);                                         //         setIsLoading(true); 
        fetchData();                                                //         fetchData();
      };                                                            //       };                                           
                                                                    
      return { data, isLoading, error, refetch };                   //       return {data,isLoading,error,refetch};
    };                                                              //      };
    
    export default useFetch;                                        // export default useFetch;          
                                                                     
                                                                     
                                                                    
                                                                     
                                                                     
                                                                      
                                                                     
                                                                     
                                                                     
                                                                        
                                                                     
                                                                      
                                                                     
                                                                     
                                                                     
                                                                      
                                                                      
                                                                      
                                                                      
      

