SELECT Person.firstName, Person.lastName, Address.city, Address.state
FROM Person Person LEFT JOIN Address Address
ON Person.personId = Address.personId