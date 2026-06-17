// App.jsx

import AppRouter from "./routes/AppRouter";
import ThemeProvider from "./components/theme/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;