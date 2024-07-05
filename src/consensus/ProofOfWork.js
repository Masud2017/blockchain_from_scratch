/**
 * @author Md Masud karim
 * @copyright 2024
 * @license MIT
 * Implementation of Proof of work consensus algorithm used in Bitcoin
 * Principle: A solution that is difficult to find but is easy to verify. -- Reference : https://www.geeksforgeeks.org/blockchain-proof-of-work-pow/
 */


import {createRequire} from "module";

const require = createRequire(import.meta.url);
const pow = require('proof-of-work');


class ProofOfWork {
    /**
     * Make sure that the nonce prefix is unique to avoid attack like: reuse nonce attack
     * @param {*} complexity 
     * @param {*} prefix 
     */
    constructor(complexity = (Math.random()*1000), prefix = "abcd") {
        this.complexity = complexity;
        this.prefix = Buffer.from(prefix, 'hex');
        this.solver = new pow.Solver();
    }

    set setComplexity(complexity) {
        this.complexity = complexity;
    }
    set setPrefix(prefix) {
        this.prefix = prefix;
    }

    getNonce() {
        return solver.solve(this.complexity, this.prefix);
    }
}

export default ProofOfWork;