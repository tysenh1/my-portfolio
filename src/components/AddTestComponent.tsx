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
        onClick={() => {
          const title = `Test on workspace ${currentWorkspaceId}`;
          addComponentToWorkspace(
            currentWorkspaceId,
            title,
            <div className="h-full w-full bg-black bg-opacity-80 text-white p-4 border border-blue-400">
              <p className="text-lg">Test Component in Workspace {currentWorkspaceId}</p>
            </div>
          );
        }}
        className="mt-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
      >
        Add Component to Current Workspace
      </button>
    );
};

export default AddTestComponent;
