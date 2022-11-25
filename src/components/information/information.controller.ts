import { makeAutoObservable } from 'mobx';

export interface Information {
  information1?: string;
  information2?: string;
}

export class InformationController {
  onSubmit: Function;
  onClose: Function;

  form: Information = {
    information1: '',
    information2: '',
  };

  private static instance: InformationController;

  private constructor(onSubmit: Function, onClose: Function, initialInformation?: Information) {
    makeAutoObservable(this, {}, { autoBind: true });

    if(initialInformation) {
      this.form = initialInformation;
    }

    this.onSubmit = onSubmit;
    this.onClose = onClose;
  }

  static getInstance(onSubmit: Function, onClose: Function, initialInformation?: Information): InformationController {
    if(InformationController.instance) {
      return InformationController.instance;
    }

    InformationController.instance = new InformationController(onSubmit, onClose, initialInformation);

    return InformationController.instance;
  }

  updateValue(field: keyof Information, value: string) {
    this.form[field] = value;
  }

  handleSubmit() {
    this.onSubmit(this.form);
  }

  handleClose() {
    this.onClose(this.form);
  }
}
