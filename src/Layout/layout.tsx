import { Layout, AppBar, Toolbar,} from 'react-admin';
import { amber } from '@mui/material/colors'

function CustomAppBar(props:any) {
    return (
      <Toolbar>
        <AppBar
        sx={{
          backgroundColor: amber[600]
        }}
        />
      </Toolbar>
    )
  }

function CustomLayout(props:any) {
    return (
      <Layout
       {...props}
       appBar={CustomAppBar}
      />
    )
  }

export default CustomLayout;