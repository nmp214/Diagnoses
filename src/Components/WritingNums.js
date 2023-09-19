import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Radio from '@mui/material/Radio';
import { Box, TextField } from '@mui/material';
import eventBus from '../Services/EventBus';

export default function WritingNums() {
    const [selectedValue, setSelectedValue] = React.useState('0');
    const [writingNums, setWritingNums] = React.useState(0);
    const [notes, setNotes] = React.useState('');

    React.useEffect(() => {
        const subscription = eventBus.on('buttonClick', () => {
            localStorage.setItem('totalSumWN', parseInt(writingNums));
            localStorage.setItem('notesWN', notes);
        });
        return () => {
            subscription.off();
        };
    }, [writingNums, notes]);

    const handleRadioChanges = (event) => {
        setWritingNums(parseInt(event.target.value));
    }

    const controlProps = (item) => ({
        checked: selectedValue === item,
        onChange: (event) => setSelectedValue(event.target.value),
        value: item,
        name: 'color-radio-button-demo',
        inputProps: { 'aria-label': item },
    });

    return (<>
        <Box sx={{ width: '100%' }} >
            <div>
                <span style={{ marginLeft: 4 }}>(עפרון ודף עם שורות)</span>
            </div>
            <div style={{ marginTop: 6, marginBottom: 20 }}>
                <b>הוראה: "כתוב את כל המספרים מ"1-1</b>
            </div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell onChange={handleRadioChanges} align="center">
                                <Radio {...controlProps('5')} color='success' />5
                                <Radio {...controlProps('4')} color='success' />4     </TableCell>
                            <TableCell onChange={handleRadioChanges} sx={{
                                display: 'flex',
                                justifyContent: 'space-around'
                            }} align="center">
                                <div><Radio {...controlProps('3')} color='success' />3 </div>   <div> <Radio {...controlProps('2')} color='success' />               2   </div>
                            </TableCell >
                            <TableCell onChange={handleRadioChanges} align="center">  <Radio {...controlProps('1')} color='success' />1
                                <Radio {...controlProps('0')} color='success' />0     </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow
                            key='dominantHand'
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                עיצוב כל הספרות בצורה
                                הניתנת לזיהוי ללא היפוך
                                כיוונים
                            </TableCell>
                            <TableCell align="right" >
                                חלקי- חלק מהספרות ניתנות
                                לקריאה וחלקן לא, חלק
                                מהספרות בכיוונים הפוכים
                            </TableCell>
                            <TableCell align="right" >
                                לא כתבו ספרות, שיבושים
                                בולטים, בלתי קריא
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <TextField sx={{ marginTop: 5, marginBottom: 5, width: '100%', textAlign: 'left' }} color='success' multiline label='הערות' textAlign='left' value={notes} onChange={(event) => setNotes(event.target.value)} />
            <div >
                <Box sx={{ fontSize: 20, margin: 3 }}>
                    <label><b>  סך הכל כתיבת ספרות:</b></label>
                    <label><b> {selectedValue}</b></label>
                    <label><b>/5</b></label>
                </Box>
            </div>
        </Box>
    </>
    )
}