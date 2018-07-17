import React from 'react';
import {
  asset,
  Image,
  StyleSheet,
} from 'react-360';

class Spinner extends React.Component {

	constructor (props){
		super(props);
	}

	render() {
    const {percentage} = this.props;
    const from = 1;
    const to = 12;
    const index = Math.round(to/100*percentage) + from;
    const source = asset(`${index}.png`)

		return (
			<Image source={source} style={styles.spinner} />
		);
	}

}

const styles = StyleSheet.create({
  spinner: {
    width: 300,
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Spinner;
