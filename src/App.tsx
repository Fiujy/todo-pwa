import './App.css'
import ToDoList from './components/ToDoList'

function App() {

  const requestNotificationPermission = async () => {
    if ('Notification' in window) {
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        alert('Notifications activées !');
      } else {
        alert('Notifications refusées.');
      }
    } else {
      alert('Les notifications ne sont pas supportées sur ce navigateur.');
    }
  };

  const sendNotification = () => {
    console.log("Send Notification");
    if (Notification.permission === 'granted') {
      console.log("Send Notification granted");
      new Notification('Nouvelle tâche', {
        body: 'Vous avez ajouté une nouvelle tâche à la liste ! 🎉',
      });
      console.log("Send Notification done");
    } else {
      alert('Les notifications ne sont pas activées ou ne sont pas encore demandées.');
    }
  };
  

  return (
    <>
      <div className="bg-slate-800 border">
        <button
          onClick={requestNotificationPermission}
          className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        >
          Activer les Notifications
        </button>
        <button
          onClick={sendNotification}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Envoyer une Notification
        </button>
        <ToDoList />
      </div>
    </>
  )
}

export default App
