const ChefCard = (item) => {
  const { title, img, details } = item;
  console.log(title);
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default ChefCard;
