function findParent(parent,component) { 
	//function is to find the root of the sets
	if(parent[component]==component) return component; 
	return parent[component] = findParent(parent,parent[component]); 
} 
// merge two disjoint sets based on their ranks.
function unionSet(u, v, parent, rank) {
	let rootU = findParent(parent, u);
    	let rootV = findParent(parent, v);

	if(rank[rootU]<rank[rootV]) {
	    parent[rootU]=rootV;
	} else if(rank[rootV]<rank[rootU]) {
	    parent[rootV]=rootU;
	} else{
	    //since the rank increases if the ranks of two sets are same
	    parent[rootV]=rootU; 
	    rank[rootU]++; 
	} 
}

function kruskalAlgo(ajMatrix) {
  let n = ajMatrix.length;
  if(n < 2) return 0;
  let parent = new Array(n), rank = new Array(n);

  for (let i = 0; i < n; i++) {
        parent[i] = i;
        rank[i] = 0;
   }
   let edges = [];
   // Set to a edges list
   for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
	    //weight
            let wt = ajMatrix[i][j];
            if (wt !== 0) {
                edges.push({ u: i, v: j, weight: wt });
            }
        }
    }
    edges.sort((a, b) => a.weight - b.weight);

    let minCost=0;
    for(let edge of edges) {
	let {u, v, weight} = edge;
	let v1=findParent(parent,u);
	let v2=findParent(parent,v);
	if(v1 !== v2) {
		//if the parents are different that means they are in different sets so union them 
		unionSet(v1,v2,parent,rank);
		minCost+=weight;
	}
    }
    return minCost;
}
