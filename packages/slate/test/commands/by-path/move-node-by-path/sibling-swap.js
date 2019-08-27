/** @jsx h */

import h from '../../../helpers/h'
import { PathUtils } from 'slate'

export default function(editor) {
  editor.moveNodeByPath(PathUtils.create([0]), PathUtils.create([1]))
}

export const input = (
  <value>
    <document>
      <paragraph>
        <cursor />one
      </paragraph>
      <paragraph>two</paragraph>
    </document>
  </value>
)

export const output = (
  <value>
    <document>
      <paragraph>two</paragraph>
      <paragraph>
        <cursor />one
      </paragraph>
    </document>
  </value>
)
