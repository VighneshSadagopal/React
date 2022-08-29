const Order = (props) => {
    return (
      <button className="order-button" onClick={props.onClick}>
        {props.children}
      </button>
    );
  };
  export default Order;
  