import React, { PureComponent } from 'react';

import Layout from '../hoc/Layout/Layout'
import BurgerBuilder from "../containers/BurgerBuilder/BurgerBuilder";

class App extends PureComponent {
  constructor( props ) {
    super( props );
    this.state = {};
  }

  render () {
    return (
      <div>
        <Layout>
            <BurgerBuilder/>
        </Layout>
      </div>
    );
  }
}

export default App;
