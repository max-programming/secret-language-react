const CopyButton = ({ copyText }) => (
  <div className="m-2">
    <button
      onClick={copyText}
      title="Copy text"
      className="text-xl bg-transparent p-2 rounded-full transition-all outline-none focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 hover:bg-blue-700 hover:text-white dark:hover:bg-blue-500"
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      </svg>
    </button>
  </div>
);

export default CopyButton;
