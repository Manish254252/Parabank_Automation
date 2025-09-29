Feature: Parabank Account Flow

  Scenario: Create a new account and verify login
    Given the user is on the signup page
    When the user registers with valid details
    And logs in with the same credentials
    Then the user should see the account balance displayed
