// AddTestComponent.tsx
import React from "react";
import { useWorkspaceStore } from "../context/WorkspaceStore";

const AddTestComponent3 = () => {
    const currentWorkspaceId = useWorkspaceStore(
        (state) => state.currentWorkspaceId
    );
    const addComponentToWorkspace = useWorkspaceStore(
        (state) => state.addComponentToWorkspace
    );
    // const updateCurrentWindowTitle = useWorkspaceStore(
    //     (state) => state.updateCurrentWindowTitle
    // )

    return (
        <button
            onClick={() => {
                const title = `CHICKEN JOCKEYYYYYY ${currentWorkspaceId}`
                addComponentToWorkspace(
                    currentWorkspaceId,
                    title,
                    <div className={"bg-white"}>
                       <p>Button 3 in workspace {currentWorkspaceId}!</p>
                    </div>
                    
                )
            }}
            className="mt-2 px-4 py-2 bg-green-600 text-white rounded"
        >
            Add Component to Current Workspace
        </button>
    );
};

export default AddTestComponent3;
