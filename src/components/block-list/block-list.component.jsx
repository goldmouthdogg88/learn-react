import Block from "../block/block.component";

const BlockList = ({ monsters }) => (
  <div className="block-list">
    {monsters.map((monster) => {
      return <Block monster={monster} />;
    })}
  </div>
);

export default BlockList;
