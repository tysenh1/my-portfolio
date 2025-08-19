
import { create } from 'zustand';

type Workspace = {
    id: number;
    currentWindowTitle: string;
    currentWindowId: number;
    nextWindowId: number;
    windows: Window[];
    layout: any;
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

const computeBSPLayout = (windows: Window[], newWindowId: number, newTitle: string, newComponent: React.ReactNode): any => {
    const totalWindows = windows.length + (newWindowId >= 0 ? 1 : 0);
    const components = windows.map((win) => ({
      type: 'tab',
      id: win.windowId.toString(),
      name: win.windowTitle,
      component: 'custom',
    }));
  
    if (newWindowId >= 0) {
      components.push({
        type: 'tab',
        id: newWindowId.toString(),
        name: newTitle,
        component: 'custom',
      });
    }
  
    if (totalWindows === 0) {
      return { global: {}, layout: { type: 'row', id: '#root', children: [] } };
    } else if (totalWindows === 1) {
      return {
        global: {},
        layout: {
          type: 'row',
          id: '#root',
          children: [
            {
              type: 'tabset',
              children: [components[0]],
              weight: 100,
            },
          ],
        },
      };
    } else {
      const isVertical = totalWindows % 2 === 0;
      const direction = isVertical ? 'column' : 'row';
      const splitCount = Math.ceil(totalWindows / 2);
      const children = [];
      for (let i = 0; i < totalWindows; i += 2) {
        const pair = components.slice(i, i + 2);
        if (pair.length === 1) {
          children.push({
            type: 'tabset',
            children: [pair[0]],
            weight: 100 / splitCount,
          });
        } else {
          children.push({
            type: direction,
            children: [
              {
                type: 'tabset',
                children: [pair[0]],
                weight: 50,
              },
              {
                type: 'tabset',
                children: [pair[1]],
                weight: 50,
              },
            ],
            weight: 100 / splitCount,
          });
        }
      }
      return {
        global: {},
        layout: {
          type: 'row',
          id: '#root',
          children,
        },
      };
    }
  };

export const useWorkspaceStore = create<WorkspaceStore>((set) => ({
    workspaces: Array.from({ length: 10 }, (_, i) => ({
        id: i,
        currentWindowTitle: 'Desktop',
        currentWindowId: 0,
        nextWindowId: 0,
        windows: [],
        layout: { global: {}, layout: { type: 'row', id: '#root', children: [] } },
    })),
    currentWorkspaceId: 0,

    switchWorkspace: (id) => set({currentWorkspaceId: id}),

    addComponentToWorkspace: (id, title, component) =>
        set((state) => ({
          workspaces: state.workspaces.map((w) => {
            if (w.id !== id) return w;
            const newWindow: Window = {
              windowId: w.nextWindowId,
              windowTitle: title,
              component,
            };
            const newWindows = [...w.windows, newWindow];
            const newLayout = computeBSPLayout(newWindows, w.nextWindowId, title, component);
            return {
              ...w,
              windows: newWindows,
              layout: newLayout,
              nextWindowId: w.nextWindowId + 1,
              currentWindowId: newWindow.windowId,
              currentWindowTitle: title,
            };
          }),
        })),

    deleteComponentFromWorkspace: (workspaceId, windowId) =>
        set((state) => ({
            workspaces: state.workspaces.map((w) => {
                if (w.id !== workspaceId) return w;
                const newWindows = w.windows.filter((window) => window.windowId !== windowId);
                const newLayout = computeBSPLayout(newWindows, -1, '', null);
                return {
                  ...w,
                  windows: newWindows,
                  layout: newLayout,
                  currentWindowId: newWindows.length > 0 ? newWindows[newWindows.length - 1].windowId : 0,
                  currentWindowTitle: newWindows.length > 0 ? newWindows[newWindows.length - 1].windowTitle : 'Desktop',
                };
            }),
        })),

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