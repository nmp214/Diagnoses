import { Box, Typography } from "@mui/material"
import * as React from "react";
import eventBus from "../Services/EventBus";

export default function DrawMan(props) {
    const organsNumber = props.organsNumber;
    const [drawnOrgans, setDrawnOrgans] = React.useState(0);

    React.useEffect(() => {
        const subscription = eventBus.on('buttonClick', () => {
            localStorage.setItem('drawManData', drawnOrgans);
        });
        return () => {
            subscription.off();
        };
    }, [drawnOrgans]);

    return (<>
        <Box sx={{ width: '100%' }}>
            <div style={{ left: '80%'}}>
                <div style={{ textAlign: 'right', display: 'flex' }}>
                    <span style={{ marginLeft: 4 }}> (עפרון ודף  A4חלק)</span>
                </div>
                <div style={{ marginTop: 6, marginBottom: 20 }}>
                    <b>הוראה: "צייר איש או אישה, ילד או ילדה":</b>
                </div>
            </div>
            <Box sx={{ width: '100%' }}>
                <label><b>  מספר האיברים שצוירו:</b></label>
                <label><b> {organsNumber}/ </b></label>
                <label><input type="number" style={{ width: 40, fontSize: 20 }} min={0} max={organsNumber} onChange={(event) => setDrawnOrgans(event.target.value)} /></label>
            </Box>
        </Box></>
    )
}