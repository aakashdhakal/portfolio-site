import { useState, useEffect } from "react";
import "./Preloader.css";


export default function Preloader() {

    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        setTimeout(() => {
        setLoading(false)
        }, 2000)
    }, [])
    
    return (
        <>
        {loading ? <div className="preloader">
            <div className="preloader-text">
            <h1>Aakash Dhakal</h1>
            <p>Web Developer</p>
            </div>
        </div> : null}
        </>
    )
}