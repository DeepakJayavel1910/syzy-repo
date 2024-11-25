import data from "./config/sample.json";

const App = () => {
  return (
    <div className="overflow-hidden w-full h-screen bg-slate-200 flex justify-center items-center">
      <div className="w-3/4 md:w-1/2 py-6 px-8 mx-auto bg-white shadow-md rounded-lg">
        {Object.entries(data).map(([key, item]) => (
          <div key={key} className="border-b-[1px] py-2">
            <h4 className="text-lg md:text-xl font-bold">{item.name}</h4>
            <p className="text-sm md:text-md italic mb-1">{item.description}</p>
            <span className="font-bold md:text-xl text-[#B46321]">&#8377;{item.price.toFixed(2)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
