import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { fetchGoodBoi } from './actions/dog';
import './App.css';

function App(props) {
  useEffect(() => {
    props.fetchGoodBoi();
  }, [])

  return (
    <div className="App">
      <h1>Dog Therapy</h1>
      {props.dogErrror && <p>Error: {props.dogErrror}</p>}

      {props.dogLoad ? (
        <div className='loader'>
          <div className='load' />
        </div>
      ) : (
        <img src={props.dogImage} alt='Good Boi' />
      )}
      <button onClick={props.fetchGoodBoi}>New Dog</button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    dogLoad: state.dog.loading,
    dogImage: state.dog.dog,
    dogError: state.dog.error
  }
}

const mapDispatchToProps = {
  fetchGoodBoi
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
