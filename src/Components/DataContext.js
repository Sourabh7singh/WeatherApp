import { createContext,useState,useEffect } from "react";
import { toast } from "react-toastify";

export const DataContext = createContext();

const WeatherData =(props)=>{
    const apikey = process.env.REACT_APP_API_KEY;
    const [progress, setProgress] = useState(10);
    const [data, setdata] = useState({location: null,current: null,forecast: null});
    const [loading, setloading] = useState(true);
    const fetchdata = async (url) => {
        setProgress(20);
        let data = await fetch(url);
        setProgress(30);
        let parsdata = await data.json();
        setProgress(70);
        if(parsdata.error){
            setProgress(100);
            toast(parsdata.error.message,{type:"error"})
            return 
        }
        setProgress(100);
        setdata({location: parsdata?.location,current: parsdata?.current,forecast: parsdata?.forecast});
        setloading(false);
    }
    useEffect(() => {
        let location = navigator.geolocation;
        if(!location) return toast("Location is disabled",{type:"error"});
        navigator.geolocation.getCurrentPosition((position)=>{
            let url = `https://api.weatherapi.com/v1/forecast.json?key=${apikey}&q=${position.coords.latitude},${position.coords.longitude}&days=3&aqi=yes&alerts=yes`
            fetchdata(url)
        },()=>{toast("Cannot get location",{type:"error"});})
        // eslint-disable-next-line
    }, []);
    return (
        <DataContext.Provider value={{progress,data,loading,fetchdata}}>
            {props.children}
        </DataContext.Provider>
    )
}



export default WeatherData