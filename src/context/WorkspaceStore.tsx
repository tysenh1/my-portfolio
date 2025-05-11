import { create } from 'zustand';

type Workspace = {
    id: number;
    currentWindowTitle: string;
    currentWindowId: number;
    nextWindowId: number;
    windows: Window[]
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
    workspaces: [
        {id: 1, currentWindowTitle: "Desktop", currentWindowId: 0, nextWindowId: 1, windows: []},
        {id: 2, currentWindowTitle: "Desktop", currentWindowId: 0, nextWindowId: 1, windows: []},
        {id: 3, currentWindowTitle: "Desktop", currentWindowId: 0, nextWindowId: 1, windows: []},
        {id: 4, currentWindowTitle: "Desktop", currentWindowId: 0, nextWindowId: 1, windows: []},
        {id: 5, currentWindowTitle: "Desktop", currentWindowId: 0, nextWindowId: 1, windows: []},
        {id: 6, currentWindowTitle: "Desktop", currentWindowId: 0, nextWindowId: 1, windows: []},
        {id: 7, currentWindowTitle: "Desktop", currentWindowId: 0, nextWindowId: 1, windows: []},
        {id: 8, currentWindowTitle: "Desktop", currentWindowId: 0, nextWindowId: 1, windows: []},
        {id: 9, currentWindowTitle: "Desktop", currentWindowId: 0, nextWindowId: 1, windows: []},
        {id: 10, currentWindowTitle: "Desktop", currentWindowId: 0, nextWindowId: 1, windows: []},
    ],
    currentWorkspaceId: 1,

    nextWindowId: 1,

    switchWorkspace: (id) => set({currentWorkspaceId: id}),

    // addComponentToWorkspace: (id, component) => {
    //     set((state) => ({
    //         workspaces: state.workspaces.map((w) => 
    //             w.id === id
    //                 ? {...w, components: [...w.components, component]}
    //                 : w
    //         )
    //     }))
    // },

    addComponentToWorkspace: (id, title, component) => {
        set((state) => ({
            workspaces: state.workspaces.map((w) => {
                if (w.id === id) {
                const newWindow: Window = {
                    windowId: w.nextWindowId,
                    windowTitle: title,
                    component: component
                };
                return {
                    ...w,
                    windows: [...w.windows, newWindow],
                    nextWindowId: w.nextWindowId + 1
                };
            }
            return w;
            })
        }));
    },

    deleteComponentFromWorkspace: (workspaceId, windowId) => {
        set((state) => ({
            workspaces: state.workspaces.map((w) => (
                w.id === workspaceId
                    ? {...w, windows: w.windows.filter((window) => window.windowId !== windowId)}
                    : w
            ))
        }))
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