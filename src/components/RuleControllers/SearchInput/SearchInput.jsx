import "./SearchInput.scss";
import TextField from '@mui/material/TextField';

export default function SearchInput() {
    return (
        <div className="search-input">
            <TextField id="outlined-basic" label="Search" variant="outlined" />
        </div>

    );
}