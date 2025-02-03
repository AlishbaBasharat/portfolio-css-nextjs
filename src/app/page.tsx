import About from "./components/about";
import Contact from "./components/contact";
import Main from "./components/main";
import Portfolio from "./components/portfolio";

export default function Home() {
  return (
    <div>
      <Main/>
      <About/>
      <Portfolio/>
      <Contact/>
    </div>
  );
}