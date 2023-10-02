import SearchBar from '../components/search-bar'

function Header() {
  return (
    <div>
      <div className={"header-text"}>Note-taking Application</div>
      <SearchBar/>
    </div>
  )
}

export default Header;