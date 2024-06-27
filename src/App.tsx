import TodoList from "./components/TodoList";

const App = () => {
  // const [countries, setCountries] = useState([]);
  // //<any[]>

  // useEffect(() => {
  //   const fetchCountries = async () => {
  //     const data = await getCountries();
  //     setCountries(data);
  //   };
  //   fetchCountries();
  // }, []);
  return <TodoList />;
};

export default App;
