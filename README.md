[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12685867&assignment_repo_type=AssignmentRepo)
# Wildcard Project

You have a cool idea for an algorithms project? Use this repository. Make sure
to explain what problem you're solving and how you're doing it.

## Kruskal’s Algorithm for Minimum Spanning Tree
Kruskal’s Algorithm is another greedy algorithm:
1. Start with an empty tree T
2. Repeat: Add minimum weight edge to T unless it forms a cycle. 

### main steps
I want to use Kruskal's algorithm to find the minimum spanning tree by selecting the smallest weight edge that won't create a cycle in the MST already built.

The main steps are as follows:
1. Sort all edges by weight. 
2. Pick the smallest edge and add it if it doesn't form a cycle. 
3. Repeat step #2 until (V-1) edges are in the spanning tree.

### detail steps
1. Pass the edge matrix as a parameter to the kruskalAlgo function, where the matrix is defined as [source, destination, weight].

2. When the matrix length is less than 2, only one element is present and it returns 0.

3. I need to arrange the edge array in ascending order so that we can easily access the edge with the minimum weight.

4. Two variables have been defined - 'parent' and 'rank'. The 'parent' variable contains all nodes, while the 'rank' variable has a default value of 0.

5. Use mkSet to initialize parent[] and rank[].

6. Initialize the variable minCost to 0. Then, use a for loop to iterate over every pair of nodes and edge's parent information. If the parents of the source and destination are different, merge them using a union operation based on rank, and increase the corresponding weight. After the loop ends, return the total minCost.


### time analysis

The total worst-time complexity of the implementation could be $O(E*\log{}V)$.

1. The mkSet function for loop edge.length to initilize parent and rank, the time complexity is $O(E)$, E is number of edges.

2. The findParent method apply to find root of the sets and run it recursively. The worst-time complexity is $O(\log{}V)$, V is number of vertices.

3. unionSet operation compare vertices result in time analysis $O(\log{}V)$, V is the number of vertices.

4. The kruskalAlgo method to sort edges first take $O(E*\log{}E)$, then mkSet, and for loop to find and unionSet when two vertices are not equal. So, the total complexity is $O(E*\log{}E + E*\log{}V)$. But, value E could be at most $O(V^2)$, so overall complexity could be $O(E*\log{}V)$.

