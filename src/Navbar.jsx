export default function Navbar() {
  const navBtns =
    "cursor-pointer border rounded-full hover:underline p-2 px-4 ";
  const bgColor = "bg-gray-600";
  return (
    <div className="flex flex-row justify-end gap-8 my-4 pr-4 text-md text-white">
      <a
        href="https://www.linkedin.com/in/tim-pasket/"
        target="_blank"
        rel="noreferrer noopener"
        className={navBtns}
      >
        LinkedIn
      </a>
      <a
        href="https://github.com/TimPasket"
        target="_blank"
        rel="noreferrer noopener"
        className={navBtns}
      >
        GitHub
      </a>
    </div>
  );
}
