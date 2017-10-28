import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { observer, get } from '@ember/object';
import { scheduleOnce } from '@ember/runloop';
import $ from 'jquery';
import layout from '../templates/components/ember-chat';

export default Component.extend({
  layout,
  store: service(),
  // when a new message arrives reset the chat to the bottom
  newMessage: observer('messages', function() {
    setTimeout(() => {
      $('.cht').scrollTop($('.cht')[0].scrollHeight)
    }, 10);
  }),
  // once page renders scroll to most recent chats
  didInsertElement: function() {
    this._super();
    scheduleOnce('afterRender', this, function() {
      $('.cht').scrollTop($('.cht')[0].scrollHeight);
    });
  },
  // sends message if they user presses enter in the text box without holding shift
  keyDown(event) {
    if (!event.shiftKey && event.keyCode === 13) {
      this.send('sendMessage');
    }
  },
  actions: {
    sendMessage() {
      get(this, 'sendMessage')(get(this, 'messageText'));
    }
  }
});
