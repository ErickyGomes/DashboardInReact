import Sidebar from './components/sidebar/sidebar';
import Topbar from './components/topbar/Topbar';


function App() {
  return (
    <div>
     <Topbar/>
      <div className="container">
        <Sidebar/>
        other pages
      </div>
    </div>
  );
}

export default App;
