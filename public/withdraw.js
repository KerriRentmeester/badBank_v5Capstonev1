function Withdraw(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');

  return (
    <Card
      bgcolor="danger"
      txtcolor="white"
      header="Withdraw"
      width="300px"
      status={status}
      body={show ?
        <WithdrawForm setShow={setShow} setStatus={setStatus}/> :
        <WithdrawMsg setShow={setShow} setStatus={setStatus}/>}
    />
  )
}

function WithdrawMsg(props){
  return(<>
    <h5>Success</h5>
    <button type="button" 
      className="btn btn-light" 
      onClick={() => {
        props.setShow(true);
        props.setStatus('');  // clears any previous error or status msg
      }}>
        Withdraw again
    </button>
  </>);
}

function WithdrawForm(props){
  const [email, setEmail]   = React.useState('');
  const [amount, setAmount] = React.useState('');
  const [balance, setBalance] = React.useState('');

  // removed context and subbed this fnc
  // connect to BE
  function handle(){
    console.log(email,amount);  // sending these params to BE

    // Check if email and amount are not empty
    if (!email || !amount) {
      props.setStatus('Error: Email and amount cannot be empty');
      return;
    }

    // Check if the amount is a valid number
    if (isNaN(amount)) {
      props.setStatus('Error: Amount must be a valid number');
      setTimeout(() => props.setStatus(''), 3000);
      return false;
    }

    // Prevent withdrawing a negative number
    if (parseFloat(amount) <= 0) {
      props.setStatus('Error: Amount must be a positive number');
      setTimeout(() => props.setStatus(''), 3000);
      return false;
    }

       // Prevent overdraft
    if (balance !== null && parseFloat(amount) > parseFloat(balance)) {
      props.setStatus('Error: Amount must not be greater than account balance');
      setTimeout(() => props.setStatus(''), 3000);
      return false;
    }

    // API call to deposit
    fetch(`/account/update/${email}/-${amount}`)
    .then(response => response.text())
    .then(text => {
        try {
            const data = JSON.parse(text);
            //props.setStatus(JSON.stringify(data.value));
            props.setStatus(`New Balance: $${data.value.balance.toFixed(2)}`);
            props.setShow(false);
            console.log('JSON:', data);
        } catch(err) {
            props.setStatus('Withdrawal failed')
            console.log('err:', text);
        }
    });
  }

  function clearForm(){
    setEmail('');
    setAmount('');
    props.setShow(true);
  };

  return(<>

    Email<br/>
    <input type="input" 
      className="form-control" 
      placeholder="Enter email" 
      value={email} 
      onChange={e => setEmail(e.currentTarget.value)}/><br/>

    Amount<br/>
    <input type="number" 
      className="form-control" 
      placeholder="Enter amount" 
      value={amount} 
      onChange={e => setAmount(e.currentTarget.value)}/><br/>

    <button type="submit" 
      className="btn btn-light" 
      onClick={handle}>
        Withdraw
    </button>

  </>);
}
