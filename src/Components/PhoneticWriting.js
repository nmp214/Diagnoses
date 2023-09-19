import { Box, Checkbox, Radio, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import Paper from '@mui/material/Paper';
import React from "react";
import eventBus from "../Services/EventBus";

export default function PhoneticWriting(props) {
    const rows = ['דג', 'כלב', 'חתול', 'חיפושית'];
    const words = ['fish', 'dog', 'cat', 'beetle'];
    // const data1 = ['ייצוג חלקי של האותיות', 'בלבול קל בסדר', 'התארגנות חלקית'];
    // const data0 = ['שימוש אקראי באותיות', 'ללא סדר', 'כתיבה משמאל לימין', 'בלתי קריא', 'ההתארגנות לקויה'];
    const [selectedIndexes, setSelectedIndexes] = React.useState(rows.map(() => -1));
    const [data00, setData00] = React.useState(false);
    const [data01, setData01] = React.useState(false);
    const [data02, setData02] = React.useState(false);
    const [data03, setData03] = React.useState(false);
    const [data04, setData04] = React.useState(false);
    const [data10, setData10] = React.useState(false);
    const [data11, setData11] = React.useState(false);
    const [data12, setData12] = React.useState(false);
    const [fish, setFish] = React.useState(0);
    const [dog, setDog] = React.useState(0);
    const [cat, setCat] = React.useState(0);
    const [beetle, setBeetle] = React.useState(0);
    const [selectedData0, setSelectedData0] = React.useState([]);
    const [selectedData1, setSelectedData1] = React.useState([]);
    const [fishNotes, setFishNotes] = React.useState('');
    const [dogNotes, setDogNotes] = React.useState('');
    const [catNotes, setCatNotes] = React.useState('');
    const [beetleNotes, setBeetleNotes] = React.useState('');
    const [totalSum, setTotalSum] = React.useState(0);

    React.useEffect(() => {
        const subscription = eventBus.on('buttonClick', () => {
            localStorage.setItem('totalSumPW',totalSum);
            localStorage.setItem('fish',fish);
            localStorage.setItem('dog',dog);
            localStorage.setItem('cat',cat);
            localStorage.setItem('beetle',beetle);
            localStorage.setItem('selectedData0',selectedData0);
            localStorage.setItem('selectedData1',selectedData1);
            localStorage.setItem('fishNotes',fishNotes);
            localStorage.setItem('dogNotes',dogNotes);
            localStorage.setItem('catNotes',catNotes);
            localStorage.setItem('beetleNotes',beetleNotes);
        });
        return () => {
            subscription.off();
        };
    }, [totalSum, fish, dog, cat, beetle, selectedData0, selectedData1,
    fishNotes, dogNotes, catNotes, beetleNotes]);

    const handleChanges = (rowIndex, value) => {
        console.log('value: ', value);
        if (rowIndex === 0)
            setFish(value);
        if (rowIndex === 1)
            setDog(value);
        if (rowIndex === 2)
            setCat(value);
        if (rowIndex === 3)
            setBeetle(value);
        console.log(fish, ' ', dog, ' ', cat, ' ', beetle);
        changeSum();
    }

    const handleCheckboxChange = (rowIndex, index) => {
        console.log(selectedIndexes);
        const newSelectedIndexes = [...selectedIndexes];
        newSelectedIndexes[rowIndex] = index;
        setSelectedIndexes(newSelectedIndexes);
        handleChanges(rowIndex, newSelectedIndexes[rowIndex]);
    }

    const changeSum = () => {
        const sum = fish + dog + cat + beetle;
        setTotalSum(sum);
    }
    const handleRadioChanges = (event) => {
        if (event.target.checked) {
            const index = event.target.id;
            console.log(event.target.value, ' ');
            console.log(index);
            if (index === '0') {
                const data = [...selectedData0];
                data.push(event.target.value);
                console.log('data:', data);
                setSelectedData0(data);
            }
            if (index === '1') {
                const data = [...selectedData1];
                data.push(event.target.value);
                console.log('data:', data);
                setSelectedData1(data);
            }
        }
        console.log(selectedData0);
        console.log(selectedData1);
    }

    return (<Box sx={{ width: '100%' }}>
        <div>
            <div style={{ marginBottom: 4 }}>
                <span>(עפרון ודף  A4עם שורות)</span>
            </div>
            <div style={{ marginTop: 4 }}>
                <span>הנחייה לבודק: כל מילה נאמרת לאחר שהילד מסיים לכתוב את המילה הקודמת</span>
            </div>
            <div style={{ marginTop: 6, marginBottom: 20 }}>
                <b>כתוב את המילים הבאות: דג, כלב, חתול, חיפושית</b>
            </div>
        </div>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: '100%' }} aria-label="simple table">
                <TableHead>
                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell align="center" sx={{ width: '10%' }}></TableCell>
                        <TableCell align="center" sx={{ width: '25%' }}>2</TableCell>
                        <TableCell align="center" sx={{ width: '20%' }}>1</TableCell>
                        <TableCell align="center" sx={{ width: '25%' }}>0</TableCell>
                        <TableCell align="center" sx={{ width: '20%' }}>הערות</TableCell>
                    </TableRow>
                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell></TableCell>
                        <TableCell align="right">
                            ייצוג מלא ונכון של
                            כל האותיות לפי
                            הסדר, התארגנות
                            תקינה כתב קריא
                        </TableCell>
                        <TableCell align="right" sx={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}>
                            <div><Radio id="1" value='ייצוג חלקי של האותיות' checked={data10} onChange={handleRadioChanges} onClick={() => setData10(!data10)} />ייצוג חלקי של האותיות</div>
                            <div><Radio id="1" value='בלבול קל בסדר' checked={data11} onChange={handleRadioChanges} onClick={() => setData11(!data11)} />בלבול קל בסדר</div>
                            <div><Radio id="1" value='התארגנות חלקית' checked={data12} onChange={handleRadioChanges} onClick={() => setData12(!data12)} />התארגנות חלקית</div>
                        </TableCell>
                        <TableCell align="right">
                            {/* {data0.map((data, index) => */}
                            <div><Radio id="0" value='שימוש אקראי באותיות' checked={data00} onChange={handleRadioChanges} onClick={() => setData00(!data00)} />שימוש אקראי באותיות</div>
                            <div><Radio id="0" value='ללא סדר' checked={data01} onChange={handleRadioChanges} onClick={() => setData01(!data01)} />ללא סדר</div>
                            <div><Radio id="0" value='כתיבה משמאל לימין' checked={data02} onChange={handleRadioChanges} onClick={() => setData02(!data02)} />כתיבה משמאל לימין</div>
                            <div><Radio id="0" value='בלתי קריא' checked={data03} onChange={handleRadioChanges} onClick={() => setData03(!data03)} />בלתי קריא</div>
                            <div><Radio id="0" value='התארגנות לקויה' checked={data04} onChange={handleRadioChanges} onClick={() => setData04(!data04)} />ההתארגנות לקויה</div>
                            {/* )} */}
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, rowIndex) =>
                        <TableRow>
                            <TableCell align="right">{row}</TableCell>
                            {[2, 1, 0].map(index =>
                                <TableCell key={index}
                                // onChange={handleChanges}
                                >
                                    <Checkbox
                                        value={words[rowIndex]}
                                        id={index}
                                        checked={selectedIndexes[rowIndex] === index}
                                        onChange={() => { handleCheckboxChange(rowIndex, index); setTotalSum(totalSum + index); }}
                                    />
                                </TableCell>)}
                            {rowIndex === 0 &&
                                <TableCell><TextField multiline value={fishNotes} onChange={(event) => setFishNotes(event.target.value)} /></TableCell>
                            }
                            {rowIndex === 1 &&
                                <TableCell><TextField multiline value={dogNotes} onChange={(event) => setDogNotes(event.target.value)} /></TableCell>
                            }
                            {rowIndex === 2 &&
                                <TableCell><TextField multiline value={catNotes} onChange={(event) => setCatNotes(event.target.value)} /></TableCell>
                            }
                            {rowIndex === 3 &&
                                <TableCell><TextField multiline value={beetleNotes} onChange={(event) => setBeetleNotes(event.target.value)} /></TableCell>
                            }
                        </TableRow>)}
                </TableBody>
            </Table>
        </TableContainer>
        <Box sx={{ fontSize: 20, margin: 3 }}>
            <label><b>  סך הכל כתיבה פונטית: </b></label>
            <label><b>{totalSum}</b></label>
            <label><b>/8</b></label></Box>
    </Box>)
}