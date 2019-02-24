import React from "react";

export default class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = { edit: false };

    this.edit = this.edit.bind(this);
    this.save = this.save.bind(this);
    this.remove = this.remove.bind(this);
  }

  edit() {
    this.setState({
      edit: true
    });
  }

  save() {
    var value = this.refs.newTxt.value;
    this.setState({
      edit: false
    });
    this.props.update(value, this.props.index);
  }
  remove() {
    this.props.deleteBlock(this.props.index);
  }

  rendNorm() {
    return (
      <div className="box field__box">
        <div className="text">{this.props.children}</div>
        <button onClick={this.edit} className="btn light">
          Edit
        </button>
        <button onClick={this.remove} className="btn red">
          Remove
        </button>
      </div>
    );
  }

  rendEdit() {
    return (
      <div className="box">
        <textarea
          ref="newTxt"
          className="text-area"
          defaultValue={this.props.children}
        />
        <button onClick={this.save} className="btn success">
          Save
        </button>
      </div>
    );
  }

  render() {
    if (this.state.edit) {
      return this.rendEdit();
    } else {
      return this.rendNorm();
    }
  }
}
