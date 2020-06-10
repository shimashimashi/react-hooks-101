import React, { useContext } from 'react'

import { DELETE_EVENT } from '../actions'
import AppContext from '../contexts/AppContext'

const Event = props => {
  const id = props.event.id
  const { dispatch } = useContext(AppContext)

  const handleClickDeleteButton = () => {
    const result = window.confirm(`イベント(id=${id})を本当に削除しても良いですか？`)
    if (result) dispatch({ type: DELETE_EVENT, id })
  }

  return (
    <tr>
      <td>{props.event.id}</td>
      <td>{props.event.title}</td>
      <td>{props.event.body}</td>
      <td><button className="btn btn-danger" onClick={handleClickDeleteButton}>削除</button></td>
    </tr>
  )
}

export default Event
