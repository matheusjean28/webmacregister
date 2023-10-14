import './App.css'
import Headers from './Contents/Header'
import SearchBar from './Contents/SearchBar'
import MacList from './Contents/MacList'
import HeaderMacList from './Contents/HeaderMacList'
import UserLogin from   './Contents/UserLogin'

function App() {
  var user = true
  return (
    <>
      <div className="">
        {user ? <UserLogin/> : ''}
      </div>
      {/* <Headers />
      <SearchBar />
      <HeaderMacList />
      <MacList /> */}
    </>
  )
}

export default App
