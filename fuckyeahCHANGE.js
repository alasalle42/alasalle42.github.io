function makeChange(money) {
	var finalChange = [];
	if (money === 0 || money <= 0 || money == NaN) {
    return "You owe me money"};
	if (money > 0) {
		while (money >= 100) {
			  finalChange.push(100);
        money = money - 100; 
    };
		while (money >= 25) {
			  finalChange.push(25);
        money = money - 25; 
    };
    while (money >= 10) {
			  finalChange.push(10);
        money = money - 10; 
    };
		while (money >= 5) {
			  finalChange.push(5);
        money = money - 5; 
    };
		while (money >= 1) {
			  finalChange.push(1);
        money = money - 1;
    };
    return finalChange;
	};
};

makeChange(256);
