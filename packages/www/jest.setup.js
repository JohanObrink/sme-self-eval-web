import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

console.log('jest setup')

configure({ adapter: new Adapter() })
