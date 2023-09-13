import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from "react-router-dom";
import { styled, alpha } from '@mui/material/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const pages = ['בית', 'GIFT', 'פרופיל סנסורי'];
// const englishPages = ['', 'GIFT', 'SensoryProfile'];

function ResponsiveAppBar() {
  const StyledMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      {...props}
    />
  ))(({ theme }) => ({
    '& .MuiPaper-root': {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 140,
      color:
        theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300], //הכיתוב בתפריט שנפתח
      boxShadow:
        'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      '& .MuiMenu-list': {
        padding: '4px 0',
      },
      '& .MuiMenuItem-root': {
        '& .MuiSvgIcon-root': {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        '&:active': {
          backgroundColor: alpha(             //צבע הפריט הנבחר מתוך התפריט שנפתח
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity,
          ),
        },
      },
    },
  }));

  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    console.log("in handleOpenNavMenu");
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    console.log("in handleOpenUserMenu");
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (page) => {
    console.log("in handleCloseNavMenu ", page);
    if (page != 'SensoryProfile' && page !== '') {
      console.log("in if ", page);
      const rangeAge = page;
      let instructions = ['הוראה: "צבע את המלבן בתוך הקווים"', 'הוראה: "גזור על הקו"', '', ''];
      let fromNumCopyShapes, toNumCopyShapes, fromNumPainting, toNumPainting, fromNumCutting, toNumCutting, organsNumber,
        fromTotalSummary;
      let ageRanges = [], paintingShapes = [], cuttingShapes = [];
      if (rangeAge === '6-7') {
        fromNumCopyShapes = 5;
        fromNumPainting = 3;
        fromNumCutting = 2;
        toNumCutting = 3;
        fromTotalSummary = 50;
        ageRanges.push('6.0-6.5')
        ageRanges.push('6.6-7.0');
        paintingShapes = ['לב'];
        cuttingShapes = ['ריבוע', 'עיגול'];
        organsNumber = 12;
        // instructions = ['הוראה: "צבע את המשולש ואת הלב בתוך הקווים"', 'הוראה: "גזור את הריבוע ואחר כך גזור את העיגול"', 'הוראה: "כתוב את שמך על הדף"'];
      }
      else {
        fromNumCopyShapes = 1;
      }
      if (rangeAge === '3-4') {
        toNumCopyShapes = 4;
        ageRanges.push('3.0-3.5');
        ageRanges.push('3.6-3.11');
        fromNumPainting = 1;
        fromNumCutting = 1;
        fromTotalSummary = 20;
        paintingShapes = ['מלבן'];
        cuttingShapes = ['קו ישר'];
        organsNumber = 3;
        // instructions = ['הוראה: "צבע את המלבן בתוך הקווים"', 'הוראה: "גזור על הקו"', ''];
      }
      else {
        if (rangeAge === '4-5') {
          toNumCopyShapes = 7;
          ageRanges.push('4.0-4.5');
          ageRanges.push('4.6-4.11');
          fromNumPainting = 1;
          toNumPainting = 2;
          fromNumCutting = 1;
          toNumCutting = 2;
          fromTotalSummary = 35;
          paintingShapes = ['משולש', 'לב'];
          cuttingShapes = ['קו ישר', 'ריבוע'];
          organsNumber = 8;
          // instructions = ['הוראה: "צבע את המלבן ואת המשולש בתוך הקווים"', 'הוראה: "גזור על הקו ואחר כך גזור את הריבוע"', 'הוראה: "תעתיק את השם שלך".', 'הוראה: "כתוב את שמך על הדף"'];
        }
        else {
          toNumCopyShapes = 9;
        }
      }
      if (rangeAge === '5-6') {
        ageRanges.push('5.0-5.5');
        ageRanges.push('5.6-6.0');
        fromNumPainting = 2;
        toNumPainting = 3;
        fromNumCutting = 2;
        toNumCutting = 3;
        fromTotalSummary = 50;
        paintingShapes = ['משולש', 'לב'];
        cuttingShapes = ['ריבוע', 'עיגול'];
        organsNumber = 12;
        // instructions = ['הוראה: "צבע את המשולש ואת הלב בתוך הקווים"', 'הוראה: "גזור את הריבוע ואחר כך גזור את העיגול"', 'הוראה: "כתוב את שמך על הדף"'];
      }
      if(rangeAge !== '3-4'){
        instructions[2] =  'הוראה: "תעתיק את השם שלך".';
        instructions[3] = 'הוראה: "כתוב את שמך על הדף"';
      }
      console.log(fromNumPainting, ' ', toNumPainting);
      console.log(fromNumCutting, ' ', toNumCutting);

      navigate('/GIFT', {
        state: {
          ageRange: page, fromNumCopyShapes: fromNumCopyShapes, toNumCopyShapes: toNumCopyShapes,
          fromNumPainting: fromNumPainting, toNumPainting: toNumPainting,
          fromNumCutting: fromNumCutting, toNumCutting: toNumCutting, ageRange1: ageRanges[0], ageRange2: ageRanges[1],
          paintingShapes: paintingShapes, cuttingShapes: cuttingShapes, organsNumber: organsNumber,
          paintingInstruction: instructions[0], cuttingInstruction: instructions[1], copyNameInstruction1: instructions[2], copyNameInstruction2: instructions[3],
          fromTotalSummary: fromTotalSummary
        }
      });
    }
    else {
      console.log("in else");
      navigate(`/${page}`);
    }
    setAnchorElNav(null);
  };
  // history.push(`/${page}`);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (ifOpen, range) => {
    setAnchorEl(null);
    if (ifOpen)
      handleCloseNavMenu(range);
  };

  return (
    <AppBar sx={{ backgroundColor: '#FFB0F4', height: 80 }} position="fixed" dir="rtl">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={() => handleCloseNavMenu('')}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => handleCloseNavMenu(page)}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
              sx={{
                height: '100%', my: 2, color: 'white', '&:hover': {
                  backgroundColor: '#B57DAD',
                }
              }}
              aria-haspopup="true"
              key={'בית'}
              onClick={() => handleCloseNavMenu('')}
            >
              בית
            </Button>
            <Button
              sx={{
                color: 'white', '&:hover': {
                  backgroundColor: '#B57DAD',
                }
              }}
              aria-haspopup="true"
              key={'אבחון סנסורי'}
              onClick={() => handleCloseNavMenu('SensoryProfile')}
            >
              אבחון סנסורי
            </Button>
            <Button
              sx={{
                backgroundColor: '#FFB0F4',
                '&:hover': {
                  backgroundColor: '#B57DAD',
                }
              }}
              id="demo-customized-button"
              aria-controls={open ? 'demo-customized-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              variant="contained"
              disableElevation
              onClick={handleClick}
              startIcon={<KeyboardArrowDownIcon />}
            >
              GIFT
            </Button>
            <StyledMenu
              id="demo-customized-menu"
              dir="rtl"
              MenuListProps={{
                'aria-labelledby': 'demo-customized-button',
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={() => handleClose(false, '')}
            >
              <MenuItem onClick={() => handleClose(true, '3-4')} disableRipple>
                גילאי 3-4
              </MenuItem>
              <MenuItem onClick={() => handleClose(true, '4-5')} disableRipple>
                גילאי 4-5
              </MenuItem>
              <MenuItem onClick={() => handleClose(true, '5-6')} disableRipple>
                גילאי 5-6
              </MenuItem>
              <MenuItem onClick={() => handleClose(true, '6-7')} disableRipple>
                גילאי 6-7
              </MenuItem>
            </StyledMenu>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;