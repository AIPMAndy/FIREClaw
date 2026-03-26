import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useSearchParams } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import Navigation from './components/Navigation'
import LoginModal from './components/LoginModal'
import RegisterModal from './components/RegisterModal'
import Skeleton from './components/Skeleton'
import './glassmorphism.css'
import './apple.css'
import AppleHero from './components/AppleHero'
import AppleButton from './components/AppleButton'
import CopyWeChatButton from './components/CopyWeChatButton'

// 全局微信号配置（用于 WeChatCommunity 及潜在引用）
// const WECHAT_ID = (import.meta as any).env?.VITE_WECHAT_ID || 'AIPMAndy' // 注释掉：在WeChatCommunity组件内部已重新定义

// 定义接口类型
interface FormDataType {
  skills: string
  availableTime: string
  effortLevel: string
}



interface PlanDayType {
  day: number
  title: string
  tasks: string[]
  resources: Array<{
    name: string
    type: string
  }>
  estimatedTime: string
}

interface BusinessPlanType {
  business: string
  overview: string
  days: PlanDayType[]
}

// 登录模态框组件（LegacyLoginModal 已移除，统一使用 AuthContext 控制 LoginModal/RegisterModal）

// 抱团互助组件 - 玻璃拟态风格
const WeChatCommunity: React.FC = () => {
  const WECHAT_ID = (import.meta as any).env?.VITE_WECHAT_ID || 'AIPMAndy'

  return (
    <div className="wechat-community min-h-screen">
      <Navigation />
      {/* Hero Section - Apple style */}
      <AppleHero 
        title={
          <>
            加入社群
          </>
        }
        subtitle={
          <>
            大家一起搞FIRE，分享经验、互相支持、共同成长
          </>
        }
      >
        <CopyWeChatButton variant="primary">
          立即加入
        </CopyWeChatButton>
      </AppleHero>

      {/* Benefits Section */}
      <section className="apple-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">群优势</h2>
              <p className="section-subtitle">为什么选择我们的FIRE互助群</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="apple-feature-card">
              <h3 className="text-xl font-bold mb-2">上千位FIRE伙伴</h3>
              <p className="text-text-light text-sm">汇聚各行各业FIRE达人，经验分享、资源对接</p>
            </div>
            <div className="apple-feature-card">
              <h3 className="text-xl font-bold mb-2">每日实战分享</h3>
              <p className="text-text-light text-sm">真实FIRE案例分享，避免踩坑，快速上手</p>
            </div>
            <div className="apple-feature-card">
              <h3 className="text-xl font-bold mb-2">AI工具使用技巧</h3>
              <p className="text-text-light text-sm">最新AI工具使用教程，提升FIRE效率</p>
            </div>
            <div className="apple-feature-card">
              <h3 className="text-xl font-bold mb-2">专属导师答疑</h3>
              <p className="text-text-light text-sm">专业导师定期答疑，解决FIRE难题</p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Steps */}
      {false && <section className="apple-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">加入步骤</h2>
            <p className="section-subtitle">简单三步，快速入群</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="apple-card text-center p-8">
              <div className="w-12 h-12 bg-primary-color/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-color text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">复制微信号</h3>
              <p className="text-text-light">点击下方按钮复制微信号 {WECHAT_ID}</p>
            </div>
            <div className="apple-card text-center p-8">
              <div className="w-12 h-12 bg-primary-color/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-color text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">添加好友</h3>
              <p className="text-text-light">在微信中添加好友，备注"FIRE互助"</p>
            </div>
            <div className="apple-card text-center p-8">
              <div className="w-12 h-12 bg-primary-color/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-color text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">等待审核</h3>
              <p className="text-text-light">管理员审核通过后即可入群</p>
            </div>
          </div>
          <div className="text-center">
            <CopyWeChatButton variant="primary">
              复制微信号 {WECHAT_ID}
            </CopyWeChatButton>
          </div>
        </div>
      </section>}
    </div>
  )
}

// 首页组件
const HomePage: React.FC = () => {

  return (
    <>
      <Navigation />

      <AppleHero 
        title={<>用AI搞FIRE，一个就够了</>}
        subtitle={<>我们提供从技能挖掘、FIRE规划到实战交流的全链路支持，<br />助你轻松开启属于自己的第二事业。</>}
      >
        <AppleButton to="/skill-finder" variant="primary" className="mr-4">开始探索</AppleButton>
        <AppleButton to="/community" variant="secondary">加入社群</AppleButton>
      </AppleHero>

      {/* 核心优势 */}
      <section className="apple-section">
        <div className="apple-container">
          <h2 className="apple-section-header">核心功能</h2>
          <div className="apple-grid apple-grid-4">
            {/* 功能卡片 1 */}
            <div className="apple-feature-card fade-in">
              <h3 className="feature-title">技能挖掘</h3>
              <p className="feature-description">
                用AI帮你找到你的隐藏变现技能，匹配最适合的FIRE方向
              </p>
              <AppleButton to="/skill-finder" className="mt-4" variant="primary">
                开始挖掘 →
              </AppleButton>
            </div>

            {/* 功能卡片 2 */}
            <div className="apple-feature-card fade-in">
              <h3 className="feature-title">FIRE拆解</h3>
              <p className="feature-description">
                将复杂FIRE拆解为3步行动计划，每天做一点，7天见效
              </p>
              <AppleButton to="/business-planner" className="mt-4" variant="primary">
                查看拆解 →
              </AppleButton>
            </div>

            

            {/* 功能卡片 3 - 抱团互助 */}
            <div className="apple-feature-card fade-in" id="community">
              <h3 className="feature-title">抱团互助</h3>
              <p className="feature-description">
                大家一起搞FIRE，分享经验、互相支持、共同成长
              </p>
              <CopyWeChatButton className="mt-4">
                立即加入 →
              </CopyWeChatButton>
            </div>
          </div>
        </div>
      </section>

      {/* 成功案例 */}
      <section className="apple-section">
        <div className="apple-container">
          <h2 className="apple-section-header">成功案例</h2>
          <div className="apple-grid apple-grid-3">
            {/* 案例1 */}
            <div className="apple-card fade-in">
              <div className="mb-4">
                <h4 className="font-bold">张女士</h4>
                <p className="text-sm text-text-light">产品经理</p>
              </div>
              <p className="mb-4">"通过AI技能挖掘，发现自己擅长做产品讲解，现在做产品求职咨询，每月增收30000元！"</p>
            </div>

            {/* 案例2 */}
            <div className="apple-card fade-in">
              <div className="mb-4">
                <h4 className="font-bold">李先生</h4>
                <p className="text-sm text-text-light">办公室职员</p>
              </div>
              <p className="mb-4">"Excel技能变现，帮小企业做报表，每周只需花几小时，月入2000+，太香了！"</p>
            </div>

            {/* 案例3 */}
            <div className="apple-card fade-in">
              <div className="mb-4">
                <h4 className="font-bold">王女士</h4>
                <p className="text-sm text-text-light">宝妈</p>
              </div>
              <p className="mb-4">"做母婴用品测评，发小红书拿佣金，既能照顾孩子又能赚钱，实现双赢！"</p>
            </div>
          </div>
        </div>
      </section>


      {/* 页脚 */}
      <footer className="glass-footer">
        <div className="container">
          <div className="footer-content">
            <div>
              <h3 className="footer-title">FIREClaw</h3>
              <p className="mb-4">用AI技术解决FIRE痛点，让每个人都能轻松开启FIRE之旅</p>
            </div>
            <div>
              <h3 className="footer-title">产品功能</h3>
              <Link to="/skill-finder" className="footer-link">技能挖掘</Link>
            <Link to="/business-planner" className="footer-link">FIRE拆解</Link>
            
            <a href="#community" className="footer-link" onClick={(e) => {
              e.preventDefault();
              document.getElementById('community')?.scrollIntoView({ behavior: 'smooth' });
            }}>抱团互助</a>

            </div>
            <div>
              <h3 className="footer-title">资源中心</h3>
              <a href="#" className="footer-link">常见问题</a>
              <a href="#" className="footer-link">联系我们</a>
            </div>
            <div>
              <h3 className="footer-title">关于我们</h3>
              <a href="#" className="footer-link">隐私政策</a>
              <a href="#" className="footer-link">服务条款</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2023 FIREClaw. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

// 技能挖掘组件
const SkillFinder: React.FC = () => {
  const [formData, setFormData] = useState<FormDataType>({
    skills: '',
    availableTime: '',
    effortLevel: ''
  })
  const [recommendations, setRecommendations] = useState<any[]>([])
  const [aiSource, setAiSource] = useState<'deepseek-ai' | 'local-fallback' | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [showResults, setShowResults] = useState(false)
  const [selectedRecommendation, setSelectedRecommendation] = useState<any | null>(null)
  const [skillAnalysis, setSkillAnalysis] = useState<any>(null)


  // 技能关键词映射表
  const skillKeywords = {
    '整理收纳': ['整理', '收纳', '断舍离', '家居', '清洁', '规划', '空间'],
    'Excel/数据分析': ['Excel', '表格', '数据', '分析', '函数', '图表', '报表', 'PPT'],
    '育儿/母婴': ['宝妈', '带娃', '育儿', '母婴', '儿童', '绘本', '早教'],
    '设计创意': ['设计', 'PS', 'AI', '创意', '美工', '排版', '海报'],
    '写作文案': ['写作', '文案', '编辑', '内容', '小说', '文章', '翻译'],
    '摄影摄像': ['摄影', '摄像', '拍照', '视频', '剪辑', '后期', '构图'],
    '教育培训': ['教育', '培训', '教学', '辅导', '老师', '课程', '知识'],
    '编程技术': ['编程', '代码', '开发', '网站', 'APP', 'Python', 'Java'],
    '语言能力': ['英语', '日语', '韩语', '翻译', '外语', '口语', '写作'],
    '销售营销': ['销售', '营销', '推广', '客服', '沟通', '谈判', '渠道'],
    '手工制作': ['手工', '制作', 'DIY', '编织', '刺绣', '陶艺', '饰品'],
    '烹饪美食': ['烹饪', '美食', '烘焙', '做饭', '菜谱', '营养', '厨艺']
  }

  // FIRE数据库
  const businessDatabase = [
    {
      id: 'organizer',
      name: '线上收纳咨询',
      category: '整理收纳',
      difficulty: '低',
      timeRequired: '1-2小时/天',
      monthlyIncome: '3000-5000元',
      description: '为他人提供线上收纳咨询服务，帮助客户整理家居空间',
      skills: ['整理收纳', '沟通能力', '空间规划'],
      platforms: ['小红书', '抖音', '闲鱼'],
      tags: ['低门槛', '时间灵活', '需求稳定'],
      matchScore: 0
    },
    {
      id: 'excel',
      name: 'Excel报表定制',
      category: 'Excel/数据分析',
      difficulty: '中',
      timeRequired: '2-3小时/天',
      monthlyIncome: '4000-6000元',
      description: '为小企业或个人定制Excel报表，提供数据分析服务',
      skills: ['Excel', '数据分析', '逻辑思维'],
      platforms: ['猪八戒', '淘宝', '微信群'],
      tags: ['技能变现', '需求大', '单价高'],
      matchScore: 0
    },
    {
      id: 'content',
      name: '小红书内容创作',
      category: '写作文案',
      difficulty: '中',
      timeRequired: '1-2小时/天',
      monthlyIncome: '2000-4000元',
      description: '在小红书平台发布优质内容，通过广告和带货变现',
      skills: ['写作', '审美', '热点把握'],
      platforms: ['小红书', '抖音', 'B站'],
      tags: ['创意变现', '长期收益', '个人品牌'],
      matchScore: 0
    },
    {
      id: 'review',
      name: '母婴用品测评',
      category: '育儿/母婴',
      difficulty: '低',
      timeRequired: '1小时/天',
      monthlyIncome: '2000-3000元',
      description: '测评母婴用品，分享使用体验，获得品牌合作和佣金',
      skills: ['育儿经验', '写作', '拍摄'],
      platforms: ['小红书', '抖音', '微博'],
      tags: ['宝妈首选', '口碑变现', '产品合作'],
      matchScore: 0
    },
    {
      id: 'tutor',
      name: '在线家教辅导',
      category: '教育培训',
      difficulty: '高',
      timeRequired: '2-3小时/天',
      monthlyIncome: '5000-8000元',
      description: '为学生提供在线辅导服务，传授知识和学习方法',
      skills: ['专业知识', '教学能力', '耐心'],
      platforms: ['学而思', '作业帮', '微信群'],
      tags: ['知识变现', '收入稳定', '技能提升'],
      matchScore: 0
    },
    {
      id: 'design',
      name: 'PPT设计服务',
      category: '设计创意',
      difficulty: '中',
      timeRequired: '1-2小时/天',
      monthlyIncome: '3000-5000元',
      description: '为企业或个人提供专业的PPT设计服务',
      skills: ['设计', 'PPT', '审美'],
      platforms: ['猪八戒', '淘宝', '朋友圈'],
      tags: ['技能变现', '需求大', '单价高'],
      matchScore: 0
    },
    {
      id: 'translate',
      name: '文档翻译服务',
      category: '语言能力',
      difficulty: '中',
      timeRequired: '2-3小时/天',
      monthlyIncome: '4000-6000元',
      description: '为个人或企业提供文档翻译服务',
      skills: ['外语能力', '专业词汇', '细心'],
      platforms: ['有道翻译', '淘宝', '专业平台'],
      tags: ['语言变现', '专业需求', '远程工作'],
      matchScore: 0
    },
    {
      id: 'voice',
      name: '有声书录制',
      category: '写作文案',
      difficulty: '高',
      timeRequired: '1-2小时/天',
      monthlyIncome: '3000-5000元',
      description: '为小说或文章录制有声版本，在音频平台发布',
      skills: ['播音', '声音条件', '情感表达'],
      platforms: ['喜马拉雅', '蜻蜓FM', '荔枝FM'],
      tags: ['声音变现', '创意工作', '长期收益'],
      matchScore: 0
    },
    {
      id: 'photo',
      name: '手机摄影教程',
      category: '摄影摄像',
      difficulty: '低',
      timeRequired: '1小时/天',
      monthlyIncome: '2000-4000元',
      description: '教授手机摄影技巧，分享拍照经验和后期方法',
      skills: ['摄影', '手机修图', '教学能力'],
      platforms: ['小红书', '抖音', 'B站'],
      tags: ['技能分享', '入门门槛低', '兴趣变现'],
      matchScore: 0
    },
    {
      id: 'handmade',
      name: '手工艺品销售',
      category: '手工制作',
      difficulty: '中',
      timeRequired: '2-3小时/天',
      monthlyIncome: '3000-5000元',
      description: '制作手工艺品并在电商平台销售',
      skills: ['手工', '创意', '审美'],
      platforms: ['淘宝', '闲鱼', '微店'],
      tags: ['创意变现', '个性化', '爱好变现'],
      matchScore: 0
    }
  ]

  // 技能分析函数
  const analyzeSkills = (skillText: string) => {
    const analysis = {
      detectedSkills: [] as string[],
      matchedCategories: [] as string[],
      skillStrength: {} as Record<string, number>,
      potentialBusinesses: [] as any[]
    }

    // 检测技能关键词
    Object.entries(skillKeywords).forEach(([category, keywords]) => {
      let matchCount = 0
      keywords.forEach(keyword => {
        if (skillText.toLowerCase().includes(keyword.toLowerCase())) {
          matchCount++
          if (!analysis.detectedSkills.includes(keyword)) {
            analysis.detectedSkills.push(keyword)
          }
        }
      })
      
      if (matchCount > 0) {
        analysis.matchedCategories.push(category)
        analysis.skillStrength[category] = matchCount / keywords.length
      }
    })

    // 如果没有匹配到任何技能，添加通用技能
    if (analysis.matchedCategories.length === 0) {
      analysis.matchedCategories.push('通用技能')
      analysis.skillStrength['通用技能'] = 0.5
    }

    // 根据技能匹配度计算潜在FIRE
    analysis.potentialBusinesses = businessDatabase.map(business => {
      let score = 0
      
      // 技能匹配度评分
      if (analysis.matchedCategories.includes(business.category)) {
        score += 40 * analysis.skillStrength[business.category]
      }
      
      // 时间匹配度评分
      if (formData.availableTime === '30min' && business.timeRequired.includes('1小时')) {
        score += 20
      } else if (formData.availableTime === '1h' && business.timeRequired.includes('1-2小时')) {
        score += 30
      } else if (formData.availableTime === '2h+' && business.timeRequired.includes('2-3小时')) {
        score += 30
      }
      
      // 辛苦程度匹配度评分
      if (formData.effortLevel === 'low' && business.difficulty === '低') {
        score += 30
      } else if (formData.effortLevel === 'medium' && business.difficulty === '中') {
        score += 30
      } else if (formData.effortLevel === 'high' && business.difficulty === '高') {
        score += 30
      }
      
      return {
        ...business,
        matchScore: Math.min(100, Math.round(score))
      }
    }).sort((a, b) => b.matchScore - a.matchScore).slice(0, 5)

    return analysis
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // 自动进入下一步
    if (name === 'skills' && value) {
      setCurrentStep(2)
    } else if (name === 'availableTime' && value) {
      setCurrentStep(3)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    try {
      console.log('表单数据:', formData)
      
      // 准备请求数据
      const requestBody = {
        model: 'deepseek-chat',
        messages: [
          {
            role: 'system',
            content: '你是一个专业的FIRE规划师，擅长根据用户的技能、时间和努力程度，为用户推荐最适合的FIRE方向。请分析用户的技能，并推荐3-5个最适合的FIRE，每个FIRE需要包含：名称、难度、时间需求、月收入范围、详细描述、所需技能、推荐平台、标签、匹配度分数。请以JSON格式返回结果。'
          },
          {
            role: 'user',
            content: `我的技能：${formData.skills}，每天可用时间：${formData.availableTime}，可接受的辛苦程度：${formData.effortLevel}。请为我推荐最适合的FIRE方向。`
          }
        ],
        temperature: 0.7,
        max_tokens: 2000
      }
      
      console.log('请求URL:', '/api/chat/completions')
      console.log('请求体:', requestBody)
      
      let response
      let responseText
      let data
      
      // 使用 Netlify Functions 代理（服务端读取密钥）
      
      console.log('使用 Netlify Functions 代理模式（服务端密钥）')
      
      // 调试请求详情
      console.log('请求详情:')
      console.log('URL:', '/api/chat/completions')
      console.log('方法:', 'POST')
      console.log('请求头:', { 'Content-Type': 'application/json' })
      console.log('请求体:', requestBody)
      
      // 直接调用DeepSeek API（通过Netlify重定向解决CORS）
      try {
        // 创建超时控制器
        const controller = new AbortController()
        const timeoutId = setTimeout(() => controller.abort(), 30000)
        
        // 使用 Netlify Functions 代理
        response = await fetch('/api/chat-completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(requestBody),
          signal: controller.signal
        })
        
        clearTimeout(timeoutId)
        
        console.log('DeepSeek API响应状态:', response.status, response.statusText)
        
        if (!response.ok) {
          console.error('API响应错误详情:')
          console.error('状态码:', response.status)
          console.error('状态文本:', response.statusText)
          console.error('响应头:', Object.fromEntries(response.headers.entries()))
          
          // 尝试获取错误响应内容
          try {
            const errorText = await response.text()
            console.error('错误响应内容:', errorText)
          } catch (e) {
            console.error('无法读取错误响应内容')
          }
          
          throw new Error(`DeepSeek API调用失败: ${response.status} ${response.statusText}`)
        }
        
        responseText = await response.text()
        console.log('DeepSeek API响应文本长度:', responseText.length)
        console.log('DeepSeek API响应文本预览:', responseText.substring(0, 200))
        
      } catch (apiError: any) {
        console.error('DeepSeek API调用失败:', apiError)
        if (apiError.name === 'AbortError') {
          console.error('请求超时')
          throw new Error('网络请求超时，请检查网络连接后重试')
        }
        throw apiError
      }

      // 检查响应是否为空
      if (!responseText || responseText.trim() === '') {
        console.error('API返回空响应')
        console.error('响应状态:', response.status, response.statusText)
        console.error('响应头:', Object.fromEntries(response.headers.entries()))
        throw new Error('API返回空响应，请稍后重试')
      }

      // 解析响应数据
      try {
        data = JSON.parse(responseText)
      } catch (parseError) {
        console.error('JSON解析失败:', parseError)
        console.error('原始响应文本长度:', responseText.length)
        console.error('原始响应文本前500字符:', responseText.substring(0, 500))
        console.error('原始响应文本后500字符:', responseText.slice(-500))
        throw new Error(`API返回数据格式错误: ${(parseError as Error).message}`)
      }
      
      console.log('解析后的数据:', data)
      
      if (!data.choices || !data.choices[0] || !data.choices[0].message) {
        console.error('响应数据结构异常:', data)
        throw new Error('API返回数据格式异常')
      }
      
      const aiResponse = data.choices[0].message.content
      
      // 解析AI返回的JSON数据
      let aiRecommendations
      try {
        // 尝试提取JSON部分
        const jsonMatch = aiResponse.match(/\{[\s\S]*\}/)
        if (jsonMatch) {
          aiRecommendations = JSON.parse(jsonMatch[0])
        } else {
          aiRecommendations = JSON.parse(aiResponse)
        }
        
        console.log('AI返回的原始数据:', aiRecommendations)
        console.log('推荐数据:', aiRecommendations.recommendations || aiRecommendations)
        
        // 检查推荐数据格式
        const recommendations = aiRecommendations.recommendations || aiRecommendations
        if (Array.isArray(recommendations) && recommendations.length > 0) {
          console.log('第一个推荐项:', recommendations[0])
          console.log('第一个推荐项的skills类型:', typeof recommendations[0].skills)
          console.log('第一个推荐项的skills值:', recommendations[0].skills)
        }
      } catch (parseError) {
        console.error('JSON解析失败，使用备用方案')
        console.error('解析错误详情:', parseError)
        console.error('原始响应内容:', aiResponse)
        // 如果JSON解析失败，使用本地分析作为备用
        const localAnalysis = analyzeSkills(formData.skills)
        setSkillAnalysis(localAnalysis)
        setRecommendations(localAnalysis.potentialBusinesses)
        setIsLoading(false)
        setShowResults(true)
        return
      }

      // 格式化AI推荐结果
      const formattedRecommendations = (aiRecommendations.recommendations || aiRecommendations).map((rec: any, index: number) => {
        // 确保skills是数组格式
        let skills = rec.required_skills || rec.skills || []
        if (typeof skills === 'string') {
          skills = skills.split(/[,，\s]+/).filter(Boolean)
        }
        
        // 确保platforms是数组格式
        let platforms = rec.recommended_platforms || rec.platforms || ['小红书', '抖音', '闲鱼']
        if (typeof platforms === 'string') {
          platforms = platforms.split(/[,，\s]+/).filter(Boolean)
        }
        
        // 确保tags是数组格式
        let tags = rec.tags || ['AI推荐', '个性化']
        if (typeof tags === 'string') {
          tags = tags.split(/[,，\s]+/).filter(Boolean)
        }
        
        return {
          id: `ai-rec-${index}`,
          name: rec.name || rec.title || '未命名FIRE',
          category: rec.category || 'AI推荐',
          difficulty: rec.difficulty || '中',
          timeRequired: rec.timeRequired || rec.time_required || '1-2小时/天',
          monthlyIncome: rec.monthlyIncome || rec.monthly_income || '2000-4000元',
          description: rec.description || rec.desc || 'AI推荐的优质FIRE方向',
          skills: skills,
          platforms: platforms,
          tags: tags,
          matchScore: rec.matchScore || rec.match_score || Math.round(Math.random() * 20 + 80)
        }
      }) || []

      // 创建AI分析结果
      const aiAnalysis = {
        detectedSkills: aiRecommendations.detectedSkills || formData.skills.split(/[,，\s]+/).filter(Boolean),
        matchedCategories: aiRecommendations.matchedCategories || ['AI分析'],
        skillStrength: aiRecommendations.skillStrength || { 'AI分析': 0.9 },
        potentialBusinesses: formattedRecommendations
      }

      setSkillAnalysis(aiAnalysis)
      setRecommendations(formattedRecommendations)
      setAiSource('deepseek-ai')
      setIsLoading(false)
      setShowResults(true)
      
      // 保存到本地存储
      localStorage.setItem('skillFinderResults', JSON.stringify({
        formData,
        analysis: aiAnalysis,
        recommendations: formattedRecommendations,
        timestamp: new Date().toISOString(),
        source: 'deepseek-ai'
      }))

    } catch (error: any) {
        console.error('DeepSeek API调用失败:', error)
        
        // 特殊处理不同类型的错误
        if (error.name === 'AbortError') {
          console.error('请求超时')
          alert('网络请求超时，请检查网络连接后重试')
        } else if (error.message.includes('Failed to fetch')) {
          console.error('网络连接失败')
          alert('网络连接失败，请检查网络后重试')
        } else if (error.message.includes('API返回空响应')) {
          console.error('API返回空数据')
          alert('服务器返回空数据，请稍后重试')
        } else if (error.message.includes('API返回数据格式错误')) {
          console.error('API数据格式错误')
          alert('服务器返回数据格式错误，请稍后重试')
        }
        
        // API调用失败时，回退到本地分析
      const localAnalysis = analyzeSkills(formData.skills)
      setSkillAnalysis(localAnalysis)
      setRecommendations(localAnalysis.potentialBusinesses)
      setAiSource('local-fallback')
      setIsLoading(false)
      setShowResults(true)
      
      // 保存到本地存储
      localStorage.setItem('skillFinderResults', JSON.stringify({
        formData,
        analysis: localAnalysis,
        recommendations: localAnalysis.potentialBusinesses,
        timestamp: new Date().toISOString(),
        source: 'local-fallback'
      }))
    }
  }

  const handleRecommendationSelect = (rec: any) => {
    setSelectedRecommendation(rec)
  }

  return (
    <div className="fade-in">
      <Navigation />
      <section className="apple-section">
        <div className="container">
          <div className="text-center mb-8">
            <p className="section-subtitle">
              1分钟填写问卷，AI帮你找到隐藏的变现技能，匹配最适合你的FIRE方向
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 表单部分 */}
            <div className={`apple-card fade-in ${isLoading ? 'loading' : ''}`}>
              <div className="card-header">
                <h2 className="card-title">请填写以下信息</h2>
                <p className="card-subtitle">我们将根据你的回答，为你推荐最适合的FIRE方向</p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className={`form-group ${currentStep >= 1 ? 'fade-in' : ''}`}>
                  <label className="form-label">
                    你擅长做什么？（例如：整理房间、Excel、带娃）
                  </label>
                  <input
                    type="text"
                    name="skills"
                    className="form-input"
                    value={formData.skills}
                    onChange={handleChange}
                    placeholder="请输入你的技能或兴趣"
                    required
                  />
                  {formData.skills && (
                    <div className="form-success">
                      <span>✓ 已填写</span>
                    </div>
                  )}
                </div>

                <div className={`form-group ${currentStep >= 2 ? 'fade-in' : ''}`}>
                  <label className="form-label">
                    每天有多少空闲时间？
                  </label>
                  <select
                    name="availableTime"
                    className="form-select"
                    value={formData.availableTime}
                    onChange={handleChange}
                    required
                  >
                    <option value="">请选择</option>
                    <option value="30min">30分钟以内</option>
                    <option value="1h">1小时左右</option>
                    <option value="2h+">2小时以上</option>
                  </select>
                  {formData.availableTime && (
                    <div className="form-success">
                      <span>✓ 已选择</span>
                    </div>
                  )}
                </div>
                <div className={`form-group ${currentStep >= 3 ? 'fade-in' : ''}`}>
                  <label className="form-label">
                    你能接受的辛苦程度？
                  </label>
                  <select
                    name="effortLevel"
                    className="form-select"
                    value={formData.effortLevel}
                    onChange={handleChange}
                    required
                  >
                    <option value="">请选择</option>
                    <option value="low">轻松上手（低强度）</option>
                    <option value="medium">适中付出（中等强度）</option>
                    <option value="high">愿意投入（高强度）</option>
                  </select>
                  {formData.effortLevel && (
                    <div className="form-success">
                      <span>✓ 已选择</span>
                    </div>
                  )}
                </div>

                <AppleButton type="submit" className="w-full mt-4" variant="primary" disabled={isLoading || !formData.skills || !formData.availableTime || !formData.effortLevel}>
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <div className="spinner mr-2"></div>
                      DeepSeek AI正在分析你的技能...
                    </span>
                  ) : '立即挖掘技能'}
                </AppleButton>
              </form>
            </div>

            {/* 推荐结果 */}
            <div className={`apple-card fade-in ${showResults ? 'show' : ''}`}>
              <div className="card-header">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="card-title">为你推荐的FIRE方向</h2>
                    <p className="card-subtitle">基于AI分析，以下FIRE最适合你</p>
                  </div>
                  {aiSource && (
                    <div className={`ai-source-badge ${aiSource}`}>
                      {aiSource === 'deepseek-ai' ? '🤖 DeepSeek AI' : '⚠️ 本地分析'}
                    </div>
                  )}
                </div>
              </div>
              {isLoading ? (
                <div className="space-y-4">
                  <Skeleton type="card" />
                  <Skeleton type="card" />
                  <Skeleton type="card" />
                </div>
              ) : recommendations.length > 0 ? (
                <div className="space-y-6">
                  {/* 技能分析结果 */}
                  {skillAnalysis && (
                    <div className="bg-blue-50 p-4 rounded-lg mb-6">
                      <h3 className="font-bold text-lg mb-3">你的技能分析</h3>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {skillAnalysis.detectedSkills.map((skill: string, index: number) => (
                          <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                      <div className="text-sm text-gray-600">
                        检测到你的技能倾向：{skillAnalysis.matchedCategories.join('、')}
                      </div>
                    </div>
                  )}
                  
                  {/* 推荐FIRE列表 */}
                  {recommendations.map((rec: any, index: number) => (
                    <div 
                      key={rec.id} 
                      className={`recommendation-card ${selectedRecommendation?.id === rec.id ? 'selected' : ''}`}
                      onClick={() => handleRecommendationSelect(rec)}
                    >
                      <div className="recommendation-header">
                        <div className="recommendation-title-section">
                          <h3 className="recommendation-title">
                            {index === 0 ? '最佳匹配' : `推荐${index + 1}`}
                          </h3>
                          {rec.matchScore >= 85 && (
                            <span className="recommendation-badge best-match">最佳匹配</span>
                          )}
                        </div>
                        <span className="recommendation-match-score">{rec.matchScore}% 匹配</span>
                      </div>
                      
                      <div className="recommendation-meta">
                        <span className={`meta-badge difficulty-${rec.difficulty}`}>
                          {rec.difficulty}难度
                        </span>
                        <span className="meta-badge time-badge">
                          {rec.timeRequired}
                        </span>
                        <span className="meta-badge income-badge">
                          {rec.monthlyIncome}
                        </span>
                      </div>
                      
                      <p className="recommendation-description">{rec.description}</p>
                      
                      <div className="recommendation-section">
                        <div className="recommendation-section-title">所需技能</div>
                        <div className="recommendation-tags">
                          {rec.skills.map((skill: string, skillIndex: number) => (
                            <span key={skillIndex} className="recommendation-tag skill-tag">{skill}</span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="recommendation-section">
                        <div className="recommendation-section-title">推荐平台</div>
                        <div className="recommendation-tags">
                          {rec.platforms.map((platform: string, platformIndex: number) => (
                            <span key={platformIndex} className="recommendation-tag platform-tag">{platform}</span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="recommendation-section">
                        <div className="recommendation-section-title">核心优势</div>
                        <div className="recommendation-tags">
                          {rec.tags.map((tag: string, tagIndex: number) => (
                            <span key={tagIndex} className="recommendation-tag benefit-tag">{tag}</span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="recommendation-actions">
                        <button 
                          className="recommendation-btn primary"
                          onClick={(e) => {
                            e.stopPropagation()
                            window.location.href = `/business-planner?skill=${encodeURIComponent(rec.name)}`
                          }}
                        >
                          详细拆解
                        </button>
                        
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-4">
                  <p className="text-text-secondary">专属FIRE推荐ing</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// FIRE拆解组件
const BusinessPlanner: React.FC = () => {
  const [searchParams] = useSearchParams()

  
  // 从localStorage加载初始状态
  const loadFromLocalStorage = () => {
    try {
      const savedData = localStorage.getItem('businessPlannerData')
      if (savedData) {
        const parsedData = JSON.parse(savedData)
        return {
          selectedBusiness: parsedData.selectedBusiness || '',
          plan: parsedData.plan || null,
          currentDay: parsedData.currentDay || 1,
          expandedDay: parsedData.expandedDay || null,
          completedDays: parsedData.completedDays || []
        }
      }
    } catch (error) {
      console.error('从localStorage加载数据失败:', error)
    }
    return {
      selectedBusiness: '',
      plan: null,
      currentDay: 1,
      expandedDay: null,
      completedDays: []
    }
  }
  
  const initialData = loadFromLocalStorage()
  const [selectedBusiness, setSelectedBusiness] = useState<string>(initialData.selectedBusiness)
  const [plan, setPlan] = useState<BusinessPlanType>(initialData.plan)
  const [isLoading, setIsLoading] = useState(false)
  const [currentDay, setCurrentDay] = useState(initialData.currentDay)
  const [expandedDay, setExpandedDay] = useState<number | null>(initialData.expandedDay)
  const [completedDays, setCompletedDays] = useState<number[]>(initialData.completedDays)
  const [formError, setFormError] = useState('')

  // 解析URL参数并自动选择FIRE类型
  React.useEffect(() => {
    const skillFromUrl = searchParams.get('skill')
    console.log('URL参数解析 - skill:', skillFromUrl, '当前选择的FIRE:', selectedBusiness)
    
    if (skillFromUrl) {
      // 优化匹配逻辑：优先精确匹配名称，然后再匹配技能和标签
      const lowerSkill = skillFromUrl.toLowerCase()
      
      // 首先尝试精确匹配名称
      let matchedBusiness = businessOptions.find(option => 
        option.name.toLowerCase() === lowerSkill
      )
      
      // 如果没有精确匹配，尝试包含匹配，但增加匹配得分
      if (!matchedBusiness) {
        const businessWithScores = businessOptions.map(option => {
          let score = 0
          if (option.name.toLowerCase().includes(lowerSkill)) score += 3 // 名称匹配权重最高
          if (option.skills.some(skill => skill.toLowerCase().includes(lowerSkill))) score += 2 // 技能匹配权重其次
          if (option.tags.some(tag => tag.toLowerCase().includes(lowerSkill))) score += 1 // 标签匹配权重最低
          return { business: option, score }
        })
        
        // 过滤出得分大于0的，并按得分排序，取第一个
        const validMatches = businessWithScores.filter(item => item.score > 0)
        if (validMatches.length > 0) {
          validMatches.sort((a, b) => b.score - a.score)
          matchedBusiness = validMatches[0].business
        }
      }
      
      console.log('匹配结果:', matchedBusiness)
      
      if (matchedBusiness && matchedBusiness.id !== selectedBusiness) {
        setSelectedBusiness(matchedBusiness.id)
        // 保存到localStorage
        saveToLocalStorage({
          selectedBusiness: matchedBusiness.id,
          plan: plan,
          currentDay: currentDay,
          expandedDay: expandedDay,
          completedDays: completedDays
        })
        console.log('已自动选择FIRE:', matchedBusiness.name)
      }
    }
  }, [searchParams, selectedBusiness, plan, currentDay, expandedDay, completedDays])

  // 表单验证函数
  const validateForm = (): boolean => {
    if (!selectedBusiness) {
      setFormError('请先选择一个FIRE类型')
      // 添加高亮效果
      const businessCard = document.querySelector('.business-card')
      if (businessCard) {
        businessCard.classList.add('form-highlight')
        setTimeout(() => {
          businessCard.classList.remove('form-highlight')
        }, 2000)
      }
      return false
    }
    setFormError('')
    return true
  }
  
  // 保存数据到localStorage
  const saveToLocalStorage = (data: any) => {
    try {
      localStorage.setItem('businessPlannerData', JSON.stringify(data))
    } catch (error) {
      console.error('保存数据到localStorage失败:', error)
    }
  }
  
  // 清除localStorage中的数据
  // const clearLocalStorage = () => { // 注释掉：未使用的函数
  //   try {
  //     localStorage.removeItem('businessPlannerData')
  //     setSelectedBusiness('')
  //     setPlan(null as any)
  //     setCurrentDay(1)
  //     setExpandedDay(null)
  //     setCompletedDays([])
  //   } catch (error) {
  //     console.error('清除localStorage数据失败:', error)
  //   }
  // }

  const businessOptions = [
    { 
      id: 'organizer', 
      name: '线上收纳咨询', 
      difficulty: '低', 
      time: '1-2小时/天', 
      income: '3000-5000元/月',
      description: '为家庭和小型办公室提供线上收纳整理咨询服务',
      skills: ['收纳技巧', '空间规划', '沟通能力'],
      platforms: ['小红书', '抖音', '闲鱼'],
      tags: ['居家', '整理', '咨询'],
      category: '生活服务'
    },
    { 
      id: 'excel', 
      name: 'Excel报表定制', 
      difficulty: '中', 
      time: '2-3小时/天', 
      income: '4000-6000元/月',
      description: '为企业或个人定制Excel报表、数据分析和可视化',
      skills: ['Excel高级应用', '数据分析', '逻辑思维'],
      platforms: ['猪八戒', '淘宝', '微信'],
      tags: ['办公', '数据', '分析'],
      category: '技术服务'
    },
    { 
      id: 'content', 
      name: '小红书内容创作', 
      difficulty: '中', 
      time: '1-2小时/天', 
      income: '2000-4000元/月',
      description: '在小红书平台创作优质内容，通过广告和带货变现',
      skills: ['内容创作', '摄影技巧', '文案撰写'],
      platforms: ['小红书', '抖音', 'B站'],
      tags: ['内容', '创作', '社交媒体'],
      category: '内容创作'
    },
    { 
      id: 'review', 
      name: '母婴用品测评', 
      difficulty: '低', 
      time: '1小时/天', 
      income: '2000-3000元/月',
      description: '测评母婴产品，分享使用体验，通过推广获得收入',
      skills: ['产品测评', '育儿知识', '内容创作'],
      platforms: ['小红书', '抖音', '微博'],
      tags: ['母婴', '测评', '分享'],
      category: '内容创作'
    },
    { 
      id: 'tutor', 
      name: '在线家教辅导', 
      difficulty: '高', 
      time: '2-3小时/天', 
      income: '5000-8000元/月',
      description: '为中小学生提供在线学科辅导，分享知识获得收入',
      skills: ['学科知识', '教学能力', '沟通技巧'],
      platforms: ['掌门1对1', '学而思', '作业帮'],
      tags: ['教育', '辅导', '知识'],
      category: '教育服务'
    },
    { 
      id: 'design', 
      name: 'PPT设计服务', 
      difficulty: '中', 
      time: '1-2小时/天', 
      income: '3000-5000元/月',
      description: '为企业或个人提供专业的PPT设计和美化服务',
      skills: ['PPT设计', '视觉传达', '创意思维'],
      platforms: ['猪八戒', '淘宝', '微信'],
      tags: ['设计', '演示', '办公'],
      category: '设计服务'
    },
    { 
      id: 'translate', 
      name: '文档翻译服务', 
      difficulty: '中', 
      time: '2-3小时/天', 
      income: '4000-6000元/月',
      description: '为企业和个人提供文档翻译服务，语言变现',
      skills: ['外语能力', '翻译技巧', '专业知识'],
      platforms: ['有道翻译', '淘宝', 'Fiverr'],
      tags: ['翻译', '语言', '文档'],
      category: '语言服务'
    },
    { 
      id: 'voice', 
      name: '有声书录制', 
      difficulty: '高', 
      time: '1-2小时/天', 
      income: '3000-5000元/月',
      description: '为有声书平台录制音频内容，声音变现',
      skills: ['播音技巧', '声音控制', '情感表达'],
      platforms: ['喜马拉雅', '蜻蜓FM', '懒人听书'],
      tags: ['音频', '录制', '声音'],
      category: '内容创作'
    },
    { 
      id: 'video-edit', 
      name: '视频剪辑服务', 
      difficulty: '中', 
      time: '2-3小时/天', 
      income: '4000-7000元/月',
      description: '为自媒体创作者或企业提供视频剪辑和后期制作',
      skills: ['视频剪辑', '特效制作', '节奏把控'],
      platforms: ['猪八戒', '淘宝', 'B站'],
      tags: ['视频', '剪辑', '后期'],
      category: '技术服务'
    },
    { 
      id: 'handmade', 
      name: '手工艺品销售', 
      difficulty: '低', 
      time: '1-2小时/天', 
      income: '2000-4000元/月',
      description: '制作和销售手工艺品，创意变现',
      skills: ['手工制作', '创意设计', '摄影技巧'],
      platforms: ['淘宝', '闲鱼', '小红书'],
      tags: ['手工', '创意', '销售'],
      category: '电商销售'
    },
    { 
      id: 'pet', 
      name: '宠物寄养服务', 
      difficulty: '低', 
      time: '1-2小时/天', 
      income: '3000-5000元/月',
      description: '为出差或旅行的宠物主人提供临时寄养服务',
      skills: ['宠物护理', '责任心', '沟通能力'],
      platforms: ['宠物帮', '闲鱼', '微信'],
      tags: ['宠物', '寄养', '服务'],
      category: '生活服务'
    },
    { 
      id: 'coding', 
      name: '小程序开发', 
      difficulty: '高', 
      time: '3-4小时/天', 
      income: '6000-10000元/月',
      description: '为企业或个人开发微信小程序，技术变现',
      skills: ['编程能力', 'UI设计', '产品思维'],
      platforms: ['猪八戒', '程序员客栈', 'GitHub'],
      tags: ['编程', '开发', '技术'],
      category: '技术服务'
    },
    { 
      id: 'fitness', 
      name: '健身教练指导', 
      difficulty: '中', 
      time: '1-2小时/天', 
      income: '4000-6000元/月',
      description: '提供线上健身指导，制定个性化健身计划',
      skills: ['健身知识', '营养学', '教学能力'],
      platforms: ['Keep', '抖音', '微信'],
      tags: ['健身', '健康', '指导'],
      category: '健康服务'
    },
    { 
      id: 'cooking', 
      name: '私厨外卖服务', 
      difficulty: '中', 
      time: '2-3小时/天', 
      income: '5000-8000元/月',
      description: '制作特色美食，提供私厨外卖服务',
      skills: ['烹饪技巧', '食材搭配', '食品安全'],
      platforms: ['美团', '饿了么', '微信'],
      tags: ['美食', '烹饪', '外卖'],
      category: '生活服务'
    },
    { 
      id: 'photo', 
      name: '摄影约拍服务', 
      difficulty: '中', 
      time: '2-3小时/天', 
      income: '4000-7000元/月',
      description: '提供个人写真、产品摄影等专业摄影服务',
      skills: ['摄影技巧', '后期处理', '构图能力'],
      platforms: ['大众点评', '小红书', '微信'],
      tags: ['摄影', '艺术', '服务'],
      category: '创意服务'
    },
    { 
      id: 'writing', 
      name: '文案撰稿服务', 
      difficulty: '低', 
      time: '1-2小时/天', 
      income: '3000-5000元/月',
      description: '为企业或个人提供文案撰写、内容创作服务',
      skills: ['文字功底', '创意思维', '营销知识'],
      platforms: ['猪八戒', '知乎', '微信公众号'],
      tags: ['文案', '写作', '创意'],
      category: '内容创作'
    }
  ]

  const handleGeneratePlan = () => {
    // 使用表单验证函数
    if (!validateForm()) {
      return
    }
    
    setIsLoading(true)
    
    // 模拟AI生成计划
    setTimeout(() => {
      const business = businessOptions.find(b => b.id === selectedBusiness)
      
      // 根据不同FIRE类型生成不同的计划
      let generatedPlan: BusinessPlanType = {
        business: selectedBusiness,
        overview: '',
        days: []
      }
      
      // 生成计划概览
      generatedPlan.overview = `这是一个${business?.name}的7天启动计划，每天需要投入${business?.time}，预计月收入${business?.income}。该FIRE属于${business?.category}类别，主要技能要求包括${business?.skills.join('、')}。`
      
      // 根据FIRE类型生成不同的每日计划
      switch(selectedBusiness) {
        case 'organizer':
          generatedPlan.days = generateOrganizerPlan()
          break
        case 'excel':
          generatedPlan.days = generateExcelPlan()
          break
        case 'content':
          generatedPlan.days = generateContentPlan()
          break
        case 'review':
          generatedPlan.days = generateReviewPlan()
          break
        case 'tutor':
          generatedPlan.days = generateTutorPlan()
          break
        case 'design':
          generatedPlan.days = generateDesignPlan()
          break
        case 'translate':
          generatedPlan.days = generateTranslatePlan()
          break
        case 'voice':
          generatedPlan.days = generateVoicePlan()
          break
        case 'video-edit':
          generatedPlan.days = generateVideoEditPlan()
          break
        case 'handmade':
          generatedPlan.days = generateHandmadePlan()
          break
        case 'pet':
          generatedPlan.days = generatePetPlan()
          break
        case 'coding':
          generatedPlan.days = generateCodingPlan()
          break
        case 'fitness':
          generatedPlan.days = generateFitnessPlan()
          break
        case 'cooking':
          generatedPlan.days = generateCookingPlan()
          break
        case 'photo':
          generatedPlan.days = generatePhotoPlan()
          break
        case 'writing':
          generatedPlan.days = generateWritingPlan()
          break
        default:
          generatedPlan.days = generateDefaultPlan(business)
      }
      
      setPlan(generatedPlan)
      setIsLoading(false)
      setCurrentDay(1)
      setExpandedDay(1)
      setCompletedDays([])
      // 保存状态到localStorage
      saveToLocalStorage({
        selectedBusiness,
        plan: generatedPlan,
        currentDay: 1,
        expandedDay: 1,
        completedDays: []
      })
    }, 1500)
  }

  // 线上收纳咨询计划
  const generateOrganizerPlan = () => {
    return [
      {
        day: 1,
        title: '收纳理论与技巧学习',
        tasks: [
          '学习收纳整理的基本原则和方法',
          '研究不同空间（卧室、厨房、书房）的收纳技巧',
          '了解收纳工具和产品的种类与使用方法'
        ],
        resources: [
          { name: '收纳整理入门指南', type: '文档' },
          { name: '收纳工具推荐清单', type: '清单' },
          { name: '收纳前后对比案例', type: '图片' }
        ],
        estimatedTime: '2小时'
      },
      {
        day: 2,
        title: '个人品牌定位与展示',
        tasks: [
          '确定自己的收纳服务特色和目标客户',
          '设计个人Logo和品牌形象',
          '创建社交媒体账号并完善个人资料'
        ],
        resources: [
          { name: '个人品牌建设指南', type: '指南' },
          { name: '收纳师个人简介模板', type: '模板' },
          { name: '社交媒体运营技巧', type: '手册' }
        ],
        estimatedTime: '2小时'
      },
      {
        day: 3,
        title: '服务内容与定价策略',
        tasks: [
          '设计不同类型的收纳服务套餐',
          '调研市场收纳服务价格',
          '制定自己的服务定价表'
        ],
        resources: [
          { name: '收纳服务套餐模板', type: '模板' },
          { name: '市场定价分析表', type: '表格' },
          { name: '服务合同范本', type: '文档' }
        ],
        estimatedTime: '1.5小时'
      },
      {
        day: 4,
        title: '案例准备与作品集',
        tasks: [
          '为自己或朋友家进行收纳整理并记录过程',
          '拍摄收纳前后的对比照片',
          '制作收纳案例展示集'
        ],
        resources: [
          { name: '收纳案例拍摄技巧', type: '指南' },
          { name: '作品集制作模板', type: '模板' },
          { name: '案例描述写作指南', type: '文档' }
        ],
        estimatedTime: '3小时'
      },
      {
        day: 5,
        title: '线上平台注册与推广',
        tasks: [
          '在相关平台注册成为收纳服务提供者',
          '发布收纳服务信息和案例',
          '建立客户咨询和沟通流程'
        ],
        resources: [
          { name: '收纳平台注册指南', type: '指南' },
          { name: '服务信息发布模板', type: '模板' },
          { name: '客户沟通话术', type: '文档' }
        ],
        estimatedTime: '2小时'
      },
      {
        day: 6,
        title: '线上咨询流程设计',
        tasks: [
          '设计线上收纳咨询的流程和方法',
          '准备线上咨询所需的问题清单',
          '制作收纳方案模板'
        ],
        resources: [
          { name: '线上咨询流程设计', type: '指南' },
          { name: '客户需求调研表', type: '表格' },
          { name: '收纳方案模板', type: '模板' }
        ],
        estimatedTime: '2小时'
      },
      {
        day: 7,
        title: '试运营与优化',
        tasks: [
          '开展免费或优惠的试运营活动',
          '收集客户反馈并优化服务',
          '制定长期发展规划和推广策略'
        ],
        resources: [
          { name: '试运营活动方案', type: '方案' },
          { name: '客户反馈收集表', type: '表格' },
          { name: '长期发展规划模板', type: '文档' }
        ],
        estimatedTime: '2小时'
      }
    ]
  }

  // Excel报表定制计划
  const generateExcelPlan = () => {
    return [
      {
        day: 1,
        title: 'Excel高级技能巩固',
        tasks: [
          '复习Excel函数和数据透视表',
          '学习高级图表制作技巧',
          '掌握数据分析和可视化方法'
        ],
        resources: [
          { name: 'Excel高级函数教程', type: '视频' },
          { name: '数据透视表使用指南', type: '文档' },
          { name: '高级图表模板库', type: '模板' }
        ],
        estimatedTime: '3小时'
      },
      {
        day: 2,
        title: '服务定位与目标客户',
        tasks: [
          '确定自己的Excel服务专长领域',
          '分析目标客户群体和需求',
          '研究竞品和服务定价'
        ],
        resources: [
          { name: 'Excel服务市场分析', type: '报告' },
          { name: '目标客户画像模板', type: '模板' },
          { name: '竞品分析表格', type: '表格' }
        ],
        estimatedTime: '2小时'
      },
      {
        day: 3,
        title: '作品集与案例准备',
        tasks: [
          '制作3-5个不同类型的Excel报表案例',
          '创建作品集展示页面',
          '编写案例说明和使用教程'
        ],
        resources: [
          { name: 'Excel报表案例模板', type: '模板' },
          { name: '作品集制作指南', type: '指南' },
          { name: '案例说明写作模板', type: '模板' }
        ],
        estimatedTime: '3小时'
      },
      {
        day: 4,
        title: '服务定价与套餐设计',
        tasks: [
          '制定不同复杂度的报表服务套餐',
          '设计服务流程和交付标准',
          '制作报价单和合同模板'
        ],
        resources: [
          { name: '服务套餐设计模板', type: '模板' },
          { name: '服务流程图', type: '图表' },
          { name: '合同范本', type: '文档' }
        ],
        estimatedTime: '2小时'
      },
      {
        day: 5,
        title: '线上平台注册与推广',
        tasks: [
          '在自由职业平台注册账号',
          '发布Excel服务信息和案例',
          '优化个人资料和服务描述'
        ],
        resources: [
          { name: '自由职业平台注册指南', type: '指南' },
          { name: '服务描述优化技巧', type: '文档' },
          { name: '关键词优化方法', type: '手册' }
        ],
        estimatedTime: '2小时'
      },
      {
        day: 6,
        title: '客户沟通与需求分析',
        tasks: [
          '设计客户需求调研问卷',
          '制定项目沟通流程和模板',
          '准备常见问题解答'
        ],
        resources: [
          { name: '客户需求调研表', type: '表格' },
          { name: '项目沟通模板', type: '模板' },
          { name: '常见问题解答文档', type: '文档' }
        ],
        estimatedTime: '2小时'
      },
      {
        day: 7,
        title: '试运营与反馈优化',
        tasks: [
          '开展小范围试运营活动',
          '收集客户反馈并优化服务',
          '建立长期客户关系维护计划'
        ],
        resources: [
          { name: '试运营活动方案', type: '方案' },
          { name: '客户反馈收集表', type: '表格' },
          { name: '客户维护计划模板', type: '文档' }
        ],
        estimatedTime: '2小时'
      }
    ]
  }

  // 小红书内容创作计划
  const generateContentPlan = () => {
    return [
      {
        day: 1,
        title: '账号定位与内容规划',
        tasks: [
          '确定小红书账号定位和目标受众',
          '研究热门内容形式和话题',
          '制定内容发布计划和日历'
        ],
        resources: [
          { name: '小红书账号定位指南', type: '指南' },
          { name: '热门话题分析报告', type: '报告' },
          { name: '内容日历模板', type: '模板' }
        ],
        estimatedTime: '2小时'
      },
      {
        day: 2,
        title: '摄影与图片处理技巧',
        tasks: [
          '学习手机摄影基础技巧',
          '掌握图片编辑和美化方法',
          '了解小红书图片风格和规范'
        ],
        resources: [
          { name: '手机摄影教程', type: '视频' },
          { name: '图片编辑软件指南', type: '指南' },
          { name: '小红书图片规范', type: '文档' }
        ],
        estimatedTime: '2小时'
      },
      {
        day: 3,
        title: '文案撰写与标题优化',
        tasks: [
          '学习小红书文案写作技巧',
          '掌握标题优化和关键词使用',
          '研究爆款笔记的结构和特点'
        ],
        resources: [
          { name: '小红书文案写作指南', type: '指南' },
          { name: '标题优化技巧', type: '文档' },
          { name: '爆款笔记案例分析', type: '案例' }
        ],
        estimatedTime: '2小时'
      },
      {
        day: 4,
        title: '账号装修与个人品牌',
        tasks: [
          '设计头像、背景图和简介',
          '统一账号视觉风格',
          '创建个人标签和特色'
        ],
        resources: [
          { name: '账号装修指南', type: '指南' },
          { name: '视觉设计工具推荐', type: '清单' },
          { name: '个人品牌建设方法', type: '手册' }
        ],
        estimatedTime: '1.5小时'
      },
      {
        day: 5,
        title: '内容创作与发布',
        tasks: [
          '创作3-5篇不同类型的内容',
          '学习最佳发布时间和频率',
          '掌握标签和话题使用技巧'
        ],
        resources: [
          { name: '内容创作模板', type: '模板' },
          { name: '发布时间分析报告', type: '报告' },
          { name: '标签使用指南', type: '指南' }
        ],
        estimatedTime: '2小时'
      },
      {
        day: 6,
        title: '互动与社群运营',
        tasks: [
          '学习评论回复和互动技巧',
          '建立粉丝互动策略',
          '了解小红书社群运营方法'
        ],
        resources: [
          { name: '评论回复话术模板', type: '模板' },
          { name: '粉丝互动策略指南', type: '指南' },
          { name: '社群运营手册', type: '手册' }
        ],
        estimatedTime: '1.5小时'
      },
      {
        day: 7,
        title: '数据分析与优化',
        tasks: [
          '学习小红书数据分析方法',
          '分析内容表现和用户反馈',
          '制定内容优化策略'
        ],
        resources: [
          { name: '小红书数据分析指南', type: '指南' },
          { name: '内容表现分析表', type: '表格' },
          { name: '优化策略模板', type: '模板' }
        ],
        estimatedTime: '2小时'
      }
    ]
  }

  // 母婴用品测评计划
  const generateReviewPlan = () => {
    return [
      {
        day: 1,
        title: '账号定位与测评方向',
        tasks: [
          '确定母婴测评账号的定位和特色',
          '选择测评产品类别和年龄段',
          '研究竞品账号和测评方法'
        ],
        resources: [
          { name: '母婴测评账号定位指南', type: '指南' },
          { name: '热门测评产品分析', type: '报告' },
          { name: '竞品账号分析表', type: '表格' }
        ],
        estimatedTime: '2小时'
      },
      {
        day: 2,
        title: '测评方法与标准制定',
        tasks: [
          '学习专业的产品测评方法',
          '制定测评标准和评分体系',
          '设计测评记录表格'
        ],
        resources: [
          { name: '产品测评方法指南', type: '指南' },
          { name: '测评标准模板', type: '模板' },
          { name: '测评记录表格', type: '表格' }
        ],
        estimatedTime: '2小时'
      },
      {
        day: 3,
        title: '内容创作与表达技巧',
        tasks: [
          '学习测评内容的写作技巧',
          '掌握视频测评的拍摄方法',
          '了解母婴内容的专业表达'
        ],
        resources: [
          { name: '测评内容写作指南', type: '指南' },
          { name: '视频拍摄技巧教程', type: '视频' },
          { name: '母婴专业知识库', type: '文档' }
        ],
        estimatedTime: '2小时'
      },
      {
        day: 4,
        title: '账号装修与品牌形象',
        tasks: [
          '设计专业的测评账号形象',
          '创建统一的测评内容模板',
          '建立专业可信的品牌形象'
        ],
        resources: [
          { name: '账号装修指南', type: '指南' },
          { name: '测评内容模板', type: '模板' },
          { name: '品牌建设手册', type: '手册' }
        ],
        estimatedTime: '1.5小时'
      },
      {
        day: 5,
        title: '产品获取与测评实践',
        tasks: [
          '了解产品获取渠道和方法',
          '进行首次产品测评实践',
          '制作测评内容和发布'
        ],
        resources: [
          { name: '产品获取渠道指南', type: '指南' },
          { name: '首次测评流程', type: '流程图' },
          { name: '内容发布模板', type: '模板' }
        ],
        estimatedTime: '2小时'
      },
      {
        day: 6,
        title: '粉丝互动与社群建设',
        tasks: [
          '设计粉丝互动活动',
          '建立妈妈交流社群',
          '制定社群运营策略'
        ],
        resources: [
          { name: '粉丝活动策划指南', type: '指南' },
          { name: '社群运营手册', type: '手册' },
          { name: '互动话术模板', type: '模板' }
        ],
        estimatedTime: '1.5小时'
      },
      {
        day: 7,
        title: '商业合作与变现',
        tasks: [
          '了解母婴博主变现方式',
          '学习商业合作洽谈技巧',
          '制定长期发展规划'
        ],
        resources: [
          { name: '变现方式分析', type: '报告' },
          { name: '商业合作指南', type: '指南' },
          { name: '发展规划模板', type: '模板' }
        ],
        estimatedTime: '2小时'
      }
    ]
  }

  // 在线家教辅导计划
  const generateTutorPlan = () => {
    return [
      {
        day: 1,
        title: '教学定位与科目选择',
        tasks: [
          '确定自己的教学科目和年级段',
          '分析目标学生群体和需求',
          '研究教学市场和竞争情况'
        ],
        resources: [
          { name: '教学定位指南', type: '指南' },
          { name: '学生需求分析表', type: '表格' },
          { name: '教学市场报告', type: '报告' }
        ],
        estimatedTime: '2小时'
      },
      {
        day: 2,
        title: '教学准备与资料整理',
        tasks: [
          '整理对应年级的教学大纲和重点',
          '准备教学课件和练习题库',
          '制定教学计划和进度安排'
        ],
        resources: [
          { name: '教学大纲资源', type: '文档' },
          { name: '课件制作指南', type: '指南' },
          { name: '教学计划模板', type: '模板' }
        ],
        estimatedTime: '3小时'
      },
      {
        day: 3,
        title: '线上教学工具与技巧',
        tasks: [
          '熟悉线上教学平台的使用',
          '学习线上互动教学技巧',
          '准备线上教学所需设备'
        ],
        resources: [
          { name: '线上教学平台指南', type: '指南' },
          { name: '互动教学技巧', type: '文档' },
          { name: '设备推荐清单', type: '清单' }
        ],
        estimatedTime: '2小时'
      },
      {
        day: 4,
        title: '个人品牌与教学特色',
        tasks: [
          '设计个人教学品牌形象',
          '确定自己的教学特色和优势',
          '创建教学展示视频或简介'
        ],
        resources: [
          { name: '个人品牌建设指南', type: '指南' },
          { name: '教学特色定位表', type: '表格' },
          { name: '展示视频制作技巧', type: '视频' }
        ],
        estimatedTime: '2小时'
      },
      {
        day: 5,
        title: '平台注册与课程发布',
        tasks: [
          '在在线教育平台注册账号',
          '完善个人资料和教学简介',
          '发布试听课和正式课程'
        ],
        resources: [
          { name: '教育平台注册指南', type: '指南' },
          { name: '个人资料优化技巧', type: '文档' },
          { name: '课程发布流程', type: '流程图' }
        ],
        estimatedTime: '2小时'
      },
      {
        day: 6,
        title: '试讲与反馈优化',
        tasks: [
          '开展免费试讲活动',
          '收集学生反馈并优化教学',
          '调整教学方法和内容'
        ],
        resources: [
          { name: '试讲活动方案', type: '方案' },
          { name: '学生反馈收集表', type: '表格' },
          { name: '教学优化指南', type: '指南' }
        ],
        estimatedTime: '2小时'
      },
      {
        day: 7,
        title: '正式运营与推广',
        tasks: [
          '开始正式授课和教学服务',
          '制定学生管理和沟通策略',
          '规划长期教学发展路径'
        ],
        resources: [
          { name: '正式授课指南', type: '指南' },
          { name: '学生管理手册', type: '手册' },
          { name: '发展规划模板', type: '模板' }
        ],
        estimatedTime: '2小时'
      }
    ]
  }

  // PPT设计服务计划
  const generateDesignPlan = () => {
    return [
      {
        day: 1,
        title: 'PPT设计技能提升',
        tasks: [
          '学习高级PPT设计技巧',
          '掌握专业模板制作方法',
          '研究不同行业的PPT风格'
        ],
        resources: [
          { name: 'PPT高级设计教程', type: '视频' },
          { name: '专业模板制作指南', type: '指南' },
          { name: '行业PPT风格分析', type: '报告' }
        ],
        estimatedTime: '2小时'
      },
      {
        day: 2,
        title: '服务定位与目标客户',
        tasks: [
          '确定自己的PPT设计专长领域',
          '分析目标客户和市场需求',
          '研究竞品和服务定价'
        ],
        resources: [
          { name: 'PPT服务市场分析', type: '报告' },
          { name: '目标客户画像', type: '画像' },
          { name: '竞品分析表', type: '表格' }
        ],
        estimatedTime: '2小时'
      },
      {
        day: 3,
        title: '作品集与案例准备',
        tasks: [
          '制作5-8个不同类型的PPT案例',
          '创建在线作品集展示',
          '编写案例说明和设计思路'
        ],
        resources: [
          { name: 'PPT案例模板', type: '模板' },
          { name: '作品集制作指南', type: '指南' },
          { name: '案例说明写作模板', type: '模板' }
        ],
        estimatedTime: '3小时'
      },
      {
        day: 4,
        title: '服务流程与标准制定',
        tasks: [
          '设计PPT设计服务流程',
          '制定交付标准和质量控制',
          '制作项目沟通和反馈表'
        ],
        resources: [
          { name: '服务流程设计指南', type: '指南' },
          { name: '交付标准模板', type: '模板' },
          { name: '项目沟通表', type: '表格' }
        ],
        estimatedTime: '2小时'
      },
      {
        day: 5,
        title: '线上平台注册与推广',
        tasks: [
          '在设计平台注册账号',
          '发布PPT设计服务和案例',
          '优化个人资料和服务描述'
        ],
        resources: [
          { name: '设计平台注册指南', type: '指南' },
          { name: '服务发布优化技巧', type: '文档' },
          { name: '关键词优化方法', type: '手册' }
        ],
        estimatedTime: '2小时'
      },
      {
        day: 6,
        title: '客户沟通与需求分析',
        tasks: [
          '设计客户需求调研问卷',
          '制定项目沟通流程',
          '准备常见问题解答'
        ],
        resources: [
          { name: '需求调研问卷', type: '问卷' },
          { name: '沟通流程模板', type: '模板' },
          { name: '常见问题解答', type: '文档' }
        ],
        estimatedTime: '2小时'
      },
      {
        day: 7,
        title: '试运营与反馈优化',
        tasks: [
          '开展优惠试运营活动',
          '收集客户反馈并优化服务',
          '建立长期客户维护计划'
        ],
        resources: [
          { name: '试运营活动方案', type: '方案' },
          { name: '客户反馈表', type: '表格' },
          { name: '客户维护计划', type: '计划' }
        ],
        estimatedTime: '2小时'
      }
    ]
  }

  // 文档翻译服务计划
  const generateTranslatePlan = () => {
    return [
      {
        day: 1,
        title: '翻译技能评估与提升',
        tasks: [
          '评估自己的翻译水平和专业领域',
          '学习翻译工具和辅助软件',
          '建立专业术语库和参考资料'
        ],
        resources: [
          { name: '翻译技能自测表', type: '表格' },
          { name: '翻译工具推荐', type: '清单' },
          { name: '术语库模板', type: '模板' }
        ],
        estimatedTime: '2小时'
      },
      {
        day: 2,
        title: '服务定位与定价策略',
        tasks: [
          '确定翻译专业领域和语种方向',
          '研究翻译市场定价标准',
          '制定不同类型翻译的报价表'
        ],
        resources: [
          { name: '翻译市场分析', type: '报告' },
          { name: '定价策略指南', type: '指南' },
          { name: '报价单模板', type: '模板' }
        ],
        estimatedTime: '2小时'
      },
      {
        day: 3,
        title: '作品集与案例准备',
        tasks: [
          '翻译3-5篇不同领域的样本文稿',
          '制作专业翻译作品集',
          '准备不同类型的翻译案例展示'
        ],
        resources: [
          { name: '翻译案例模板', type: '模板' },
          { name: '作品集制作指南', type: '指南' },
          { name: '翻译质量检查表', type: '表格' }
        ],
        estimatedTime: '3小时'
      },
      {
        day: 4,
        title: '线上平台注册与推广',
        tasks: [
          '在翻译平台注册专业账号',
          '完善个人资料和专业认证',
          '发布翻译服务和案例'
        ],
        resources: [
          { name: '翻译平台注册指南', type: '指南' },
          { name: '个人资料优化技巧', type: '文档' },
          { name: '服务发布模板', type: '模板' }
        ],
        estimatedTime: '2小时'
      },
      {
        day: 5,
        title: '客户沟通与项目管理',
        tasks: [
          '设计翻译项目沟通流程',
          '制定项目进度跟踪方法',
          '准备客户需求确认表'
        ],
        resources: [
          { name: '项目沟通模板', type: '模板' },
          { name: '进度跟踪表', type: '表格' },
          { name: '需求确认表', type: '表格' }
        ],
        estimatedTime: '2小时'
      },
      {
        day: 6,
        title: '质量控制与交付流程',
        tasks: [
          '建立翻译质量检查标准',
          '设计专业交付流程',
          '准备翻译交付模板'
        ],
        resources: [
          { name: '质量检查标准', type: '文档' },
          { name: '交付流程图', type: '图表' },
          { name: '交付模板', type: '模板' }
        ],
        estimatedTime: '2小时'
      },
      {
        day: 7,
        title: '试运营与客户维护',
        tasks: [
          '开展小范围试翻译服务',
          '收集客户反馈并优化服务',
          '建立长期客户关系维护计划'
        ],
        resources: [
          { name: '试运营方案', type: '方案' },
          { name: '客户反馈表', type: '表格' },
          { name: '客户维护计划', type: '计划' }
        ],
        estimatedTime: '2小时'
      }
    ]
  }

  // 配音服务计划
  const generateVoicePlan = () => {
    return [
      {
        day: 1,
        title: '配音技能评估与设备准备',
        tasks: [
          '评估自己的声音特点和配音风格',
          '学习专业配音技巧和发声方法',
          '准备录音设备和环境'
        ],
        resources: [
          { name: '声音特点评估表', type: '表格' },
          { name: '配音技巧教程', type: '视频' },
          { name: '录音设备推荐', type: '清单' }
        ],
        estimatedTime: '2小时'
      },
      {
        day: 2,
        title: '配音类型定位与市场分析',
        tasks: [
          '确定配音专业领域和风格',
          '研究配音市场需求和定价',
          '分析竞品和目标客户'
        ],
        resources: [
          { name: '配音类型分析', type: '报告' },
          { name: '市场定价研究', type: '报告' },
          { name: '竞品分析表', type: '表格' }
        ],
        estimatedTime: '2小时'
      },
      {
        day: 3,
        title: '作品集与配音样本准备',
        tasks: [
          '录制不同风格的配音样本',
          '制作专业配音作品集',
          '准备配音展示脚本'
        ],
        resources: [
          { name: '配音样本脚本', type: '文档' },
          { name: '作品集制作指南', type: '指南' },
          { name: '录音技巧手册', type: '手册' }
        ],
        estimatedTime: '3小时'
      },
      {
        day: 4,
        title: '线上平台注册与推广',
        tasks: [
          '在配音平台注册专业账号',
          '完善个人资料和声音介绍',
          '发布配音服务和样本'
        ],
        resources: [
          { name: '配音平台注册指南', type: '指南' },
          { name: '个人资料优化', type: '文档' },
          { name: '服务发布模板', type: '模板' }
        ],
        estimatedTime: '2小时'
      },
      {
        day: 5,
        title: '客户沟通与项目管理',
        tasks: [
          '设计配音项目沟通流程',
          '制定录音和修改流程',
          '准备客户需求确认表'
        ],
        resources: [
          { name: '项目沟通模板', type: '模板' },
          { name: '录音流程图', type: '图表' },
          { name: '需求确认表', type: '表格' }
        ],
        estimatedTime: '2小时'
      },
      {
        day: 6,
        title: '音频处理与交付流程',
        tasks: [
          '学习音频后期处理技巧',
          '设计专业音频交付标准',
          '准备音频交付模板'
        ],
        resources: [
          { name: '音频处理教程', type: '视频' },
          { name: '交付标准文档', type: '文档' },
          { name: '音频格式转换指南', type: '指南' }
        ],
        estimatedTime: '2小时'
      },
      {
        day: 7,
        title: '试运营与客户维护',
        tasks: [
          '开展小范围试配音服务',
          '收集客户反馈并优化服务',
          '建立长期客户关系维护计划'
        ],
        resources: [
          { name: '试运营方案', type: '方案' },
          { name: '客户反馈表', type: '表格' },
          { name: '客户维护计划', type: '计划' }
        ],
        estimatedTime: '2小时'
      }
    ]
  }

  // 视频剪辑服务计划
  const generateVideoEditPlan = () => {
    return [
      {
        day: 1,
        title: '剪辑技能评估与软件准备',
        tasks: [
          '评估自己的视频剪辑水平和风格',
          '学习专业剪辑软件和工具',
          '建立素材库和模板资源'
        ],
        resources: [
          { name: '剪辑技能自测表', type: '表格' },
          { name: '剪辑软件教程', type: '视频' },
          { name: '素材库资源清单', type: '清单' }
        ],
        estimatedTime: '3小时'
      },
      {
        day: 2,
        title: '剪辑类型定位与市场分析',
        tasks: [
          '确定剪辑专业领域和风格',
          '研究视频剪辑市场需求和定价',
          '分析竞品和目标客户'
        ],
        resources: [
          { name: '剪辑类型分析', type: '报告' },
          { name: '市场定价研究', type: '报告' },
          { name: '竞品分析表', type: '表格' }
        ],
        estimatedTime: '2小时'
      },
      {
        day: 3,
        title: '作品集与剪辑样本准备',
        tasks: [
          '剪辑3-5个不同类型的视频样本',
          '制作专业剪辑作品集',
          '准备剪辑展示脚本'
        ],
        resources: [
          { name: '剪辑样本素材', type: '素材' },
          { name: '作品集制作指南', type: '指南' },
          { name: '剪辑技巧手册', type: '手册' }
        ],
        estimatedTime: '3小时'
      },
      {
        day: 4,
        title: '线上平台注册与推广',
        tasks: [
          '在视频平台注册专业账号',
          '完善个人资料和剪辑风格介绍',
          '发布剪辑服务和样本'
        ],
        resources: [
          { name: '视频平台注册指南', type: '指南' },
          { name: '个人资料优化', type: '文档' },
          { name: '服务发布模板', type: '模板' }
        ],
        estimatedTime: '2小时'
      },
      {
        day: 5,
        title: '客户沟通与项目管理',
        tasks: [
          '设计剪辑项目沟通流程',
          '制定素材收集和剪辑流程',
          '准备客户需求确认表'
        ],
        resources: [
          { name: '项目沟通模板', type: '模板' },
          { name: '剪辑流程图', type: '图表' },
          { name: '需求确认表', type: '表格' }
        ],
        estimatedTime: '2小时'
      },
      {
        day: 6,
        title: '视频处理与交付流程',
        tasks: [
          '学习视频后期处理技巧',
          '设计专业视频交付标准',
          '准备视频交付模板'
        ],
        resources: [
          { name: '视频处理教程', type: '视频' },
          { name: '交付标准文档', type: '文档' },
          { name: '视频格式转换指南', type: '指南' }
        ],
        estimatedTime: '2小时'
      },
      {
        day: 7,
        title: '试运营与客户维护',
        tasks: [
          '开展小范围试剪辑服务',
          '收集客户反馈并优化服务',
          '建立长期客户关系维护计划'
        ],
        resources: [
          { name: '试运营方案', type: '方案' },
          { name: '客户反馈表', type: '表格' },
          { name: '客户维护计划', type: '计划' }
        ],
        estimatedTime: '2小时'
      }
    ]
  }

  // 手工艺品销售计划
  const generateHandmadePlan = () => {
    return [
      {
        day: 1,
        title: '手工艺品定位与市场调研',
        tasks: [
          '确定自己的手工艺品类型和风格',
          '研究手工艺品市场趋势和定价',
          '分析竞品和目标客户'
        ],
        resources: [
          { name: '手工艺品类型分析', type: '报告' },
          { name: '市场定价研究', type: '报告' },
          { name: '竞品分析表', type: '表格' }
        ],
        estimatedTime: '2小时'
      },
      {
        day: 2,
        title: '产品制作与品质控制',
        tasks: [
          '制作3-5件样品产品',
          '建立产品质量控制标准',
          '设计产品包装和标签'
        ],
        resources: [
          { name: '制作工艺指南', type: '指南' },
          { name: '质量控制表', type: '表格' },
          { name: '包装设计模板', type: '模板' }
        ],
        estimatedTime: '3小时'
      },
      {
        day: 3,
        title: '产品拍摄与展示准备',
        tasks: [
          '学习产品摄影技巧',
          '拍摄高质量产品照片',
          '制作产品展示页面'
        ],
        resources: [
          { name: '产品摄影教程', type: '视频' },
          { name: '拍摄布光指南', type: '指南' },
          { name: '展示页面模板', type: '模板' }
        ],
        estimatedTime: '2小时'
      },
      {
        day: 4,
        title: '线上平台注册与店铺搭建',
        tasks: [
          '在手工艺品平台注册账号',
          '搭建个人店铺页面',
          '发布产品信息和照片'
        ],
        resources: [
          { name: '平台注册指南', type: '指南' },
          { name: '店铺搭建教程', type: '教程' },
          { name: '产品发布模板', type: '模板' }
        ],
        estimatedTime: '2小时'
      },
      {
        day: 5,
        title: '定价策略与促销活动',
        tasks: [
          '制定产品定价策略',
          '设计促销活动和优惠方案',
          '准备营销文案和素材'
        ],
        resources: [
          { name: '定价策略指南', type: '指南' },
          { name: '促销活动方案', type: '方案' },
          { name: '营销文案模板', type: '模板' }
        ],
        estimatedTime: '2小时'
      },
      {
        day: 6,
        title: '物流与客户服务',
        tasks: [
          '设计产品包装和物流方案',
          '制定客户服务流程',
          '准备常见问题解答'
        ],
        resources: [
          { name: '物流方案指南', type: '指南' },
          { name: '客户服务流程', type: '流程图' },
          { name: '常见问题解答', type: '文档' }
        ],
        estimatedTime: '2小时'
      },
      {
        day: 7,
        title: '试运营与优化',
        tasks: [
          '开展小范围试销售',
          '收集客户反馈并优化产品',
          '制定长期发展规划'
        ],
        resources: [
          { name: '试运营方案', type: '方案' },
          { name: '客户反馈表', type: '表格' },
          { name: '发展规划模板', type: '模板' }
        ],
        estimatedTime: '2小时'
      }
    ]
  }

  // 宠物看护服务计划
  const generatePetPlan = () => {
    return [
      {
        day: 1,
        title: '宠物看护技能评估与准备',
        tasks: [
          '评估自己的宠物看护经验和能力',
          '学习宠物护理知识和应急处理',
          '准备看护所需工具和用品'
        ],
        resources: [
          { name: '看护技能自测表', type: '表格' },
          { name: '宠物护理指南', type: '指南' },
          { name: '看护用品清单', type: '清单' }
        ],
        estimatedTime: '2小时'
      },
      {
        day: 2,
        title: '服务定位与市场分析',
        tasks: [
          '确定宠物看护服务类型和范围',
          '研究本地宠物看护市场需求',
          '分析竞品和服务定价'
        ],
        resources: [
          { name: '服务类型分析', type: '报告' },
          { name: '市场调研报告', type: '报告' },
          { name: '竞品分析表', type: '表格' }
        ],
        estimatedTime: '2小时'
      },
      {
        day: 3,
        title: '服务流程与安全措施',
        tasks: [
          '设计宠物看护服务流程',
          '制定安全措施和应急预案',
          '准备服务协议和责任书'
        ],
        resources: [
          { name: '服务流程图', type: '图表' },
          { name: '安全措施手册', type: '手册' },
          { name: '服务协议模板', type: '模板' }
        ],
        estimatedTime: '2小时'
      },
      {
        day: 4,
        title: '线上平台注册与推广',
        tasks: [
          '在宠物服务平台注册账号',
          '完善个人资料和服务介绍',
          '发布看护服务和案例'
        ],
        resources: [
          { name: '服务平台注册指南', type: '指南' },
          { name: '个人资料优化', type: '文档' },
          { name: '服务发布模板', type: '模板' }
        ],
        estimatedTime: '2小时'
      },
      {
        day: 5,
        title: '客户沟通与需求确认',
        tasks: [
          '设计客户沟通流程',
          '制定宠物需求了解表',
          '准备看护记录和反馈表'
        ],
        resources: [
          { name: '沟通流程模板', type: '模板' },
          { name: '需求了解表', type: '表格' },
          { name: '看护记录表', type: '表格' }
        ],
        estimatedTime: '2小时'
      },
      {
        day: 6,
        title: '试运营与反馈收集',
        tasks: [
          '开展小范围试看护服务',
          '收集客户和宠物反馈',
          '优化服务流程和质量'
        ],
        resources: [
          { name: '试运营方案', type: '方案' },
          { name: '反馈收集表', type: '表格' },
          { name: '服务优化清单', type: '清单' }
        ],
        estimatedTime: '3小时'
      },
      {
        day: 7,
        title: '正式运营与客户维护',
        tasks: [
          '全面开展宠物看护服务',
          '建立客户档案和宠物档案',
          '制定长期客户维护计划'
        ],
        resources: [
          { name: '正式运营指南', type: '指南' },
          { name: '档案管理表格', type: '表格' },
          { name: '客户维护计划', type: '计划' }
        ],
        estimatedTime: '2小时'
      }
    ]
  }

  // 编程接单服务计划
  const generateCodingPlan = () => {
    return [
      {
        day: 1,
        title: '编程技能评估与定位',
        tasks: [
          '评估自己的编程技能和专长领域',
          '确定接单类型和技术栈',
          '准备作品集和代码案例'
        ],
        resources: [
          { name: '编程技能自测表', type: '表格' },
          { name: '技术栈选择指南', type: '指南' },
          { name: '作品集制作模板', type: '模板' }
        ],
        estimatedTime: '3小时'
      },
      {
        day: 2,
        title: '市场调研与定价策略',
        tasks: [
          '研究编程接单市场需求',
          '分析不同类型项目的定价标准',
          '制定自己的报价体系'
        ],
        resources: [
          { name: '市场需求分析', type: '报告' },
          { name: '定价策略指南', type: '指南' },
          { name: '报价单模板', type: '模板' }
        ],
        estimatedTime: '2小时'
      },
      {
        day: 3,
        title: '平台注册与个人品牌',
        tasks: [
          '在编程接单平台注册账号',
          '完善个人资料和技术展示',
          '发布作品集和代码案例'
        ],
        resources: [
          { name: '接单平台注册指南', type: '指南' },
          { name: '个人资料优化技巧', type: '文档' },
          { name: '作品展示模板', type: '模板' }
        ],
        estimatedTime: '2小时'
      },
      {
        day: 4,
        title: '项目流程与沟通技巧',
        tasks: [
          '设计项目开发流程',
          '制定客户沟通和需求确认方法',
          '准备项目文档和交付标准'
        ],
        resources: [
          { name: '项目开发流程图', type: '图表' },
          { name: '沟通技巧指南', type: '指南' },
          { name: '项目文档模板', type: '模板' }
        ],
        estimatedTime: '2小时'
      },
      {
        day: 5,
        title: '代码质量与测试流程',
        tasks: [
          '建立代码质量控制标准',
          '设计测试流程和验收标准',
          '准备代码审查和优化方法'
        ],
        resources: [
          { name: '代码质量标准', type: '文档' },
          { name: '测试流程指南', type: '指南' },
          { name: '代码审查清单', type: '清单' }
        ],
        estimatedTime: '2小时'
      },
      {
        day: 6,
        title: '试运营与反馈优化',
        tasks: [
          '接取小型试运营项目',
          '收集客户反馈并优化服务',
          '调整工作流程和交付标准'
        ],
        resources: [
          { name: '试运营方案', type: '方案' },
          { name: '客户反馈表', type: '表格' },
          { name: '流程优化清单', type: '清单' }
        ],
        estimatedTime: '3小时'
      },
      {
        day: 7,
        title: '正式运营与客户维护',
        tasks: [
          '全面开展编程接单服务',
          '建立客户档案和项目档案',
          '制定长期客户维护计划'
        ],
        resources: [
          { name: '正式运营指南', type: '指南' },
          { name: '档案管理表格', type: '表格' },
          { name: '客户维护计划', type: '计划' }
        ],
        estimatedTime: '2小时'
      }
    ]
  }

  // 健身教练服务计划
  const generateFitnessPlan = () => {
    return [
      {
        day: 1,
        title: '健身技能评估与定位',
        tasks: [
          '评估自己的健身专业水平和证书',
          '确定健身教学专长领域',
          '准备健身知识和理论体系'
        ],
        resources: [
          { name: '健身技能自测表', type: '表格' },
          { name: '专业领域选择指南', type: '指南' },
          { name: '理论知识库', type: '文档' }
        ],
        estimatedTime: '2小时'
      },
      {
        day: 2,
        title: '市场调研与定价策略',
        tasks: [
          '研究本地健身教练市场需求',
          '分析不同类型健身课程的定价',
          '制定自己的课程价格体系'
        ],
        resources: [
          { name: '市场需求分析', type: '报告' },
          { name: '定价策略指南', type: '指南' },
          { name: '课程价格表', type: '表格' }
        ],
        estimatedTime: '2小时'
      },
      {
        day: 3,
        title: '课程设计与教学准备',
        tasks: [
          '设计不同类型的健身课程',
          '准备教学计划和训练方案',
          '制作健身示范视频和图文'
        ],
        resources: [
          { name: '课程设计指南', type: '指南' },
          { name: '教学计划模板', type: '模板' },
          { name: '示范拍摄技巧', type: '视频' }
        ],
        estimatedTime: '3小时'
      },
      {
        day: 4,
        title: '线上平台注册与推广',
        tasks: [
          '在健身平台注册教练账号',
          '完善个人资料和教学展示',
          '发布健身课程和示范内容'
        ],
        resources: [
          { name: '健身平台注册指南', type: '指南' },
          { name: '个人资料优化', type: '文档' },
          { name: '课程发布模板', type: '模板' }
        ],
        estimatedTime: '2小时'
      },
      {
        day: 5,
        title: '学员沟通与需求分析',
        tasks: [
          '设计学员沟通流程',
          '制定体能评估和需求了解方法',
          '准备个性化训练方案模板'
        ],
        resources: [
          { name: '沟通流程模板', type: '模板' },
          { name: '体能评估表', type: '表格' },
          { name: '训练方案模板', type: '模板' }
        ],
        estimatedTime: '2小时'
      },
      {
        day: 6,
        title: '试运营与反馈收集',
        tasks: [
          '开展小范围试教学活动',
          '收集学员反馈并优化课程',
          '调整教学方法和内容'
        ],
        resources: [
          { name: '试运营方案', type: '方案' },
          { name: '学员反馈表', type: '表格' },
          { name: '课程优化清单', type: '清单' }
        ],
        estimatedTime: '3小时'
      },
      {
        day: 7,
        title: '正式运营与学员维护',
        tasks: [
          '全面开展健身教练服务',
          '建立学员档案和训练记录',
          '制定长期学员维护计划'
        ],
        resources: [
          { name: '正式运营指南', type: '指南' },
          { name: '学员档案表格', type: '表格' },
          { name: '学员维护计划', type: '计划' }
        ],
        estimatedTime: '2小时'
      }
    ]
  }

  // 美食制作教程计划
  const generateCookingPlan = () => {
    return [
      {
        day: 1,
        title: '烹饪技能评估与定位',
        tasks: [
          '评估自己的烹饪技能和专长菜系',
          '确定美食教程的内容方向',
          '准备烹饪知识和技巧体系'
        ],
        resources: [
          { name: '烹饪技能自测表', type: '表格' },
          { name: '菜系选择指南', type: '指南' },
          { name: '烹饪技巧手册', type: '手册' }
        ],
        estimatedTime: '2小时'
      },
      {
        day: 2,
        title: '内容规划与市场分析',
        tasks: [
          '研究美食教程市场需求',
          '分析热门美食内容和形式',
          '制定自己的内容发布计划'
        ],
        resources: [
          { name: '市场需求分析', type: '报告' },
          { name: '热门内容分析', type: '报告' },
          { name: '内容日历模板', type: '模板' }
        ],
        estimatedTime: '2小时'
      },
      {
        day: 3,
        title: '拍摄设备与技巧准备',
        tasks: [
          '学习美食摄影和拍摄技巧',
          '准备拍摄设备和道具',
          '设计拍摄场景和布光'
        ],
        resources: [
          { name: '美食摄影教程', type: '视频' },
          { name: '设备推荐清单', type: '清单' },
          { name: '场景设计指南', type: '指南' }
        ],
        estimatedTime: '2小时'
      },
      {
        day: 4,
        title: '内容创作与制作',
        tasks: [
          '制作3-5个美食教程样本',
          '学习视频剪辑和后期处理',
          '准备食谱和食材清单'
        ],
        resources: [
          { name: '教程制作指南', type: '指南' },
          { name: '剪辑教程', type: '视频' },
          { name: '食谱模板', type: '模板' }
        ],
        estimatedTime: '3小时'
      },
      {
        day: 5,
        title: '平台注册与账号搭建',
        tasks: [
          '在美食平台注册账号',
          '搭建个人美食主页',
          '发布美食教程和内容'
        ],
        resources: [
          { name: '平台注册指南', type: '指南' },
          { name: '主页搭建教程', type: '教程' },
          { name: '内容发布模板', type: '模板' }
        ],
        estimatedTime: '2小时'
      },
      {
        day: 6,
        title: '粉丝互动与社群运营',
        tasks: [
          '设计粉丝互动活动',
          '建立美食爱好者社群',
          '制定内容推广策略'
        ],
        resources: [
          { name: '互动活动方案', type: '方案' },
          { name: '社群运营手册', type: '手册' },
          { name: '推广策略指南', type: '指南' }
        ],
        estimatedTime: '2小时'
      },
      {
        day: 7,
        title: '试运营与优化',
        tasks: [
          '开展小范围试运营',
          '收集粉丝反馈并优化内容',
          '制定长期发展规划'
        ],
        resources: [
          { name: '试运营方案', type: '方案' },
          { name: '反馈收集表', type: '表格' },
          { name: '发展规划模板', type: '模板' }
        ],
        estimatedTime: '2小时'
      }
    ]
  }

  // 摄影服务计划
  const generatePhotoPlan = () => {
    return [
      {
        day: 1,
        title: '摄影技能评估与定位',
        tasks: [
          '评估自己的摄影技能和专长领域',
          '确定摄影服务类型和风格',
          '准备摄影作品集和案例'
        ],
        resources: [
          { name: '摄影技能自测表', type: '表格' },
          { name: '服务类型指南', type: '指南' },
          { name: '作品集制作模板', type: '模板' }
        ],
        estimatedTime: '2小时'
      },
      {
        day: 2,
        title: '市场调研与定价策略',
        tasks: [
          '研究本地摄影服务市场需求',
          '分析不同类型摄影的定价标准',
          '制定自己的服务价格体系'
        ],
        resources: [
          { name: '市场需求分析', type: '报告' },
          { name: '定价策略指南', type: '指南' },
          { name: '价格表模板', type: '表格' }
        ],
        estimatedTime: '2小时'
      },
      {
        day: 3,
        title: '设备准备与拍摄技巧',
        tasks: [
          '检查和准备摄影设备',
          '学习不同场景的拍摄技巧',
          '准备拍摄场景和道具'
        ],
        resources: [
          { name: '设备检查清单', type: '清单' },
          { name: '拍摄技巧教程', type: '视频' },
          { name: '场景设计指南', type: '指南' }
        ],
        estimatedTime: '3小时'
      },
      {
        day: 4,
        title: '线上平台注册与推广',
        tasks: [
          '在摄影平台注册账号',
          '完善个人资料和作品展示',
          '发布摄影服务和案例'
        ],
        resources: [
          { name: '摄影平台注册指南', type: '指南' },
          { name: '个人资料优化', type: '文档' },
          { name: '服务发布模板', type: '模板' }
        ],
        estimatedTime: '2小时'
      },
      {
        day: 5,
        title: '客户沟通与拍摄流程',
        tasks: [
          '设计客户沟通流程',
          '制定拍摄计划和流程',
          '准备拍摄确认单和合同'
        ],
        resources: [
          { name: '沟通流程模板', type: '模板' },
          { name: '拍摄计划表', type: '表格' },
          { name: '合同模板', type: '模板' }
        ],
        estimatedTime: '2小时'
      },
      {
        day: 6,
        title: '后期处理与交付流程',
        tasks: [
          '学习照片后期处理技巧',
          '设计照片交付标准和流程',
          '准备照片交付模板'
        ],
        resources: [
          { name: '后期处理教程', type: '视频' },
          { name: '交付标准文档', type: '文档' },
          { name: '交付模板', type: '模板' }
        ],
        estimatedTime: '2小时'
      },
      {
        day: 7,
        title: '试运营与客户维护',
        tasks: [
          '开展小范围试摄影服务',
          '收集客户反馈并优化服务',
          '建立长期客户维护计划'
        ],
        resources: [
          { name: '试运营方案', type: '方案' },
          { name: '客户反馈表', type: '表格' },
          { name: '客户维护计划', type: '计划' }
        ],
        estimatedTime: '2小时'
      }
    ]
  }

  // 文案写作服务计划
  const generateWritingPlan = () => {
    return [
      {
        day: 1,
        title: '写作技能评估与定位',
        tasks: [
          '评估自己的写作技能和专长领域',
          '确定文案写作类型和风格',
          '准备写作作品集和案例'
        ],
        resources: [
          { name: '写作技能自测表', type: '表格' },
          { name: '写作类型指南', type: '指南' },
          { name: '作品集制作模板', type: '模板' }
        ],
        estimatedTime: '2小时'
      },
      {
        day: 2,
        title: '市场调研与定价策略',
        tasks: [
          '研究文案写作市场需求',
          '分析不同类型文案的定价标准',
          '制定自己的服务价格体系'
        ],
        resources: [
          { name: '市场需求分析', type: '报告' },
          { name: '定价策略指南', type: '指南' },
          { name: '价格表模板', type: '表格' }
        ],
        estimatedTime: '2小时'
      },
      {
        day: 3,
        title: '写作技巧与风格培养',
        tasks: [
          '学习不同类型文案的写作技巧',
          '培养自己的写作风格和特色',
          '准备写作工具和参考资料'
        ],
        resources: [
          { name: '写作技巧教程', type: '视频' },
          { name: '风格培养指南', type: '指南' },
          { name: '参考资料清单', type: '清单' }
        ],
        estimatedTime: '3小时'
      },
      {
        day: 4,
        title: '线上平台注册与推广',
        tasks: [
          '在文案平台注册账号',
          '完善个人资料和作品展示',
          '发布文案服务和案例'
        ],
        resources: [
          { name: '文案平台注册指南', type: '指南' },
          { name: '个人资料优化', type: '文档' },
          { name: '服务发布模板', type: '模板' }
        ],
        estimatedTime: '2小时'
      },
      {
        day: 5,
        title: '客户沟通与需求分析',
        tasks: [
          '设计客户沟通流程',
          '制定文案需求了解方法',
          '准备需求确认表和写作大纲'
        ],
        resources: [
          { name: '沟通流程模板', type: '模板' },
          { name: '需求了解表', type: '表格' },
          { name: '写作大纲模板', type: '模板' }
        ],
        estimatedTime: '2小时'
      },
      {
        day: 6,
        title: '试运营与反馈优化',
        tasks: [
          '接取小型试运营项目',
          '收集客户反馈并优化服务',
          '调整写作流程和交付标准'
        ],
        resources: [
          { name: '试运营方案', type: '方案' },
          { name: '客户反馈表', type: '表格' },
          { name: '流程优化清单', type: '清单' }
        ],
        estimatedTime: '3小时'
      },
      {
        day: 7,
        title: '正式运营与客户维护',
        tasks: [
          '全面开展文案写作服务',
          '建立客户档案和项目档案',
          '制定长期客户维护计划'
        ],
        resources: [
          { name: '正式运营指南', type: '指南' },
          { name: '档案管理表格', type: '表格' },
          { name: '客户维护计划', type: '计划' }
        ],
        estimatedTime: '2小时'
      }
    ]
  }

  // 默认计划生成函数
  const generateDefaultPlan = (business: any) => {
    return [
      {
        day: 1,
        title: '基础调研与准备',
        tasks: [
          `了解${business?.name}行业的基本情况`,
          '研究目标客户群体和需求',
          '分析竞争对手的优势和劣势'
        ],
        resources: [
          { name: '行业分析报告', type: '文档' },
          { name: '客户调研问卷', type: '表格' },
          { name: '竞品分析框架', type: '模板' }
        ],
        estimatedTime: '2小时'
      },
      {
        day: 2,
        title: '技能提升与学习',
        tasks: [
          `学习${business?.name}所需的核心技能`,
          '参加相关培训或在线课程',
          '练习实际操作技能'
        ],
        resources: [
          { name: '技能学习指南', type: '指南' },
          { name: '在线课程推荐', type: '清单' },
          { name: '技能练习计划', type: '计划' }
        ],
        estimatedTime: '3小时'
      },
      {
        day: 3,
        title: '服务内容设计',
        tasks: [
          '设计核心服务内容和流程',
          '制定服务标准和质量要求',
          '准备服务所需的工具和材料'
        ],
        resources: [
          { name: '服务设计指南', type: '指南' },
          { name: '服务标准模板', type: '模板' },
          { name: '工具材料清单', type: '清单' }
        ],
        estimatedTime: '2小时'
      },
      {
        day: 4,
        title: '定价策略与盈利模式',
        tasks: [
          '调研市场价格水平',
          '制定自己的定价策略',
          '设计不同的服务套餐和价格'
        ],
        resources: [
          { name: '定价策略指南', type: '指南' },
          { name: '市场调研表', type: '表格' },
          { name: '套餐设计模板', type: '模板' }
        ],
        estimatedTime: '2小时'
      },
      {
        day: 5,
        title: '品牌建设与推广',
        tasks: [
          '设计个人品牌形象和标识',
          '创建线上展示平台',
          '准备推广材料和内容'
        ],
        resources: [
          { name: '品牌建设指南', type: '指南' },
          { name: '线上平台搭建教程', type: '教程' },
          { name: '推广材料模板', type: '模板' }
        ],
        estimatedTime: '3小时'
      },
      {
        day: 6,
        title: '客户获取与服务流程',
        tasks: [
          '制定客户获取策略',
          '设计客户服务流程',
          '准备客户沟通和咨询话术'
        ],
        resources: [
          { name: '客户获取策略', type: '策略' },
          { name: '服务流程设计', type: '流程图' },
          { name: '沟通话术模板', type: '模板' }
        ],
        estimatedTime: '2小时'
      },
      {
        day: 7,
        title: '试运营与优化',
        tasks: [
          '开展试运营活动',
          '收集客户反馈',
          '优化服务和流程'
        ],
        resources: [
          { name: '试运营方案', type: '方案' },
          { name: '客户反馈表', type: '表格' },
          { name: '优化指南', type: '指南' }
        ],
        estimatedTime: '2小时'
      }
    ]
  }

  const handleDayToggle = (day: number) => {
    let newExpandedDay
    if (expandedDay === day) {
      newExpandedDay = null
    } else {
      newExpandedDay = day
    }
    setExpandedDay(newExpandedDay)
    // 保存状态到localStorage
    saveToLocalStorage({
      selectedBusiness,
      plan,
      currentDay,
      expandedDay: newExpandedDay,
      completedDays
    })
  }

  const handleDayComplete = (day: number) => {
    let newCompletedDays
    if (completedDays.includes(day)) {
      newCompletedDays = completedDays.filter(d => d !== day)
    } else {
      newCompletedDays = [...completedDays, day]
    }
    setCompletedDays(newCompletedDays)
    // 保存状态到localStorage
    saveToLocalStorage({
      selectedBusiness,
      plan,
      currentDay,
      expandedDay,
      completedDays: newCompletedDays
    })
  }

  const handleNextDay = () => {
    if (currentDay < 7) {
      const newCurrentDay = currentDay + 1
      setCurrentDay(newCurrentDay)
      setExpandedDay(newCurrentDay)
      // 保存状态到localStorage
      saveToLocalStorage({
        selectedBusiness,
        plan,
        currentDay: newCurrentDay,
        expandedDay: newCurrentDay,
        completedDays
      })
    }
  }

  const handlePrevDay = () => {
    if (currentDay > 1) {
      const newCurrentDay = currentDay - 1
      setCurrentDay(newCurrentDay)
      setExpandedDay(newCurrentDay)
      // 保存状态到localStorage
      saveToLocalStorage({
        selectedBusiness,
        plan,
        currentDay: newCurrentDay,
        expandedDay: newCurrentDay,
        completedDays
      })
    }
  }

  return (
    <div className="fade-in">
      <Navigation />

      <section className="section">
        <div className="container">
          <div className="text-center mb-8">
            <p className="section-subtitle">
              选择感兴趣的FIRE，AI为你生成详细的7天启动计划一步步教你赚钱
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* FIRE选择 */}
            <div className="card slide-in-left">
              <div className="card-header">
                <p className="card-subtitle">点击选择，获取详细拆解方案</p>
              </div>
              <div className="space-y-4">
                {businessOptions.map((business) => (
                  <div 
                    key={business.id}
                    className={`business-card ${selectedBusiness === business.id ? 'selected' : ''}`}
                    onClick={() => {
                      setSelectedBusiness(business.id)
                      // 清除表单错误
                      setFormError('')
                      // 保存状态到localStorage
                      saveToLocalStorage({
                        selectedBusiness: business.id,
                        plan,
                        currentDay,
                        expandedDay,
                        completedDays
                      })
                    }}
                  >
                    <div className="business-card-header">
                      <div className="business-info">
                        <h3 className="business-name">{business.name}</h3>
                        <div className="business-meta">
                          <span className={`difficulty difficulty-${business.difficulty}`}>
                            {business.difficulty}难度
                          </span>
                          <span className="time">{business.time}</span>
                          <span className="income">{business.income}</span>
                        </div>
                      </div>
                    </div>
                    <div className="business-description">
                      {business.description}
                    </div>
                    <div className="business-details">
                      <div className="business-detail-section">
                        <div className="detail-label">所需技能</div>
                        <div className="detail-tags">
                          {business.skills.map((skill, index) => (
                            <span key={index} className="detail-tag skill-tag">{skill}</span>
                          ))}
                        </div>
                      </div>
                      <div className="business-detail-section">
                        <div className="detail-label">推荐平台</div>
                        <div className="detail-tags">
                          {business.platforms.map((platform, index) => (
                            <span key={index} className="detail-tag platform-tag">{platform}</span>
                          ))}
                        </div>
                      </div>
                      <div className="business-detail-section">
                        <div className="detail-label">分类标签</div>
                        <div className="detail-tags">
                          <span className="detail-tag category-tag">{business.category}</span>
                          {business.tags.map((tag, index) => (
                            <span key={index} className="detail-tag tag">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* 错误提示 */}
              {formError && (
                <div className="form-error mt-3 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                  {formError}
                </div>
              )}
              
              <button 
                className="btn-primary w-full mt-6" 
                onClick={handleGeneratePlan}
                disabled={!selectedBusiness || isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <div className="spinner mr-2"></div>
                    AI正在生成计划...
                  </span>
                ) : '生成7天启动计划'}
              </button>
            </div>

            {/* 7天计划展示 */}
            <div className={`card slide-in-right ${plan ? 'show' : ''}`}>
              <div className="card-header">
                <h2 className="card-title">7天启动计划</h2>
                <p className="card-subtitle">每天只需几步，7天开启FIRE之旅</p>
              </div>
              
              {isLoading ? (
                <Skeleton type="plan" />
              ) : plan ? (
                <div>
                  {/* 计划概览 */}
                  <div className="plan-overview mb-6">
                    <h3 className="font-bold text-lg mb-2">计划概览</h3>
                    <p className="text-text-secondary mb-4">{plan.overview}</p>
                    <div className="plan-stats grid grid-cols-2 gap-4">
                      <div className="stat-item bg-gray-50 p-3 rounded-lg">
                        <span className="stat-label block text-sm text-gray-600">预计月收入</span>
                        <span className="stat-value block font-bold text-lg">{businessOptions.find(b => b.id === plan.business)?.income}</span>
                      </div>
                      <div className="stat-item bg-gray-50 p-3 rounded-lg">
                        <span className="stat-label block text-sm text-gray-600">每日投入时间</span>
                        <span className="stat-value block font-bold text-lg">{businessOptions.find(b => b.id === plan.business)?.time}</span>
                      </div>
                      <div className="stat-item bg-gray-50 p-3 rounded-lg">
                        <span className="stat-label block text-sm text-gray-600">技能要求</span>
                        <span className="stat-value block font-bold text-sm">{businessOptions.find(b => b.id === plan.business)?.skills.slice(0, 2).join('、')}</span>
                      </div>
                      <div className="stat-item bg-gray-50 p-3 rounded-lg">
                        <span className="stat-label block text-sm text-gray-600">推荐平台</span>
                        <span className="stat-value block font-bold text-sm">{businessOptions.find(b => b.id === plan.business)?.platforms.slice(0, 2).join('、')}</span>
                      </div>
                    </div>
                  </div>

                  {/* 进度指示器 */}
                  <div className="progress-indicator mb-6">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">完成进度</span>
                      <span className="text-sm font-medium">{completedDays.length}/7 天</span>
                    </div>
                    <div className="progress-bar">
                      <div 
                        className="progress-fill" 
                        style={{ width: `${(completedDays.length / 7) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* 日期导航 */}
                  <div className="day-navigation mb-6">
                    <div className="flex justify-between items-center">
                      <button 
                        className="btn-nav" 
                        onClick={handlePrevDay}
                        disabled={currentDay === 1}
                      >
                        ← 前一天
                      </button>
                      <h3 className="font-bold text-lg">第 {currentDay} 天</h3>
                      <button 
                        className="btn-nav" 
                        onClick={handleNextDay}
                        disabled={currentDay === 7}
                      >
                        后一天 →
                      </button>
                    </div>
                  </div>

                  {/* 每日计划 */}
                  <div className="space-y-4">
                    {plan.days.map((day: any) => (
                      <div 
                        key={day.day}
                        className={`day-card ${currentDay === day.day ? 'active' : ''} ${expandedDay === day.day ? 'expanded' : ''}`}
                      >
                        <div 
                          className="day-card-header"
                          onClick={() => handleDayToggle(day.day)}
                        >
                          <div className="day-number">
                            {completedDays.includes(day.day) ? '✓' : day.day}
                          </div>
                          <div className="day-title">{day.title}</div>
                          <div className="day-time">{day.estimatedTime}</div>
                        </div>
                        
                        {expandedDay === day.day && (
                          <div className="day-card-content">
                            <div className="day-tasks">
                              <h4 className="font-medium mb-2">今日任务</h4>
                              <ul className="task-list">
                                {day.tasks.map((task: string, index: number) => (
                                  <li key={index} className="task-item">
                                    <span className="task-bullet">•</span>
                                    {task}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            <div className="day-actions mt-4">
                              <button 
                                className={`btn-complete ${completedDays.includes(day.day) ? 'completed' : ''}`}
                                onClick={() => handleDayComplete(day.day)}
                              >
                                {completedDays.includes(day.day) ? '已完成 ✓' : '标记为完成'}
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">📋</div>
                  <h3 className="text-xl font-bold mb-2">选择FIRE获取计划</h3>
                  <p className="text-text-secondary">选择一个FIRE，获取详细的7天启动计划</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


// 保留第一个简化版本，删除重复的完整版本

// 页面过渡动画组件
// const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => { // 注释掉：未使用的组件
//   const location = useLocation()
//   const [displayLocation, setDisplayLocation] = useState(location)
//   const [transitionStage, setTransitionStage] = useState('fadeIn')

//   useEffect(() => {
//     if (location !== displayLocation) {
//       setTransitionStage('fadeOut')
//     }
//   }, [location, displayLocation])

//   return (
//     <div className={`page-transition ${transitionStage}`} onAnimationEnd={() => {
//       if (transitionStage === 'fadeOut') {
//         setTransitionStage('fadeIn')
//         setDisplayLocation(location)
//       }
//     }}>
//       {children}
//     </div>
//   )
// }

// App组件
const App: React.FC = () => {
  return (
    <div className="apple-app">
      <Router future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true
      }}>
      <Routes>
        <Route path="/" element={
            <HomePage />
        } />
        <Route path="/skill-finder" element={
            <SkillFinder />
        } />
        <Route path="/business-planner" element={

            <BusinessPlanner />
     
        } />
        
        <Route path="/community" element={

            <WeChatCommunity />
        } />

      </Routes>
      </Router>
    </div>
  )
}

export default App

export const AppWithAuth: React.FC = () => {
  return (
    <AuthProvider>
      <App />
      <LoginModal />
      <RegisterModal />
    </AuthProvider>
  );
}