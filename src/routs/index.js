import {BrowserRouter , Routes , Route} from "react-router-dom"
import Details from "../pages/details"
import MainPage from "../pages/mainPage"
export default function Routs(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/assets/:id" element={<Details/>}/>
            </Routes>
        </BrowserRouter>
    )
}