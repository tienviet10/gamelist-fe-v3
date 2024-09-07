export default function Test() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
      <h1 className="mb-4 text-4xl font-bold text-gray-800 dark:text-gray-200">Geist UI React</h1>
      <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
        A set of Tailwind-based React components for text primitives such as h1, h2, h3, and paragraph. The components
        should use the Geist font and have default styles for font size, line height, and margin.
      </p>
      <div className="grid grid-cols-3 gap-4">
        <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
          <h2 className="mb-2 text-2xl font-bold text-gray-800 dark:text-gray-200">h1</h2>
          <p className="text-base text-gray-600 dark:text-gray-400">The quick brown fox jumps over the lazy dog</p>
        </div>
        <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
          <h2 className="mb-2 text-xl font-bold text-gray-800 dark:text-gray-200">h2</h2>
          <p className="text-base text-gray-600 dark:text-gray-400">The quick brown fox jumps over the lazy dog</p>
        </div>
        <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
          <h2 className="mb-2 text-lg font-bold text-gray-800 dark:text-gray-200">h3</h2>
          <p className="text-base text-gray-600 dark:text-gray-400">The quick brown fox jumps over the lazy dog</p>
        </div>
        <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
          <h2 className="mb-2 text-base font-bold text-gray-800 dark:text-gray-200">p</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">The quick brown fox jumps over the lazy dog</p>
        </div>
        <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
          <h2 className="mb-2 text-sm font-bold text-gray-800 dark:text-gray-200">small</h2>
          <p className="text-xs text-gray-600 dark:text-gray-400">The quick brown fox jumps over the lazy dog</p>
        </div>
      </div>
    </div>
  );
}
