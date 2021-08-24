import { Box } from '@material-ui/core'
import React from 'react'

const PostLoading = (Component) => {
  return function PostLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) {
      return <Component { ...props } />
    }
    return (
      <Box component='p' fontSize={25}>
        We are waiting for the data to load!...
      </Box>
    )
  }
}

export default PostLoading