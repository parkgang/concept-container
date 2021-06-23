import { QueryClient, QueryClientProvider } from "react-query";

import Example from "./components/Example";
import Todo from "./components/Todo";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Example />
        <hr />
        <Todo />
      </QueryClientProvider>
    </>
  );
}

export default App;
