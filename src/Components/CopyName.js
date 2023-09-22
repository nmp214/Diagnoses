import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { orange } from '@mui/material/colors';
import Radio from '@mui/material/Radio';
import { Box, TextField, Typography } from '@mui/material';
import eventBus from '../Services/EventBus';

export default function CopyName(props) {
    const ageRange = props.ageRange;
    const instruction1 = props.instruction1;
    const instruction2 = props.instruction2;
    const [selectedValue1, setSelectedValue1] = React.useState('b');
    const [selectedValue2, setSelectedValue2] = React.useState('b');
    const [selectedValue3, setSelectedValue3] = React.useState('b');
    const [selectedValue4, setSelectedValue4] = React.useState('b');
    const selectValues = [selectedValue1, selectedValue2, selectedValue3, selectedValue4];
    const [accuracy, setAccuracy] = React.useState(0);
    const [readability, setReadability] = React.useState(0);
    const [organization, setOrganization] = React.useState(0);
    const [readabilityAndOrganization, setReadabilityAndOrganization] = React.useState(0);
    const [accurateNotes, setAccurateNotes] = React.useState('');
    const [readabilityNotes, setReadabilityNotes] = React.useState('');
    const [organizationNotes, setOrganizationNotes] = React.useState('');
    const [readAndOrganNotes, setReadAndOrganNotes] = React.useState('');
    const [totalSum, setTotalSum] = React.useState(0);

    React.useEffect(() => {
        const subscription = eventBus.on('buttonClick', () => {
            localStorage.setItem('totalSumCN', totalSum);
            if (ageRange === '4-5')
                localStorage.setItem('fromTotalSumCN', 3);
            else
                localStorage.setItem('fromTotalSumCN', 2);
            localStorage.setItem('accuracy', accuracy);
            localStorage.setItem('readability', readability);
            localStorage.setItem('organization', organization);
            localStorage.setItem('readabilityAndOrganization', readabilityAndOrganization);
            localStorage.setItem('accurateNotes', accurateNotes);
            localStorage.setItem('readabilityNotes', readabilityNotes);
            localStorage.setItem('organizationNotes', organizationNotes);
            localStorage.setItem('readAndOrganNotes', readAndOrganNotes);
        });
        return () => {
            subscription.off();
        };
    }, [totalSum, accuracy, readability, organization, readabilityAndOrganization,
        accurateNotes, readabilityNotes, organizationNotes, readAndOrganNotes]);

    const handleRadioChanges = (event) => {
        console.log('in handleRadioChanges', event.target.value);
        const index = event.target.value[1];
        if (event.target.value.includes('a')) {
            if (selectValues[index - 1].includes('b'))
                setTotalSum(totalSum + 1);
        }
        else {
            if (selectValues[index - 1].includes('a'))
                setTotalSum(totalSum - 1);
        }
    }

    const handleChange = (event) => {
        console.log('in handleChange, event: ', event.target.value);
        if (event.target.value.includes('1')) {
            setSelectedValue1(event.target.value);
            if (event.target.value === 'a1') {
                setAccuracy(1);
            }
            else
                setAccuracy(0);
        }
        if (event.target.value.includes('2')) {
            setSelectedValue2(event.target.value);
            if (event.target.value === 'a2')
                setReadability(1);
            else
                setReadability(0);
        }
        if (event.target.value.includes('3')) {
            setSelectedValue3(event.target.value);
            if (event.target.value === 'a3')
                setOrganization(1);
            else
                setOrganization(0);
        }
        if (event.target.value.includes('4')) {
            setSelectedValue4(event.target.value);
            if (event.target.value === 'a4')
                setReadabilityAndOrganization(1);
            else
                setReadabilityAndOrganization(0);
        }
    };

    const controlProps1 = (item) => ({
        checked: selectedValue1 === item,
        onChange: handleChange,
        value: item,
        name: 'color-radio-button-demo',
        inputProps: { 'aria-label': item },
    });
    const controlProps2 = (item) => ({
        checked: selectedValue2 === item,
        onChange: handleChange,
        value: item,
        name: 'color-radio-button-demo',
        inputProps: { 'aria-label': item },
    });
    const controlProps3 = (item) => ({
        checked: selectedValue3 === item,
        onChange: handleChange,
        value: item,
        name: 'color-radio-button-demo',
        inputProps: { 'aria-label': item },
    });
    const controlProps4 = (item) => ({
        checked: selectedValue4 === item,
        onChange: handleChange,
        value: item,
        name: 'color-radio-button-demo',
        inputProps: { 'aria-label': item },
    });

    return (<>
        <Box sx={{ width: '100%' }} >
            <div style={{ display: 'flex' }}>
                <span style={{ marginLeft: 4 }}>(עיפרון ודף A4 חלק)</span>
                {ageRange === '4-5' &&
                    <span style={{ marginLeft: 4 }}>כותבים את שם הילד בראש הדף</span>
                }
            </div>
            {ageRange === '4-5' &&
                <div style={{ marginTop: 6, marginBottom: 20 }}>
                    <b>{instruction1}</b>
                </div>
                ||
                <div style={{ marginTop: 6, marginBottom: 20 }}>
                    <b>{instruction2}</b>
                </div>}
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 800 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell align="center">1     </TableCell>
                            <TableCell align="center">0     </TableCell>
                            <TableCell align='center'>הערות</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow
                            key='accuracy'
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                דיוק
                            </TableCell>
                            <TableCell align="right" onChange={handleRadioChanges} >
                                <Radio {...controlProps1('a1')} sx={{
                                    '&.Mui-checked': {
                                        color: orange[800],
                                    },
                                }} />
                                העתקה לפי סדר תקין</TableCell>
                            <TableCell align="right" onChange={handleRadioChanges}>
                                <Radio {...controlProps1('b1')} sx={{
                                    '&.Mui-checked': {
                                        color: orange[800],
                                    },
                                }} />
                                השמטת אותיות, בלבול בסדר,
                                כתיבה משמאל לימין
                            </TableCell>
                            <TableCell><TextField multiline value={accurateNotes} onChange={(event) => setAccurateNotes(event.target.value)} /></TableCell>
                        </TableRow>
                        {ageRange === '4-5' &&
                            <TableRow
                                key='readability'
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    קריאות
                                </TableCell>
                                <TableCell align="right" onChange={handleRadioChanges}>
                                    <Radio {...controlProps2('a2')} sx={{
                                        '&.Mui-checked': {
                                            color: orange[800]
                                        },
                                    }} />
                                    הכתב קריא
                                </TableCell>
                                <TableCell align="right" onChange={handleRadioChanges}>
                                    <Radio {...controlProps2('b2')} sx={{
                                        '&.Mui-checked': {
                                            color: orange[800],
                                        },
                                    }} />
                                    בלתי קריא
                                </TableCell>
                                <TableCell><TextField multiline value={readabilityNotes} onChange={(event) => setReadabilityNotes(event.target.value)} /></TableCell>
                            </TableRow>
                        }
                        {ageRange === '4-5' &&
                            <TableRow
                                key='organization'
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    התארגנות
                                </TableCell>
                                <TableCell align="right" onChange={handleRadioChanges}>
                                    <Radio {...controlProps3('a3')} sx={{
                                        '&.Mui-checked': {
                                            color: orange[800],
                                        },
                                    }} />
                                    תקינה גודל אותיות, רווחים
                                    בין האותיות
                                </TableCell>
                                <TableCell align="right" onChange={handleRadioChanges}>
                                    <Radio {...controlProps3('b3')} sx={{
                                        '&.Mui-checked': {
                                            color: orange[800],
                                        },
                                    }} />
                                    לקויה
                                </TableCell>
                                <TableCell><TextField multiline value={organizationNotes} onChange={(event) => setOrganizationNotes(event.target.value)} /></TableCell>
                            </TableRow>
                            ||
                            <TableRow
                                key='readabilityAndOrganization'
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    קריאות והתארגנות
                                </TableCell>
                                <TableCell align="right" onChange={handleRadioChanges}>
                                    <Radio {...controlProps4('a4')} sx={{
                                        '&.Mui-checked': {
                                            color: orange[800],
                                        },
                                    }} />
                                    קריא וההתארגנות תקינה
                                    (גודל אותיות, רווחים בין האותיות)
                                </TableCell>
                                <TableCell align="right" onChange={handleRadioChanges}>
                                    <Radio {...controlProps4('b4')} sx={{
                                        '&.Mui-checked': {
                                            color: orange[800],
                                        },
                                    }} />
                                    בלתי קריא והתארגנות לקויה
                                </TableCell>
                                <TableCell><TextField multiline value={readAndOrganNotes} onChange={(event) => setReadAndOrganNotes(event.target.value)} /></TableCell>
                            </TableRow>
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <div >
                <Box sx={{ fontSize: 20, margin: 3 }}>
                    <label><b>  סך הכל העתקת שם:</b></label>
                    <label><b> {totalSum}</b></label>
                    {ageRange === '4-5' &&
                        <label><b>/3</b></label>
                        ||
                        <label><b>/2</b></label>
                    }
                </Box>
            </div>
        </Box >
    </>
    )
}