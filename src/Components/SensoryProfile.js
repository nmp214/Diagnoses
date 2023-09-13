import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import { Slider } from '@mui/material';
import data from '../SensoryProfileData.json';
import { useNavigate } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function generate(element) {
    return [0, 1, 2].map((value) =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}
function valuetext(value) {
    return value;
}
const DemoDiv = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    direction: 'rtl',
    width: '80em',
    marginRight: '5%',
    textAlign: 'right',
}));

const DemoSlider = styled(Slider)(({ theme }) => ({
    flexDirection: 'row-reverse',
    '& .MuiSlider-thumb': {
        marginRight: -10,
    },
}));

function SensoryProfile() {
    const navigate = useNavigate();

    const click = () => {
        navigate('/GIFT');
    }

    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);

    return (
        <Box sx={{ direction: 'rtl', flexGrow: 1, width: '100%', height: '100%', backgroundColor: 'rgb(227, 227, 227)' }}>
            <button onClick={click}>!!!!!!!!</button>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Dessert (100g serving)</TableCell>
                            <TableCell align="right">Calories</TableCell>
                            <TableCell align="right">Fat&nbsp;(g)</TableCell>
                            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                            <TableCell align="right">Protein&nbsp;(g)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                                <TableCell align="right">{row.protein}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Grid item xs={12} md={6} dir="rtl">
                <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                    א. עיבוד שמיעתי
                </Typography>
                <DemoDiv>
                    <List dense={dense}>
                        {data[0].questions.map(t =>
                            <ListItem sx={{ height: 80, direction: 'rtl' }}>
                                <ListItemText primary={t.Text} />
                                <Box sx={{ width: 200, margin: 5 }}>
                                    <DemoSlider
                                        defaultValue={3}
                                        ariaLabel="Default"
                                        valueLabelDisplay='auto'
                                        min={1}
                                        max={5}
                                        step={1}
                                    />
                                </Box>
                            </ListItem>
                        )}
                        {/* <ListItem sx={{ height: 80, direction: 'rtl' }}>
                            <ListItemText dir="rtl"
                                primary="מגיב באופן שלילי לרעש חזק, או בלתי צפוי (לדוגמא: בוכה, או
                                    מתחבא מרעש של כלב נובח, שואב אבק, מייבש שער."                            />
                            <Box sx={{ width: 200, margin: 5 }}>
                                <DemoSlider
                                    defaultValue={3}
                                    ariaLabel="Default"
                                    valueLabelDisplay='auto'
                                    min={1}
                                    max={5}
                                    step={1}
                                />
                            </Box>
                        </ListItem>
                        <ListItem sx={{ height: 80, direction: 'rtl' }}>
                            <ListItemText dir="rtl"
                                primary="מכסה את אוזניו בכפות ידיו כהגנה מפני רעש חזק." />
                            <Box sx={{ width: 200, margin: 5 }}>
                                <DemoSlider
                                    defaultValue={3}
                                    ariaLabel="Default"
                                    valueLabelDisplay='auto'
                                    min={1}
                                    max={5}
                                    step={1} />                            </Box>
                        </ListItem>
                        <ListItem sx={{ height: 80, direction: 'rtl' }}>
                            <ListItemText dir="rtl"
                                primary="מתקשה לסיים מטלות כשהרדיו דולק." />
                            <Box sx={{ width: 200, margin: 5 }}>
                                <DemoSlider
                                    defaultValue={3}
                                    ariaLabel="Default"
                                    valueLabelDisplay='auto'
                                    min={1}
                                    max={5}
                                    step={1} />
                            </Box>
                        </ListItem>
                        <ListItem sx={{ height: 80, direction: 'rtl' }}>
                            <ListItemText dir="rtl"
                                primary="דעתו מוסחת, או שמתקשה לתפקד, אם קיימים רעשים חזקים
                                בסביבה."                            />
                            <Box sx={{ width: 200, margin: 5 }}>
                                <DemoSlider
                                    defaultValue={3}
                                    ariaLabel="Default"
                                    valueLabelDisplay='auto'
                                    min={1}
                                    max={5}
                                    step={1} />                            </Box>
                        </ListItem>
                        <ListItem sx={{ height: 80, direction: 'rtl' }}>
                            <ListItemText dir="rtl"
                                primary="אינו יכול לעבוד, אם קיים רעש ברקע (לדוגמא: מקרר, מאוורר." />
                            <Box sx={{ width: 200, margin: 5 }}>
                                <DemoSlider
                                    defaultValue={3}
                                    ariaLabel="Default"
                                    valueLabelDisplay='auto'
                                    min={1}
                                    max={5}
                                    step={1} />                            </Box>
                        </ListItem>
                        <ListItem sx={{ height: 80, direction: 'rtl' }}>
                            <ListItemText dir="rtl"
                                primary="נראה שאינו שומע מה שמדברים אליו (לדוגמא: אינו מקשיב למה
                                    שאתה אומר, נראה שמתעלם ממך."                            />
                            <Box sx={{ width: 200, margin: 5 }}>
                                <DemoSlider
                                    defaultValue={3}
                                    ariaLabel="Default"
                                    valueLabelDisplay='auto'
                                    min={1}
                                    max={5}
                                    step={1} />                            </Box>
                        </ListItem>
                        <ListItem dir="rtl">
                            <ListItemText dir="rtl"
                                primary="אינו מגיב כשקוראים בשמו, למרות שאתה יודע ששמיעתו תקינה." />
                            <Box sx={{ width: 200, margin: 5 }}>
                                <DemoSlider
                                    defaultValue={3}
                                    ariaLabel="Default"
                                    valueLabelDisplay='auto'
                                    min={1}
                                    max={5}
                                    step={1} />                            </Box>
                        </ListItem>
                        <ListItem dir="rtl">
                            <ListItemText dir="rtl"
                                primary="נהנה מרעשים מוזרים/עושה קולות ורעשים רק על מנת לשמוע אותם" />
                            <Box sx={{ width: 200, margin: 5 }}>
                                <DemoSlider
                                    defaultValue={3}
                                    ariaLabel="Default"
                                    valueLabelDisplay='auto'
                                    min={1}
                                    max={5}
                                    step={1} />
                            </Box>
                        </ListItem> */}
                    </List>
                </DemoDiv>
            </Grid>

            <Grid item xs={12} md={6}>
                <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                    ב. עיבוד ראייתי
                </Typography>
                <DemoDiv>
                    <List dense={dense}>
                        <ListItem dir="rtl">
                            <ListItemText dir="rtl"
                                primary="מעדיף להיות בחושך." />
                            <Box sx={{ width: 200, margin: 5 }}>
                                <DemoSlider
                                    defaultValue={3}
                                    ariaLabel="Default"
                                    valueLabelDisplay='auto'
                                    min={1}
                                    max={5}
                                    step={1} />
                            </Box>
                        </ListItem>
                        <ListItem dir="rtl">
                            <ListItemText dir="rtl"
                                primary="מביע חוסר נוחות, או נמנע מאור חזק (לדוגמא: מתחבא משמש
                                    שחודרת בעד חלון המכונית."                            />
                            <Box sx={{ width: 200, margin: 5 }}>
                                <DemoSlider
                                    defaultValue={3}
                                    ariaLabel="Default"
                                    valueLabelDisplay='auto'
                                    min={1}
                                    max={5}
                                    step={1} />
                            </Box>
                        </ListItem>
                        <ListItem dir="rtl">
                            <ListItemText dir="rtl"
                                primary="שמח להיות בחושך." />
                            <Box sx={{ width: 200, margin: 5 }}>
                                <DemoSlider
                                    defaultValue={3}
                                    ariaLabel="Default"
                                    valueLabelDisplay='auto'
                                    min={1}
                                    max={5}
                                    step={1} />
                            </Box>
                        </ListItem>
                        <ListItem dir="rtl">
                            <ListItemText dir="rtl"
                                primary="נעשה מתוסכל כאשר מנסה למצוא חפץ הנמצא בתוך שלל חפצים
                                אחרים (לדוגמא: מגירה עמוסה."                            />
                            <Box sx={{ width: 200, margin: 5 }}>
                                <DemoSlider
                                    defaultValue={3}
                                    ariaLabel="Default"
                                    valueLabelDisplay='auto'
                                    min={1}
                                    max={5}
                                    step={1} />
                            </Box>
                        </ListItem>
                        <ListItem dir="rtl">
                            <ListItemText dir="rtl"
                                primary="מתקשה לחבר חלקי פזל, בהשוואה לילדים בני גילו." />
                            <Box sx={{ width: 200, margin: 5 }}>
                                <DemoSlider
                                    defaultValue={3}
                                    ariaLabel="Default"
                                    valueLabelDisplay='auto'
                                    min={1}
                                    max={5}
                                    step={1} />
                            </Box>
                        </ListItem>
                        <ListItem dir="rtl">
                            <ListItemText dir="rtl"
                                primary="אור חזק מפריע לו גם בשעה שאחרים כבר הסתגלו אליו." />
                            <Box sx={{ width: 200, margin: 5 }}>
                                <DemoSlider
                                    defaultValue={3}
                                    ariaLabel="Default"
                                    valueLabelDisplay='auto'
                                    min={1}
                                    max={5}
                                    step={1} />
                            </Box>
                        </ListItem>
                        <ListItem dir="rtl">
                            <ListItemText dir="rtl"
                                primary="מכסה עיניו/עוצם עיניים למחצה על מנת להגן על עניו מאור חזק." />
                            <Box sx={{ width: 200, margin: 5 }}>
                                <DemoSlider
                                    defaultValue={3}
                                    ariaLabel="Default"
                                    valueLabelDisplay='auto'
                                    min={1}
                                    max={5}
                                    step={1} />
                            </Box>
                        </ListItem>
                        <ListItem dir="rtl">
                            <ListItemText dir="rtl"
                                primary="בוחן חפצים/אנשים, בקפידה למשך זמן ממושך (לדוגמא: נועץ מבט." />
                            <Box sx={{ width: 200, margin: 5 }}>
                                <DemoSlider
                                    defaultValue={3}
                                    ariaLabel="Default"
                                    valueLabelDisplay='auto'
                                    min={1}
                                    max={5}
                                    step={1} />
                            </Box>
                        </ListItem>
                        <ListItem dir="rtl">
                            <ListItemText dir="rtl"
                                primary="מתקשה למצוא חפצים הנמצאים בין הרבה חפצים אחרים (לדוגמא:
                                    נעלים בחדר מבולגן, צעצוע אהוב בתוך מגירה עמוסה."
                            />
                            <Box sx={{ width: 200, margin: 5 }}>
                                <DemoSlider
                                    defaultValue={3}
                                    ariaLabel="Default"
                                    valueLabelDisplay='auto'
                                    min={1}
                                    max={5}
                                    step={1} />
                            </Box>
                        </ListItem>
                    </List>
                </DemoDiv>
            </Grid>
            {/* </Grid> */}

            {/* שתי האפשרויות השניות */}
            {/* <Grid container spacing={2}> */}
            <Grid item xs={12} md={6}>
                <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                    ג. עיבוד וסטיבולרי
                </Typography>
                <DemoDiv>
                    <List dense={dense}>
                        {data[1].questions.map(t =>
                            <ListItem sx={{ height: 80, direction: 'rtl' }}>
                                <ListItemText primary={t.Text} />
                                <Box sx={{ width: 200, margin: 5 }}>
                                    <DemoSlider
                                        defaultValue={3}
                                        ariaLabel="Default"
                                        valueLabelDisplay='auto'
                                        min={1}
                                        max={5}
                                        step={1} />
                                </Box>
                            </ListItem>
                        )}
                    </List>
                </DemoDiv>
            </Grid>
            <Grid item xs={12} md={6}>
                <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                    Avatar with text and icon
                </Typography>
                <DemoDiv>
                    <List dense={dense}>
                        { }
                        {generate(
                            <ListItem
                                secondaryAction={
                                    <IconButton edge="end" aria-label="delete">
                                        <DeleteIcon />
                                    </IconButton>
                                }
                            >
                                <ListItemAvatar>
                                    <Avatar>
                                        <FolderIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Single-line item"
                                />
                            </ListItem>,
                        )}
                    </List>
                </DemoDiv>
            </Grid>
            {/* </Grid> */}
        </Box>
    );
}

export default SensoryProfile;