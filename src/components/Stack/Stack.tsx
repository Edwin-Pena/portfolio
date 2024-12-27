import SkillItems from "./SkillItems";
import SkillsJson from "../../data/Skills.json";

const Stack: React.FC = () => {
  return (
    <section className="stack">
      <h2 className="stack-title">Stack</h2>
      <SkillItems skills={SkillsJson} />
    </section>
  );
};

export default Stack;
