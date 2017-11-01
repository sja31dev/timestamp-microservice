# timestamp-microservice

## Part 1 of Free Code Camp Backend Challenges

1. User Story: I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016).

2. User Story: If it does, it returns both the Unix timestamp and the natural language form of that date.

3. User Story: If it does not contain a date or Unix timestamp, it returns null for those properties.

### Example use

* `https://<host>/Jan%205,%202014`
* `https://<host>/1388880000`

### Example response
      
`{"unix":1388880000,"natural":"January 5, 2014"}`