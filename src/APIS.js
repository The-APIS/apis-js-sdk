import Compound from './Compound'
import packageJSON from '../package.json'

export default class APIS {
  constructor(props) {
    this.compound = new Compound()
    this.version = packageJSON.version
  }
}
