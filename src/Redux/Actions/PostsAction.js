import { GET_ALL_POSTS ,GET_SINGLE_POST} from "../Types"
export const getPosts = () => {
    return { type: GET_ALL_POSTS }
}
export const getSinglePost=(id)=>{
return {type:GET_SINGLE_POST,payload:id}
}