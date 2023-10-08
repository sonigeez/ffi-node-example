#include <stdio.h>

int divide(int a, int b, int* result) {
    if (b == 0) {
        return 1;  // return error code 1 for division by zero
    }
    *result = a / b;
    return 0;  // return error code 0 for success
}
