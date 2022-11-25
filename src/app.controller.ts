import { makeAutoObservable } from 'mobx';
import { Information } from './components/information/information.controller';
import { Specification } from './components/specification/specification.controller';

export enum Visualization {
  Hidden,
  Form,
  Display
}

export class AppController {
  private static instance: AppController;
  information: Information | undefined;
  specification: Specification | undefined;

  visualizationState = {
    information: Visualization.Form,
    specification: Visualization.Hidden,
  }

  private constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  static getInstance(): AppController {
    if(AppController.instance) {
      return AppController.instance;
    }

    AppController.instance = new AppController();

    return AppController.instance;
  }

  handleInformationSubmit(information: Information) {
    this.information = information;
    this.visualizationState.information = Visualization.Hidden;
    this.visualizationState.specification = Visualization.Form;
  }

  handleInformationClose(information: Information) {
    this.information = information;
    this.visualizationState.information = Visualization.Display;
    this.visualizationState.specification = Visualization.Form;
  }

  handleInformationEdit() {
    this.visualizationState.information = Visualization.Form;
    this.visualizationState.specification = Visualization.Hidden;
  }

  handleSpecificationSubmit(specification: Specification) {
    this.specification = specification;
    this.visualizationState.specification = Visualization.Hidden;
  }

  handleSpecificationClose(specification: Specification) {
    this.specification = specification;
    this.visualizationState.specification = Visualization.Display;
  }

  handleSpecificationEdit() {
    this.visualizationState.specification = Visualization.Form;
  }

  save() {
    const payload = {
      information: this.information,
      specification: this.specification,
    };
    alert('Send to server... ' + JSON.stringify(payload));
  }
}
