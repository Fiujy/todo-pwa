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
    if (Notification.permission === 'granted') {
      new Notification('Nouvelle tâche', {
        body: 'Vous avez ajouté une nouvelle tâche à la liste ! 🎉',
        icon: '/icons/icon-192x192.png',
      });
    } else {
      alert('Activez les notifications pour recevoir des alertes.');
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
        <ToDoList />
      </div>
    </>
  )
}

export default App
