
import React, { useState } from 'react';
import {
  Mosaic,
  MosaicWindow,
  MosaicNode,
  getLeaves,
  createBalancedTreeFromLeaves,
} from 'react-mosaic-component';
import 'react-mosaic-component/react-mosaic-component.css';

type WindowId = string;

const WindowContent: React.FC<{ id: WindowId }> = ({ id }) => {
  return <div style={{ padding: '10px' }}>This is window: {id}</div>;
};

export const Test = () => {
    const [counter, setCounter] = useState<number>(2);
  const [mosaicTree, setMosaicTree] = useState<MosaicNode<WindowId> | null>('window-1');

  const addWindow = () => {
    const newId = `window-${counter + 1}`;
    const leaves = getLeaves(mosaicTree || []);
    const newLeaves = [...leaves, newId];
    const newTree = createBalancedTreeFromLeaves(newLeaves);

    setCounter(prev => prev + 1);
    setMosaicTree(newTree);
  };

  return (
    <div style={{ height: '100vh' }}>
      <button onClick={addWindow} style={{ margin: 10 }}>
        ➕ Add Window
      </button>
      <Mosaic<WindowId>
        renderTile={(id, path) => (
          <MosaicWindow<WindowId> title={`Window ${id}`} path={path} createNode={() => `window-${counter + 1}`}>
            <WindowContent id={id} />
          </MosaicWindow>
        )}
        value={mosaicTree}
        onChange={setMosaicTree}
      />
    </div>
  );
}