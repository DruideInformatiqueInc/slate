import React from 'react'
import { IS_SAFARI } from 'slate-dev-environment'

/**
 * The default rendering behavior for the React plugin.
 *
 * @return {Object}
 */

function Rendering() {
  return {
    decorateNode() {
      return []
    },

    renderAnnotation({ attributes, children }) {
      return <span {...attributes}>{children}</span>
    },

    renderBlock({ attributes, children, readOnly }) {
      if( IS_SAFARI ){
        return (
          <div {...attributes} style={{ position: 'relative' }} contenteditable={readOnly ? "false" : "true"}>
            {children}
          </div>
        )
      } else {
        if( readOnly ){
          return (
            <div {...attributes} style={{ position: 'relative' }} contenteditable={readOnly ? "false" : "true"}>
              {children}
            </div>
          )
        } else {
          return (
            <div {...attributes} style={{ position: 'relative' }}>
              {children}
            </div>
          )
        }
      }
    },

    renderDecoration({ attributes, children }) {
      return <span {...attributes}>{children}</span>
    },

    renderDocument({ children }) {
      return children
    },

    renderEditor({ children }) {
      return children
    },

    renderInline({ attributes, children }) {
      return (
        <span {...attributes} style={{ position: 'relative' }}>
          {children}
        </span>
      )
    },

    renderMark({ attributes, children }) {
      return <span {...attributes}>{children}</span>
    },
  }
}

/**
 * Export.
 *
 * @type {Function}
 */

export default Rendering
