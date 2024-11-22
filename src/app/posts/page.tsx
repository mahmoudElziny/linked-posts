import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import CommentIcon from '@mui/icons-material/Comment';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Container from '@mui/material/Container';


interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme }) => ({
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
    variants: [
        {
            props: ({ expand }) => !expand,
            style: {
                transform: 'rotate(0deg)',
            },
        },
        {
            props: ({ expand }) => !!expand,
            style: {
                transform: 'rotate(180deg)',
            },
        },
    ],
}));

export default function CardPosts({ postsData }: any) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            <Container sx={{ p: 5, mt: 5 }} maxWidth="sm">
                {postsData?.length > 0 ? postsData.map((post: any, index: number) => <Card key={index} sx={{ p: 5, my: 5 }}>
                    <CardHeader
                        avatar={
                            <Avatar src={post?.user.photo} sx={{ bgcolor: red[500] }} aria-label="recipe">

                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title={post?.user.name}
                        subheader={post?.createdAt}
                    />
                    <CardContent>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {post?.body}
                        </Typography>
                    </CardContent>
                    <CardMedia
                        component="img"
                        height="194"
                        image={post?.image}
                        alt="Paella dish"
                    />
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                        <IconButton aria-label="comment">
                            <CommentIcon />
                        </IconButton>
                    </CardActions>
                    {post?.comments?.map((comment) => <Box sx={{ backgroundColor: '#ccc', display: 'flex', gap: "20px", my: 1, p: 1 }}>
                        <Avatar src={comment.commentCreator.photo} alt='' >

                        </Avatar>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {comment.content}
                        </Typography>
                    </Box>)}
                </Card>

                ) : ''}

            </Container>
        </>
    );
}
