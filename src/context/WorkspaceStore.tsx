import { create } from 'zustand';

type Workspace = {
    id: number;
    currentWindowTitle: string;
    windows: Window[]
}

type Window = {
    windowTitle: string;
    component: React.ReactNode
}

type WorkspaceStore = {
    workspaces: Workspace[];
    currentWorkspaceId: number;
    switchWorkspace: (id: number) => void;
    addComponentToWorkspace: (id: number, title: string, component: React.ReactNode) => void;
    updateCurrentWindowTitle: (id: number, title: string) => void;
}

export const useWorkspaceStore = create<WorkspaceStore>((set) => ({
    workspaces: [
        {id: 1, currentWindowTitle: "Desktop", windows: []},
        {id: 2, currentWindowTitle: "Desktop", windows: []},
        {id: 3, currentWindowTitle: "Desktop", windows: []},
        {id: 4, currentWindowTitle: "Desktop", windows: []},
        {id: 5, currentWindowTitle: "Desktop", windows: []},
        {id: 6, currentWindowTitle: "Desktop", windows: []},
        {id: 7, currentWindowTitle: "Desktop", windows: []},
        {id: 8, currentWindowTitle: "Desktop", windows: []},
        {id: 9, currentWindowTitle: "Desktop", windows: []},
        {id: 10, currentWindowTitle: "Desktop", windows: []},
    ],
    currentWorkspaceId: 1,

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
            workspaces: state.workspaces.map((w) =>
                w.id === id
                    ? {
                        ...w,
                        windows: [
                            ...w.windows,
                            {
                                windowTitle: title,
                                component: component
                            }
                        ]
                    }
                    : w
            )
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
    }
}))