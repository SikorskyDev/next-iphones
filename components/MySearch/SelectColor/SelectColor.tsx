import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../store/store";
import { setColor } from "../../../store/search/searchSlice";

export default function SelectVariants() {
    const dispatch = useAppDispatch();

    const {color} = useSelector((state: RootState) => state.SearchSlice);


    const handleChange = (event: SelectChangeEvent) => {
        dispatch(setColor(event.target.value))
    };

    return (
        <>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">
                    колір:
                </InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={color}
                    onChange={handleChange}
                    label="Color"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={"Space Black"}>Space Black</MenuItem>
                    <MenuItem value={"Silver"}>Silver</MenuItem>
                    <MenuItem value={"Gold"}>Gold</MenuItem>
                    <MenuItem value={"Deep Purple"}>Deep Purple</MenuItem>
                    <MenuItem value={"Blue"}>Blue</MenuItem>
                    <MenuItem value={"Red"}>Red</MenuItem>
                    <MenuItem value={"Purple"}>Purple</MenuItem>
                    <MenuItem value={"Midnight"}>Midnight</MenuItem>
                    <MenuItem value={"Starlight"}>Starlight</MenuItem>
                    <MenuItem value={"Alpine Green"}>Alpine Green</MenuItem>
                    <MenuItem value={"Graphite"}>Graphite</MenuItem>
                    <MenuItem value={"Sierra Blue"}>Sierra Blue</MenuItem>
                    <MenuItem value={"Pink"}>Pink</MenuItem>
                    <MenuItem value={"Pacific Blue"}>Pacific Blue</MenuItem>
                    <MenuItem value={"Black"}>Black</MenuItem>
                    <MenuItem value={"White"}>White</MenuItem>
                    <MenuItem value={"Green"}>Green</MenuItem>
                    <MenuItem value={"Coral"}>Coral</MenuItem>
                    <MenuItem value={"Yellow"}>Yellow</MenuItem>
                </Select>
            </FormControl>
        </>
    );
}
