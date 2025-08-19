import { MosaicNode } from 'react-mosaic-component';
import { create } from 'zustand';

type Workspace = {
    id: number;
    currentWindowTitle: string;
    currentWindowId: number;
    nextWindowId: number;
    windows: Window[];
    mosaicNode: MosaicNode<number> | null;
}

type Window = {
    windowTitle: string;
    windowId: number;
    component: React.ReactNode
}

type WorkspaceStore = {
    workspaces: Workspace[];
    currentWorkspaceId: number;
    switchWorkspace: (id: number) => void;
    addComponentToWorkspace: (id: number, title: string, component: React.ReactNode) => void;
    deleteComponentFromWorkspace: (workspaceId: number, windowId: number) => void;
    updateCurrentWindowTitle: (id: number, title: string) => void;
    // updateCurrentWindowId: (id: number) => void;
    setCurrentWindowId: (workspaceId: number, windowId: number) => void;
}

const findParentNode = (
    node: MosaicNode<number> | null,
    windowId: number,
    parent: MosaicNode<number> | null = null
): { parent: MosaicNode<number> | null; key: 'first' | 'second' | null } => {
    if (!node) return { parent: null, key: null };
    if (typeof node === 'number') return { parent, key: null };
    if (node.first === windowId || node.second === windowId) {
        return { parent: node, key: node.first === windowId ? 'first' : 'second' };
    }
    const left = findParentNode(node.first, windowId, node);
    if (left.parent) return left;
    return findParentNode(node.second, windowId, node);
};

const replaceWindowId = (
    node: MosaicNode<number> | null,
    oldId: number,
    newNode: MosaicNode<number>
): MosaicNode<number> | null => {
    if (!node) return null;
    if (typeof node === 'number') {
        return node === oldId ? newNode : node;
    }
    return {
        direction: node.direction,
        first: replaceWindowId(node.first, oldId, newNode),
        second: replaceWindowId(node.second, oldId, newNode),
        splitPercentage: node.splitPercentage,
    };
};

export const useWorkspaceStore = create<WorkspaceStore>((set) => ({
    workspaces: Array.from({ length: 10 }, (_, i) => ({
        id: i,
        currentWindowTitle: "Desktop",
        currentWindowId: 0,
        nextWindowId: 0,
        windows: [],
        mosaicNode: null,
    })),
    currentWorkspaceId: 0,

    switchWorkspace: (id) => set({currentWorkspaceId: id}),

    // addComponentToWorkspace: (id, title, component) => {
    //     set((state) => ({
    //         workspaces: state.workspaces.map((w) => {
    //             if (w.id !== id) return w;
    //             const newWindow: Window = {
    //                 windowId: w.nextWindowId,
    //                 windowTitle: title,
    //                 component,
    //             };
    //             let newMosaicNode: MosaicNode<number> | null = w.mosaicNode;
    //             if (!newMosaicNode) {
    //                 newMosaicNode = newWindow.windowId;
    //             } else {
    //                 newMosaicNode = {
    //                     direction: 'row',
    //                     // @ts-ignore
    //                     first: w.mosaicNode,
    //                     second: newWindow.windowId,
    //                     splitPercentage: 50,
    //                 };
    //             }
    //             return {
    //                 ...w,
    //                 windows: [...w.windows, newWindow],
    //                 nextWindowId: w.nextWindowId + 1,
    //                 mosaicNode: newMosaicNode,
    //             };
    //         }),
    //     }));
    // },

    addComponentToWorkspace: (id, title, component) => {
        set((state) => ({
            workspaces: state.workspaces.map((w) => {
                if (w.id !== id) return w;
                const newWindow: Window = {
                    windowId: w.nextWindowId,
                    windowTitle: title,
                    component,
                };
                let newMosaicNode: MosaicNode<number> | null = w.mosaicNode;
                let newCurrentWindowId = newWindow.windowId;

                if (!newMosaicNode) {
                    // First window: Set as root
                    newMosaicNode = newWindow.windowId;
                } else {
                    // Split the focused window (or last window if no focus)
                    const targetWindowId = w.currentWindowId || w.windows[w.windows.length - 1]?.windowId || newWindow.windowId;
                    const isVertical = w.windows.length % 2 === 0; // Alternate: column for second window
                    const newSplitNode: MosaicNode<number> = {
                        direction: isVertical ? 'column' : 'row',
                        first: targetWindowId,
                        second: newWindow.windowId,
                        splitPercentage: 50,
                    };

                    // Replace the target window with the new split node
                    newMosaicNode = typeof w.mosaicNode === 'number'
                        ? newSplitNode
                        : replaceWindowId(w.mosaicNode, targetWindowId, newSplitNode);
                }

                return {
                    ...w,
                    windows: [...w.windows, newWindow],
                    nextWindowId: w.nextWindowId + 1,
                    mosaicNode: newMosaicNode,
                    currentWindowId: newCurrentWindowId,
                };
            }),
        }));
    },

    deleteComponentFromWorkspace: (workspaceId, windowId) => {
        set((state) => ({
            workspaces: state.workspaces.map((w) => {
                if (w.id !== workspaceId) return w;
                const newWindows = w.windows.filter((window) => window.windowId !== windowId);
                let newMosaicNode: MosaicNode<number> | null = null;
                if (newWindows.length === 1) {
                    newMosaicNode = newWindows[0].windowId;
                } else if (newWindows.length > 1) {
                    newMosaicNode = newWindows.reduce((acc, curr, idx) => {
                        if (idx === 0) return curr.windowId;
                        return {
                            direction: 'row',
                            first: acc,
                            second: curr.windowId,
                            splitPercentage: 50,
                        };
                    }, null as any);
                }
                return {
                    ...w,
                    windows: newWindows,
                    mosaicNode: newMosaicNode,
                };
            }),
        }));
    },

    // deleteComponentFromWorkspace: (workspaceId, windowId) => {
    //     set((state) => ({
    //         workspaces: state.workspaces.map((w) => {
    //             if (w.id !== workspaceId) return w;
    //             const newWindows = w.windows.filter((window) => window.windowId !== windowId);
    //             let newMosaicNode: MosaicNode<number> | null = null;

    //             if (newWindows.length === 0) {
    //                 newMosaicNode = null;
    //             } else if (newWindows.length === 1) {
    //                 newMosaicNode = newWindows[0].windowId;
    //             } else {
    //                 // Find the parent of the deleted window
    //                 const { parent, key } = findParentNode(w.mosaicNode, windowId);
    //                 if (parent && key) {
    //                     // Replace the parent with the sibling node
    //                     const sibling = key === 'first' ? parent.second : parent.first;
    //                     newMosaicNode = replaceWindowId(w.mosaicNode, windowId, sibling);
    //                 } else {
    //                     // Rebuild tree if no parent (fallback)
    //                     newMosaicNode = newWindows.reduce((acc, curr, idx) => {
    //                         if (idx === 0) return curr.windowId;
    //                         return {
    //                             direction: idx % 2 === 0 ? 'column' : 'row',
    //                             first: acc,
    //                             second: curr.windowId,
    //                             splitPercentage: 50,
    //                         };
    //                     }, null as any);
    //                 }
    //             }

    //             return {
    //                 ...w,
    //                 windows: newWindows,
    //                 mosaicNode: newMosaicNode,
    //                 currentWindowId: newWindows.length > 0 ? newWindows[newWindows.length - 1].windowId : 0,
    //             };
    //         }),
    //     }));
    // },

    updateCurrentWindowTitle: (id, title) => {
        set((state) => ({
            workspaces: state.workspaces.map((w) => (
                w.id === id
                    ? {...w, currentWindowTitle: title}
                    : w
            ))
        }))
    },

    setCurrentWindowId: (workspaceId, windowId) => {
        set((state) => ({
            workspaces: state.workspaces.map((w) => (
                w.id === workspaceId
                    ? {...w, currentWindowId: windowId}
                    : w
            ))
        }))
    }

    // updateCurrentWindowId: (workspaceId) => {
    //     set((state) => ({
    //         workspaces: state.workspaces.map((w) => (
    //             w.id === workspaceId
    //                 ? {...w, currentWindowId: w.nextWindowId, nextWindowId: w.nextWindowId + 1}
    //                 : w
    //         ))
    //     }))
    // }
}))