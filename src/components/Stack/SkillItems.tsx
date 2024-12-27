import "./Stack.css";

interface InfoSkil {
  id: string;
  img: string;
  tooltip: string;
}

interface Props {
  skills: InfoSkil[];
}

const SkillItems: React.FC<Props> = ({ skills }) => {
  return (
    <ul className="skills">
      {skills.map((skill) => (
        <li className="skill" key={skill.id}>
          <div className="tooltip">
            <span className="tooltip-name">{skill.tooltip}</span>
          </div>
          <img src={skill.img} alt={skill.tooltip} />
        </li>
      ))}
    </ul>
  );
};

export default SkillItems;
