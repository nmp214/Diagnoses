import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Radio from '@mui/material/Radio';
import { Box, TextField, Typography } from '@mui/material';
import eventBus from '../Services/EventBus';


export default function Cutting(props) {
    const shapes = props.shapes || [];
    const instruction = props.instruction;
    const fromNum = props.fromNumCutting;
    const toNum = props.toNum;
    const [dominantHand, setDominantHand] = React.useState(0);
    const [pencilGrip, setPencilGrip] = React.useState(0);
    const [auxiliaryHandFunction, setAuxiliaryHandFunction] = React.useState(0);
    const [productShape1, setProductShape1] = React.useState(0);
    const [productShape2, setProductShape2] = React.useState(0);
    const [sequenceShape1, setSequenceShape1] = React.useState(0);
    const [sequenceShape2, setSequenceShape2] = React.useState(0);
    const [accuracyShapes, setAccuracyShapes] = React.useState(0);
    const [handNotes, setHandNotes] = React.useState('');
    const [pencilNotes, setPencilNotes] = React.useState('');
    const [auxiliaryNotes, setAuxiliaryNotes] = React.useState('');
    const [productNotes1, setProductNotes1] = React.useState('');
    const [productNotes2, setProductNotes2] = React.useState('');
    const [sequenceNotes1, setSequenceNotes1] = React.useState('');
    const [sequenceNotes2, setSequenceNotes2] = React.useState('');

    console.log(fromNum, ' ', toNum);
    React.useEffect(() => {
        const subscription = eventBus.on('buttonClick', () => {
            if (shapes.length === 1)
                localStorage.setItem('cuttingData', [accuracyShapes, dominantHand, pencilGrip, auxiliaryHandFunction, productShape1, sequenceShape1,
                    handNotes, pencilNotes, auxiliaryNotes, productNotes1, sequenceNotes1]);
            else
                localStorage.setItem('cuttingData', [accuracyShapes, dominantHand, pencilGrip, auxiliaryHandFunction, productShape1, productShape2, sequenceShape1, sequenceShape2,
                    handNotes, pencilNotes, auxiliaryNotes, productNotes1, productNotes2, sequenceNotes1, sequenceNotes2]);
        });
        return () => {
            subscription.off();
        };
    }, [accuracyShapes, dominantHand, pencilGrip, auxiliaryHandFunction, productShape1, productShape2, sequenceShape1, sequenceShape2,
        handNotes, pencilNotes, auxiliaryNotes, productNotes1, productNotes2, sequenceNotes1, sequenceNotes2]);


    const handleRadioChanges = (event) => {
        let index = event.target.value[1] - 1;
        if (index === 3)
            index = parseInt(event.target.value[1]) + parseInt(event.target.value[2]) - 1;
        else if (index === 4)
            index = parseInt(event.target.value[1]) + parseInt(event.target.value[2]);
        console.log(index);
        if (event.target.value.includes('a')) {
            if (selectValues[index].includes('b'))
                setAccuracyShapes(accuracyShapes + 1);
        }
        else {
            if (selectValues[index].includes('a'))
                setAccuracyShapes(accuracyShapes - 1);
        }
    }

    const [selectedValue1, setSelectedValue1] = React.useState('b');
    const [selectedValue2, setSelectedValue2] = React.useState('b');
    const [selectedValue3, setSelectedValue3] = React.useState('b');
    const [selectedValue4I, setSelectedValue4I] = React.useState('b');
    const [selectedValue4II, setSelectedValue4II] = React.useState('b');
    const [selectedValue5I, setSelectedValue5I] = React.useState('b');
    const [selectedValue5II, setSelectedValue5II] = React.useState('b');
    const selectValues = [selectedValue1, selectedValue2, selectedValue3, selectedValue4I, selectedValue4II, selectedValue5I, selectedValue5II]

    const handleChange = (event) => {
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
        if (event.target.value === 'a40' || event.target.value === 'b40') {
            setSelectedValue4I(event.target.value);
            if (event.target.value === 'a40')
                setProductShape1(1);
            else
                setProductShape1(0);
        }
        if (event.target.value === 'a41' || event.target.value === 'b41') {
            setSelectedValue4II(event.target.value);
            if (event.target.value === 'a41')
                setProductShape2(1);
            else
                setProductShape2(0);
        }
        if (event.target.value === 'a50' || event.target.value === 'b50') {
            setSelectedValue5I(event.target.value);
            if (event.target.value === 'a50')
                setSequenceShape1(1);
            else
                setSequenceShape1(0);
        }
        if (event.target.value === 'a51' || event.target.value === 'b51') {
            setSelectedValue5II(event.target.value);
            if (event.target.value === 'a51')
                setSequenceShape2(1);
            else
                setSequenceShape2(0);
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
                <span style={{ marginLeft: 4 }}> (מספריים)- </span>
                {shapes.map((shape, index) =>
                    <div key={index} style={{ marginLeft: 4 }}>
                        {(index === shapes.length - 1 && index != 0) && <span>ו</span>}
                        {shape}
                    </div>
                )}
                {toNum !== undefined &&
                    <>   (צורות {fromNum}-{toNum})</>
                    || <>(צורה מספר {fromNum})</>
                }:
            </div>
            <div style={{ marginTop: 6, marginBottom: 20 }}>
                <b>{instruction}</b>
            </div>
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
                            key='dominantHand'
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                יד דומיננטית
                            </TableCell>
                            <TableCell align="right" onChange={handleRadioChanges} >
                                <Radio {...controlProps1('a1')} color="secondary" />
                                ימין או שמאל
                            </TableCell>
                            <TableCell align="right" onChange={handleRadioChanges}>
                                <Radio {...controlProps1('b1')} color="secondary" />
                                לא ברור
                            </TableCell>
                            <TableCell><TextField multiline value={handNotes} onChange={(event) => setHandNotes(event.target.value)} /></TableCell>
                        </TableRow>
                        <TableRow
                            key='pencilGrip'
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                אחיזת המספריים
                            </TableCell>
                            <TableCell align="right" onChange={handleRadioChanges}>
                                <Radio {...controlProps2('a2')} color="secondary" />
                                יעילה
                            </TableCell>
                            <TableCell align="right" onChange={handleRadioChanges}>
                                <Radio {...controlProps2('b2')} color="secondary" />
                                לא יעילה
                            </TableCell>
                            <TableCell><TextField multiline value={pencilNotes} onChange={(event) => setPencilNotes(event.target.value)} /></TableCell>
                        </TableRow>
                        <TableRow
                            key='auxiliaryHandFunction'
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                תיפקודי יד העזר
                            </TableCell>
                            <TableCell align="right">
                                <Radio {...controlProps3('a3')} color="secondary" onClick={handleRadioChanges} />
                                מלא</TableCell>
                            <TableCell align="right">
                                <Radio {...controlProps3('b3')} color="secondary" onClick={handleRadioChanges} />
                                חלקי</TableCell>
                            <TableCell><TextField multiline value={auxiliaryNotes} onChange={(event) => setAuxiliaryNotes(event.target.value)} /></TableCell>
                        </TableRow>
                        {shapes.map((shape, index) =>
                            <TableRow
                                key={`productShape${index}`}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    תוצר {shape}
                                </TableCell>
                                <TableCell align="right" onChange={handleRadioChanges}>
                                    <Radio
                                        value={`a4${index}`}
                                        onChange={handleChange}
                                        checked={selectValues[index + 3] === `a4${index}`}
                                        name='`color-radio-button-demo-${index}`'
                                        inputProps={{ 'aria-label': `a4${index}` }}
                                        color="secondary" />
                                    מדויק
                                </TableCell>
                                <TableCell align="right" onChange={handleRadioChanges}>
                                    <Radio
                                        value={`b4${index}`}
                                        onChange={handleChange}
                                        checked={selectValues[index + 3] === `b4${index}`}
                                        name='`color-radio-button-demo-${index}`'
                                        inputProps={{ 'aria-label': `b4${index}` }}
                                        color="secondary"
                                    />
                                    לא מדויק
                                </TableCell>
                                {index === 0 &&
                                    <TableCell><TextField multiline value={productNotes1} onChange={(event) => setProductNotes1(event.target.value)} /></TableCell>
                                    ||
                                    <TableCell><TextField multiline value={productNotes2} onChange={(event) => setProductNotes2(event.target.value)} /></TableCell>
                                }
                            </TableRow>
                        )}
                        {shapes.map((shape, index) =>
                            <TableRow
                                key={`sequence${index}`}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    רצף/קצב {shape}
                                </TableCell>
                                <TableCell align="right" onChange={handleRadioChanges}>
                                    <Radio
                                        value={`a5${index}`}
                                        onChange={handleChange}
                                        checked={selectValues[index + 5] === `a5${index}`}
                                        name='`color-radio-button-demo-${index}`'
                                        inputProps={{ 'aria-label': `a5${index}` }}
                                        color="secondary"
                                    />
                                    תקין
                                </TableCell>
                                <TableCell align="right" onChange={handleRadioChanges}>
                                    <Radio
                                        value={`b5${index}`}
                                        onChange={handleChange}
                                        checked={selectValues[index + 5] === `b5${index}`}
                                        name='`color-radio-button-demo-${index}`'
                                        inputProps={{ 'aria-label': `b5${index}` }}
                                        color="secondary" />
                                    מתקשה
                                </TableCell>
                                {index === 0 &&
                                    <TableCell><TextField multiline value={sequenceNotes1} onChange={(event) => setSequenceNotes1(event.target.value)} /></TableCell>
                                    ||
                                    <TableCell><TextField multiline value={sequenceNotes2} onChange={(event) => setSequenceNotes2(event.target.value)} /></TableCell>
                                }
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            <div >
                <Box sx={{ fontSize: 20, margin: 3 }}>
                    <label><b>  סך הכל גזירה:</b></label>
                    <label><b> {accuracyShapes}</b></label>
                    <label><b>/{shapes.length * 2 + 3}</b></label>
                </Box>
            </div>
        </Box >
        {/* } */}
    </>
    )
}