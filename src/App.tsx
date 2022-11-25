import React from 'react';
import './App.css';
import { SpecificationForm } from './components/specification/SpecificationForm';
import { SpecificationDisplay } from './components/specification/SpecificationDisplay';
import { InformationForm } from './components/information/InformationForm';
import { InformationDisplay } from './components/information/InformationDisplay';
import { AppController, Visualization } from './app.controller';
import { observer } from 'mobx-react';

function App() {
  const vm = AppController.getInstance();

  return (
    <div className="App">
      <h1>My form</h1>

      <div className="container">
        <h2>Information</h2>
        {vm.visualizationState.information === Visualization.Form &&
            <InformationForm
                initialInformation={vm.information}
                onSubmit={vm.handleInformationSubmit}
                onClose={vm.handleInformationClose}
            />
        }
        {
          vm.visualizationState.information === Visualization.Display &&
            <InformationDisplay
                information={vm.information}
                onEdit={vm.handleInformationEdit}
            />
        }
      </div>
      <div className="container">
        <h2>Specifications</h2>
        { vm.visualizationState.specification === Visualization.Form &&
            <SpecificationForm
                initialSpecification={vm.specification}
                onSubmit={vm.handleSpecificationSubmit}
                onClose={vm.handleSpecificationClose}
            />
        }
        {
          vm.visualizationState.specification === Visualization.Display &&
            <SpecificationDisplay
                specification={vm.specification}
                onEdit={vm.handleSpecificationEdit}
            />
        }
      </div>

      <div className="container">
        {
          vm.visualizationState.specification === Visualization.Hidden &&
          vm.visualizationState.information === Visualization.Hidden &&
          <input type="button" value="Finish" onClick={vm.save}/>
        }
      </div>
    </div>
  );
}

export default observer(App);
