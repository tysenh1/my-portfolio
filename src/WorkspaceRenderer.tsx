// WorkspaceRenderer.tsx
import React from "react";
import { useWorkspaceStore } from "./context/WorkspaceStore";
import { Mosaic, MosaicWindow, MosaicNode } from "react-mosaic-component";

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

    return (
        <Mosaic<number>
            renderTile={(windowId, path) => {
                const window = currentWorkspace.windows.find((w) => w.windowId === windowId);
                if (!window) return null;
                return (
                    <MosaicWindow<number>
                        title={window.windowTitle}
                        path={path}
                        onClick={() => {
                            updateCurrentWindowTitle(currentWorkspaceId, window.windowTitle);
                            setCurrentWindowId(currentWorkspaceId, window.windowId);
                        }}
                        toolbarControls={[
                            <button
                                key="close"
                                onClick={() => deleteComponentFromWorkspace(currentWorkspaceId, windowId)}
                                className="text-sm px-2 py-1 bg-red-500 text-white rounded"
                            >
                                Close
                            </button>,
                        ]}
                    >
                        {window.component}
                    </MosaicWindow>
                );
            }}
            value={currentWorkspace.mosaicNode}
            onChange={(node: MosaicNode<number> | null) => {
                if (typeof node === 'number') {
                    setCurrentWindowId(currentWorkspaceId, node);
                }
            }}
            className="mosaic-blueprint-theme"
        />
        // <div className="p-4">
        //     {currentWorkspace.windows.map((window, index) => (
        //         <div key={index} className="mb-4 border p-2 rounded bg-white" onMouseOver={() => {
        //                 updateCurrentWindowTitle(currentWorkspaceId, window.windowTitle),
        //                 setCurrentWindowId(currentWorkspaceId, window.windowId)
        //                 console.log(window.windowId)
        //             }}>
        //             {window.component}
        //         </div>
        //     ))}
        // </div>
    );
};

export default WorkspaceRenderer;
