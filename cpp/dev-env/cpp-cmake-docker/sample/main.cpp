#include <iostream>

#include "foo.h"

using namespace std;

int main() {
  cout << "Hello, World!\n";

  // C++ 표준 버전 출력
  cout << "C++ Standard version: " << __cplusplus << "\n";

  fooPrint();

  return 0;
}
