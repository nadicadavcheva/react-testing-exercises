# Exercise 4: Cypress

In this exercise, we are going to test the entire application using Cypress.

This component is already written and functioning. There is a test file for it, `cypress/e2e/managing-movies.cy.js`, but it does not yet contain a test.

Add a test to `cypress/e2e/managing-movies.cy.js` that covers the main parts of the application's behavior.

## About the App

The app consists of the components you've worked with in previous exercises: the `MovieList` that loads and displays movies, the `MovieRow` that displays a single movie, and the `NewMovieForm` that allows adding a new movie.

## Designing Your Tests

As you think about what to cover in your test, remember that in end-to-end tests it is generally best to cover the major functionality of your app, not every edge case. What are the main things you want to check to confirm that the application is working? You've already invested most of the day into writing unit tests for lots of edge cases for these components. If you write Cypress tests that reconfirm *all* of that behavior, you are probably writing more than you need to!

As you decide how to identify elements in the test, remember that Cypress recommends using a test-specific ID to find elements. Try that approach.

## Getting Help

If you get stuck, feel free to ask questions in the workshop Discord chat, or check the following:

- <https://docs.cypress.io/guides/end-to-end-testing/writing-your-first-end-to-end-test#Write-a-real-test>
- <https://docs.cypress.io/guides/guides/network-requests#Routing>
- <https://docs.cypress.io/guides/guides/network-requests#Assertions>

## Going Further

If you finish the above steps of the exercise, try one or both of the following additional exercises:

1. Try changing your tests so that instead of querying based on a test ID, you query based on something visible to the user. What do you think of the two approaches?
2. Try to write the test of the data-loading functionality in a different way: this time use a different approach to isolating the component from the server. Instead of Jest module mocks, use [`nock`](https://github.com/nock/nock#nock). What are the differences in the code you write and what is being tested? What are the benefits and drawbacks you see of each approach?
