import React from 'react';
import AppBar from '@mui/material/AppBar';
import { Button, ButtonGroup, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import '../css/Navigation.css'
import { Avatar, Menu, MenuItem } from '@mui/material';

export default function Navigation() {
  const { user, logOut } = UserAuth();
  const handleSignOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <AppBar sx={{ backgroundColor: "#D8D8D8" }}>
        <Toolbar>
          <Button
            sx={{
              color: "black",
              marginLeft: "43rem",
              fontSize: "20px",
              fontWeight: "bold",
              marginRight: "30px",
            }}
          >
            <Link to="/" style={{ textDecoration: "none", color: 'black' }}>
              Main
            </Link>
          </Button>
          <Button
            sx={{ color: "black", fontSize: "20px", fontWeight: "bold" }}
          >
           <Link to="/about" style={{ textDecoration: "none", color: 'black' }}>
              About
            </Link>
          </Button>
          <Button
            sx={{
              color: "black",
              fontSize: "20px",
              fontWeight: "bold",
              marginLeft: "30px",
            }}
          >
            <Link to="/car" style={{ textDecoration: "none", color: 'black' }}>
              Cars
            </Link>
          </Button>

          <Button
            sx={{
              color: "black",
              fontSize: "20px",
              fontWeight: "bold",
              marginLeft: "30px",
            }}
          >
            <Link to="/contact" style={{ textDecoration: "none", color: 'black' }}>
              Contact
            </Link>
          </Button>

          <div className='avatar'>{user?.displayName && <Avatar
            aria-label="avatar"
            onClick={handleClick}
            sx={{ cursor: 'pointer' }}
            alt={user.displayName}
            src={user.photoURL} />}
          </div>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            <Link to="/viewhistory" style={{ textDecoration: 'none', color:'black' }}>
              <MenuItem onClick={handleClose}>
                Contact History
              </MenuItem>
            </Link>
            

          </Menu>
          <div className='user-name'>{user?.displayName && <Typography sx={{ color: 'black' }}>{user.displayName}</Typography>}</div>
          <div className='button-log'>
            <ButtonGroup>
              {user?.displayName ? <Button onClick={handleSignOut}>Log Out</Button> : <Button sx={{marginLeft:'10rem'}}><Link to='/loginpage' style={{ textDecoration: 'none' }}>Log In</Link></Button>}
            </ButtonGroup>
          </div>

        </Toolbar>
      </AppBar>
    </div>
  )
}
