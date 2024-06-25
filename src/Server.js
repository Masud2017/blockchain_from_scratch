import createRequire from "module";

const require = createRequire(import.meta.url);

var PROTO_PATH = __dirname + "./proto/blockchain.proto";

var grpc = require('@grpc/grpc-js');
// import grpc from "grpc/grpc-js";
var protoLoader = require('@grpc/proto-loader');
// import protoLoader from "grpc/proto-loader";



class Server {
	constructor (address, protoPath) {
		this.address = address;
		this.protoPath = protoPath;
		this.packageDefinition = protoLoader.loadSync(
													    PROTO_PATH,
													    {keepCase: true,
													     longs: String,
													     enums: String,
													     defaults: true,
													     oneofs: true
													    });

		this.protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
		// The protoDescriptor object has the full package hierarchy
		this.routeguide = protoDescriptor.routeguide;
	}

	/**
	 * Starts the server and listen for incoming requests infinite time.
	 * */
	start() {

	}
}