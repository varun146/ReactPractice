const Item = (props) => {
  return (
    <label>
      <input type="checkbox" />
      {props.value}
    </label>
  );
};

export default Item;
