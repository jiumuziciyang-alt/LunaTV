// src/app/not-found.tsx

export const runtime = 'edge';

export default function NotFound() {
  return (
    <html lang="zh-CN">
      <body className="flex h-screen items-center justify-center bg-gray-100">
        <main className="text-center p-6 bg-white shadow-lg rounded-2xl">
          <h1 className="text-4xl font-bold text-gray-800">404</h1>
          <p className="text-lg text-gray-600 mt-2">页面未找到</p>
          <p className="text-sm text-gray-400 mt-1">
            抱歉，您访问的页面不存在或已被移除。
          </p>
          <a
            href="/"
            className="mt-6 inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            返回首页
          </a>
        </main>
      </body>
    </html>
  );
}