import * as React from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import RuleControllers from "../RuleControllers/RuleControllers";
import RuleTable from "../RuleTable/RuleTable";
import "./App.scss";

function App() {
  const [dialogVisible, setDialogVisible] = React.useState(false);
  const handleNewRule = () => {
    setDialogVisible(true);
  };
  
  return (
   <div className='app'>    
    <RuleControllers onNewRule={handleNewRule}/>
    <RuleTable dialogVisible={dialogVisible} setDialogVisible={setDialogVisible} />
   </div>
  );
}

export default App;
