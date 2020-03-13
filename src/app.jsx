import React from 'react';

export default class App extends React.Component {
  // your Javascript goes here
  constructor(props) {
    super(props)
    this.state = {
      output: null,
      balance: 0,
      rate: 0,
      term: 15
    }; 
    this.numberChange = this.numberChange.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  numberChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  
  calculate(b, rate, term) {
    const r = (rate/100) / 12;
    const t = (term * 12);
    const monthly = (b) * ((r * Math.pow((1 + r), t))/(Math.pow((1 + r), t) - 1));

    return() => {
      this.setState({
        output: Number((monthly).toFixed(2)) + ' is your payment.'
      });
      
    }
  }
  
  render() {
    return (
      <div className='container'>
        <div className='form-group row'>
          <div className='col-3'></div>
          <div className='col-9 border-bottom border-bottom-dark'>
            <h3>Mortgage Calculator</h3>
          </div>
        </div>
        <div className='form-group row'>
          <div className='col-3'>
            <div className='mb-2'>
              <label for='balance'>Loan Balance</label>
            </div>
            <div className='mb-2'>
              <label for='rate-input'>Interest Rate(%)</label>
            </div>
            <div className='mb-2'>
              <label for='loan-term-select'>Loan Term (years)</label>
            </div>
          </div>
          <div className='col-9'>
            <div>
              <input className='w-100 mb-2' name='balance' type='number' style={{borderRadius: '5px'}} value={this.state.balance} onChange={this.numberChange}/>
              <input className='w-100 mb-2' name='rate' type='number' step='0.01' style={{borderRadius: '5px'}} value={this.state.rate} onChange={this.numberChange}/>
              <select className='w-100 mb-2' name='term' onChange={this.numberChange}>
                <option value='15'>15</option>
                <option value='30'>30</option>
              </select>
              <button className='btn btn-primary mb-2' name='submit' onClick={this.calculate(this.state.balance, this.state.rate, this.state.term)}>Calculate</button>
              <div id='output' value={this.state.output}>{this.state.output}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

