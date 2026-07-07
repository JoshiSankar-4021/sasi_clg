import Counter from "./Counter";
import Media from "./Media";
import {Routes,Route} from 'react-router-dom'
import Navtag from "./Navtag"
import Linktag from "./Linktag"
import Buttonnav from "./Buttonnav";
import SideNav from "./nav/Sidenav";
import Forms from "./forms/Forms"
function App(){
  return(
   <>
   <SideNav/>
    <Routes>
      <Route path="/media" element={<Media/>} />
      <Route path="/counter" element={<Counter/>} />
      <Route path="/navtag" element={<Navtag/>}/>
      <Route path="/linktag" element={<Linktag/>}/>
      <Route path="/" element={<Buttonnav/>}/>
      <Route path="/forms" element={<Forms/>}/>
    </Routes>
   </>
  )
}

export default App;