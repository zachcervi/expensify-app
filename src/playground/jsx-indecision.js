console.log("App.js is running!");

const app = {
  title: "Indecision App",
  subTitle: "A cool app that helps make decisions for you.",
  options: [],
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    render();
  }
};

const removeAllOptions = () => {
  app.options = [];
  render();
};

const makeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};
const appRoot = document.getElementById("app");

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subTitle && <p>{app.subTitle}</p>}

      <p>
        {app.options.length > 0
          ? `Here are your options: ${app.options}`
          : "No options"}
      </p>
      <button disabled={app.options.length === 0} onClick={makeDecision}>
        What should I do?
      </button>
      <button onClick={removeAllOptions}>Remove all</button>

      <ol>
        {app.options.map((option) => {
          return <li key={option}>{option}</li>;
        })}
      </ol>

      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

render();
