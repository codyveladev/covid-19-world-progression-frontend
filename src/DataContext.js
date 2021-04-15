import React, {useState, useEffect, createContext} from 'react'
const axios = require("axios");


export const DataContext = createContext()



export const DataProvider = (props) => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
      try{
          let response = await axios.get(
            "https://covid-19-world-progression-backend.vercel.app/api/country/USA"
          );
          setData(response.data)    
      }catch(e){
          console.log(e)
      }
      
    };

    useEffect(() => {
        fetchData();
    }, [])

    return(
        <DataContext.Provider value={[data, setData]}>
            {props.children}
        </DataContext.Provider>
    )
    
}