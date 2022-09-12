import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class FlaggedComponentAComponent extends Component {
  @tracked foo = 10;
}
