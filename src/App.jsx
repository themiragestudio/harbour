import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="text-linkin-600">Linkin</span> AI Models
          </h1>
          <p className="text-lg text-gray-600">
            发现、比较和使用最佳的AI模型
          </p>
        </header>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">项目状态</h2>
          <p className="text-gray-600 mb-6">
            Linkin AI Models 项目正在开发中。这是一个基于 React + Tailwind CSS 的现代前端应用，
            参考 evolink.ai/models 的设计标准。
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-linkin-50 rounded-lg p-6 border border-linkin-100">
              <h3 className="font-bold text-linkin-800 mb-2">现代前端框架</h3>
              <p className="text-linkin-600 text-sm">使用 React 19 + Vite 构建</p>
            </div>
            <div className="bg-emerald-50 rounded-lg p-6 border border-emerald-100">
              <h3 className="font-bold text-emerald-800 mb-2">响应式设计</h3>
              <p className="text-emerald-600 text-sm">支持移动端和桌面端</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-6 border border-purple-100">
              <h3 className="font-bold text-purple-800 mb-2">模型卡片展示</h3>
              <p className="text-purple-600 text-sm">清晰的模型信息和对比</p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button
              onClick={() => setCount((count) => count + 1)}
              className="px-6 py-3 bg-linkin-600 text-white font-medium rounded-lg hover:bg-linkin-700 transition-colors"
            >
              点击测试: {count}
            </button>
            
            <div className="text-sm text-gray-500">
              最后更新: {new Date().toLocaleDateString('zh-CN')}
            </div>
          </div>
        </div>

        <footer className="text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Linkin AI Models. 基于 evolink.ai 设计标准。</p>
          <p className="mt-2">部署服务器: 139.155.101.154:80</p>
        </footer>
      </div>
    </div>
  )
}

export default App