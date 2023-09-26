import "./RuleControllers.scss";
import SearchInput from "./SearchInput/SearchInput";
import Button from '@mui/material/Button';


export default function RuleControllers({ onNewRule }) {
    const handleNewRule = () => {
        onNewRule();    
    };
    return (
        <div className="rule-controllers">
            <Button variant="contained" onClick={handleNewRule}>New Rule</Button>
            <SearchInput />
        </div>

    );
}