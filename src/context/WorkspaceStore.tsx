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
    //             if (w.id === id) {
    //             const newWindow: Window = {
    //                 windowId: w.nextWindowId,
    //                 windowTitle: title,
    //                 component: component
    //             };
    //             return {
    //                 ...w,
    //                 windows: [...w.windows, newWindow],
    //                 nextWindowId: w.nextWindowId + 1
    //             };
    //         }
    //         return w;
    //         })
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
                if (!newMosaicNode) {
                    newMosaicNode = newWindow.windowId;
                } else {
                    newMosaicNode = {
                        direction: 'row',
                        first: w.mosaicNode,
                        second: newWindow.windowId,
                        splitPercentage: 50,
                    };
                }
                return {
                    ...w,
                    windows: [...w.windows, newWindow],
                    nextWindowId: w.nextWindowId + 1,
                    mosaicNode: newMosaicNode,
                };
            }),
        }));
    },

    // deleteComponentFromWorkspace: (workspaceId, windowId) => {
    //     set((state) => ({
    //         workspaces: state.workspaces.map((w) => (
    //             w.id === workspaceId
    //                 ? {...w, windows: w.windows.filter((window) => window.windowId !== windowId)}
    //                 : w
    //         ))
    //     }))
    // },

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