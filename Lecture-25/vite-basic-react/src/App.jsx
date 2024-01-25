import Hello from "./Component/Hello";
import Homie from "./Component/Homie";
import Mapp from "./Component/Mapp";
import Perso from "./Component/Perso";

function App() {
  return (
    <div>
      <Homie name="sachin" age="16" favColor="laal" />

      {/* <Homie name="vikas" age="69" favColor="orange" /> */}
    </div>
  );
}

export default App;
