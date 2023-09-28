import "./SearchInput.scss";
import TextField from '@mui/material/TextField';

export default function SearchInput({ onSearchTextChange }) {
    return (
        <div className="search-input">
            <TextField id="outlined-basic" label="Search" variant="outlined" onChange={(event) => {
    onSearchTextChange(event.target.value.toLowerCase());
  }} />
        </div>

    );
}