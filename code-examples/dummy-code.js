class originUser{
    constructor (Username, Password, email){
        this.Username = Username;
        this.Password = Password;
        this.email= email;
    }
    //for prototypes
}

const levon = new originUser('Levon hill', 'boxcar20251', 'Levon.hill@zekelman.com');
const jerry = new originUser("jerry baum", "welcometozekelman", "jerry.baum@zekelman.com");
console.log(jerry, levon);