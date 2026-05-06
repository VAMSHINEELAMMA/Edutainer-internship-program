#include <stdio.h>
#define SIZE 100

char stack[SIZE];
int top = -1;

void push(char ch) {
    if (top == SIZE - 1) {
        printf("Stack Overflow\n");
    } else {
        stack[++top] = ch;
    }
}

char pop() {
    if (top == -1) {
        return '\0';
    }
    return stack[top--];
}

int isMatching(char open, char close) {
    if (open == '(' && close == ')')
        return 1;
    if (open == '{' && close == '}')
        return 1;
    if (open == '[' && close == ']')
        return 1;

    return 0;
}

int isBalanced(char exp[]) {
    int i;
    char popped;

    for (i = 0; exp[i] != '\0'; i++) {
        if (exp[i] == '(' || exp[i] == '{' || exp[i] == '[') {
            push(exp[i]);
        } else if (exp[i] == ')' || exp[i] == '}' || exp[i] == ']') {
            popped = pop();

            if (!isMatching(popped, exp[i])) {
                return 0;
            }
        }
    }

    return top == -1;
}

int main() {
    char exp[SIZE];

    printf("Enter an expression: ");
    scanf("%s", exp);

    if (isBalanced(exp)) {
        printf("Parentheses are Balanced\n");
    } else {
        printf("Parentheses are Not Balanced\n");
    }

    return 0;
}