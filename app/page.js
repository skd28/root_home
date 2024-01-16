import Hidden from "./components/Hidden";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";

export default function page() {
  return (
    <>
      <Navbar />
      <Landing />
      <Hidden />
    </>
  );
}
