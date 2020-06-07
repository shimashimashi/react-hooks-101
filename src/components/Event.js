import React from 'react'

const Event = props => {
  const id = props.event.id

  const handleClickDeleteButton = () => {
    const result = window.confirm(`イベント(id=${id})を本当に削除しても良いですか？`)

    if (result) props.dispatch({ type: 'DELETE_EVENT', id })
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