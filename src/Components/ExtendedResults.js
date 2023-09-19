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
    const shapesArray = ['', 'קו מאונך', 'קו מאוזן', 'עיגול', 'פלוס', 'ריבוע', 'קווים אלכסוניים', '', 'איקס', 'משולש'];
    const currentShapes = shapesArray.filter((shape, index) => index >= fromNum && index <= toNum);

    const name = localStorage.getItem('name');
    const age = localStorage.getItem('age');
    const ageRange = localStorage.getItem('ageRange');
    const date = Date.now();
    const copyShapes = [
        localStorage.getItem('totalSumCSH'),
        localStorage.getItem('dominantHandCSH'),
        localStorage.getItem('pencilGripCSH'),
        localStorage.getItem('auxiliaryHandFunctionCSH'),
        localStorage.getItem('handNotesCSH'),
        localStorage.getItem('pencilNotesCSH'),
        localStorage.getItem('auxiliaryNotesCSH'),
        localStorage.getItem('accurateShapes')];

    const painting = [
        localStorage.getItem('totalSumP'),
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
        localStorage.getItem('notesDM')
    ];
    const copyName = [
        localStorage.getItem('totalSumCN'),
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
        localStorage.getItem('notesWAB')
    ];
    const writingNums = [
        localStorage.getItem('totalSumWN'),
        localStorage.getItem('notesWN')
    ];
    const phoneticWriting = [
        localStorage.getItem('totalSumPW'),
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
    const successShapes = currentShapes.filter(shape => copyShapes[7].indexOf(shape) !== -1);
    const failShapes = currentShapes.filter(shape => successShapes.indexOf(shape) === -1);
    console.log(paintingShapes);
    return (
        <>

            <Box>
                <DemoDiv sx={{ maxWidth: '300' }}>
                    <RoundedPaper sx={{ backgroundColor: 'rgb(228, 250, 218)' }}>

                        <Typography variant="h2" fontFamily={'inherit'}>תוצאות מורחבות</Typography>
                        <Box textAlign='right' direction='rtl' sx={{ direction: 'rtl', margin: 20 }} fontFamily={'Segoe UI'}>
                            <h3>העתקת צורות</h3>
                            {copyShapes[1] === '0' &&
                                <div style={{ textAlign: 'right' }} variant="h3" fontFamily={'Segoe UI'}>יד דומיננטית<b>({copyShapes[1]})</b> - {data[0].data.dominantHand[0]}</div>
                                ||
                                <div variant="h3" fontFamily={'Segoe UI'}>יד דומיננטית<b>({copyShapes[1]})</b> {copyShapes[4]}</div>
                            }
                            <br />
                            <div variant="h3">אחיזת עיפרון<b>({copyShapes[2]})</b> - {data[0].data.pencilGrip[copyShapes[2]]}. {copyShapes[5]}</div>
                            <br />
                            <div variant="h3">תפקודי יד עזר<b>({copyShapes[3]})</b> - {data[0].data.auxiliaryHandFunction[copyShapes[3]]}. {copyShapes[6]}</div>
                            <br />
                            <div variant="h3">דיוק בהעתקת צורות<b>({successShapes.length}/{currentShapes.length})</b> - {successShapes.map(shape => <>{shape}, </>)}
                                עדיין מתקשה בהעתקת {failShapes.map(shape => <>{shape}, </>)}</div>
                            <br />
                            <div variant="h3">סך הכל העתקת צורות: {copyShapes[0]}</div>
                        </Box>
                    </RoundedPaper>
                </DemoDiv>
            </Box>

            <Box>
                <DemoDiv sx={{ maxWidth: '300' }}>
                    <RoundedPaper sx={{ backgroundColor: 'rgb(228, 250, 218)' }}>
                        <Typography variant="h2" fontFamily={'inherit'}>תוצאות מורחבות</Typography>
                        <Box textAlign='right' direction='rtl' sx={{ direction: 'rtl', margin: 20 }} fontFamily={'Segoe UI'}>
                            <h3>צביעה</h3>
                            {painting[1] === '0' &&
                                <div style={{ textAlign: 'right' }} variant="h3" fontFamily={'Segoe UI'}>יד דומיננטית<b>({painting[1]})</b> {data[1].data.dominantHand[0]}</div>
                                ||
                                <div variant="h3" fontFamily={'Segoe UI'}>יד דומיננטית<b>({painting[1]})</b> {painting[8]}</div>
                            }
                            <br />
                            <div variant="h3">אחיזת עיפרון<b>({painting[2]})</b> - {data[1].data.pencilGrip[painting[2]]}. {painting[9]}</div>
                            <br />
                            <div variant="h3">תפקודי יד עזר<b>({painting[3]})</b> - {data[1].data.auxiliaryHandFunction[painting[3]]}. {painting[10]}</div>
                            <br />
                            <div variant="h3">דיוק {paintingShapes[0]}<b>({painting[4]})</b> - {data[1].data.accuracy[painting[4]]}. {painting[10]} </div>
                            <br />
                            <div variant="h3">מילוי שטח ה{paintingShapes[0]}<b>({painting[6]})</b> - {data[1].data.filling[painting[6]]}. {painting[10]}</div>
                            {paintingShapes.length > 1 && <>
                                <div variant="h3">דיוק {paintingShapes[1]}<b>({painting[5]})</b> - {data[1].data.accuracy[painting[5]]}. {painting[10]}</div>
                                <br />
                                <div variant="h3">מילוי שטח ה{paintingShapes[1]}<b>({painting[7]})</b> - {data[1].data.filling[painting[7]]}. {painting[10]}</div>
                                <br />
                            </>}
                            <br />
                            <div variant="h3">סך הכל צביעה :{painting[0]}</div>
                        </Box>
                    </RoundedPaper>
                </DemoDiv>
            </Box>
        </>
    )
}