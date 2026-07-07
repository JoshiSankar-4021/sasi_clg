import { NavLink } from "react-router-dom"
import "./Sidenav.css"
function Sidenav(){
    return(
        <div className="sidenavdiv">
            <div className="Navlinkdiv">
                <NavLink to="/linktag" class="sidenavlink">Link tag</NavLink><br/>
            </div>
            <div className="Navlinkdiv">
                <NavLink to="/navtag" className="sidenavlink">Nav Tag</NavLink><br/>
            </div>
            
            <div className="Navlinkdiv">
                <NavLink to="/counter" className="sidenavlink">Counter</NavLink><br/>
            </div>
            
            <div className="Navlinkdiv">
                <NavLink to="/media" className="sidenavlink">Media</NavLink><br/>
            </div>
            
            <div className="Navlinkdiv">
                <NavLink to="/" className="sidenavlink">Button Nav</NavLink><br/>
            </div>
            
            


        </div>
    )
}

export default Sidenav