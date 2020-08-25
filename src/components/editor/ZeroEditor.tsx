import React, { useEffect, useRef } from 'react'
import { schema } from 'prosemirror-schema-basic'
import { addListNodes } from 'prosemirror-schema-list'
import { tableNodes } from 'prosemirror-tables'
import { EditorState } from 'prosemirror-state'
import { EditorView } from 'prosemirror-view'
import { Schema, DOMParser } from 'prosemirror-model'
import { pmPlugins } from '../../lib/prosemirror/PmPlugins'

export const ZeroEditor: React.FC = (props) => {
  const pmEditor = useRef<HTMLDivElement>(null)
  const editorState: EditorState = EditorState.create({ schema })
  let editorView: EditorView

  const createEditorView = (element: HTMLDivElement | null) => {
    if (element != null) {
      editorView = new EditorView(element, { state: editorState })
    }
  }

  useEffect(() => {
    createEditorView(pmEditor.current)
  })

  return <div className="editor" ref={pmEditor}></div>
}
