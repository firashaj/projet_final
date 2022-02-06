import React from 'react';
import {
    Paper,
    Typography,
    CircularProgress,
    Divider,
    Avatar,
} from "@material-ui/core/";
/* import Container from "@mui/material/Container"; */
import useStyles from "./styles"
import { useSelector } from 'react-redux';

const PostDetails = () => {
    const classes = useStyles()
    const post = useSelector(state => state.PostReducer.post)

    return (
        <div>
            <Paper
                style={{ padding: "20px", margin: "90px", borderRadius: "15px" }}
                elevation={10}
            >
                <div className={classes.card}>
                    <div className={classes.section}>
                        <Typography variant="h3" component="h2">
                            {post && post.name}
                        </Typography>
                        <Typography
                            gutterBottom
                            variant="h6"
                            color="textSecondary"
                            component="h2"
                        >
                            {post && post.price} dt
                        </Typography>


                        <Divider style={{ margin: "20px 0" }} />

                        <Divider style={{ margin: "20px 0" }} />

                        <Divider style={{ margin: "20px 0" }} />
                    </div>
                    <div className={classes.imageSection}>
                        <img
                            className={classes.media}
                            src={post.imgSrc}


                            alt={post && post.nam}
                        />
                    </div>
                </div>
            </Paper>

        </div>
    )

        ;
};

export default PostDetails;
