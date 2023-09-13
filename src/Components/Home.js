import { Box, Paper, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import img from '../assets/img2.png';
import { CompassCalibration } from '@mui/icons-material';


function Home() {

    return (<>
        <div style={{
            position: 'relative',
            height: '100vh',
            overflow: 'hidden'
        }}>

            <img src={img}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: -1
                }} />

            <div style={{
                position: 'absolute',
                top: '50%',
                left: '70%',
                top: '30%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
                zIndex: 1,
            }}>
                <Typography variant="h2" color={'white'} fontSize={'80px'} width={550} left={100} fontFamily={'Segoe UI'} >
                    ברוכים הבאים
                </Typography>
            </div>
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                top: '60%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
                zIndex: 1,
            }}>
                <Typography variant="h3" color={'white'} fontSize={'80px'} width={600} left={100} fontFamily={'Segoe UI'} >
                    לאתר האבחונים
                </Typography>
            </div>
        </div>
    </>
    )
}
export default Home;