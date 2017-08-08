# ember-chat

Ember addon that provides a simple skeleton for a user to user chat.

## Example:

`{{ember-chat messages=messages sendMessage='sendMessage' name=name avatarUrl=avatarUrl}}`

## Getting Started

Messages should have at least 3 properties:

  * t - Message Text
  * x - Time the message occurred
  * isOwner - if the message is sent by the current user

## Usage

The ember-chat component should be passed:

  * an array like object of messages,
  * a function `changeStep` to send a message that accepts the text of the message,
  * the receiving user's name
  * the receiving user's avatar image url.


## Installation

* `git clone <repository-url>` this repository
* `cd ember-chat`
* `npm install`
* `bower install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
