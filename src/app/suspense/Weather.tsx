const Weather = async ({id}) => {
    const todo = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(response => response.json())

    return <div>
        <div>id : {todo.title}</div>
    </div>
}
export default Weather;