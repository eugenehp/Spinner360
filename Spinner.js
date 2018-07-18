import React from 'react';
import {
  asset,
  Image,
  StyleSheet,
  View
} from 'react-360';

class Spinner extends React.Component {

	constructor (props){
		super(props);

    let images = [];
    for(let i=1; i<=13; i++){
      const source = asset(`${i}.png`)
      images.push(<Image source={source} style={styles.spinner} />)
    }

    this.state = {
      images
    }
	}

	render() {
    const {images} = this.state;
    const {percentage} = this.props;
    const index = Math.round((images.length-1)/100*percentage);
    
		return (
      <View>
			 {
        images.map( (image, key) => 
          <View style={{top: key === index ? 0 : -9999999}}>
            {image}
          </View>
        )
       }
      </View>
		);
	}

}

const SIZE = 300;

const styles = StyleSheet.create({
  spinner: {
    position: 'absolute',
    backgroundColor: 'white',
    top: -SIZE/2,
    left: -SIZE/2,
    width: SIZE,
    height: SIZE,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Spinner;
