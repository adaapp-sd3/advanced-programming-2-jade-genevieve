import ConstrainedByField from './ConstrainedByField';

abstract class Crop extends ConstrainedByField {
  height = 10
  width = 10
  health: number = 10
  move(): string {
    return "Growing..."
  }

  
}

export default Crop;
