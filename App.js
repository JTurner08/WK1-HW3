import './div1';
import './div2';
import './div3';

changeIt = (text) =>{
  if (this.state.tardis.caps) {
    this.setState({
      tardis: {
        name: text.toLowerCase(),
        caps: false
      }
    })
  } else {
    this.setState({
      tardis: {
        name: text.toUpperCase(),
        caps: true
      }
    })
  }
}

export default App;
