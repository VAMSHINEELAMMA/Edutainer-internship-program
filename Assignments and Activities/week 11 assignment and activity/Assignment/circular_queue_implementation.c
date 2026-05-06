#include <stdio.h>
#define SIZE 5

int queue[SIZE];
int front = -1, rear = -1;

int isFull() {
    return (front == 0 && rear == SIZE - 1) || (front == rear + 1);
}

int isEmpty() {
    return front == -1;
}

void enqueue(int value) {
    if (isFull()) {
        printf("Circular Queue is Full\n");
        return;
    }

    if (front == -1) {
        front = 0;
        rear = 0;
    } else if (rear == SIZE - 1) {
        rear = 0;
    } else {
        rear++;
    }

    queue[rear] = value;
    printf("%d inserted into Circular Queue\n", value);
}

void dequeue() {
    if (isEmpty()) {
        printf("Circular Queue is Empty\n");
        return;
    }

    printf("%d deleted from Circular Queue\n", queue[front]);

    if (front == rear) {
        front = -1;
        rear = -1;
    } else if (front == SIZE - 1) {
        front = 0;
    } else {
        front++;
    }
}

void peek() {
    if (isEmpty()) {
        printf("Circular Queue is Empty\n");
    } else {
        printf("Front element is: %d\n", queue[front]);
    }
}

void display() {
    int i;

    if (isEmpty()) {
        printf("Circular Queue is Empty\n");
        return;
    }

    printf("Circular Queue elements: ");

    if (front <= rear) {
        for (i = front; i <= rear; i++) {
            printf("%d ", queue[i]);
        }
    } else {
        for (i = front; i < SIZE; i++) {
            printf("%d ", queue[i]);
        }
        for (i = 0; i <= rear; i++) {
            printf("%d ", queue[i]);
        }
    }

    printf("\n");
}

int main() {
    int choice, value;

    while (1) {
        printf("\n--- Circular Queue Menu ---\n");
        printf("1. Enqueue\n");
        printf("2. Dequeue\n");
        printf("3. Peek\n");
        printf("4. Display\n");
        printf("5. Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch (choice) {
            case 1:
                printf("Enter value to insert: ");
                scanf("%d", &value);
                enqueue(value);
                break;

            case 2:
                dequeue();
                break;

            case 3:
                peek();
                break;

            case 4:
                display();
                break;

            case 5:
                printf("Program ended\n");
                return 0;

            default:
                printf("Invalid choice\n");
        }
    }
}