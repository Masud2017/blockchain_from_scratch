
class BlockChain {
	construct (message) {
		this.message = message;
		this.title = "";
		this.next = null;
	}
	
	set setTitle (title) {
		this.title = title;
	}

	addNew(message,title) {
		let newNode = new BlockChain(message);
		newNode.setTitle = title;

		if (this.next == null) {
			this.next = newNode;
		} else {
			let temp = this;

			while (temp.next != null) {
				temp = temp.next;
			}

			temp.next = newNode;
		}

	}
}


let chain = new BlockChain("Hello world this is the message");
chain.addNew("df","dafg");
chain.setTitle = "The first genesis block"

console.log("88888888888888888888888888888888888");
console.log("inspecting the chain : ");
console.log(chain);