// WorkspaceRenderer.tsx
import React from "react";
import { useWorkspaceStore } from "./context/WorkspaceStore";

const WorkspaceRenderer = () => {
    const currentWorkspaceId = useWorkspaceStore(
        (state) => state.currentWorkspaceId
    );
    const currentWorkspace = useWorkspaceStore((state) =>
        state.workspaces.find((w) => w.id === currentWorkspaceId)
    );
    const updateCurrentWindowTitle = useWorkspaceStore(
        (state) => state.updateCurrentWindowTitle
    )
    const setCurrentWindowId = useWorkspaceStore(
        (state) => state.setCurrentWindowId
    )

    if (!currentWorkspace) return null;

    return (
        <div className="p-4">
            {currentWorkspace.windows.map((window, index) => (
                <div key={index} className="mb-4 border p-2 rounded bg-white" onMouseOver={() => {
                        updateCurrentWindowTitle(currentWorkspaceId, window.windowTitle),
                        setCurrentWindowId(currentWorkspaceId, index + 1)
                        console.log(window.windowId)
                    }}>
                    {window.component}
                </div>
            ))}
        </div>
    );
};

export default WorkspaceRenderer;
