import { Box, Card, CardContent, CardMedia, Container, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const Posts = (props) => {
  const { posts } = props
  const classes = useStyles()

  if (!posts || posts.length === 0) {
    return <Typography component='p' variant='body1' color='textSecondary'>
      Cannot find any posts, sorry
    </Typography>
  }

  return (
    <>
      <Container maxWidth='md' component='main'>
        <Grid container spacing={5} alignItems='flex-end'>
          {
            posts.map((post) => {
              return (
                <Grid item key={post.id} xs={12} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image='https://source.unsplash.com/random'
                      title='Image title'
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography
                        gutterBottom
                        variant='h6'
                        component='h2'
                        className={classes.postTitle}
                      >
                        {post.title.substr(0, 50)}...
                      </Typography>
                      <Box className={classes.postText}>
                        <Typography
                          component='p'
                          color='textPrimary'
                        ></Typography>
                        <Typography variant='p' color='textSecondary'>
                          {post.excerpt.substr(0, 60)}...
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              )
            })
          }
        </Grid>
      </Container>
    </>
  )
}

const useStyles = makeStyles((theme) => ({
  cardMedia: {
    paddingTop: '56.25%',
  },
  postTitle: {
    fontSize: '16px',
    textAlign: 'left',
  },
  postText: {
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'baseline',
    fontSize: '12px',
    textAlign: 'left',
    marginBottom: theme.spacing(2),
  }
}))

export default Posts