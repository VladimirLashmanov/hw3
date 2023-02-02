import React, {useEffect, useState} from 'react';
import {Outlet, useLocation, useParams} from "react-router-dom";
import { userService} from "../../services";
import UserDetails from "../../components/UserDetails/UserDetails";

const SinglUserPage = () => {
    const {state} = useLocation()
    const [user, setUser] = useState(state)
    const {userId} = useParams();

    useEffect(()=>{
        if (!state){
            userService.getById(userId).then(({data})=>setUser(data))
        }else {
            setUser(state)
        }

    },[userId,state])
    return (
        <div>
        <div>
            {user && <UserDetails user={user}/>}
        </div>
            <Outlet/>
        </div>
    );
};

export default SinglUserPage;