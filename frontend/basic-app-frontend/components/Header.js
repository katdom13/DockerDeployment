import React from 'react'
import { AppBar, Avatar, Box, Container, makeStyles, Toolbar, Typography } from '@material-ui/core'
import Link from 'next/link'

const Header = () => {
  const classes = useStyles()

  return (
    <>
      <Box component='header' className={classes.header}>
        <Container maxWidth='lg'>
          <AppBar
            position='static'
            color='white'
            elevation={0}
          >
            <Toolbar>
              <Box
                component='div'
                flexGrow={1}
                display='flex'
                flexDirection='row'
                alignItems='stretch'
                height='100%'
              >
                <Link href='/'>
                  <a className={classes.link}>
                    <Box display="flex" alignItems="center">
                      <Avatar src="/logo.png" className={classes.logo} />
                      <Typography variant="h6" noWrap className={classes.brand}>
                        Fatbowl
                      </Typography>
                    </Box>
                  </a>
                </Link>
              </Box>
            </Toolbar>
          </AppBar>
        </Container>
      </Box>
    </>
  )
}

const useStyles = makeStyles((theme) => ({
  brand: {
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  header: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  link: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      alignItems: "center",
    },
    color: "inherit",
    textDecoration: "none",
    "&:hover": {
      backgroundColor: "none",
      "-webkit-tap-highlight-color": "transparent",
    },
    "&:focus": {
      backgroundColor: "none",
      "-webkit-tap-highlight-color": "transparent",
    },
  },
  logo: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    padding: theme.spacing(1),
  },
}))

export default Header