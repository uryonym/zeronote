import React, { useEffect, useRef } from 'react'
import { mySchema } from '../../lib/prosemirror/MySchema'
import { EditorState } from 'prosemirror-state'
import { EditorView } from 'prosemirror-view'
import { DOMParser } from 'prosemirror-model'
import { pmPlugins } from '../../lib/prosemirror/PmPlugins'
import { useSelector } from 'react-redux'
import { selectPageContent, selectPageContentRaw } from '../../store/NoteSlice'
import { schema } from 'prosemirror-schema-basic'
import { PrimaryButton, TextField, ITextFieldStyles, IStyleFunction, ITextFieldStyleProps} from '@fluentui/react'
import {DeepPartial} from '@uifabric/merge-styles'

export const ZeroEditor: React.FC = () => {
  const content = useSelector(selectPageContentRaw)
  const {title, body} = useSelector(selectPageContent)

  const pmEditor = useRef<HTMLDivElement>(null)
  const eView = useRef<EditorView | null>(null)
  const renderFlgRef = useRef(false)

  const createEditorView = (element: HTMLDivElement | null) => {
    console.log('editorViewを作成します')
    if (element) {
      const eState = EditorState.create({
        schema,
        plugins: pmPlugins()
      })
      eView.current = new EditorView(element, {
        state: eState,
        dispatchTransaction(transaction) {
          let newState = this.state.apply(transaction)
          this.updateState(newState)
        }
      })
    }
  }

  //初回レンダリング時のみ動作する
  useEffect(() => {
    createEditorView(pmEditor.current)
    return () => eView.current?.destroy()
  }, [])

  //NoteContentStateが更新された場合のみ動作する
  useEffect(() => {
    if (renderFlgRef.current) {
      console.log('editorStateの更新')
      const doc = DOMParser.fromSchema(mySchema()).parse(body)
      const editorState = EditorState.create({
        doc,
        plugins: pmPlugins()
      })
      eView.current?.updateState(editorState)
    } else {
      renderFlgRef.current = true
    }
  }, [content])

  return (
    <div className="zero-editor">
      <PrimaryButton text="保存"/>
      <TextField className="title-editor" underlined value={title} styles={getTitleFormStyles()}/>
      <div className="editor" ref={pmEditor}/>
    </div>
  )
}

//スタイル
const getTitleFormStyles = (): Partial<ITextFieldStyles> => {
  return {
    fieldGroup: [
      { height: 46 },
    ],
    field: [
      { 'font-size': 32 }
    ]
  }
}
