import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addMessage } from '../actions';

class AddMessageForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      form: {
        title: '',
        importance: '',
        body: ''
      },
      importanceList: ['Low', 'Medium', 'High']
    };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleImportanceChange = this.handleImportanceChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleTitleChange(event) {
    const newForm = this.state.form;
    newForm.title = event.target.value;
    this.setState({ form: newForm });
  }

  handleImportanceChange(event) {
    const newForm = this.state.form;
    newForm.importance = event.target.value;
    this.setState({ form: newForm });
  }

  handleBodyChange(event) {
    const newForm = this.state.form;
    newForm.body = event.target.value;
    this.setState({ form: newForm });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    this.props.addMessage(this.state.form);
    this.setState({ form: {
      title: '',
      importance: '',
      body: ''
    } });
  }

  render() {
    const { title, importance, body } = this.state.form;

    return (
      <form className="card" onSubmit={this.handleFormSubmit}>
        <div className="card-header">
          <h5>Add New Message</h5>
        </div>
        <div className="card-body">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Title" value={title} onChange={this.handleTitleChange} />
          </div>
          <div className="form-group">
            <select className="form-control" value={importance} onChange={this.handleImportanceChange}>
              <option value="" disabled={true}>Importance</option>
              {this.state.importanceList.map((importance, index) => <option key={index} value={importance}>{importance}</option>)}
            </select>
          </div>
          <div className="form-group">
            <textarea className="form-control" placeholder="Message Body" value={body} onChange={this.handleBodyChange}></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Add Message</button>
        </div>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addMessage: bindActionCreators(addMessage, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(AddMessageForm);
