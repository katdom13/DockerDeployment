import React from 'react'
import { Box } from '@material-ui/core'
import Header from '../components/Header'
import Footer from '../components/Footer'

const DefaultLayout = (props) => {
  return (
    <>
      <Header />
      <Box component='main' paddingTop={4}>
        {props.children}
      </Box>
      <Footer />
    </>
  )
}

export {
  DefaultLayout
}