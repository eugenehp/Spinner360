import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Image,
  asset,
} from 'react-360';
import Spinner from './Spinner.js'

class Spinner360 extends React.Component {

  constructor(props) {
    super(props);

    this.state = { percentage: 0 };
  }

  componentDidMount() {

    this.id = setInterval(() => {
      this.setState ({
        percentage: this.state.percentage + 1
      });
      if (this.state.percentage == 100) this.setState({percentage:0});
      }, 100);
  }

  componentWillUnmount() {
    clearInterval(this.id);
  }

  render() {
    const {percentage} = this.state;

    return (
      <View style={styles.panel}>
        <Spinner percentage={percentage}/>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  panel: {
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
});

AppRegistry.registerComponent('Spinner360', () => Spinner360);

export default Spinner360;