import React from 'react';
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
    ButtonBase,
} from "@material-ui/core/";
import { useNavigate } from 'react-router';
import useStyles from "./styles"; 
import { getSinglePost } from '../../Redux/Actions/PostsAction'; 
import { useDispatch } from 'react-redux';

const Post = ({post}) => {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const classes = useStyles();
    const openPost=()=>{
        dispatch(getSinglePost(post.id))
        navigate(`/posts/${post.id}`)
    }
    return (
        <Card className={classes.card} raised elevation={6}>
            <ButtonBase
                component="span"
                name="test"
                className={classes.cardAction}
              onClick={openPost}
            >
                <CardMedia
                    component="img"
                    className={classes.media}
                    /* title={post.model} */
                    image={post.imgSrc}
                />
                
                <div className={classes.details}>
                    <Typography variant="h6" color="textSecondary">
                        {post.name}
                    </Typography>
                </div>
                <CardContent >
                    <Typography
                        className={classes.title}
                        variant="body2"
                        color="textSecondary"
                    >
                        {post.price}
                    </Typography>
                </CardContent>
            </ButtonBase>
            <CardActions className={classes.cardActions}>
            </CardActions>
        </Card>
    );
};



export default Post;
