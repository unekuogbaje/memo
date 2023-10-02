import Content from './components/content';
import NoteInput from './components/note-input';
import Header from './components/header';
import './App.css';

function App() {
  return (
    <div className={"container"}>
      <Header/>
      <NoteInput/>
      <Content/>
    </div>
  );
}

export default App;
