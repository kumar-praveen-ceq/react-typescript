
import './App.css';
// import { PaginationTable } from './components/PaginationTable';
// import { BasicTable } from './components/BasicTable';
// import{SortingTable} from './components/SortingTable'
import { FilteringTable } from './components/FilteringTable';

function App() {
  return (
    <div className="App">
    {/* <SortingTable/> */}
    {/* <BasicTable/> */}
    <FilteringTable/>
    {/* <PaginationTable/> */}
    </div>
  );
}

export default App;
