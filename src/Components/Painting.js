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


export default function Painting(props) {
    const shapes = props.shapes || [];
    const fromNum = props.fromNumPainting;
    const toNum = props.toNumPainting;
    const instruction = props.instruction;
    console.log(fromNum, ' ', toNum);
    const [selectedValue1, setSelectedValue1] = React.useState('b');
    const [selectedValue2, setSelectedValue2] = React.useState('b');
    const [selectedValue3, setSelectedValue3] = React.useState('b');
    const [selectedValue4I, setSelectedValue4I] = React.useState('b');
    const [selectedValue4II, setSelectedValue4II] = React.useState('b');
    const [selectedValue5I, setSelectedValue5I] = React.useState('b');
    const [selectedValue5II, setSelectedValue5II] = React.useState('b');
    const selectValues = [selectedValue1, selectedValue2, selectedValue3, selectedValue4I, selectedValue4II, selectedValue5I, selectedValue5II]
    const [painting, setPainting] = React.useState(0);
    const [dominantHand, setDominantHand] = React.useState(0);
    const [pencilGrip, setPencilGrip] = React.useState(0);
    const [auxiliaryHandFunction, setAuxiliaryHandFunction] = React.useState(0);
    const [accurateShape1, setAccurateShape1] = React.useState(0);
    const [accurateShape2, setAccurateShape2] = React.useState(0);
    const [fillingShape1, setFillingShape1] = React.useState(0);
    const [fillingShape2, setFillingShape2] = React.useState(0);
    const [handNotes, setHandNotes] = React.useState('');
    const [pencilNotes, setPencilNotes] = React.useState('');
    const [auxiliaryNotes, setAuxiliaryNotes] = React.useState('');
    const [accurateNotes1, setAccurateNotes1] = React.useState('');
    const [accurateNotes2, setAccurateNotes2] = React.useState('');
    const [fillNotes1, setFillNotes1] = React.useState('');
    const [fillNotes2, setFillNotes2] = React.useState('');

    React.useEffect(() => {
        const subscription = eventBus.on('buttonClick', () => {
            if (shapes.length === 1)
                localStorage.setItem('paintingData', [painting, dominantHand, pencilGrip, auxiliaryHandFunction, accurateShape1, fillingShape1, handNotes, pencilNotes, auxiliaryNotes, accurateNotes1, fillNotes1]);
            else
                localStorage.setItem('paintingData', [painting, dominantHand, pencilGrip, auxiliaryHandFunction, accurateShape1, accurateShape2, fillingShape1, fillingShape2,
                    handNotes, pencilNotes, auxiliaryNotes, accurateNotes1, accurateNotes2, fillNotes1, fillNotes2]);
        });
        return () => {
            subscription.off();
        };
    }, [painting, dominantHand, pencilGrip, auxiliaryHandFunction, accurateShape1, accurateShape2, fillingShape1, fillingShape2,
        selectedValue1, selectedValue2, selectedValue3, selectedValue4I, selectedValue4II, selectedValue5I, selectedValue5II, shapes,
        accurateNotes1, accurateNotes2, fillNotes1, fillNotes2]);

    const handleRadioChanges = (event) => {
        let index = event.target.value[1] - 1;
        if (index === 3)
            index = parseInt(event.target.value[1]) + parseInt(event.target.value[2]) - 1;
        else if (index === 4)
            index = parseInt(event.target.value[1]) + parseInt(event.target.value[2]);
        console.log(index);
        if (event.target.value.includes('a')) {
            if (selectValues[index].includes('b'))
                setPainting(painting + 1);
        }
        else {
            if (selectValues[index].includes('a'))
                setPainting(painting - 1);
        }
    }

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
                setAccurateShape1(1);
            else
                setAccurateShape1(0);
        }
        if (event.target.value === 'a41' || event.target.value === 'b41') {
            setSelectedValue4II(event.target.value);
            if (event.target.value === 'a41')
                setAccurateShape2(1);
            else
                setAccurateShape2(0);
        }
        if (event.target.value === 'a50' || event.target.value === 'b50') {
            setSelectedValue5I(event.target.value);
            if (event.target.value === 'a50')
                setFillingShape1(1);
            else
                setFillingShape1(0);
        }
        if (event.target.value === 'a51' || event.target.value === 'b51') {
            setSelectedValue5II(event.target.value);
            if (event.target.value === 'a51')
                setFillingShape2(1);
            else
                setFillingShape2(0);
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
                <span style={{ marginLeft: 4 }}>(טוש עבה)-</span>
                {shapes.map((shape, index) =>
                    <div key={index} style={{ marginLeft: 4 }}>
                        {shape}
                        {index != shapes.length - 1 && <span>,</span>}
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
                <Table sx={{ minWidth: 800 }} aria-label="simple table">
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
                                יד דומיננטית</TableCell>
                            <TableCell align="right" onChange={handleRadioChanges} >
                                <Radio id='a1' {...controlProps1('a1')} color="primary" />
                                ימין או שמאל</TableCell>
                            <TableCell align="right" onChange={handleRadioChanges}>
                                <Radio id='b1' {...controlProps1('b1')} color="primary" />
                                לא ברור</TableCell>
                            <TableCell><TextField multiline value={handNotes} onChange={(event) => setHandNotes(event.target.value)} /></TableCell>
                        </TableRow>
                        <TableRow
                            key='pencilGrip'
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                אחיזת עיפרון
                            </TableCell>
                            <TableCell id='a2' align="right" onChange={handleRadioChanges}>
                                <Radio {...controlProps2('a2')} color="primary" />
                                יעילה</TableCell>
                            <TableCell align="right" onChange={handleRadioChanges}>
                                <Radio id='b2' {...controlProps2('b2')} color="primary" />
                                לא יעילה</TableCell>
                            <TableCell><TextField multiline value={pencilNotes} onChange={(event) => setPencilNotes(event.target.value)} /></TableCell>
                        </TableRow>
                        <TableRow
                            key='auxiliaryHandFunction'
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                תיפקודי יד העזר
                            </TableCell>
                            <TableCell id='a3' align="right" onChange={handleRadioChanges}>
                                <Radio {...controlProps3('a3')} color="primary" />
                                מלא</TableCell>
                            <TableCell align="right" onChange={handleRadioChanges}>
                                <Radio id='b3' {...controlProps3('b3')} color="primary" />
                                חלקי</TableCell>
                            <TableCell><TextField multiline value={auxiliaryNotes} onChange={(event) => setAuxiliaryNotes(event.target.value)} /></TableCell>
                        </TableRow>
                        {shapes.map((shape, index) =>
                            <TableRow
                                key={`accurateShape${index}`}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    דיוק {shape}
                                </TableCell>
                                <TableCell align="right" onChange={handleRadioChanges}>
                                    <Radio
                                        value={`a4${index}`}
                                        onChange={handleChange}
                                        checked={selectValues[index + 3] === `a4${index}`}
                                        name='`color-radio-button-demo-${index}`'
                                        inputProps={{ 'aria-label': `a4${index}` }}
                                        color="primary" />
                                    מדייק
                                </TableCell>
                                <TableCell align="right" onChange={handleRadioChanges}>
                                    <Radio
                                        value={`b4${index}`}
                                        onChange={handleChange}
                                        checked={selectValues[index + 3] === `b4${index}`}
                                        name='`color-radio-button-demo-${index}`'
                                        inputProps={{ 'aria-label': `b4${index}` }}
                                        color="primary" />
                                    לא מדייק
                                </TableCell>
                                {index === 0 &&
                                    <TableCell><TextField multiline value={accurateNotes1} onChange={(event) => setAccurateNotes1(event.target.value)} /></TableCell>
                                    ||
                                    <TableCell><TextField multiline value={accurateNotes2} onChange={(event) => setAccurateNotes2(event.target.value)} /></TableCell>
                                }
                            </TableRow>
                        )}
                        {shapes.map((shape, index) =>
                            <TableRow
                                key={`fillingSpace${index}`}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    מילוי שטח ה{shape}
                                </TableCell>
                                <TableCell align="right" onChange={handleRadioChanges}>
                                    <Radio
                                        value={`a5${index}`}
                                        onChange={handleChange}
                                        checked={selectValues[index + 5] === `a5${index}`}
                                        name='`color-radio-button-demo-${index}`'
                                        inputProps={{ 'aria-label': `a5${index}` }}
                                        color="primary" />
                                    מלא
                                </TableCell>
                                <TableCell align="right" onChange={handleRadioChanges}>
                                    <Radio
                                        value={`b5${index}`}
                                        onChange={handleChange}
                                        checked={selectValues[index + 5] === `b5${index}`}
                                        name='`color-radio-button-demo-${index}`'
                                        inputProps={{ 'aria-label': `b5${index}` }}
                                        color="primary" />
                                    לא מלא
                                </TableCell>
                                {index === 0 &&
                                    <TableCell><TextField multiline value={fillNotes1} onChange={(event) => setFillNotes1(event.target.value)} /></TableCell>
                                    ||
                                    <TableCell><TextField multiline value={fillNotes2} onChange={(event) => setFillNotes2(event.target.value)} /></TableCell>
                                }
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            <div >
                <Box sx={{ fontSize: 20, margin: 3 }}>
                    <label><b>  סך הכל צביעה:</b></label>
                    <label><b> {painting}</b></label>
                    <label><b>/{shapes.length * 2 + 3}</b></label>
                </Box>
            </div>
        </Box>
        {/* } */}
    </>
    )
}