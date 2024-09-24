export default function testimonial() {
  const products = [
    {
      id: 1,
      imageUrl: "https://i.pinimg.com/564x/f4/8b/e9/f48be96a1c5aea323155cbd6207cf388.jpg",
      title: "Shoes!",
      description: "If a dog chews shoes whose shoes does he choose?",
    },
    {
      id: 2,
      imageUrl: "https://i.pinimg.com/564x/ed/96/f0/ed96f0047a7c0e88e095e81049e0fbe5.jpg",
      title: "Boots!",
      description: "Boots that are made for walking!",
    },
    {
      id: 3,
      imageUrl: "https://i.pinimg.com/564x/4b/ca/9a/4bca9a0e461b9543cae3d8abfad68161.jpg",
      title: "Sandals!",
      description: "Perfect for a beach day.",
    },
    {
      id: 4,
      imageUrl: "https://i.pinimg.com/736x/e0/8d/4d/e08d4d81917e8064a0bb454b52e49ef6.jpg",
      title: "Sandals!",
      description: "Perfect for a beach day.",
    },
    {
      id: 5,
      imageUrl: "https://i.pinimg.com/736x/10/be/fa/10befad13247f1ee2a82ac7a81496575.jpg",
      title: "Sandals!",
      description: "Perfect for a beach day.",
    },
    {
      id: 6,
      imageUrl: "https://i.pinimg.com/564x/b4/bb/8e/b4bb8e459ebc8dde1bf54463b4692152.jpg",
      title: "Sandals!",
      description: "Perfect for a beach day.",
    },
  ];

  return (
    <>
      <div className="flex carousel justify-items-center gap-5">
        {products.map((product) => (
          <div key={product.id} className="card bg-base-100 w-96 shadow-xl flex justify-center carousel-item">
            <figure className="px-10 pt-10">
              <img src={product.imageUrl} alt={product.title} className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{product.title}</h2>
              <p>{product.description}</p>
              <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
