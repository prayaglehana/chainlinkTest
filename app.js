import Web3 from './node_modules/web3';
console.log('saf');
var fs=require('fs');

var jsonFile = "my.json";
var parsed= JSON.parse(fs.readFileSync(jsonFile));
var abi = parsed.abi;
var _web3;
var thisAccount;

if (typeof window.web3 !== 'undefined') {
    _web3 = new Web3(window.web3.currentProvider);
    console.log('adx');
    _web3.eth.getAccounts().then(e=>{
      this.setState({
        thisAccount:e[0]
      })
  });
          // run the following code only once. Metamask will ask for permission. allow it. then you can comment following code for subsequent ...
            // window.ethereum.enable().then((account) =>{
            //     const defaultAccount = account[0]
            //     _web3.eth.defaultAccount = defaultAccount
            //     console.log(defaultAccount);
            
            // })
            c=new _web3.eth.Contract(abi, '0x6Ff9A3dc39fB5d857b5Dd97d98e2D0A8eBDB34A5', {from:_web3.eth.defaultAccount})   ;
            console.log(thisAccount);


            c.methods.addmoney(parseInt(Math.round(this.state.eth2inr)),parseInt(Math.round(this.state.addPgy*10000)))
            .send({from:this.props.thisAccount
            }).then((err,res)=>console.log('done'));
          }