import MainLayout from "./layouts/MainLayout";

const feedData = [
  {
    img: "/assets/imgs/nft.png",
    name: "NFT NAME",
    date: "Aug 1, 2021",
    num: 5,
  },
  {
    img: "/assets/imgs/nft.png",
    name: "NFT NAME",
    date: "Aug 1, 2021",
    num: 5,
  },
  {
    img: "/assets/imgs/nft.png",
    name: "NFT NAME",
    date: "Aug 1, 2021",
    num: 5,
  },
  {
    img: "/assets/imgs/nft.png",
    name: "NFT NAME",
    date: "Aug 1, 2021",
    num: 5,
  },
  {
    img: "/assets/imgs/nft.png",
    name: "NFT NAME",
    date: "Aug 1, 2021",
    num: 5,
  },
];

function App() {
  return (
    <MainLayout>
      <div className="text-center">
        <h2>Checkout Feed</h2>

        <div className="checkout-items mt-4">
          {feedData.map((el, idx) => {
            const { img, name, date, num } = el;

            return (
              <div className="ceckout-item" key={"nft-list-item" + idx}>
                <div className="img">
                  <img src={img} alt={name} />
                </div>
                <div>{name}</div>
                <div>{date}</div>
                <div>{num}</div>
              </div>
            );
          })}
        </div>
      </div>
    </MainLayout>
  );
}

export default App;
