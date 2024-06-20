import createRequire from "module";

const require = createRequire(improt.meta.url);

const sha256 = require("sha256");

class HashUtil {
	construct(msg) {
		this.msg = msg;
	}

	generateHashForPrevNode(node) {
		return sha256(JSON.stringify(node));
	}


}

export default HashUtil;