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
import { Box, Typography } from '@mui/material';
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
    const [copyName, setCopyName] = React.useState(0);


    React.useEffect(() => {
        const subscription = eventBus.on('buttonClick', () => {
            if (ageRange === '4-5')
                localStorage.setItem('copyNameData', [copyName, accuracy, readability, organization]);
            else
                localStorage.setItem('copyNameData', [copyName, accuracy, readabilityAndOrganization]);

        });
        return () => {
            subscription.off();
        };
    }, [copyName, accuracy, readability, organization, readabilityAndOrganization]);

    const handleRadioChanges = (event) => {
        console.log('in handleRadioChanges', event.target.value);
        const index = event.target.value[1];
        if (event.target.value.includes('a')) {
            if (selectValues[index - 1].includes('b'))
                setCopyName(copyName + 1);
        }
        else {
            if (selectValues[index - 1].includes('a'))
                setCopyName(copyName - 1);
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
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell align="right">1     </TableCell>
                            <TableCell align="right">0     </TableCell>
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
                                    לקויה</TableCell>
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
                                    בלתי קריא והתארגנות לקויה</TableCell>
                            </TableRow>
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <div >
                <Box sx={{ fontSize: 20, margin: 3 }}>
                    <label><b>  סך הכל העתקת שם:</b></label>
                    <label><b> {copyName}</b></label>
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