import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@material-ui/core'
import Head from 'next/head'
import Image from 'next/image'
import PostLoadingComponent from '../components/PostLoading'
import styles from '../styles/Home.module.css'
import Posts from '../components/Posts'
import { getPosts } from '../config/axios'
import axios from 'axios'

export default function Home({ posts }) {
  
  const PostLoading = PostLoadingComponent(Posts)

  const [appState, setAppState] = useState({
    loading: false,
    posts: null,
  })

  useEffect(() => {
    setAppState({loading: true})
    // getPosts()
    //   .then(posts => setAppState({
    //     loading: false, posts
    //   }))
  }, [])

  useEffect(() => {
    setAppState({
      loading: false,
      posts,
    })
  }, [posts])

  return (
    <Box textAlign='center'>
      <Box component='h1' fontFamily='Nunito, sans-serif'>
        Latest Posts
      </Box>
      <PostLoading isLoading={appState.loading} posts={appState.posts} />
    </Box>
  )
}

export async function getServerSideProps(context) {
  const posts = await getPosts()
  return {
    props: {
      posts,
    },
  }
}