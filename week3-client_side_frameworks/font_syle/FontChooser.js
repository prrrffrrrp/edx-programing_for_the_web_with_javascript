class FontChooser extends React.Component {

    constructor(props) {
	    super(props);
      this.state = {
        hidden: true,
        bold: false,
        size: 16,
        min_size: 4,
        max_size: 40,
        color: false
      }
    }
    
      handleClick() {
        this.setState( {hidden: !this.state.hidden} );
      }
    
      handleBoldCheckbox() {
        this.setState( {bold: !this.state.bold} );
      }

      decreaseSize() {
        if (this.state.size < 5) {
          this.setState( { size: this.state.size = 4 } );
          this.setState( { color: this.state.color = true } );
        } else {
          this.setState({ size: this.state.size - 1 })
          this.setState( { color: this.state.color = false } );
        }
      }

      increaseSize() {
        if (this.state.size > 39) {
          this.setState( { size: this.state.size = 40 } );
          this.setState( { color: this.state.color = true } );
        } else {
          this.setState({ size: this.state.size + 1 })
          this.setState( { color: this.state.color = false } );
        }
      }

      resetSize() {
        this.setState( { size: this.state.size = 16 } );
        this.setState( { color: this.state.color = false } );
      }

    render() {
      let size = this.state.size;
      let color = this.state.color ? 'red': 'black';
      let isHidden = this.state.hidden;
      let isBold = this.state.bold ? 'bold': 'normal';

	    return(
        <div class='font_styler'>
          <input type="checkbox" id="boldCheckbox" hidden={isHidden} onChange={ this.handleBoldCheckbox.bind(this) }/>
          <button id="decreaseButton" hidden={ isHidden } onClick={ this.decreaseSize.bind(this) }>-</button>
          <span id="fontSizeSpan" hidden={ isHidden } style={{color:color}} onDoubleClick={ this.resetSize.bind(this) }>{size}</span>
          <button id="increaseButton" hidden={ isHidden } onClick={ this.increaseSize.bind(this) }>+</button>
          <span hidden={ isHidden }>  </span>
          <span id="textSpan" onClick={this.handleClick.bind(this)}  
            style={{fontWeight:isBold, fontSize:size}}>
              {this.props.text}
          </span>
        </div>
	    );
    }
}

