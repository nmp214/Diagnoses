import { Box, Typography } from "@mui/material";

export default function ExtendedResults(props) {
    const name = localStorage.getItem('name');
    const age = localStorage.getItem('age');
    const ageRange = localStorage.getItem('ageRange');
    const date = Date.now();
    const copyShapes = [localStorage.getItem('copyShapes'), localStorage.getItem('dominantHand'),
    localStorage.getItem('pencilGrip'), localStorage.getItem('auxiliaryHandFunction'), localStorage.getItem('handNotes'),
    localStorage.getItem('pencilNotes'), localStorage.getItem('auxiliaryNotes'), localStorage.getItem('shapes')];
    const painting = [...localStorage.getItem('paintingData')];
    const cutting = [...localStorage.getItem('cuttingData')];
    const drawMan = [...localStorage.getItem('drawManData')];
    const copyName = [...localStorage.getItem('copyNameData')];
    const writingAB = [...localStorage.getItem('writingABData')];
    const writingNums = [localStorage.getItem('writingNumsData')];
    const phoneticWriting = [...localStorage.getItem('phoneticWritingData')];
    console.log(copyShapes);
    return (
        <Box>
            <Typography variant="h2" fontFamily={'inherit'}>תוצאות מורחבות</Typography>
            <Box textAlign='right' sx={{ direction: 'rtl', margin: 20 }} fontFamily={'Segoe UI'}>
                <Typography variant="h3" fontFamily={'Segoe UI'}>יד דומיננטית<b>({copyShapes[1]})</b> {copyShapes[4]}</Typography>
                <Typography variant="h3">אחיזת עיפרון<b>({copyShapes[2]})</b> {copyShapes[5]}</Typography>
                <Typography variant="h3">תפקודי יד עזר<b>({copyShapes[3]})</b> {copyShapes[6]}</Typography>

            </Box>
        </Box>
    )
}