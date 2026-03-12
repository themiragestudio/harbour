import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="text-harbour-600">Harbour</span> AI Models
          </h1>
          <p className="text-lg text-gray-600">
            安全、连接、创新的AI模型港湾
          </p>
        </header>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">项目状态</h2>
          <p className="text-gray-600 mb-6">
            Harbour AI Models 项目正在开发中。这是一个基于"Harbour"（港口/港湾）概念设计的现代前端应用，
            融合了安全、连接、创新、成长的港湾理念，参考 evolink.ai/models 的设计标准和 nvidia.com 的用户体验。
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-harbour-50 rounded-lg p-6 border border-harbour-100">
              <h3 className="font-bold text-harbour-800 mb-2">现代前端框架</h3>
              <p className="text-harbour-600 text-sm">使用 React 19 + Vite 构建</p>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
              <h3 className="font-bold text-blue-800 mb-2">安全港湾</h3>
              <p className="text-blue-600 text-sm">为AI模型提供安全的测试和部署环境</p>
            </div>
            <div className="bg-teal-50 rounded-lg p-6 border border-teal-100">
              <h3 className="font-bold text-teal-800 mb-2">连接创新</h3>
              <p className="text-teal-600 text-sm">连接开发者、研究者和用户</p>
            </div>
            <div className="bg-amber-50 rounded-lg p-6 border border-amber-100">
              <h3 className="font-bold text-amber-800 mb-2">成长平台</h3>
              <p className="text-amber-600 text-sm">支持模型从实验到生产的完整生命周期</p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button
              onClick={() => setCount((count) => count + 1)}
              className="px-6 py-3 bg-harbour-600 text-white font-medium rounded-lg hover:bg-harbour-700 transition-colors"
            >
              探索港湾: {count}
            </button>
            
            <div className="text-sm text-gray-500">
              最后更新: {new Date().toLocaleDateString('zh-CN')}
            </div>
          </div>
        </div>

        <footer className="text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Harbour AI Models. 基于 Harbour 概念设计，融合 evolink.ai 和 nvidia.com 标准。</p>
          <p className="mt-2">部署服务器: 139.155.101.154:80</p>
        </footer>
      </div>
    </div>
  )
}

export default App