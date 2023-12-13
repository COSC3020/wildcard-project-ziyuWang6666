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

The total worst-time complexity of the implementation could be $O(V^2)$, where V is the number of vertices.

1. The findParent method is applied to find the root of the node and run it recursively. The time complexity of traversing from a node to its root in a list is $O(V)$, where V is the number of elements in the list. Therefore, the worst time complexity is $O(V)$.

2. The unionSet operation takes the findParant operation first and then compares ranks. If the ranks are different, the operation involves a constant number of assignments, making $O(1)$. When the ranks are the same, increment the node's rank and it will not be incremented again until its rank is part of a union operation where it merges with another node of the same rank which results in time analysis O(1). The total unionSet operation takes $O(V)$.

3. The kruskalAlgo method to sort edges first takes $O(E*logE)$, 
the first for loop runs n times, where n is the number of vertices in the matrix. The time complexity is $O(V)$. The second nested for loops i represents the row index, and j represents the column index. The time complexity is $O(V^2)$.

4. The third for loop in the kruskalAlgo operation is find and unionSet when two vertices are not equal. So, the total complexity is $O(E*logE+3V+V^2)$. So overall complexity could be $O(V^2)$.


