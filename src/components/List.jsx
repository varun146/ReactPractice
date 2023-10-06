import Item from "./Item";

const List = ({ items }) => {
  return (
    <div className="list flex">
      {items.map((item) => {
        return <Item key={item} value={item} />;
      })}
    </div>
  );
};

export default List;
