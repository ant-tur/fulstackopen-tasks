import Course from './components/Course';

const App = () => {
  const course = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          id: 1,
          exercises: 10,
        },
        {
          name: 'Using props to pass data',
          id: 2,
          exercises: 7,
        },
        {
          name: 'State of a component',
          id: 3,
          exercises: 14,
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1,
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];
  return (
    <>
      <h1>Web development curriculum</h1>
      <Course course={course} />
    </>
  );
};

export default App;
