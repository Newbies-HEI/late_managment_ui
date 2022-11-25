import { Admin, Resource} from 'react-admin';
import student from '../Student/student';
import CustomLayout from '../Layout/layout';
import { dataProvider } from '../providers/dataProvider';


const App = () => (
    <Admin title="LatePayment"  layout={CustomLayout} dataProvider={dataProvider}>
      <Resource name='student' {...student} />
    </Admin>
);

export default App;