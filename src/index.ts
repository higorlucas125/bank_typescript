import Bank from './interface';
const mapResut = new Map();



const executProject = (inputData:Bank[]) :Map<string,Bank>=> {

    if( !!inputData && inputData.length > 0){
        inputData.forEach((element) => {
            switch (element.type) {
              case "CREATE_ACCOUNT":
                createAccount(element);
                break;
              case "DEPOSIT":
                createDepoist(element);
                break;
              case "WITHDRAW":
                createWithdraw(element);
                break;
              default:
                console.log("Don't exist type account");
            }
          });
    }

    return mapResut;

}

const createAccount = (bank:Bank) => {
    if (validateExistBank(bank)) {
      mapResut.set(bank.document, bank);
    }
  
    returnMapAccount(bank);
  };
  
  const createDepoist = (bank:Bank) => {
    let olderBank = returnMapAccount(bank);
    if (!!olderBank) {
      olderBank.amount = bank.amount + olderBank.amount;
      mapResut.set(olderBank.document, olderBank);
    }
  
    console.log("Don't deposit this account, beacouse not exist");
  };
  
  const createWithdraw = (bank:Bank) => {
    let olderBank = returnMapAccount(bank);
    if (!!olderBank) {
      olderBank.amount =  olderBank.amount - bank.amount;
      mapResut.set(olderBank.document, olderBank);
    }
  
    console.log("Don't deposit this account, beacouse not exist");
  };
  
  const returnMapAccount = (bank:Bank) => {
    if (!!bank && !!bank.document) {
      return mapResut.get(bank.document);
    }
  };
  
  const validateExistBank = (bank:Bank) => {
    let existThisBank = returnMapAccount(bank);
    return (
      !!bank && !!bank.document && !!bank.amount && !!bank.type && !existThisBank
    );
  };

  export default executProject;