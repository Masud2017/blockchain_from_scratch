from {HashUtil} from "./HashUtil";

class BlockChain {
	construct (message) {
		this.message = message;
		this.extra = {}
		this.next = null;
	}
	

	addNew(message,...data) {
		let newNode = new BlockChain(message);
		if (data.length == > 0) {
			// do the processing
			data.forEach((el, index, arr) {

			})
		} else {
			// else do other processes
		}
	}
}