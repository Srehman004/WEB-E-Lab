var  Ali = {
     fullName: 'Ali',

     bills: [128, 48, 268, 180, 42],

     calcTips: function(){

       this.tipAmounts = []; this.finalAmounts = [];
       for (var i = 0; i < this.bills.length; i++) {
            var percentage;
            var bill = this.bills[i];

            if (bill < 50) {
              percentage = .2;
            }

            else if (50 <= bill <= 200 ) {
              percentage = .15;
            }

            else {
              percentage = .1;
            }

            this.tipAmounts[i] = bill * percentage;
            this.finalAmounts[i] = bill + (bill * percentage);
       }
     }
}

Ali.calcTips();
console.log(Ali);