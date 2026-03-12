// Linkin - AI Models Marketplace Data
// Inspired by evolink.ai/models

export const categories = [
  { id: 'text', name: '文本生成', icon: '📝', color: '#3B82F6', description: '语言模型、聊天助手、代码生成' },
  { id: 'image', name: '图像生成', icon: '🖼️', color: '#10B981', description: '文生图、图生图、图像编辑' },
  { id: 'video', name: '视频生成', icon: '🎬', color: '#8B5CF6', description: '文生视频、图生视频、视频编辑' },
  { id: 'audio', name: '音频生成', icon: '🎵', color: '#EC4899', description: '语音合成、音乐生成、音频处理' },
  { id: 'multimodal', name: '多模态', icon: '🔮', color: '#F59E0B', description: '跨模态理解与生成' },
  { id: 'reasoning', name: '推理模型', icon: '🧠', color: '#EF4444', description: '复杂推理、数学计算、逻辑分析' }
];

export const providers = [
  { id: 'openai', name: 'OpenAI', logo: '🤖', color: '#10A37F' },
  { id: 'anthropic', name: 'Anthropic', logo: '🔒', color: '#D4A017' },
  { id: 'google', name: 'Google', logo: '🔍', color: '#4285F4' },
  { id: 'deepseek', name: 'DeepSeek', logo: '🚀', color: '#1E40AF' },
  { id: 'kling', name: 'Kling', logo: '🎥', color: '#7C3AED' },
  { id: 'alibaba', name: 'Alibaba', logo: '🛒', color: '#FF6B00' },
  { id: 'bytedance', name: 'ByteDance', logo: '📱', color: '#FF0000' },
  { id: 'meta', name: 'Meta', logo: '👥', color: '#1877F2' },
  { id: 'cohere', name: 'Cohere', logo: '💬', color: '#8B5CF6' },
  { id: 'mistral', name: 'Mistral AI', logo: '🇫🇷', color: '#6366F1' }
];

export const models = [
  {
    id: 'gpt-5-4',
    name: 'GPT-5.4',
    provider: 'openai',
    category: 'text',
    description: 'OpenAI最新旗舰模型，专为编码和代理任务设计，1.05M上下文窗口，128K最大输出，先进推理能力。',
    pricing: { 
      input: 2.0, 
      output: 4.0, 
      unit: '每百万tokens',
      currency: 'USD'
    },
    context: '1.05M tokens',
    maxOutput: '128K tokens',
    features: ['代码生成', '代理任务', '高级推理', '长上下文'],
    status: 'available',
    rating: 4.9,
    reviews: 1247,
    tags: ['coding', 'agentic', 'reasoning', 'latest'],
    launchDate: '2026-01-15'
  },
  {
    id: 'claude-sonnet-4-6',
    name: 'Claude Sonnet 4.6',
    provider: 'anthropic',
    category: 'text',
    description: '编码和代理任务的最佳平衡，200K上下文，128K最大输出，支持扩展思考。',
    pricing: { 
      input: 2.551, 
      output: 10.204, 
      unit: '每百万tokens',
      currency: 'USD'
    },
    context: '200K tokens',
    maxOutput: '128K tokens',
    features: ['扩展思考', '编码优化', '安全对齐', '企业级'],
    status: 'available',
    rating: 4.8,
    reviews: 892,
    tags: ['balanced', 'safe', 'enterprise', 'coding'],
    launchDate: '2026-02-10'
  },
  {
    id: 'deepseek-v4',
    name: 'DeepSeek V4',
    provider: 'deepseek',
    category: 'text',
    description: 'DeepSeek V4系列模型，128K上下文窗口，Chat和Reasoner变体，性价比极高。',
    pricing: { 
      input: 0.278, 
      output: 0.556, 
      unit: '每百万tokens',
      currency: 'USD'
    },
    context: '128K tokens',
    maxOutput: '128K tokens',
    features: ['高性价比', '中文优化', '开源友好', '快速响应'],
    status: 'available',
    rating: 4.7,
    reviews: 2156,
    tags: ['cost-effective', 'chinese', 'open-source', 'fast'],
    launchDate: '2025-12-01'
  },
  {
    id: 'nano-banana-2',
    name: 'Nano Banana 2',
    provider: 'google',
    category: 'image',
    description: '下一代图像生成模型，增强细节和提示遵循能力，针对速度和成本效率优化。',
    pricing: { 
      perImage: 0.034,
      unit: '每张图像',
      currency: 'USD'
    },
    resolution: '1024x1024',
    features: ['快速生成', '高细节', '成本高效', '专业级'],
    status: 'available',
    rating: 4.6,
    reviews: 987,
    tags: ['fast', 'detailed', 'professional', 'image'],
    launchDate: '2026-01-20'
  },
  {
    id: 'sora-2',
    name: 'Sora 2',
    provider: 'openai',
    category: 'video',
    description: 'OpenAI最新10~15秒视频生成模型，支持音频，可移除水印。',
    pricing: { 
      perSecond: 0.08,
      unit: '每秒',
      currency: 'USD'
    },
    duration: '10-15秒',
    features: ['音频支持', '高质量', '水印移除', '长视频'],
    status: 'available',
    rating: 4.9,
    reviews: 543,
    tags: ['video', 'audio', 'high-quality', 'latest'],
    launchDate: '2026-02-28'
  },
  {
    id: 'kling-3-0',
    name: 'Kling 3.0 Motion Control',
    provider: 'kling',
    category: 'video',
    description: '将参考视频中的人类动作转移到参考图像中的角色上，支持标准/专业质量。',
    pricing: { 
      perSecond: 0.114,
      unit: '每秒',
      currency: 'USD'
    },
    duration: '3-15秒',
    features: ['动作控制', '参考视频', '风格引导', '专业质量'],
    status: 'available',
    rating: 4.5,
    reviews: 321,
    tags: ['motion-control', 'reference', 'professional', 'video'],
    launchDate: '2026-01-05'
  },
  {
    id: 'veo-3-1',
    name: 'Veo 3.1',
    provider: 'google',
    category: 'video',
    description: 'Google DeepMind下一代视频模型，快速和专业变体，8秒视频生成，增强质量。',
    pricing: { 
      perVideo: 0.169,
      unit: '每个视频',
      currency: 'USD'
    },
    duration: '8秒',
    features: ['快速/专业变体', '增强质量', 'Google技术', '稳定生成'],
    status: 'available',
    rating: 4.4,
    reviews: 432,
    tags: ['fast', 'pro-variant', 'stable', 'google'],
    launchDate: '2026-02-15'
  },
  {
    id: 'suno-v3',
    name: 'Suno V3',
    provider: 'meta',
    category: 'audio',
    description: 'AI驱动的音乐生成，支持人声、歌词和乐器，从文本提示创建专业质量歌曲。',
    pricing: { 
      perTrack: 0.112,
      unit: '每首曲目',
      currency: 'USD'
    },
    duration: '3-5分钟',
    features: ['音乐生成', '人声支持', '歌词创作', '多版本'],
    status: 'available',
    rating: 4.7,
    reviews: 765,
    tags: ['music', 'vocals', 'lyrics', 'creative'],
    launchDate: '2026-01-30'
  },
  {
    id: 'gemini-3-1-pro',
    name: 'Gemini 3.1 Pro',
    provider: 'google',
    category: 'multimodal',
    description: 'Google最新多模态模型，具有先进的多模态能力和扩展的上下文支持。',
    pricing: { 
      input: 1.6, 
      output: 4.8, 
      unit: '每百万tokens',
      currency: 'USD'
    },
    context: '2M tokens',
    features: ['多模态', '扩展上下文', '视觉理解', '文档分析'],
    status: 'preview',
    rating: 4.8,
    reviews: 654,
    tags: ['multimodal', 'preview', 'advanced', 'vision'],
    launchDate: '2026-02-25'
  },
  {
    id: 'deepseek-reasoner',
    name: 'DeepSeek Reasoner',
    provider: 'deepseek',
    category: 'reasoning',
    description: '高级推理模型，具有思维链能力，128K上下文窗口，针对复杂问题解决优化。',
    pricing: { 
      input: 0.278, 
      output: 0.556, 
      unit: '每百万tokens',
      currency: 'USD'
    },
    context: '128K tokens',
    features: ['思维链', '复杂推理', '数学计算', '逻辑分析'],
    status: 'available',
    rating: 4.6,
    reviews: 892,
    tags: ['reasoning', 'chain-of-thought', 'math', 'logic'],
    launchDate: '2025-11-15'
  },
  {
    id: 'llama-4-400b',
    name: 'Llama 4 400B',
    provider: 'meta',
    category: 'text',
    description: 'Meta最新开源大模型，4000亿参数，支持多语言，企业级性能。',
    pricing: { 
      input: 0.5, 
      output: 1.5, 
      unit: '每百万tokens',
      currency: 'USD'
    },
    context: '128K tokens',
    features: ['开源', '多语言', '企业级', '可定制'],
    status: 'available',
    rating: 4.5,
    reviews: 1123,
    tags: ['open-source', 'multilingual', 'enterprise', 'customizable'],
    launchDate: '2026-01-10'
  },
  {
    id: 'midjourney-v7',
    name: 'Midjourney V7',
    provider: 'midjourney',
    category: 'image',
    description: '艺术级图像生成模型，卓越的艺术风格和创意表达。',
    pricing: { 
      perImage: 0.05,
      unit: '每张图像',
      currency: 'USD'
    },
    resolution: '2048x2048',
    features: ['艺术风格', '创意表达', '高分辨率', '风格控制'],
    status: 'available',
    rating: 4.9,
    reviews: 2345,
    tags: ['artistic', 'creative', 'high-res', 'style-control'],
    launchDate: '2026-02-01'
  }
];