import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { RootState, useAppDispatch } from "../../../store/store";
import { useSelector } from "react-redux";
import { setMemory } from "../../../store/search/searchSlice";

export default function SelectVariants() {
    const dispatch = useAppDispatch();

    const { memory } = useSelector((state: RootState) => state.SearchSlice);

    const handleChange = (event: SelectChangeEvent) => {
        dispatch(setMemory(event.target.value));
    };

    return (
        <>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">
                    пам'ять:
                </InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={memory}
                    onChange={handleChange}
                    label="Memory"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={64}>64 ГБ</MenuItem>
                    <MenuItem value={128}>128 ГБ</MenuItem>
                    <MenuItem value={256}>256 ГБ</MenuItem>
                    <MenuItem value={512}>512 ГБ</MenuItem>
                    <MenuItem value={1024}>1024 ГБ</MenuItem>
                </Select>
            </FormControl>
        </>
    );
}
