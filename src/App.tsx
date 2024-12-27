import AboutMe from "./components/AboutMe/AboutMe";
import LogoIntro from "./components/IntroLogo/IntroLogo";
import Projects from "./components/Projects/Projects";
import Stack from "./components/Stack/Stack";
import Footer from "./components/Footer/Footer";

const App: React.FC = () => {
  const aboutDesc: string =
    "Hi, I'm Edwin Peña. I'm a frontend developer and industrial designer. Since I was very young, I've been passionate about technology and knowing how things work and why they were created that way. This thought was what led me to immerse myself in the world of development and industrial design. I love working in a team and learning from the people around me and the new challenges I face. I want to learn more about the world of programming, so I strive to learn and improve my skills every day.";
  return (
    <>
      <main>
        <LogoIntro name="Edwin Peña" />
        <AboutMe description={aboutDesc} />
        <Projects />
        <Stack />
      </main>
      <Footer />
    </>
  );
};

export default App;
