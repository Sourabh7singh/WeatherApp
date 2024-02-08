import { createContext,useState,useEffect } from "react";

export const DataContext = createContext();

const WeatherData =(props)=>{
    // const apikey = process.env.REACT_APP_API_KEY
    // eslint-disable-next-line
    const [progress, setProgress] = useState(10);
    const [data, setdata] = useState({location: null,current: null,forecast: null});
    const [loading, setloading] = useState(true);
    const fetchdata = async (url) => {
        setProgress(20);
        let data = await fetch(url);
        setProgress(30);
        let parsdata = await data.json();
        setProgress(70);
        setdata({location: parsdata?.location,current: parsdata?.current,forecast: parsdata?.forecast});
        setProgress(100);
        setloading(false);
    }
    useEffect(() => {
        // fetchdata(`http://api.weatherapi.com/v1/forecast.json?key=${apikey}&q=india&days=3&aqi=yes&alerts=yes`);
        fetchdata(`http://api.weatherapi.com/v1/forecast.json?key=a19bcc0591004fc7a52105937232712&q=india&days=3&aqi=yes&alerts=yes`);
        // eslint-disable-next-line
    }, []);
    return (
        <DataContext.Provider value={{progress,data,loading,fetchdata}}>
            {props.children}
        </DataContext.Provider>
    )
}



export default WeatherData