var sigUtil = require('eth-sig-util');
var address = '0x0327397cbaA0999E4e786A8Fb904B9756D499c20'
const privKeyHex = 'c711145efc40f1d77fa2226c32126429b92c1143b765fb197350375f5d52f19a'
const privKey = Buffer.from(privKeyHex, 'hex')

const typedData = {
    "types": {
      "EIP712Domain": [
        { "name": "name", "type": "string" },
        { "name": "version", "type": "string" },
        {"name": "chainId", "type": "uint256"},
        {"name": "verifyingContract", "type": "address"}
      ],
      "WebLogin": [
        { "name": "address", "type": "address" },
        { "name": "timestamp", "type": "uint256" }
      ]
    },
    "domain": {
      "name": "Wallet web",
      "version": "1",
      "chainId": 1,
      "verifyingContract": "0x0"
    },
    "primaryType": "WebLogin",
    "message": {
      "address": "0x0327397cbaA0999E4e786A8Fb904B9756D499c20",
      "timestamp": 1568752293
    }
  }

// Sign
const sigature = sigUtil.signTypedData(privKey, { data: typedData })
console.log('for address ' + address)
console.log("Sign - - " + sigature);

const recaddress = sigUtil.recoverTypedSignature({data : typedData, sig : sigature});
console.log("Recovered Address -" + recaddress);