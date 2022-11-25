import { observer } from 'mobx-react';
import { Information, InformationController } from './information.controller';

type InformationFormProps = {
  initialInformation?: Information,
  onSubmit: Function,
  onClose: Function,
};

export const InformationForm = observer(({initialInformation, onSubmit, onClose}: InformationFormProps) => {
  const vm = InformationController.getInstance(onSubmit, onClose, initialInformation);

  return (
    <>
      <form onSubmit={e => { e.preventDefault(); vm.handleSubmit() } }>
        <label>
          Information 1:
          <input
            type="text"
            value={vm.form.information1}
            onChange={e => vm.updateValue('information1', e.target.value)}
          />
        </label>

        <label>
          Information 2:
          <input
            type="text"
            value={vm.form.information2}
            onChange={e => vm.updateValue('information2', e.target.value)}
          />
        </label>

        <input type="submit" value="Save" />
        <input type="button" value="Continue" onClick={vm.handleClose} />
      </form>
    </>
  );
});
