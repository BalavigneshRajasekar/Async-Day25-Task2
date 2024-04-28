# Async-Day25-Task2

# Random Quotes Generator

## Description

A Random Quotes Generator App is designed to generate and display random quotes to users. Typically, these apps allow users to either passively view a stream of random quotes or actively request a new quote with the input. The quotes can cover a wide range of topics, including inspiration, motivation, humor, or any other category depending on the app's design.

## Tech Stack

**Client:** HTML, CSS, Bootstrap, Javascript

## Features

- Live previews
- Cross platform

## Demo

https://website-design-plum.vercel.app/

## Documentation

The selected code is a function that is used to generate quotes based on the input provided by the user. It is written in JavaScript and uses the Fetch API to make an asynchronous request to an API endpoint that returns a list of quotes.

The code starts by getting the value of the input element using the input.value property. It then checks if the user input is less than or equal to 0. If it is, the code will hide the table and show an alert that says "Please enter a positive number". It will also focus the input element and clear the value.

If the user input is greater than 0, the code will hide the alert and show a spinner. It will then make an API request to the specified endpoint, passing the user input as a parameter. The response from the API is then parsed as JSON and passed to a fetchData function.

The fetchData function handles both successful and failed responses from the API. If the response is successful, the quotes are extracted from the response data and added to a table. The table is then displayed, and the spinner and alert are hidden. If the response is unsuccessful, an error message is displayed.
