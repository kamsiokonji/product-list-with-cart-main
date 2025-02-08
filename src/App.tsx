import data from "@/data/data.json";
function App() {
  console.log(data);

  return (
    <div className={"flex flex-row px-8 py-10 gap-4"}>
      <span className={"grid grid-cols-3 gap-9"}>
        <p className={"p-9"}>hello</p>
        <p className={"p-9"}>hello</p>
        <p className={"p-9"}>hello</p>
        <p className={"p-9"}>hello</p>
        <p className={"p-9"}>hello</p>
        <p className={"p-9"}>hello</p>
        <p className={"p-9"}>hello</p>
        <p className={"p-9"}>hello</p>
        <p className={"p-9"}>hello</p>
      </span>

      <div className={"flex-1"}>
        <div className="font-bold text-primary-foreground">
          Classic Tiramisu
        </div>

        <div>good afternoon</div>
      </div>
    </div>
  );
}

export default App;
