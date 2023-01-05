import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { RootState, useAppDispatch } from "../../../store/store";
import { useSelector } from "react-redux";
import { setModel } from "../../../store/search/searchSlice";

export default function SelectVariants() {
    const dispatch = useAppDispatch();

    const { model } = useSelector((state: RootState) => state.SearchSlice);

    const handleChange = (event: SelectChangeEvent) => {
        dispatch(setModel(event.target.value));
    };

    return (
        <>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">
                    модель:
                </InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={model}
                    onChange={handleChange}
                    label="Model"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={'Pro Max'}>Pro Max</MenuItem>
                    <MenuItem value={'Pro'}>Pro</MenuItem>
                    <MenuItem value={'Mini'}>Mini</MenuItem>
                </Select>
            </FormControl>
        </>
    );
}
