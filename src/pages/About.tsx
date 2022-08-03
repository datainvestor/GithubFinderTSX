export function divide(a: number, b: number): number {
  // Sure, we cannot divide by 0,
  // so in this case we will throw an error.
  if (b === 0) {
    throw new Error("You can't divide by zero.");
  }

  // If everything is okay, we will return
  // a round division result.
  return Math.round(a / b);
}

function About(): JSX.Element {
  return (
    <>
      <h1 className="text-6xl mb-4">Github Finder</h1>
      <p className="mb-4 text-2xl font-light">
        A React app to search GitHub profiles and see profile details. This
        project is part of the
        <a href="https://www.udemy.com/course/modern-react-front-to-back/">
          {' '}
          React Front To Back
        </a>{' '}
        Udemy course by
        <strong>
          <a href="https://traversymedia.com"> Brad Traversy</a>
        </strong>
        .
      </p>
      <p className="text-lg text-gray-400">
        Version <span className="text-black">1.0.0</span>
      </p>
      <p className="text-lg text-gray-400">
        Layout Ver:
        <a className="text-black" href="https://twitter.com/hassibmoddasser">
          {divide(4, 2)}
        </a>
      </p>
    </>
  );
}

export default About;
