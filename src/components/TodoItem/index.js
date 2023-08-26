import './index.css'

const TodoItem = props => {
  const {todoitem, onDeletUSer} = props
  const {title, id} = todoitem

  const onDelete = () => {
    onDeletUSer(id)
  }

  return (
    <li className="listCon">
      <p>{title}</p>
      <button type="button" className="btn" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem

// Write your code here
// import {Component} from 'react'
// import SimpleTodos from './SimpleTodos'

// class TodoItem extends Component {
//   render() {
//     const {initialTodosList} = this.props
//     const {title} = initialTodosList

//     return (
//       <div className="bg_main">
//         <div className="Sub_bg">
//           <h1>simple Todos</h1>
//         </div>
//       </div>
//     )
//   }
// }

// export default TodoItem
