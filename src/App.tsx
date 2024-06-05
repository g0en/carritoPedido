import { BrowserRouter } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import { AppRoutes } from "./routes/AppRoutes";
import { CartProvider } from "./context/CarritoContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <Container style={{ minHeight: "91vh", minWidth: "100%", padding: "0" }}>
          <CartProvider>
            <AppRoutes></AppRoutes>
          </CartProvider>
        </Container>
      </BrowserRouter>

    </>
  )
}

export default App
