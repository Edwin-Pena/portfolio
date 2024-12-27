interface Props {
  className?: string;
}

const ChevronDown: React.FC<Props> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={`bi bi-chevron-double-down animate-bounce position-absolute ${
        className || ""
      }`.trim()}
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
      />
      <path
        fillRule="evenodd"
        d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
      />
    </svg>
  );
};

export default ChevronDown;
