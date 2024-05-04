const Card = (x) => {
  console.log(x);
  return (
    <div>
      <h1>{x.title}</h1>
      <p>{x.price}</p>
    </div>
  );
};

export default Card;
