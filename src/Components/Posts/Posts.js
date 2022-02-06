import React from 'react';
import { useSelector } from 'react-redux';
import Post from '../Post/Post';

const Posts = () => {
    const posts = useSelector(state => state.PostReducer.posts)
    

    return (
        <div style={{display:"flex" , margin:"30px" , justifyContent:"space-around"}} >
            {posts.map((post, index) => <Post post={post} key={index} />)}
        </div>
    )

};
export default Posts
