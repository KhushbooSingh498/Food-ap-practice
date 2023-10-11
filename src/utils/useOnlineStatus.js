import { useEffect, useState } from "react";

const useOnlineStatus = () =>{
    //we will return a boolean

    const [onlineStatus, setOnlineStatus] = useState(true);
    useEffect(()=>{
        window.addEventListener("online", (e)=>{
            setOnlineStatus(true);
        });
        window.addEventListener("offline", (e)=>{
            setOnlineStatus(false);
        });
    }, []);
    return onlineStatus;
}

export default useOnlineStatus;