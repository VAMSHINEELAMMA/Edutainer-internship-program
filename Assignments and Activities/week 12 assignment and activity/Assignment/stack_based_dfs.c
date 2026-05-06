#include <stdio.h>

#define MAX 10

int adj[MAX][MAX], visited[MAX], stack[MAX];
int n, top = -1;

// Push function
void push(int v) {
    stack[++top] = v;
}

// Pop function
int pop() {
    return stack[top--];
}

// Iterative DFS
void dfs(int start) {
    int i;
    push(start);

    while(top != -1) {
        int v = pop();

        if(visited[v] == 0) {
            printf("%d ", v);
            visited[v] = 1;

            for(i = n-1; i >= 0; i--) {
                if(adj[v][i] == 1 && visited[i] == 0) {
                    push(i);
                }
            }
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

    printf("DFS Traversal (Stack): ");
    dfs(start);

    return 0;
}