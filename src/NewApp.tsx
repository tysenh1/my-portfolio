import WorkspaceRenderer from "./WorkspaceRenderer";
import AddTestComponent from "./components/AddTestComponent";
import Waybar from "./components/Waybar";
import AddTestComponent2 from "./components/AddTestComponent2";
import AddTestComponent3 from "./components/AddTestComponent3";
import { useHotkeys } from 'react-hotkeys-hook';
import { useWorkspaceStore } from "./context/WorkspaceStore";

export const NewApp = () => {
    const switchWorkspace = useWorkspaceStore((state) => state.switchWorkspace)
    const currentWorkspaceId = useWorkspaceStore((state) => state.currentWorkspaceId)
    const currentWorkspace = useWorkspaceStore((state) =>
        state.workspaces.find((w) => w.id === currentWorkspaceId)
    );
    const deleteComponentFromWorkspace = useWorkspaceStore((state) => state.deleteComponentFromWorkspace)
    useHotkeys("alt+q", () => {
        // @ts-ignore
        console.log(currentWorkspace.currentWindowId)
        // @ts-ignore
        if (currentWorkspace.currentWindowId != undefined && currentWorkspace.currentWindowId > 0) {
            // @ts-ignore
            deleteComponentFromWorkspace(currentWorkspaceId, currentWorkspace.currentWindowId)
        } else {
            return
        }
        
    })
    for (let i = 1; i <= 9; i++) {
        useHotkeys(`alt+${i}`, () => {
            switchWorkspace(i - 1)
            
        });
    }
    useHotkeys("alt+0", () => {
        switchWorkspace(9)
    })
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