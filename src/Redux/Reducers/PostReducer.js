import { GET_ALL_POSTS,GET_SINGLE_POST } from "../Types"
const initState = {
    posts: [
        { id:1,
            imgSrc: "https://images.frandroid.com/wp-content/uploads/2019/08/iphone-11-pro-2019-frandroid.png",
            name: 'Iphone 11',
            price: '1349,99 $',
        },
        {
            id:2,
            imgSrc: " https://www.cdiscount.com/pdt2/0/4/6/1/700x700/raz8886419358046/rw/razer-blade-15-rz09-03009f76-r3f1-intel-core-i.jpg",
            name: 'Razer Blade',
            price: '7633,64 $',
        },
        {
            id:3,
            imgSrc: " https://images.lpcdn.ca/924x615/201903/15/1622571-audi-r8-crdit-audi.jpg",
            name: 'audi R8',
            price: '216 245 $',
        }
    ]
    ,
    post:{}
}

const PostReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_ALL_POSTS:
            return state
            case GET_SINGLE_POST:
                return{...state,post :state.posts.find((elt)=>elt.id===action.payload)} 
        default: return state

    }
}
export default PostReducer