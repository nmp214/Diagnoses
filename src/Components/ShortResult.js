import { Box, Button, Typography } from "@mui/material";
import { useEffect } from "react";
import img from '../assets/border.png'
import DownloadIcon from '@mui/icons-material/Download';
import html2canvas from 'html2canvas';
import React from "react";

export default function ShortResult(props) {
    const name = props.name;
    const totalSummary = props.totalSummary;
    const range = props.range;
    const ageRange = props.ageRange;
    const fromTotalSummary = props.fromTotalSummary;
    const descriptions = ["תפקוד הילד הינו בטווח הנורמה המצופה לבני גילו", "קיים חשד לעיכוב התפתחותי", "קיים עיכוב התפתחותי"];
    const [description, setDescription] = React.useState(descriptions[0]);

    useEffect(() => {
        console.log('range: ', range);
        console.log('ageRange: ', ageRange);
        if (range === '3-4') {
            console.log('3-4-------');
            if (ageRange === '3.0-3.5') {
                console.log('3.0-3.5-------');
                if (totalSummary <= 6 && totalSummary >= 3)
                    setDescription(descriptions[1]);
                if (totalSummary <= 2)
                    setDescription(descriptions[2]);
            }
            else {
                console.log('3.6-3.11-------');
                if (totalSummary >= 7 && totalSummary <= 11)
                    setDescription(descriptions[1]);
                if (totalSummary <= 6)
                    setDescription(descriptions[2]);
            }
        }
        if (range === '4-5') {
            if (ageRange === '4.0-4.5') {
                if (totalSummary >= 13 && totalSummary <= 19)
                    setDescription(descriptions[1]);
                if (totalSummary <= 12)
                    setDescription(descriptions[2]);
            }
            else {
                if (totalSummary >= 17 && totalSummary <= 23)
                    setDescription(descriptions[1]);
                if (totalSummary <= 16)
                    setDescription(descriptions[2]);
            }
        }
        if (range === '5-6') {
            if (ageRange === '5.0-5.5') {
                if (totalSummary >= 22 && totalSummary <= 29)
                    setDescription(descriptions[1]);
                if (totalSummary <= 21)
                    setDescription(descriptions[2]);
            }
            else {
                if (totalSummary >= 23 && totalSummary <= 30)
                    setDescription(descriptions[1]);
                if (totalSummary <= 22)
                    setDescription(descriptions[2]);
            }
        }
        if (range === '6-7') {
            console.log('6-7-------');
            if (ageRange === '6.0-6.5') {
                if (totalSummary >= 25 && totalSummary <= 32)
                    setDescription(descriptions[1]);
                if (totalSummary <= 24)
                    setDescription(descriptions[2]);
            }
            else {
                if (totalSummary >= 30 && totalSummary <= 37)
                    setDescription(descriptions[1]);
                if (totalSummary <= 29)
                    setDescription(descriptions[2]);
            }
        }
        const handleDownloadClick = () => {
            console.log('in handleDownloadClick');
            const elementToCapture = document.getElementById('component-root');

            if (elementToCapture) {
                console.log('true');
                html2canvas(elementToCapture).then((canvas) => {
                    // Convert the canvas to a data URL (default is PNG, but you can specify JPEG)
                    const imgDataUrl = canvas.toDataURL('image/png');

                    // Create an anchor element for downloading
                    const anchor = document.createElement('a');
                    anchor.href = imgDataUrl;
                    anchor.download = 'short-result.png';

                    // Trigger a click event on the anchor to start the download
                    anchor.click();
                });
            }
        };
        document.getElementById('downloadButton').addEventListener('click', handleDownloadClick);
        return () => {
            document.getElementById('downloadButton').removeEventListener('click', handleDownloadClick);
        };
    }, [totalSummary, range, ageRange]);


    return (
        <>
            <div id="component-root">
                <Box id="component-root" sx={{ margin: '4%' }}
                    style={{
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                    <img src={img}
                        style={{
                            position: 'relative',
                            top: 0,
                            left: 0,
                            width: '50%',
                            height: '50%',
                            objectFit: 'cover',
                            zIndex: -1
                        }} />
                    <div style={{
                        position: 'absolute',
                        top: '40%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        textAlign: 'center',
                        zIndex: 1,
                    }}>
                        <Typography variant="subtitle1" fontFamily={'inherit'}
                            style={{
                                textAlign: 'right'
                            }}>שם: {name} </Typography>
                        {/* <button id="downloadButton">Download as Image</button> */}

                        <br />
                        <Typography variant="h6" fontFamily={'inherit'}>
                            <label> ציון סופי לאבחון GIFT:</label> <br />
                            <label><b>{totalSummary}</b></label>
                            <label><b>/{fromTotalSummary}</b></label>
                        </Typography>
                        <br />
                        <Typography variant="h6" fontFamily={'inherit'}>תיאור ממצאי אבחון: </Typography>
                        <Typography variant="h6" fontFamily={'inherit'}><b>{description}</b></Typography>
                    </div>
                </Box>
            </div>
            <Button id="downloadButton" style={{ alignSelf: 'end' }}><DownloadIcon color="action" /></Button>
        </>)
}