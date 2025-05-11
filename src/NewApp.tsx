import WorkspaceRenderer from "./WorkspaceRenderer";
import AddTestComponent from "./components/AddTestComponent";
import Waybar from "./components/Waybar";
import AddTestComponent2 from "./components/AddTestComponent2";
import AddTestComponent3 from "./components/AddTestComponent3";
import { useHotkeys } from 'react-hotkeys-hook';
import { useWorkspaceStore } from "./context/WorkspaceStore";

export const NewApp = () => {
    const switchWorkspace = useWorkspaceStore((state) => state.switchWorkspace)
    for (let i = 0; i <= 9; i++) {
        useHotkeys(`alt+${i}`, () => {
            switchWorkspace(i);
        });
    }
    return (
        <>
            <Waybar />
            <div className={"p-[5px]"}>
            
                <AddTestComponent />
                <AddTestComponent2 />
                <AddTestComponent3 />
                <WorkspaceRenderer />
            </div>
        </>
        
    );
}