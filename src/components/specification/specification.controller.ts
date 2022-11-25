import { makeAutoObservable } from 'mobx';

export interface Specification {
  specification1?: string;
  specification2?: string;
}

export class SpecificationController {
  onSubmit: Function;
  onClose: Function;

  form: Specification = {
    specification1: '',
    specification2: '',
  };

  private static instance: SpecificationController;

  private constructor(onSubmit: Function, onClose: Function, initialSpecification?: Specification) {
    makeAutoObservable(this, {}, { autoBind: true });

    if(initialSpecification) {
      this.form = initialSpecification;
    }

    this.onSubmit = onSubmit;
    this.onClose = onClose;
  }

  static getInstance(onSubmit: Function, onClose: Function, initialSpecification?: Specification): SpecificationController {
    if(SpecificationController.instance) {
      return SpecificationController.instance;
    }

    SpecificationController.instance = new SpecificationController(onSubmit, onClose, initialSpecification);

    return SpecificationController.instance;
  }

  updateValue(field: keyof Specification, value: string) {
    this.form[field] = value;
  }

  handleSubmit() {
    this.onSubmit(this.form);
  }

  handleClose() {
    this.onClose(this.form);
  }
}
