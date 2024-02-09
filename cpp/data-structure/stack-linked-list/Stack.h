#ifndef STACK_H
#define STACK_H

#include "Node.h"

class Stack {
 private:
  Node* top;

 public:
  Stack();
  ~Stack();
  void push(int data);
  int pop();
  int peek();
  bool isEmpty();
};

#endif  // STACK_H
