import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './counterActions'; 

const Counter = ({ count, increment, decrement }) => {
  return (
    <div>
      <h1>Antal bananer {count}</h1>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  count: state.count,
});

const mapDispatchToProps = { increment, decrement };

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
