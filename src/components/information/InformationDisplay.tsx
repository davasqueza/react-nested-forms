import { Information } from './information.controller';

type InformationDisplayProp = {
  information?: Information,
  onEdit: Function,
}

export function InformationDisplay({information, onEdit}: InformationDisplayProp) {
  return (
    <div>
      <b></b>
      <b>Information 1: </b> <>{ information?.information1 }</> <br/>
      <b>Information 2: </b> <>{ information?.information2 }</> <br/>
      <input type="button" value="Edit" onClick={() => onEdit()} />
    </div>
  );
}
