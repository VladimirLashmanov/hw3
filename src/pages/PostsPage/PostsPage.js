import React, {useEffect, useState} from 'react';
import {postService} from "../../services";
import Post from "../../components/Post/Post";
import {Outlet, useParams} from "react-router-dom";



const PostsPage = () => {
    const [posts, setPosts] = useState([]);
    const {userId}=useParams()


    useEffect(() => {

        if (userId){
            postService.getByUserId(userId).then(({data}) => setPosts(data))
        }else { postService.getAll().then(({data}) => setPosts(data))}

    }, [userId])


    return (
        <div style={{display:'flex',backgroundColor:''}} >
            <div>{posts.map(post=><Post  key={post.id} post={post} flag={!userId}/>)}</div>
            <div> <Outlet/> </div>
        </div>
    );
};

export default PostsPage;