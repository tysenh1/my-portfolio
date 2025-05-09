import React from "react";
import { useWorkspaceStore } from "../context/WorkspaceStore";
import Clock from "./Clock";


function Waybar() {
    const currentWorkspaceId = useWorkspaceStore((state) => state.currentWorkspaceId);
    const workspaces = useWorkspaceStore((state) => state.workspaces)
    const switchWorkspace = useWorkspaceStore((state) => state.switchWorkspace)
    return (
        <div className="absolute top-[10px] left-0 w-full pl-[10px] pr-[10px] bg-blue-600 h-9 flex items-center justify-between font-fira font-bold">
            {/* Left-modules */}
            <div className="h-9 flex items-center justify-center bg-white rounded-3xl">
                {/* <div className="w-20 h-8 bg-green-600"></div> */}
                <div className={"px-[10px]"}>Window Title</div>
            </div>

            {/* Center-modules */}
            <div className="h-9 flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 bg-white rounded-full px-1">
                {/* <div className="w-20 h-8 bg-green-600"></div> */}
                {workspaces.map((ws) => {
                    if (ws.id === currentWorkspaceId) {
                        return (
                            <div
                                key={ws.id}
                                className={"w-8 bg-gray-700 flex justify-center align-middle mx-1 rounded-full cursor-pointer"}
                                onClick={() => switchWorkspace(ws.id)}
                            >
                                {ws.id}
                            </div>
                        );
                    } else {
                        return (
                            <div
                                key={ws.id}
                                className={"w-8 bg-gray-400 flex justify-center align-middle mx-1 rounded-full cursor-pointer"}
                                onClick={() => switchWorkspace(ws.id)}
                            >
                                {ws.id}
                            </div>
                        );
                    }
})}
            </div>

            {/* Right-modules */}
            <div className="h-9 flex items-center bg-white rounded-full">
                <Clock />
            </div>
        </div>
    );
}

export default Waybar