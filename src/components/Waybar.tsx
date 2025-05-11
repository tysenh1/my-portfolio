import React from "react";
import { useWorkspaceStore } from "../context/WorkspaceStore";
import Clock from "./rightModules/Clock";
import { LinkedIn } from "./rightModules/LinkedIn";
import { Github } from "./rightModules/Github";


function Waybar() {
    const currentWorkspaceId = useWorkspaceStore((state) => state.currentWorkspaceId);
    const currentWorkspace = useWorkspaceStore((state) => 
        state.workspaces.find((w) => w.id === currentWorkspaceId)
    )
    const workspaces = useWorkspaceStore((state) => state.workspaces)
    const switchWorkspace = useWorkspaceStore((state) => state.switchWorkspace)
    return (
        <div className="mt-2.5 left-0 w-full pl-2.5 pr-2.5 bg-blue-600 h-9 flex items-center justify-between font-fira font-semibold">
            {/* Left-modules */}
            <div className="h-9 flex items-center justify-center bg-white rounded-3xl">
                {/* <div className="w-20 h-8 bg-green-600"></div> */}
                <div className={"px-2.5"}>{currentWorkspace 
                        ? currentWorkspace.currentWindowTitle
                        : "Shitass"
                    }</div>
            </div>

            {/* Center-modules */}
            <div className="h-9 flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 bg-white rounded-full px-1">
                {/* <div className="w-20 h-8 bg-green-600"></div> */}
                {workspaces.map((ws) => {
                    if (ws.id === currentWorkspaceId) {
                        return (
                            <div
                                key={ws.id}
                                className={"w-[33px] bg-[#a8a8a8] flex justify-center align-middle mx-1 rounded-full cursor-pointer"}
                                onClick={() => switchWorkspace(ws.id)}
                            >
                                {ws.id}
                            </div>
                        );
                    } else {
                        if (ws.id <= 5) {
                            return (
                                <div
                                    key={ws.id}
                                    className={"w-[26px] px-1 bg-[#cecece] flex justify-center align-middle mx-1 rounded-full cursor-pointer"}
                                    onClick={() => switchWorkspace(ws.id)}
                                >
                                    {ws.id}
                                </div>
                            );
                        }
                        if (ws.id >= 6 && ws.windows.length !== 0) {
                            return (
                                <div
                                    key={ws.id}
                                    className={"w-[26px] px-1 bg-[#cecece] flex justify-center align-middle mx-1 rounded-full cursor-pointer"}
                                    onClick={() => switchWorkspace(ws.id)}
                                >
                                    {ws.id}
                                </div>
                            );
                        }
                        else {
                            return
                        }
                    }
})}
            </div>

            {/* Right-modules */}
            <div className="h-9 flex items-center">
                <div className={"h-full bg-white rounded-full flex items-center mx-1.5"}>
                    <LinkedIn />
                </div>

                <div className={"h-full bg-white rounded-full flex items-center mx-1.5"}>
                    <Github />
                </div>

                <div className={"h-full bg-white rounded-full flex items-center ml-1.5"}>
                    <Clock />
                </div>
                
            </div>
        </div>
    );
}

export default Waybar