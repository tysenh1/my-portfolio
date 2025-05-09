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

    if (!currentWorkspace) return null;

    return (
        <div className="p-4">
            {currentWorkspace.components.map((Component, index) => (
                <div key={index} className="mb-4 border p-2 rounded">
                    {Component}
                </div>
            ))}
        </div>
    );
};

export default WorkspaceRenderer;
