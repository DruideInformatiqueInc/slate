/** @jsx h */

import h from '../../../helpers/h'
import { PathUtils } from 'slate'

export default function(editor) {
  editor.moveNodeByPath(PathUtils.create([0, 0]), PathUtils.create([1, 0]))
}

export const input = (
  <value>
    <document>
      <paragraph>one</paragraph>
      <paragraph>
        <cursor />two
      </paragraph>
    </document>
  </value>
)

export const output = (
  <value>
    <document>
      <paragraph />
      <paragraph>
        one<cursor />two
      </paragraph>
    </document>
  </value>
)
