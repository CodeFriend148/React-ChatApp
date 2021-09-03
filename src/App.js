import './App.css';
import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './Components/ChatFeed';
import LoginForm from './Components/LoginForm';

const App = () => {

  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
    height = "100vh"
    projectID={"46100355-7339-478d-986e-b0e0c8765238"}
    userName={localStorage.getItem('username')}
    userSecret={localStorage.getItem('password')}
    renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
}

export default App;
