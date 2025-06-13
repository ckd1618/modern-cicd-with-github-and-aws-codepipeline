var config = {
  infra: {},
  app: {},
};

// Set region and other config properties from environment variables
config.infra.region = process.env.AWS_REGION || "us-west-2";
config.app.hotel_name = process.env.HOTEL_NAME || "Hotel Yorba";
config.infra.dynamodb_table = process.env.DYNAMODB_TABLE_NAME || "Rooms";
config.infra.dynamodb_endpoint = process.env.DYNAMODB_ENDPOINT || undefined;

console.debug("Configuration loaded with the following settings:");
console.debug("Region:", config.infra.region);
console.debug("Hotel Name:", config.app.hotel_name);
console.debug("DynamoDB Table:", config.infra.dynamodb_table);
console.debug("DynamoDB Endpoint:", config.infra.dynamodb_endpoint);


// Directly export config object
module.exports = config;
