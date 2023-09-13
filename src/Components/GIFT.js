import * as React from 'react';
import { Button, FormControl, Grid, InputLabel, MenuItem, Paper, Select, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import CopyShapes from './CopyShapes';
import { useLocation } from 'react-router-dom';
import Painting from './Painting';
import Cutting from './Cutting';
import DrawMan from './DrawMan';
import eventBus from '../Services/EventBus';
import SendIcon from '@mui/icons-material/Send';
import img from '../assets/GIFT.png'
import CopyName from './CopyName';
import WritingAB from './WritingAB';
import WritingNums from './WritingNums';
import PhoneticWriting from './PhoneticWriting';
import { ShortResult } from './ShortResult';
import ReactDOM from 'react-dom';
import ExtendedResults from './ExtendedResults';

export default function GIFT() {
    const location = useLocation();
    const range = location.state.ageRange;
    const fromNumCopyShapes = location.state.fromNumCopyShapes;
    const toNumCopyShapes = location.state.toNumCopyShapes;
    const fromNumPainting = location.state.fromNumPainting;
    const toNumPainting = location.state.toNumPainting;
    const fromNumCutting = location.state.fromNumCutting;
    const toNumCutting = location.state.toNumCutting;
    const ageRanges = [location.state.ageRange1, location.state.ageRange2];
    const instructions = [location.state.paintingInstruction, location.state.cuttingInstruction, location.state.copyNameInstruction1, location.state.copyNameInstruction2];
    const paintingShapes = location.state.paintingShapes;
    const cuttingShapes = location.state.cuttingShapes;
    const organsNumber = location.state.organsNumber;
    const fromTotalSummary = location.state.fromTotalSummary;

    const [showResult, setShowResult] = React.useState(false);

    const DemoDiv = styled('div')(({ theme }) => ({
        backgroundColor: theme.palette.background.paper,
        direction: 'rtl',
        width: '80%',
        marginRight: '5%',
        textAlign: 'right',
    }));

    const RoundedPaper = styled(Paper)(({ theme }) => ({
        borderRadius: theme.spacing(10),
        padding: theme.spacing(8),
    }));
    const [name, setName] = React.useState('');
    const [age, setAge] = React.useState('');
    const [ageRange, setAgeRange] = React.useState('');
    const [copyShapesNotes, setCopyShapesNotes] = React.useState('');
    const [paintingNotes, setPaintingNotes] = React.useState('');
    const [cuttingNotes, setCuttingNotes] = React.useState('');
    const [drawManNotes, setDrawManNotes] = React.useState('');
    const [totalSummary, setTotalSummary] = React.useState(0);

    const openExtendedResults = () => {
        const newWindow = window.open('', '_blank');
        newWindow.document.write('<html><head><title>תוצאות מורחבות</title></head><body><div id="root"></div></body></html>');
        const newWindowRoot = newWindow.document.getElementById('root');
        ReactDOM.render(<ExtendedResults />, newWindowRoot);
    };

    const something = (event) => {
        event.preventDefault();
        setPaintingNotes(event.target.value);
    }
    const handleClick = () => {
        setShowResult(true);
        console.log(paintingNotes);
        localStorage.setItem('name', name);
        localStorage.setItem('age', age);
        localStorage.setItem('ageRange', ageRange);
        localStorage.setItem('copyShapesNotes', copyShapesNotes);
        localStorage.setItem('paintingNotes', paintingNotes);
        localStorage.setItem('cuttingNotes', cuttingNotes);
        localStorage.setItem('darwManNotes', drawManNotes);
        eventBus.emit('buttonClick');
        handleResult();
    }

    const handleResult = () => {
        console.log('in handleResult');
        const copyShapes = parseInt(localStorage.getItem('copyShapesData')[0]);
        const painting = parseInt(localStorage.getItem('paintingData')[0]);
        const cutting = parseInt(localStorage.getItem('cuttingData')[0]);
        const drawMan = parseInt(localStorage.getItem('drawManData')[0]);
        const copyName = parseInt(localStorage.getItem('copyNameData')[0]);
        const writingAB = parseInt(localStorage.getItem('writingABData')[0]);
        const writingNums = parseInt(localStorage.getItem('writingNumsData')[0]);
        const phoneticWriting = parseInt(localStorage.getItem('phoneticWritingData')[0]);
        setTotalSummary(copyShapes + painting + cutting + drawMan + copyName + writingAB + writingNums + phoneticWriting);
    }

    return (
        <Box sx={{ flexGrow: 1, direction: 'rtl', width: '100%', height: '100%', textAlign: 'center' }}>
            <img src={img}
                style={{
                    marginTop: '60px',
                    marginBottom: '20px',
                    height: '150px'
                }}
            />
            <Typography variant='h5' sx={{ marginBottom: 5 }} color={'rgb(145, 112, 89)'}><b>קידוד GIFT- גילאי {range}</b></Typography>
            <FormControl sx={{ minWidth: 200, display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
                <TextField id="name" label="שם" variant="outlined" color='secondary' dir='rtl' onChange={(e) => setName(e.target.value)} />
                <br />
                <FormControl sx={{ width: 220, marginLeft: '20px', marginRight: 2 }}>
                    <InputLabel id="demo-simple-select-label" color='secondary'>טווח גיל</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        color='secondary'
                        value={ageRange}
                        label="Age"
                        onChange={(e) => setAgeRange(e.target.value)}
                    >
                        {ageRanges.map((age, index) => <MenuItem key={index} value={age}>{age}</MenuItem>)}
                    </Select>
                </FormControl>
                <TextField id="ageRange" label="גיל" color='secondary' variant="outlined" direction="rtl" onChange={(e) => setAge(e.target.value)} />

            </FormControl>
            <Grid item dir="rtl" padding={3}>
                <DemoDiv sx={{ maxWidth: '300' }}>
                    <RoundedPaper sx={{ backgroundColor: 'rgb(228, 250, 218)' }}>
                        <Typography variant="h4" padding={3}>
                            העתקת צורות
                        </Typography>
                        <Grid
                            container
                            direction="row"
                            justifyContent="space-around"
                            alignItems="flex-start"
                        >
                            <Box sx={{ maxWidth: 900 }}>
                                <CopyShapes ageRange={range} fromNum={fromNumCopyShapes} toNum={toNumCopyShapes} />
                                {/* <TextField id="notes" label="הערות" variant="outlined" dir='rtl' onChange={something} /> */}
                            </Box>
                            {/* <FormControl sx={{ minWidth: 200, display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
                                <TextField id="notes" label="הערות" variant="outlined" dir='rtl' onChange={(e) => setCopyShapesNotes(e.target.value)} />
                            </FormControl> */}
                        </Grid>
                    </RoundedPaper>
                </DemoDiv>
            </Grid>
            <Grid item xs={12} md={6} dir="rtl" padding={3}>
                <DemoDiv sx={{ maxWidth: '300' }}>
                    <RoundedPaper sx={{ backgroundColor: 'rgb(222, 250, 250)' }}>
                        <Typography variant="h4" >
                            צביעה
                        </Typography>
                        <Grid
                            container
                            direction="row"
                            justifyContent="space-around"
                            alignItems="flex-start"
                        >
                            <Box sx={{ maxWidth: 900 }}>
                                <Painting ageRange={range} fromNum={fromNumPainting} toNum={toNumPainting} shapes={paintingShapes} instruction={instructions[0]} />
                            </Box>
                            <div>
                                <TextField id="paintingNotes" multiline
                                    rows={8} label="הערות" value={paintingNotes} onChange={(event) => setPaintingNotes(event.target.value)} />
                            </div>
                        </Grid>
                    </RoundedPaper>
                </DemoDiv>
            </Grid>
            <Grid item xs={12} md={6} dir="rtl" padding={3}>
                <DemoDiv sx={{ maxWidth: '300' }}>
                    <RoundedPaper sx={{ backgroundColor: 'rgb(250, 214, 242)' }}>

                        <Typography variant="h4" >
                            גזירה
                        </Typography>
                        <Grid
                            container
                            direction="row"
                            justifyContent="space-around"
                            alignItems="flex-start"
                        >
                            <Box sx={{ maxWidth: 900 }}>
                                <Cutting ageRange={range} shapes={cuttingShapes} fromNumCutting={fromNumCutting} toNum={toNumCutting} instruction={instructions[1]} />
                            </Box>
                            <div>
                                <TextField id="cuttingNotes" multiline
                                    rows={8} label="הערות" onChange={(event) => setCuttingNotes(event.target.value)} />
                            </div>
                        </Grid>
                    </RoundedPaper>
                </DemoDiv>
            </Grid>
            <Grid item xs={12} md={6} dir="rtl" padding={3}>
                <DemoDiv sx={{ maxWidth: '300' }}>
                    <RoundedPaper sx={{ backgroundColor: 'rgb(255, 252, 228)' }}>
                        <Typography variant="h4" >
                            ציור איש
                        </Typography>

                        <Grid
                            container
                            direction="row"
                            justifyContent="space-around"
                            alignItems="flex-start"
                        >
                            <Box sx={{ maxWidth: 900 }}>
                                <DrawMan organsNumber={organsNumber} />
                            </Box>
                        </Grid>
                    </RoundedPaper>
                </DemoDiv>
            </Grid>

            {range != '3-4' &&
                <>
                    <Grid item xs={12} md={6} dir="rtl" padding={3}>
                        <DemoDiv sx={{ maxWidth: '300' }}>
                            <RoundedPaper sx={{ backgroundColor: 'rgb(250, 239, 229)' }}>
                                {range === '4-5' &&
                                    <Typography variant="h4" >
                                        העתקת השם
                                    </Typography>
                                    || <Typography variant="h4" >
                                        כתיבת השם
                                    </Typography>}
                                <Grid
                                    container
                                    direction="row"
                                    justifyContent="space-around"
                                    alignItems="flex-start"
                                >
                                    <Box sx={{ maxWidth: 900 }}>
                                        <CopyName ageRange={range} instruction1={instructions[2]} instruction2={instructions[3]}/>
                                    </Box>
                                </Grid>
                            </RoundedPaper>
                        </DemoDiv>
                    </Grid>
                    {range != '4-5' &&
                        <>
                            <Grid item xs={12} md={6} dir="rtl" padding={3}>
                                <DemoDiv sx={{ maxWidth: '300' }}>
                                    <RoundedPaper sx={{ backgroundColor: 'rgb(211, 206, 255)' }}>
                                        <Typography variant="h4" >
                                            כתיבת א"ב
                                        </Typography>
                                        <Grid
                                            container
                                            direction="row"
                                            justifyContent="space-around"
                                            alignItems="flex-start"
                                        >
                                            <Box sx={{ maxWidth: 900 }}>
                                                <WritingAB ageRange={range} />
                                            </Box>
                                        </Grid>
                                    </RoundedPaper>
                                </DemoDiv>
                            </Grid>
                            <Grid item xs={12} md={6} dir="rtl" padding={3}>
                                <DemoDiv dense={false}>
                                    <RoundedPaper sx={{ backgroundColor: 'rgb(228, 250, 218)' }}>
                                        <Typography variant="h4" >
                                            כתיבת מספרים
                                        </Typography>
                                        <Grid
                                            container
                                            direction="row"
                                            justifyContent="space-around"
                                            alignItems="flex-start"
                                        >
                                            <Box sx={{ maxWidth: 900 }}>
                                                <WritingNums />
                                            </Box>
                                        </Grid>
                                    </RoundedPaper>
                                </DemoDiv>
                            </Grid>
                        </>
                    }
                    {range === '6-7' &&
                        <Grid item xs={12} md={6} dir="rtl" padding={3}>
                            <DemoDiv dense={false}>
                                <RoundedPaper sx={{ backgroundColor: 'rgb(222, 250, 250)' }}>
                                    <Typography variant="h4" >
                                        כתיבה פונטית
                                    </Typography>
                                    <Grid
                                        container
                                        direction="row"
                                        justifyContent="space-around"
                                        alignItems="flex-start"
                                    >
                                        <Box sx={{ maxWidth: 900 }}>
                                            <PhoneticWriting />
                                        </Box>
                                    </Grid>
                                </RoundedPaper>
                            </DemoDiv>
                        </Grid>}
                </>
            }
            <div >
                <Box sx={{ fontSize: 20, margin: 3 }}>
                    <label><b>  ציון סופי: </b></label>
                    <label><b> {totalSummary}</b></label>
                    <label><b>/{fromTotalSummary}</b></label>
                </Box>
            </div>
            <Button variant='contained' endIcon={<SendIcon sx={{ marginRight: 1, transform: 'rotate(180deg)' }} />} onClick={handleClick} color='secondary'
                style={{ marginBottom: '20px' }}
            >שליחה</Button>

            {showResult &&
                <>
                    <ShortResult name={name} totalSummary={totalSummary} fromTotalSummary={fromTotalSummary} range={range} ageRange={ageRange} />
                    <Button sx={{ margin: 3 }} variant='contained' color='secondary' onClick={openExtendedResults}>תוצאות מורחבות</Button>
                </>}
        </Box>
    );
}