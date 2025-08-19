// WorkspaceRenderer.tsx
import React from "react";
import { Layout, Model } from 'flexlayout-react'
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
    const deleteComponentFromWorkspace = useWorkspaceStore((state) => state.deleteComponentFromWorkspace);

    if (!currentWorkspace) return null;

    const factory = (node: any) => {
        const windowId = parseInt(node.getId());
        const window = currentWorkspace.windows.find((w) => w.windowId === windowId);
        if (!window) return null;
        return (
          <div className="fl-component">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold text-blue-300">{window.windowTitle}</h3>
              <button
                className="text-sm px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={() => deleteComponentFromWorkspace(currentWorkspaceId, windowId)}
              >
                Close
              </button>
            </div>
            <div className="flex-1 overflow-auto">{window.component}</div>
          </div>
        );
      };
    
      return (
        <div className="h-screen w-screen bg-gray-900 text-white flex flex-col">
          <div className="flex-1 overflow-hidden">
            <Layout
              model={Model.fromJson(currentWorkspace.layout)}
              factory={factory}
            //   onTabClick={(node) => {
            //     const windowId = parseInt(node.getId());
            //     const window = currentWorkspace.windows.find((w) => w.windowId === windowId);
            //     if (window) {
            //       updateCurrentWindowTitle(currentWorkspaceId, window.windowTitle);
            //       setCurrentWindowId(currentWorkspaceId, windowId);
            //     }
            //   }}
            //   onTabClose={(node) => {
            //     deleteComponentFromWorkspace(currentWorkspaceId, parseInt(node.getId()));
            //   }}
            //   className="fl-container"
            />
          </div>
        </div>
      );
};

export default WorkspaceRenderer;
