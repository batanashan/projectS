import Student from "./StudentData/Student";
import { RemoveStd } from "./ManifyStd/RemoveStd/RemoveStd";
import { SaveStd } from "./ManifyStd/SaveStd/SaveStd";
import { UpdateStd } from "./ManifyStd/UpdateStd/UpdateStd";
function App() {
  return <div>
<Student/>
<SaveStd />
<br/>
<RemoveStd/>
<br/>
<UpdateStd/>
</div>

}

export default App;
