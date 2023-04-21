SELECT E.Name AS Employee
FROM Employee E LEFT JOIN Employee M
ON M.Id = E.managerId
WHERE E.salary > M.salary