import react from 'react';
import { Container } from "react-bootstrap";
import Header from "./components/header";
import Footer from "./components/footer";

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <h1>Welcome to Proshop</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
};
export default App;
