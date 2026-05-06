#include <stdio.h>

#define MAX 10

int adj[MAX][MAX], visited[MAX], n;

// Recursive DFS function
void dfs(int v) {
    int i;
    printf("%d ", v);
    visited[v] = 1;

    for(i = 0; i < n; i++) {
        if(adj[v][i] == 1 && visited[i] == 0) {
            dfs(i);
        }
    }
}

int main() {
    int i, j, start;

    printf("Enter number of vertices: ");
    scanf("%d", &n);

    printf("Enter adjacency matrix:\n");
    for(i = 0; i < n; i++) {
        for(j = 0; j < n; j++) {
            scanf("%d", &adj[i][j]);
        }
    }

    for(i = 0; i < n; i++)
        visited[i] = 0;

    printf("Enter starting vertex: ");
    scanf("%d", &start);

    printf("DFS Traversal (Recursive): ");
    dfs(start);

    return 0;
}