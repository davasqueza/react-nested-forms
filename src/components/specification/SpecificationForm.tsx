import { observer } from 'mobx-react';
import { Specification, SpecificationController } from './specification.controller';

type SpecificationFormProps = {
  initialSpecification?: Specification,
  onSubmit: Function,
  onClose: Function,
};

export const SpecificationForm = observer(({initialSpecification, onSubmit, onClose}: SpecificationFormProps) => {
  const vm = SpecificationController.getInstance(onSubmit, onClose, initialSpecification);

  return (
    <>
      <form onSubmit={e => { e.preventDefault(); vm.handleSubmit() } }>
        <label>
          Specification 1:
          <input
            type="text"
            value={vm.form.specification1}
            onChange={e => vm.updateValue('specification1', e.target.value)} />
        </label>

        <label>
          Specification 2:
          <input
            type="text"
            value={vm.form.specification2}
            onChange={e => vm.updateValue('specification2', e.target.value)} />
        </label>

        <input type="submit" value="Save" />
        <input type="button" value="Continue" onClick={vm.handleClose} />
      </form>
    </>
  );
});
