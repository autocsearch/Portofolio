export default function Testimonial() {
  const gambar = [
    {
      id: 1,
      imgUrl: "https://i.pinimg.com/736x/0f/be/1c/0fbe1c1b9d250a441ef7dab558b6f61f.jpg",
      title: "gambar 1",
    },
    {
      id: 2,
      imgUrl: "https://i.pinimg.com/736x/97/c1/58/97c158ca852ea92ee2e5fd5722b74620.jpg",
      title: "gambar 2",
    },
    {
      id: 3,
      imgUrl: "https://i.pinimg.com/564x/ab/73/9e/ab739e4b7a3062e1445fd29754fdc815.jpg",
      title: "gambar 3",
    },
  ];

  return (
    <>
      <div className="flex flex-wrap justify-center items-center gap-3 ">
        {gambar.map((e) => (
          <div key={e.id} className="flex flex-col items">
            <figure>
              <img src={e.imgUrl} alt={e.title} className="h-32 w-60 gap-10 " />
            </figure>
            {/* Description */}
            <div>
              <h1>{e.title}</h1>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
