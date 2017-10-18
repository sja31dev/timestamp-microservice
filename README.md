# timestamp-microservice
Accepts a string as a parameter.

If it's a string containing either a unix timestamp or a natural language date (example: January 1, 2016) it returns both the Unix timestamp and the natural language form of that date.

If it does not contain a date or Unix timestamp, it returns null for those properties.