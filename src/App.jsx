import Counter from "./Counter";
import Media from "./Media";
import {Routes,Route} from 'react-router-dom'
import Navtag from "./Navtag"
import Linktag from "./Linktag"
function App(){
  return(
   <>
    <Routes>
      <Route path="/media" element={<Media/>} />
      <Route path="/counter" element={<Counter/>} />
      <Route path="/" element={<Navtag/>}/>
      <Route path="/linktag" element={<Linktag/>}/>
    </Routes>
   </>
  )
}

export default App;