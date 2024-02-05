export default function TempBody() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-20 text-white">
      <h1 className="text-3xl font-bold underline">Hello There!</h1>
      <div className="flex flex-col items-center text-lg">
        <h2 className="mb-2">
          Stay tuned! An awesome site is in the making 😉
        </h2>
        <p>
          In the mean time, you can check out ongoing progress on GitHub or
          explore my LinkedIn profile
        </p>
      </div>
      <div className="flex flex-row">
        <a href="https://www.linkedin.com/in/tim-pasket/">
          <img
            className="h-20"
            src="/linkedIn-icon-better.png"
            alt="linkedInIcon"
          />
        </a>
        <a href="https://github.com/TimPasket">
          <img
            className="gitIcon h-20"
            src="/github-icon-best.png"
            alt="githubIcon"
          />
        </a>
      </div>
    </div>
  );
}
