

import { ReactFlow ,Background} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
function App() {
  return (
    <div style={{ height: '100vh',width:'100%' }}>
      <ReactFlow>
        <Background/>
      </ReactFlow>
      
    </div>
  );
}

export default App;
