Feature: Maths
  As a user of the Maths webservice
  I want to perform maths operations
  So that I don't have to do it myself

  Scenario: Adding integers
    Given I am using the Maths webservice
    When I add 2 and 3
    Then I should recieve 5

  Scenario: Adding real numbers
    Given I am using the Maths webservice
    When I add 2.5 and 2.5
    Then I should recieve 5

  Scenario: Dividing real number by integer
    Given I am using the Maths webservice
    When I divide 7.5 by 2
    Then I should recieve 3.75
