#include <iostream>

#include "Stack.h"
using namespace std;

int main() {
  Stack stack;

  stack.push(10);
  stack.push(20);
  stack.push(30);

  cout << "Top element is: " << stack.peek() << endl;

  while (!stack.isEmpty()) {
    cout << stack.pop() << endl;
  }

  return 0;
}
