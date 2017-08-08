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

 * Component: `ember-chat` - component that takes some parameters and provides simple ui for messaging
   * Parameters:
     * messages - a models for messages
     * sendMessage - action that bubbles up and tells the backend to send a message
     * name - name of the recipient for the ui
     * avatarUrl - url for an image for the recipient


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
