import { Header } from './components/Header/Header';
import { ListProfile } from './components/ListProfile/ListProfile';
import { CreatedPost } from './components/CreatedPost/CreatedPost';
import { Feed } from './components/Feed/Feed';
import { AddToFeed } from './components/AddToFeed/AddToFeed';

function App() {
  return(
    <>
      <Header />
      <ListProfile />
      <CreatedPost />
      <Feed />
      <AddToFeed />
    </>
  )
}

export default App
