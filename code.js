function mkSet(parent,rank,n) { 
  //function to initialize parent[] and rank[]
	for(let i=0;i<n;i++) { 
		parent[i]=i;
		rank[i]=0;
	} 
} 

function findParent(parent,component) { 
	//function is to find the root of the sets
	if(parent[component]==component) 
		return component; 

	return parent[component] = findParent(parent,parent[component]); 
} 
// merge two disjoint sets based on their ranks.
function unionSet(u, v, parent, rank) {
	if(rank[u]<rank[v]) {
		parent[u]=v;
	} else if(rank[v]<rank[u]) {
		parent[v]=u;
	} else{
		parent[v]=u; 
		rank[u]++;//since the rank increases if the ranks of two sets are same 
	} 
} 

function kruskalAlgo(edge) {
  let n = edge.length;
  if(n < 2) return 0;
	//Sort the edge array in ascending order, so we can access minimum distances/cost 
	edge.sort((a, b)=>{
		return a[2] - b[2];
	})
	let parent = new Array(n), rank = new Array(n);

	mkSet(parent,rank,n);

	let minCost=0;

	for(let i=0;i<n;i++) {
		let v1=findParent(parent,edge[i][0]);
		let v2=findParent(parent,edge[i][1]);
		let wt=edge[i][2];
    //if the parents are different that means they are in different sets so union them 
		if(v1!=v2) {
			unionSet(v1,v2,parent,rank);
			minCost+=wt;
		}
	}
  return minCost;
}
// required sources
// https://www.geeksforgeeks.org/kruskals-minimum-spanning-tree-algorithm-greedy-algo-2/
