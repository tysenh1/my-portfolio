import React from "react";
import { useWorkspaceStore } from "../context/WorkspaceStore";


function Waybar() {
    const currentWorkspaceId = useWorkspaceStore((state) => state.currentWorkspaceId);
    const workspaces = useWorkspaceStore((state) => state.workspaces)
    return (
        <div className="absolute top-2 left-0 w-full pl-2 pr-2 bg-blue-600 h-8 flex items-center justify-between">
            {/* Left-aligned */}
            <div className="h-full flex items-center">
                <div className="w-20 h-8 bg-green-600"></div>
            </div>

            {/* Center-aligned */}
            <div className="h-8 flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 bg-white rounded-lg px-1">
                {/* <div className="w-20 h-8 bg-green-600"></div> */}
                {workspaces.map((ws) => {
                    if (ws.id === currentWorkspaceId) {
                        return <div key={ws.id} className={"w-8 bg-gray-700 flex justify-center align-middle mx-1 rounded-full"}>{ws.id}</div>;
                    } else {
                        return <div key={ws.id} className={"w-8 bg-gray-400 flex justify-center align-middle mx-1 rounded-full"}>{ws.id}</div>;
                    }
})}
            </div>

            {/* Right-aligned */}
            <div className="h-full flex items-center">
                <div className="w-20 h-8 bg-green-600 ml-auto"></div>
            </div>
        </div>
    );
}

export default Waybar