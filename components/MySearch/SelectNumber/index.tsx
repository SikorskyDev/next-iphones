import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../store/store";
import { setNumber } from "../../../store/search/searchSlice";

export default function SelectNumber() {
    const dispatch = useAppDispatch();

    const { number } = useSelector((state: RootState) => state.SearchSlice);

    const handleChange = (event: SelectChangeEvent) => {
        dispatch(setNumber(event.target.value));
    };

    return (
        <>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">
                    iPhone:
                </InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={number}
                    onChange={handleChange}
                    label="Number"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={14}>14</MenuItem>
                    <MenuItem value={13}>13</MenuItem>
                    <MenuItem value={12}>12</MenuItem>
                    <MenuItem value={11}>11</MenuItem>
                    <MenuItem value={'XR'}>XR</MenuItem>
                </Select>
            </FormControl>
        </>
    );
}
