/* eslint-disable max-classes-per-file */
import { RequestEventTypes } from './RequestEventTypes.js';

export const propertyValue = Symbol('propertyValue');
export const valueValue = Symbol('valueValue');

/**
 * Dispatches when a request property changed.
 * Note, this is only for select number of properties that are globally interesting
 * (like URL or content type header). 
 * 
 * Use `changedProperty` and `changedValue` to read the values.
 */
export class RequestChangeEvent extends Event {
  /**
   * The name of the property that changed used to initialize this event
   */
  get changedProperty() {
    return this[propertyValue];
  }

  /**
   * The value of the property that changed used to initialize this event
   */
  get changedValue() {
    return this[valueValue];
  }

  /**
   * @param {string} type The type of the event
   * @param {string} property The name of the property that changed
   * @param {any} value The value of the property that changed
   */
  constructor(type, property, value) {
    super(type, {
      bubbles: true,
      composed: true,
    });
    this[propertyValue] = property;
    this[valueValue] = value;
  }
}

/**
 * Dispatches an event to inform the request logic to send current request.
 * @param {EventTarget} target A node on which to dispatch the event
 */
export function informSendAction(target) {
  const e = new Event(RequestEventTypes.send, {
    bubbles: true,
    cancelable: true,
    composed: true,
  });
  target.dispatchEvent(e);
}

/**
 * Dispatches an event to inform about request URL change
 * @param {EventTarget} target A node on which to dispatch the event
 * @param {string} value The new URL value
 */
export function stateUrlChangeAction(target, value) {
  const e = new RequestChangeEvent(RequestEventTypes.State.urlChange, 'url', value);
  target.dispatchEvent(e);
}

/**
 * Dispatches an event to inform about request URL change
 * @param {EventTarget} target A node on which to dispatch the event
 * @param {string} value The new content-type value
 */
export function stateContentTypeAction(target, value) {
  const e = new RequestChangeEvent(RequestEventTypes.State.contentTypeChange, 'content-type', value);
  target.dispatchEvent(e);
}
