import {Consensus} from "./Consensus";

/**
 * @author Md Masud karim
 * @copyright 2024
 * @license MIT
 * Implementation of Proof of work consensus algorithm used in Bitcoin
 */

class ProofOfWork extends Consensus {
    constructor(complexity = 10, nonce = 10) {
        this.complexity = complexity;
        this.nonce = nonce;
    }

    set setComplexity(complexity) {
        this.complexity = complexity;
    }
    set setNone(nonce) {
        this.nonce = nonce;
    }
}

export default ProofOfWork;