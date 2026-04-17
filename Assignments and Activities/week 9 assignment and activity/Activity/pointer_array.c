#include <stdio.h>

int main() {
    int arr[5], i;
    int *ptr;

    printf("Enter 5 elements:\n");
    for(i = 0; i < 5; i++) {
        scanf("%d", &arr[i]);
    }

    ptr = arr; // pointer pointing to array

    printf("Array elements using pointer:\n");
    for(i = 0; i < 5; i++) {
        printf("%d ", *(ptr + i));
    }

    // Modify elements
    for(i = 0; i < 5; i++) {
        *(ptr + i) = *(ptr + i) + 10;
    }

    printf("\nModified array:\n");
    for(i = 0; i < 5; i++) {
        printf("%d ", *(ptr + i));
    }

    return 0;
}