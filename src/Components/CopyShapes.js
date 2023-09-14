import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Radio from '@mui/material/Radio';
import { Box, FormControlLabel, TextField, Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import eventBus from '../Services/EventBus';

export default function CopyShapes(props) {
    const ageRange = props.ageRange;
    const fromNum = props.fromNum;
    const toNum = props.toNum;
    const shapesArray = ['', 'קו מאונך', 'קו מאוזן', 'עיגול', 'פלוס', 'ריבוע', 'קווים אלכסוניים', '', 'איקס', 'משולש'];
    const currentShapes = shapesArray.filter((shape, index) => index >= fromNum && index <= toNum);
    const [selectedValue1, setSelectedValue1] = React.useState('b');
    const [selectedValue2, setSelectedValue2] = React.useState('b');
    const [selectedValue3, setSelectedValue3] = React.useState('b');
    const [accuracyShapes, setAccuracyShapes] = React.useState(0);
    const [copyShapes, setCopyShapes] = React.useState(0);
    const selectValues = [selectedValue1, selectedValue2, selectedValue3];
    const [dominantHand, setDominantHand] = React.useState(0);
    const [pencilGrip, setPencilGrip] = React.useState(0);
    const [auxiliaryHandFunction, setAuxiliaryHandFunction] = React.useState(0);
    const [handNotes, setHandNotes] = React.useState('');
    const [pencilNotes, setPencilNotes] = React.useState('');
    const [auxiliaryNotes, setAuxiliaryNotes] = React.useState('');
    const [shapes, setShapes] = React.useState([]);

    console.log(handNotes);

    React.useEffect(() => {
        const subscription = eventBus.on('buttonClick', () => {
            console.log(currentShapes);
            const totalSum = dominantHand + pencilGrip + auxiliaryHandFunction + shapes.length;
            const notes = [handNotes, pencilNotes, auxiliaryNotes];
            // localStorage.setItem('copyShapesData', [copyShapes, dominantHand, pencilGrip, auxiliaryHandFunction, handNotes, pencilNotes, auxiliaryNotes, shapes]);
            localStorage.setItem('copyShapes', copyShapes);
            localStorage.setItem('dominantHand', dominantHand);
            localStorage.setItem('pencilGrip', pencilGrip);
            localStorage.setItem('auxiliaryHandFunction', auxiliaryHandFunction);
            localStorage.setItem('handNotes', handNotes);
            localStorage.setItem('pencilNotes', pencilNotes);
            localStorage.setItem('auxiliaryNotes', auxiliaryNotes);
            localStorage.setItem('shapes', shapes);
        });
        return () => {
            subscription.off();
        };
    }, [dominantHand, pencilGrip, auxiliaryHandFunction, shapes, copyShapes, handNotes, pencilNotes, auxiliaryNotes]);

    const handleCheckboxChange = (event) => {
        console.log(event.target.value);
        const tempShapes = [...shapes];
        tempShapes.push(event.target.value);
        setShapes(tempShapes);
        if (!event.target.checked) {
            setAccuracyShapes(accuracyShapes - 1);
            setCopyShapes(copyShapes - 1)
            if (event.target.value === 'קווים אלכסוניים') {
                console.log('in if');
                setAccuracyShapes(accuracyShapes - 2);
                setCopyShapes(copyShapes - 2)
            }
        }
        else {
            setAccuracyShapes(accuracyShapes + 1);
            setCopyShapes(copyShapes + 1)
            if (event.target.value === 'קווים אלכסוניים') {
                console.log('in if');
                setAccuracyShapes(accuracyShapes + 2);
                setCopyShapes(copyShapes + 2)
            }
        }
    };

    const handleRadioChanges = (event) => {
        const index = event.target.value[1];
        if (event.target.value.includes('a')) {
            if (selectValues[index - 1].includes('b'))
                setCopyShapes(copyShapes + 1);
        }
        else {
            if (selectValues[index - 1].includes('a'))
                setCopyShapes(copyShapes - 1);
        }
    }


    const handleChange = (event) => {
        console.log('in handleChange, event: ', event.target.value);
        if (event.target.value === 'a1' || event.target.value === 'b1') {
            setSelectedValue1(event.target.value);
            if (event.target.value === 'a1') {
                setDominantHand(1);
                console.log('dominante: ', dominantHand);
            }
            else
                setDominantHand(0);
        }
        if (event.target.value === 'a2' || event.target.value === 'b2') {
            setSelectedValue2(event.target.value);
            if (event.target.value === 'a2')
                setPencilGrip(1);
            else
                setPencilGrip(0);
        }
        if (event.target.value === 'a3' || event.target.value === 'b3') {
            setSelectedValue3(event.target.value);
            if (event.target.value === 'a3')
                setAuxiliaryHandFunction(1);
            else
                setAuxiliaryHandFunction(0);
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


    return (<>
        <Box sx={{ width: '100%' }} >
            <div style={{ display: 'flex' }}>
                <span style={{ marginLeft: 4 }}> (עיפרון)- </span>
                {currentShapes.map((shape, index) =>
                    <div key={index} style={{ marginLeft: 4 }}>
                        {shape}
                        {(index !== currentShapes.length - 1 && currentShapes[index + 1] !== '') && <span>,</span>}
                    </div>)}
                <span>(צורות {fromNum}-{toNum}):</span>
            </div>
            <div style={{ marginTop: 6, marginBottom: 20 }}>
                <b>הוראה: "העתק את הצורות אל המשבצת הריקה"</b>
            </div>
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
                            key='dominantHand'
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                יד דומיננטית
                            </TableCell>
                            <TableCell align="right" onChange={handleRadioChanges} >
                                <Radio {...controlProps1('a1')} color="success" />
                                ימין או שמאל
                            </TableCell>
                            <TableCell align="right" onChange={handleRadioChanges}>
                                <Radio {...controlProps1('b1')} color="success" />
                                לא ברור
                            </TableCell>
                            <TableCell><TextField multiline value={handNotes} onChange={(event) => setHandNotes(event.target.value)}/></TableCell>
                        </TableRow>
                        <TableRow
                            key='pencilGrip'
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                אחיזת עיפרון
                            </TableCell>
                            <TableCell align="right" onChange={handleRadioChanges}>
                                <Radio {...controlProps2('a2')} color="success" />
                                יעילה</TableCell>
                            <TableCell align="right" onChange={handleRadioChanges}>
                                <Radio {...controlProps2('b2')} color="success" />
                                לא יעילה</TableCell>
                                <TableCell><TextField multiline value={pencilNotes} onChange={(event) => setPencilNotes(event.target.value)}/></TableCell>
                        </TableRow>
                        <TableRow
                            key='auxiliaryHandFunction'
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                תיפקודי יד העזר
                            </TableCell>
                            <TableCell align="right" onChange={handleRadioChanges}>
                                <Radio {...controlProps3('a3')} color="success" />
                                מלא</TableCell>
                            <TableCell align="right" onChange={handleRadioChanges}>
                                <Radio {...controlProps3('b3')} color="success" />
                                חלקי</TableCell>
                                <TableCell><TextField multiline value={auxiliaryNotes} onChange={(event) => setAuxiliaryNotes(event.target.value)}/></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <div>
                {/* {ageRange != '6-7' &&
                    <>
                        <FormControlLabel value="קו מאונך" control={<Checkbox color='success' />} label="קו מאונך" onChange={handleCheckboxChange} />
                        <FormControlLabel value="קו מאוזן" control={<Checkbox color='success' />} label="קו מאוזן" onChange={handleCheckboxChange} />
                        <FormControlLabel value="עיגול" control={<Checkbox color='success' />} label="עיגול" onChange={handleCheckboxChange} />
                        <FormControlLabel value="פלוס" control={<Checkbox color='success' />} label="פלוס" onChange={handleCheckboxChange} />
                    </>}
                {ageRange != '3-4' &&
                    <>
                        <FormControlLabel value="ריבוע" control={<Checkbox color='success' />} label="ריבוע" onChange={handleCheckboxChange} />
                        <FormControlLabel value="קווים אלכסוניים" control={<Checkbox color='success' />} label="קווים אלכסוניים" onChange={handleCheckboxChange} />
                        {(ageRange === '5-6' || ageRange === '6-7') &&
                            <>
                                <FormControlLabel value="איקס" control={<Checkbox color='success' />} label="איקס" onChange={handleCheckboxChange} />
                                <FormControlLabel value="משולש" control={<Checkbox color='success' />} label="משולש" onChange={handleCheckboxChange} />
                            </>}
                    </>} */}
                {currentShapes.map((shape, index) =>
                    shape !== "" &&
                    <FormControlLabel key={index} value={shape} control={<Checkbox color='success' />} label={shape} onChange={handleCheckboxChange}>
                        {shape}
                    </FormControlLabel>
                    || <></>
                )}
            </div>
            <div >
                <Box sx={{ fontSize: 18, margin: 3 }}>
                    <label>  דיוק בהעתקת צורות:</label>
                    <label> {accuracyShapes}</label>
                    <label>/{toNum - fromNum + 1}</label>
                </Box>
                <Box sx={{ fontSize: 20, margin: 3 }}>
                    <label><b>  סך הכל העתקת צורות:</b></label>
                    <label><b> {copyShapes}</b></label>
                    <label><b>/{toNum - fromNum + 4}</b></label>
                </Box>
            </div>
        </Box>
    </>
    )
}