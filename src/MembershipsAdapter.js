import {throwError} from 'rxjs';

import WebexAdapter from './WebexAdapter';

/**
 * A Member object that is part of a membership.
 *
 * @typedef {object} Member
 * @property {string}   ID          The member identifier
 * @property {string}   orgID       The organization identifier
 * @property {boolean}  muted       If the member's audio is currently muted
 * @property {boolean}  sharing     If the member is currently sharing their screen
 * @property {boolean}  inMeeting   If the member is currently in meeting
 */

/**
 * A Membership object with details about the members.
 *
 * @typedef {object} Membership
 * @property {string}          ID               The membership identifier
 * @property {string}          destinationID    ID of the destination for which to get members
 * @property {string}          destinationType  type of the membership destination
 * @property {Array.<Member>}  members          An array of members information
 */

/**
 * Enum for types of destinations.
 *
 * @readonly
 * @enum {string}
 */
export const DestinationType = {
  ROOM: 'room',
  MEETING: 'meeting',
};

/**
 * This is a base class that defines the interface that maps membership data.
 * Developers that want to extend `MembershipsAdapter` must implement all of its methods,
 * adhering to the exact parameters and structure of the returned objects.
 *
 * @interface
 */
export default class MembershipsAdapter extends WebexAdapter {
  /**
   * Returns an observable that emits a Membership object.
   * Whenever there is an update to the membership, the observable
   * will emit a new updated Membership object, if datasource permits.
   *
   * @param {string} destinationID  ID of the destination for which to get members
   * @param {DestinationType} destinationType  type of the membership destination
   * @returns {external:Observable.<Membership>} Observable stream that emits membership data
   * @memberof MembershipAdapter
   */
  getMembersFromDestination(destinationID, destinationType) {
    return throwError(
      new Error('getMembersFromDestination(destinationID, destinationType) must be defined in MembershipsAdapter'),
    );
  }
}
