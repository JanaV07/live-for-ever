import Snapshot from "./components/templates/snapshot/Snapshot";
import Signup from "./components/Signup";
import { Container } from "react-bootstrap";
import {AuthProvider} from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{maxWidth:'400px'}}>
        <Signup />
      </div>
    </Container>
    </AuthProvider>
  );
}

export default App;
