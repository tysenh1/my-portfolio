import React from 'react';
import { useWorkspaceStore } from './WorkspaceStore';

const WorkspaceSwitcher = () => {
    const workspaces = useWorkspaceStore((state) => state.workspaces)
    const currentWorkspaceId = useWorkspaceStore((state) => state.currentWorkspaceId)
    const switchWorkspace = useWorkspaceStore((state) => state.switchWorkspace)

    return (
        <div className="flex gap-2 mb-4">
            {workspaces.map((ws) => (
                <button
                    key={ws.id}
                    onClick={() => switchWorkspace(ws.id)}
                    className={`px-4 py-2 rounded ${
                        currentWorkspaceId === ws.id
                            ? "bg-blue-500 text-white"
                            : "bg-gray-300"
                    }`}
                >
                    {ws.id}
                </button>
            ))}
        </div>
    );
}

export default WorkspaceSwitcher