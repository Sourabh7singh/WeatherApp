import React from 'react'
import logo from './Saurabh.ico'

const Navbar = (props) => {
    const apikey = process.env.REACT_APP_API_KEY
    const handlesidebar=()=>{
        const sidebar = document.getElementById('sidebar');
        if (sidebar.style.display === "block"){
            sidebar.style.display = "none"
        }
        else{
            sidebar.style.display = "block"
        }
    }; 
    const handleCurrentLocation=()=>{
        if(!navigator.geolocation){
            alert("Location is disabled");
        }
        navigator.geolocation.getCurrentPosition((position)=>{
            let url = `http://api.weatherapi.com/v1/forecast.json?key=${apikey}&q=${position.coords.latitude},${position.coords.longitude}&days=3&aqi=yes&alerts=yes`
            props.fetchdata(url)
        },()=>{alert("Cannot get location");})
    }
    const handleSearch=(e)=>{
        let text = document.getElementById("searchbox").value
        let url = `http://api.weatherapi.com/v1/forecast.json?key=${apikey}&q=${text}&days=3&aqi=yes&alerts=yes`
        props.fetchdata(url);
    }
  return (
    <>
    <nav className="main-nav">
        <div className="logo">
            <img src={logo} alt="Logo"/>
        </div>
        <div className="searchcontainer">
            <label htmlFor="searchbtn">
                <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" cursor="pointer" viewBox="0 -960 960 960"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>            </label>
            <button id="searchbtn" onClick={handleSearch}>Search</button>
            <input type="text" className="form-inp" id="searchbox" placeholder="Search for location.."/>
        </div>
        <div>
            <button className="nav-btn" onClick={handleCurrentLocation}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" cursor="pointer" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-crosshair">\
                <circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line></svg>
                Current location
            </button>
        </div>
        <div className="menubtn">
            <svg xmlns="http://www.w3.org/2000/svg" onClick={handlesidebar} cursor="pointer" height="40" width="40" viewBox="0 -960 960 960">
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
            </svg>
        </div>
    </nav>
    <nav id="sidebar">
        <span className="closebtn">
            <svg xmlns="http://www.w3.org/2000/svg" onClick={handlesidebar} height="40" cursor="pointer" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
        </span>
        <div className="searchcontainer">
            <label htmlFor="searchbtn">
                <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" cursor="pointer" viewBox="0 -960 960 960">
                    <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/>
                </svg>            
            </label>
            <button id="searchbtn" onClick={handleSearch}>Search</button>
            <input type="text" className="form-inp" id="side-bar-searchbox" placeholder="Search for location.."/>
        </div>
        <button className="nav-btn" onClick={handleCurrentLocation}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-crosshair"><circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line></svg>
            Current location
        </button>
    </nav>
    
    </>
  )
}

export default Navbar
