import { Box, Typography, Paper, styled, Grid } from "@mui/material";
import data from '../Services/data.json';
import * as React from 'react';

export default function ExtendedResults(props) {
    const RoundedPaper = styled(Paper)(({ theme }) => ({
        borderRadius: theme.spacing(10),
        padding: theme.spacing(8),
    }));

    const DemoDiv = styled('div')(({ theme }) => ({
        backgroundColor: theme.palette.background.paper,
        direction: 'rtl',
        width: '80%',
        marginRight: '5%',
        textAlign: 'right',
    }));

    const fromNum = props.fromNum;
    const toNum = props.toNum;
    const paintingShapes = props.paintingShapes || [];
    const cuttingShapes = props.cuttingShapes || [];
    const shapesArray = ['', 'קו מאונך', 'קו מאוזן', 'עיגול', 'פלוס', 'ריבוע', 'קווים אלכסוניים', '', 'איקס', 'משולש'];
    const currentShapes = shapesArray.filter((shape, index) => index >= fromNum && index <= toNum);

    const name = localStorage.getItem('name');
    const age = localStorage.getItem('age');
    const ageRange = localStorage.getItem('ageRange');
    const range = localStorage.getItem('range');
    const day = new Date().getDay();
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    const date = day + '.' + month + '.' + year;
    const copyShapes = [
        localStorage.getItem('totalSumCSH'),
        localStorage.getItem('fromTotalSumCSH'),
        localStorage.getItem('dominantHandCSH'),
        localStorage.getItem('pencilGripCSH'),
        localStorage.getItem('auxiliaryHandFunctionCSH'),
        localStorage.getItem('handNotesCSH'),
        localStorage.getItem('pencilNotesCSH'),
        localStorage.getItem('auxiliaryNotesCSH'),
        localStorage.getItem('accurateShapes')];

    const painting = [
        localStorage.getItem('totalSumP'),
        localStorage.getItem('fromTotalSumP'),
        localStorage.getItem('dominantHandP'),
        localStorage.getItem('pencilGripP'),
        localStorage.getItem('auxiliaryHandFunctionP'),
        localStorage.getItem('accurateShape1'),
        localStorage.getItem('accurateShape2'),
        localStorage.getItem('fillingShape1'),
        localStorage.getItem('fillingShape2'),
        localStorage.getItem('handNotesP'),
        localStorage.getItem('pencilNotesP'),
        localStorage.getItem('auxiliaryNotesP'),
        localStorage.getItem('accurateNotes1'),
        localStorage.getItem('accurateNotes2'),
        localStorage.getItem('fillNotes1'),
        localStorage.getItem('fillNotes2')
    ];
    const cutting = [
        localStorage.getItem('totalSumC'),
        localStorage.getItem('fromTotalSumC'),
        localStorage.getItem('dominantHandC'),
        localStorage.getItem('pencilGripC'),
        localStorage.getItem('auxiliaryHandFunctionC'),
        localStorage.getItem('productShape1'),
        localStorage.getItem('productShape2'),
        localStorage.getItem('sequenceShape1'),
        localStorage.getItem('sequenceShape2'),
        localStorage.getItem('handNotesC'),
        localStorage.getItem('pencilNotesC'),
        localStorage.getItem('auxiliaryNotesC'),
        localStorage.getItem('productNotes1'),
        localStorage.getItem('productNotes2'),
        localStorage.getItem('sequenceNotes1'),
        localStorage.getItem('sequenceNotes2'),
    ];
    const drawMan = [
        localStorage.getItem('totalSumDM'),
        localStorage.getItem('fromTotalSumDM'),
        localStorage.getItem('notesDM')
    ];
    const copyName = [
        localStorage.getItem('totalSumCN'),
        localStorage.getItem('fromTotalSumCN'),
        localStorage.getItem('accuracy'),
        localStorage.getItem('readability'),
        localStorage.getItem('organization'),
        localStorage.getItem('readabilityAndOrganization'),
        localStorage.getItem('accurateNotes'),
        localStorage.getItem('readabilityNotes'),
        localStorage.getItem('organizationNotes'),
        localStorage.getItem('readAndOrganNotes')
    ];
    const writingAB = [
        localStorage.getItem('totalSumWAB'),
        localStorage.getItem('fromTotalSumWAB'),
        localStorage.getItem('notesWAB')
    ];
    const writingNums = [
        localStorage.getItem('totalSumWN'),
        localStorage.getItem('fromTotalSumWN'),
        localStorage.getItem('notesWN')
    ];
    const phoneticWriting = [
        localStorage.getItem('totalSumPW'),
        localStorage.getItem('fromTotalSumPW'),
        localStorage.getItem('fish'),
        localStorage.getItem('dog'),
        localStorage.getItem('cat'),
        localStorage.getItem('beetle'),
        localStorage.getItem('selectedData0'),
        localStorage.getItem('selectedData1'),
        localStorage.getItem('fishNotes'),
        localStorage.getItem('dogNotes'),
        localStorage.getItem('catNotes'),
        localStorage.getItem('beetleNotes')
    ];
    const successShapes = currentShapes.filter(shape => copyShapes[8].indexOf(shape) !== -1);
    const failShapes = currentShapes.filter(shape => successShapes.indexOf(shape) === -1);
    console.log('name: ', name);
    console.log('date: ', date);
    return (
        // <style>*{font-family: Segoe UI; direction: rtl; }</style>
        <Box style={{ fontFamily: 'Segoe UI', direction: 'rtl' }}>
            <Box>
                <Typography variant="h2" fontFamily={'inherit'} style={{ textAlign: 'center', margim: 5 }}>תוצאות מורחבות</Typography>
                <div style={{ display: 'flex', justifyContent: 'space-evenly', width: '30%' }}>
                    <h4>שם: {name}</h4>
                    <h4>גיל: {age}</h4>
                    <h4>תאריך: {date}</h4>
                </div>
                <DemoDiv sx={{ maxWidth: '300' }}>
                    <RoundedPaper sx={{ backgroundColor: 'rgb(228, 250, 218)' }}>
                        <Box textAlign='right' direction='rtl' sx={{ direction: 'rtl', margin: 20 }} style={{ fontFamily: 'Segoe UI', backgroundColor: 'rgb(228, 250, 218)', padding: '10px', margin: '20px' }}>
                            <h3>העתקת צורות</h3>
                            {copyShapes[2] === '0' &&
                                <div style={{ textAlign: 'right' }} variant="h3" fontFamily={'Segoe UI'}>יד דומיננטית<b>({copyShapes[2]})</b> - {data[0].data.dominantHand[0]}</div>
                                ||
                                <div variant="h3" fontFamily={'Segoe UI'}>יד דומיננטית<b>({copyShapes[2]})</b> {copyShapes[5]}</div>
                            }
                            <br />
                            <div variant="h3">אחיזת עיפרון<b>({copyShapes[3]})</b> - {data[0].data.pencilGrip[copyShapes[3]]}. {copyShapes[6]}</div>
                            <br />
                            <div variant="h3">תפקודי יד עזר<b>({copyShapes[4]})</b> - {data[0].data.auxiliaryHandFunction[copyShapes[4]]}. {copyShapes[7]}</div>
                            <br />
                            <div variant="h3">דיוק בהעתקת צורות<b>({successShapes.length}/{currentShapes.length})</b> - {successShapes.map(shape => <>{shape}, </>)}
                                עדיין מתקשה בהעתקת {failShapes.map((shape, index) => <span key={index}>{shape}, </span>)}</div>
                            <br />
                            <Box sx={{ fontSize: 20, margin: 3 }}>
                                <label><b> סך הכל העתקת צורות:</b></label>
                                <label><b> {copyShapes[0]}</b></label>
                                <label><b>/{copyShapes[1]}</b></label>
                            </Box>
                        </Box>
                    </RoundedPaper>
                </DemoDiv>
            </Box>
            <Box>
                <DemoDiv sx={{ maxWidth: '300' }}>
                    <RoundedPaper sx={{ backgroundColor: 'rgb(222, 250, 250)' }}>
                        <Box textAlign='right' direction='rtl' sx={{ direction: 'rtl', margin: 20 }} style={{ fontFamily: 'Segoe UI', backgroundColor: 'rgb(222, 250, 2150)', padding: '10px', margin: '20px' }}>
                            <h3>צביעה</h3>
                            {painting[2] === '0' &&
                                <div style={{ textAlign: 'right' }} variant="h3" fontFamily={'Segoe UI'}>יד דומיננטית<b>({painting[2]})</b> {data[1].data.dominantHand[0]}</div>
                                ||
                                <div variant="h3" fontFamily={'Segoe UI'}>יד דומיננטית<b>({painting[2]})</b> {painting[9]}</div>
                            }
                            <br />
                            <div variant="h3">אחיזת עיפרון<b>({painting[3]})</b> - {data[1].data.pencilGrip[painting[3]]}. {painting[10]}</div>
                            <br />
                            <div variant="h3">תפקודי יד עזר<b>({painting[4]})</b> - {data[1].data.auxiliaryHandFunction[painting[4]]}. {painting[11]}</div>
                            <br />
                            <div variant="h3">דיוק {paintingShapes[0]}<b>({painting[5]})</b> - {data[1].data.accuracy[painting[5]]}. {painting[12]} </div>
                            <br />
                            <div variant="h3">מילוי שטח ה{paintingShapes[0]}<b>({painting[7]})</b> - {data[1].data.filling[painting[7]]}. {painting[14]}</div>
                            <br />
                            {paintingShapes.length > 1 && <>
                                <div variant="h3">דיוק {paintingShapes[1]}<b>({painting[6]})</b> - {data[1].data.accuracy[painting[6]]}. {painting[13]}</div>
                                <br />
                                <div variant="h3">מילוי שטח ה{paintingShapes[1]}<b>({painting[8]})</b> - {data[1].data.filling[painting[8]]}. {painting[15]}</div>
                                <br />
                            </>}
                            <br />
                            <Box sx={{ fontSize: 20, margin: 3 }}>
                                <label><b> סך הכל צביעה:</b></label>
                                <label><b> {painting[0]}</b></label>
                                <label><b>/{painting[1]}</b></label>
                            </Box>
                        </Box>
                    </RoundedPaper>
                </DemoDiv>
            </Box>
            <Box>
                <DemoDiv sx={{ maxWidth: '300' }}>
                    <RoundedPaper sx={{ backgroundColor: 'rgb(250, 214, 242)' }}>
                        <Box textAlign='right' direction='rtl' sx={{ direction: 'rtl', margin: 20 }} style={{ fontFamily: 'Segoe UI', backgroundColor: 'rgb(250, 214, 242)', padding: '10px', margin: '20px' }}>
                            <h3>גזירה</h3>
                            {cutting[2] === '0' &&
                                <div style={{ textAlign: 'right' }} variant="h3" >יד דומיננטית<b>({cutting[2]})</b> {data[1].data.dominantHand[0]}</div>
                                ||
                                <div variant="h3" >יד דומיננטית<b>({cutting[2]})</b> {cutting[9]}</div>
                            }
                            <br />
                            <div variant="h3">אחיזת עיפרון<b>({cutting[3]})</b> - {data[2].data.pencilGrip[cutting[3]]}. {cutting[10]}</div>
                            <br />
                            <div variant="h3">תפקודי יד עזר<b>({cutting[4]})</b> - {data[2].data.auxiliaryHandFunction[cutting[4]]}. {cutting[11]}</div>
                            <br />
                            <div variant="h3">תוצר {cuttingShapes[0]}<b>({cutting[5]})</b> - {data[2].data.product[cutting[5]]}. {cutting[12]} </div>
                            <br />
                            <div variant="h3">רצף/קצב {cuttingShapes[0]}<b>({cutting[7]})</b> - {data[2].data.sequence[cutting[7]]}. {cutting[14]}</div>
                            <br />
                            {cuttingShapes.length > 1 && <>
                                <div variant="h3">תוצר {cuttingShapes[1]}<b>({cutting[6]})</b> - {data[2].data.product[cutting[6]]}. {cutting[13]}</div>
                                <br />
                                <div variant="h3">רצף/קצב {cuttingShapes[1]}<b>({cutting[8]})</b> - {data[2].data.sequence[cutting[8]]}. {cutting[15]}</div>
                                <br />
                            </>}
                            <br />
                            <Box sx={{ fontSize: 20, margin: 3 }}>
                                <label><b> סך הכל גזירה:</b></label>
                                <label><b> {cutting[0]}</b></label>
                                <label><b>/{cutting[1]}</b></label>
                            </Box>
                        </Box>
                    </RoundedPaper>
                </DemoDiv>
            </Box>

            <Box>
                <DemoDiv sx={{ maxWidth: '300' }}>
                    <RoundedPaper sx={{ backgroundColor: 'rgb(255, 252, 228)' }}>
                        <Box textAlign='right' direction='rtl' sx={{ direction: 'rtl', margin: 20 }} style={{ fontFamily: 'Segoe UI', backgroundColor: 'rgb(255, 252, 228)', padding: '10px', margin: '20px' }}>
                            <h3>ציור איש</h3>
                            <Box sx={{ fontSize: 20, margin: 3 }}>
                                <label><b> סך הכל ציור איש:</b></label>
                                <label><b> {drawMan[0]}</b></label>
                                <label><b>/{drawMan[1]}</b></label>
                                <label>. {drawMan[2]}</label>
                            </Box>
                        </Box>
                    </RoundedPaper>
                </DemoDiv>
            </Box>
            <Box>
                <DemoDiv sx={{ maxWidth: '300' }}>
                    <RoundedPaper sx={{  }}>
                        <Box textAlign='right' direction='rtl' sx={{ direction: 'rtl', margin: 20 }} style={{ fontFamily: 'Segoe UI', backgroundColor: 'rgb(250, 239, 229)', padding: '10px', margin: '20px' }}>
                            {range === '4-5' &&
                                <h3>העתקת שם</h3>
                                ||
                                <h3>כתיבת שם</h3>
                            }
                            <div variant="h3">דיוק<b>({copyName[2]})</b> - {data[3].data.accuracy[copyName[2]]}. {copyName[6]}</div>
                            <br />
                            {range === '4-5' && <>
                                <div variant="h3">קריאות<b>({copyName[3]})</b> - {data[3].data.readability[copyName[3]]}. {copyName[7]}</div>
                                <br />
                                <div variant="h3">התארגנות<b>({copyName[4]})</b> - {data[3].data.organization[copyName[4]]}. {copyName[8]}</div>
                                <br />
                            </>
                                ||
                                <div variant="h3">קריאות והתארגנות<b>({copyName[5]})</b> - {data[3].data.readabilityAndOrganization[copyName[5]]}. {copyName[9]}</div>
                            }
                            <br />
                            <Box sx={{ fontSize: 20, margin: 3 }}>
                                {range === '4-5' &&
                                    <label><b> סך הכל העתקת שם:</b></label>
                                    ||
                                    <label><b> סך הכל כתיבת שם:</b></label>
                                }
                                <label><b> {copyName[0]}</b></label>
                                <label><b>/{copyName[1]}</b></label>
                            </Box>
                        </Box>
                    </RoundedPaper>
                </DemoDiv>
            </Box>
            <Box>
                <DemoDiv sx={{ maxWidth: '300' }}>
                    <RoundedPaper sx={{ backgroundColor: 'rgb(211, 206, 255)' }}>
                        <Box textAlign='right' direction='rtl' sx={{ direction: 'rtl', margin: 20 }} style={{ fontFamily: 'Segoe UI', backgroundColor: 'rgb(211, 206, 255)', padding: '10px', margin: '20px'  }}>
                            <h3>כתיבת א"ב</h3>
                            <div variant="h3">{data[4].data[writingAB[0]]}<b>({writingAB[0]})</b>. {writingAB[2]}</div>
                            <br />
                        </Box>
                    </RoundedPaper>
                </DemoDiv>
            </Box>
            <Box>
                <DemoDiv sx={{ maxWidth: '300' }}>
                    <RoundedPaper sx={{ backgroundColor: 'rgb(228, 250, 218)' }}>
                        <Box textAlign='right' direction='rtl' sx={{ direction: 'rtl', margin: 20 }} style={{ fontFamily: 'Segoe UI', backgroundColor: 'rgb(228, 250, 218)', padding: '10px', margin: '20px'  }}>
                            <h3>כתיבת מספרים</h3>
                            <div variant="h3">{data[5].data[writingNums[0]]}<b>({writingNums[0]})</b>. {writingNums[2]}</div>
                            <br />
                        </Box>
                    </RoundedPaper>
                </DemoDiv>
            </Box>
        </Box>
    )
}