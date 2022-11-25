import { Specification } from './specification.controller';

type SpecificationDisplayProp = {
  specification?: Specification,
  onEdit: Function,
}

export function SpecificationDisplay({specification, onEdit}: SpecificationDisplayProp) {
  return (
    <div>
      <b></b>
      <b>Specification 1: </b> <>{ specification?.specification1 }</> <br/>
      <b>Specification 2: </b> <>{ specification?.specification2 }</> <br/>
      <input type="button" value="Edit" onClick={() => onEdit()} />
    </div>
  );
}
