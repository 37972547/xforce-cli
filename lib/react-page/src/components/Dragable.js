import React from 'react'

class Dragable extends React.Component {
  constructor(props) {
    super(props);
    this.handleDragStart = this.handleDragStart.bind(this);
  }

  handleDragStart(event) {
    this.props.onDragStart && this.props.onDragStart(event)
  }

  render() {
    return (
      <div style={style.dragable}
        draggable="true"
        onDragStart={this.handleDragStart}
      >
        <div style={style.dragable.child}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

const style = {
  dragable: {
    display: 'inline-block',
    cursor: 'move',
    child: {
      pointerEvents: 'none'
    }
  }
}

export default Dragable
