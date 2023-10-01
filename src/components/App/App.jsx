import * as React from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import RuleControllers from "../RuleControllers/RuleControllers";
import RuleTable from "../RuleTable/RuleTable";
import "./App.scss";

function App() {
  const [dialogVisible, setDialogVisible] = React.useState(null);
  const handleNewRule = () => {
    setDialogVisible({});
  };
  
  const [searchText, setSearchText] = React.useState();

  return (
   <div className='app'>    
    <RuleControllers onNewRule={handleNewRule} onSearchTextChange={setSearchText}/>
    <RuleTable dialogVisible={dialogVisible} setDialogVisible={setDialogVisible} searchText={searchText}/>
   </div>
  );
}

export default App;
