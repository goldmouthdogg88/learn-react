import "./block.styles.css";

const Block = ({ monster }) => {
  const { character, id } = monster;
  return (
    <div className="block">
      <p className="block-character">{character}</p>
    </div>
  );
};

export default Block;
