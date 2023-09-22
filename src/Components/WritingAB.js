import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { purple } from '@mui/material/colors';
import Radio from '@mui/material/Radio';
import { Box, TextField } from '@mui/material';
import eventBus from '../Services/EventBus';

export default function WritingAB(props) {
    const [selectedValue, setSelectedValue] = React.useState('0');
    const [notes, setNotes] = React.useState('');
    React.useEffect(() => {
        const subscription = eventBus.on('buttonClick', () => {
            localStorage.setItem('totalSumWAB', parseInt(selectedValue));
            localStorage.setItem('fromTotalSumWAB', 5);
            localStorage.setItem('notesWAB', notes);
        });
        return () => {
            subscription.off();
        };
    }, [selectedValue, notes]);

    const controlProps = (item) => ({
        checked: selectedValue === item,
        onChange: (event) => setSelectedValue(event.target.value),
        value: item,
        name: 'color-radio-button-demo',
        inputProps: { 'aria-label': item },
    });

    return (<>
        <Box sx={{ width: '100%' }} >
            <div style={{ display: 'flex' }}>
                <span style={{ marginLeft: 4 }}>(עפרון ודף עם שורות)</span>
            </div>
            <div style={{ marginTop: 6, marginBottom: 20 }}>
                <b>הוראה: "כתוב את אותיות הא"ב, ולאחר מכן את האותיות הסופיות"</b>
            </div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">
                                <Radio {...controlProps('5')} sx={{
                                    '&.Mui-checked': {
                                        color: purple[800],
                                    },
                                }} />5
                                <Radio {...controlProps('4')} sx={{
                                    '&.Mui-checked': {
                                        color: purple[800],
                                    },
                                }} />4
                            </TableCell>
                            <TableCell
                                // sx={{
                                //     display: 'flex',
                                //     justifyContent: 'space-around'
                                // }}
                                align="center">
                                {/* <div> */}
                                <Radio {...controlProps('3')} sx={{
                                    '&.Mui-checked': {
                                        color: purple[800],
                                    },
                                }} />3
                                {/* </div> */}
                                {/* <div> */}
                                <Radio {...controlProps('2')} sx={{
                                    '&.Mui-checked': {
                                        color: purple[800],
                                    },
                                }} />2
                                {/* </div> */}
                            </TableCell>
                            <TableCell align="center">
                                <Radio {...controlProps('1')} sx={{
                                    '&.Mui-checked': {
                                        color: purple[800],
                                    },
                                }} />1
                                <Radio {...controlProps('0')} sx={{
                                    '&.Mui-checked': {
                                        color: purple[800],
                                    },
                                }} />0
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow
                            key='dominantHand'
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="right" component="th" scope="row">
                                עיצוב כל האותיות בדפוס /
                                כתב בצורה הניתנת לזיהוי
                                ללא היפוך כיוונים
                            </TableCell>
                            <TableCell align="right" >
                                חלקי- נכתבו חלק מהאותיות,
                                חלק מהאותיות ניתנות
                                לקריאה וחלקן לא, חלק
                                מהאותיות בכיוונים הפוכים
                            </TableCell>
                            <TableCell align="right">
                                לא נכתבו אותיות, שיבושים
                                בולטים, בלתי קריא
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <TextField sx={{ marginTop: 5, marginBottom: 5, width: '100%', textAlign: 'left' }} multiline label='הערות' textAlign='left' value={notes} onChange={(event) => setNotes(event.target.value)}/>
            <div >
                <Box sx={{ fontSize: 20, margin: 3 }}>
                    <label><b>  סך הכל כתיבת א"ב:</b></label>
                    <label><b> {selectedValue}</b></label>
                    <label><b>/5</b></label>
                </Box>
            </div>
        </Box>
    </>
    )
}