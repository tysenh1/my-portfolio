import WorkspaceRenderer from "./WorkspaceRenderer";
import WorkspaceSwitcher from "./context/WorkspaceSwitcher";
import AddTestComponent from "./components/AddTestComponent";
import Waybar from "./components/Waybar";

export const NewApp = () => {
    return (
        <>
            <Waybar />
            <div className={"p-[5px]"}>
            
                <WorkspaceSwitcher />
                <AddTestComponent />
                <WorkspaceRenderer />
            </div>
        </>
        
    );
}