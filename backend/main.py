from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from typing import List, Dict, Any
from collections import defaultdict, deque

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def is_dag(nodes: List[Dict], edges: List[Dict]) -> bool:
    if not edges:
        return True
    
    graph = defaultdict(list)
    in_degree = defaultdict(int)
    node_ids = {node["id"] for node in nodes}
    
    for node_id in node_ids:
        in_degree[node_id] = 0
    
    for edge in edges:
        source = edge.get("source") or edge.get("sourceNode")
        target = edge.get("target") or edge.get("targetNode")
        
        if source in node_ids and target in node_ids:
            graph[source].append(target)
            in_degree[target] += 1
    
    queue = deque([node_id for node_id in node_ids if in_degree[node_id] == 0])
    processed = 0
    
    while queue:
        node_id = queue.popleft()
        processed += 1
        
        for neighbor in graph[node_id]:
            in_degree[neighbor] -= 1
            if in_degree[neighbor] == 0:
                queue.append(neighbor)
    
    return processed == len(node_ids)


@app.get('/')
def read_root():
    return {'Ping': 'Pong'}


@app.post('/pipelines/parse')
def parse_pipeline(pipeline: Dict[str, Any]):
    nodes = pipeline.get('nodes', [])
    edges = pipeline.get('edges', [])
    
    num_nodes = len(nodes)
    num_edges = len(edges)
    is_dag_result = is_dag(nodes, edges)
    
    return {
        'num_nodes': num_nodes,
        'num_edges': num_edges,
        'is_dag': is_dag_result
    }


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)

