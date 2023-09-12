import { MainView } from "../mainview/mainview";
import { Navbar } from "../navbar/navbar";
import { Topbar } from "../topbar/topbar";
import { shell } from "./shell.css";

export function Shell(){
    return (
        <div className={`${shell}`}>
            <Navbar />
            <Topbar />
            <MainView />
        </div>
    )
}