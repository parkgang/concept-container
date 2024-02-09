#include "Stack.h"

#include <iostream>
using namespace std;

Node::Node(int data) : data(data), next(nullptr) {}

Stack::Stack() : top(nullptr) {}

Stack::~Stack() {
  while (!isEmpty()) {
    pop();
  }
}

void Stack::push(int data) {
  Node* newNode = new Node(data);
  newNode->next = top;
  top = newNode;
}

int Stack::pop() {
  if (isEmpty()) {
    cout << "Stack Underflow" << endl;
    exit(EXIT_FAILURE);
  }
  Node* temp = top;
  int poppedValue = top->data;
  top = top->next;
  delete temp;
  return poppedValue;
}

int Stack::peek() {
  if (isEmpty()) {
    cout << "Stack is empty" << endl;
    exit(EXIT_FAILURE);
  }
  return top->data;
}

bool Stack::isEmpty() { return top == nullptr; }
