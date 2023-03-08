
import { Router } from "./router";
import { FormProvider } from "./contexts/FormContext";

const App = () => {

  return(
      <div>
       <FormProvider>
        <Router/>
       </FormProvider> 
      </div>
  )
}

export default App ; 