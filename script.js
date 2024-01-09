function fibonacci(num){
	let n1 = 0, n2 = 1, arrived = false ;
	if(num == 0) return 0;
	for (let i=2;i<=num;i++){
		if(i+1==num){
			arrived = true;
		}
		//console.log(n2);
		let next = n1 + n2;
		n1 = n2;
		n2 = next; 
		if(arrived) return n2;
	}

}

module.exports = fibonacci;
