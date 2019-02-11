/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Item_item$ref: FragmentReference;
export type Item_item = {|
  +id: string,
  +name: string,
  +$refType: Item_item$ref,
|};
*/

const node /*: ReaderFragment*/ = {
  kind: 'Fragment',
  name: 'Item_item',
  type: 'Item',
  metadata: null,
  argumentDefinitions: [],
  selections: [
    {
      kind: 'ScalarField',
      alias: null,
      name: 'id',
      args: null,
      storageKey: null
    },
    {
      kind: 'ScalarField',
      alias: null,
      name: 'name',
      args: null,
      storageKey: null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'ec7b4a9336f468e2ae4847cca99753b3';
module.exports = node;