// AddTestComponent.tsx
import React from "react";
import { useWorkspaceStore } from "../context/WorkspaceStore";

const AddTestComponent = () => {
    const currentWorkspaceId = useWorkspaceStore(
        (state) => state.currentWorkspaceId
    );
    const addComponentToWorkspace = useWorkspaceStore(
        (state) => state.addComponentToWorkspace
    );

    return (
        <button
            onClick={() =>
                addComponentToWorkspace(
                    currentWorkspaceId,
                    <p>Hello from workspace {currentWorkspaceId}!</p>
                )
            }
            className="mt-2 px-4 py-2 bg-green-600 text-white rounded"
        >
            Add Component to Current Workspace
        </button>
    );
};

export default AddTestComponent;
