import { create } from 'zustand';

type Workspace = {
    id: number;
    components: React.ReactNode[]
}

type WorkspaceStore = {
    workspaces: Workspace[];
    currentWorkspaceId: number;
    switchWorkspace: (id: number) => void;
    addComponentToWorkspace: (id: number, component: React.ReactNode) => void;
}

export const useWorkspaceStore = create<WorkspaceStore>((set) => ({
    workspaces: [
        {id: 1, components: []},
        {id: 2, components: []},
        {id: 3, components: []}
    ],
    currentWorkspaceId: 1,

    switchWorkspace: (id) => set({currentWorkspaceId: id}),

    addComponentToWorkspace: (id, component) => {
        set((state) => ({
            workspaces: state.workspaces.map((w) => 
                w.id === id
                    ? {...w, components: [...w.components, component]}
                    : w
            )
        }))
    }
}))