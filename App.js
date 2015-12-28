import React from 'react';
import Marked from 'marked';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '# Enter markdown here',
      output: Marked('# Enter markdown here', {gfm: true}),
      err: ''
    }
    this.update = this.update.bind(this);
  }

  update(e) {
    let code = e.target.value;
    try {
      this.setState({
        output: Marked(code)
      })
    } catch(err) {
      console.error(err.message);
    }
  }

  createMarkup() {
    return {
      __html: this.state.output
    }
  }

  render() {
    return (
      <div className="container">
        <textarea
          id="input"
          onChange={ this.update }
          defaultValue={ this.state.input }/>
        <div id="output" dangerouslySetInnerHTML={ this.createMarkup() } />
      </div>
    );
  }
}

export default App
