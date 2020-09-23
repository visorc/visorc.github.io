import React from 'react';
import Layout from '@theme/Layout';

const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;

class Hello2 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

    render() {
        return (
          <div>
            <h1>Hello, world!</h1>
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {      value: 'Please write an essay about your favorite DOM element.'    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {    this.setState({value: event.target.value});  }
  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Essay:
          <textarea value={this.state.value} onChange={this.handleChange} />        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };
    this.myChangeHandler = this.myChangeHandler.bind(this);
  }
  myChangeHandler(event){
    this.setState({username: event.target.value});
  }
  render() {
    return (
      <form>
      <h1>Hello {this.state.username}</h1>
      <p>Enter your name:</p>
      <input
        type='text'
        onChange={this.myChangeHandler}
      />
      </form>
    );
  }
}

function Hello() {
  return (
    <Layout>
      <div>

        <Hello2 />
        <MyForm />
        {element}

        <h1>
          Edit <code>pages/hello.js</code> and save to reload.
        </h1>
      </div>
    </Layout>
  );
}

export default Hello;