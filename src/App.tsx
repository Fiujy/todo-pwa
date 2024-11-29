import './App.css'
import ToDoList from './components/ToDoList'

function App() {
  return (
    <>
      <div className="bg-slate-800 border overflow-y-auto h-screen">
        <ToDoList />
      </div>
    </>
  )
}

export default App
