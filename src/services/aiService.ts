import axios from 'axios'
import type { TableSchema, AnalysisResult, LearningPath, UserProfile } from '@/types'

export class AIService {
  private apiKey: string
  private baseURL: string

  constructor() {
    this.apiKey = import.meta.env.VITE_OPENAI_API_KEY || ''
    this.baseURL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000'
  }

  async analyzeTableSchema(schema: TableSchema[]): Promise<AnalysisResult> {
    try {
      const response = await axios.post(`${this.baseURL}/api/ai/analyze-schema`, {
        schema,
        prompt: this.generateAnalysisPrompt(schema)
      })
      return response.data
    } catch (error) {
      console.error('AI分析失败:', error)
      throw new Error('AI分析服务暂时不可用')
    }
  }

  async generateExplanation(concept: string, context: any): Promise<string> {
    try {
      const prompt = `
      请用通俗易懂的语言解释数据库范式概念：${concept}
      结合具体场景：${JSON.stringify(context)}
      
      要求：
      - 使用生活化的比喻
      - 提供具体例子
      - 循序渐进的解释
      - 用中文回答
      `

      const response = await axios.post(`${this.baseURL}/api/ai/explain`, {
        prompt,
        concept,
        context
      })
      
      return response.data.explanation
    } catch (error) {
      console.error('生成解释失败:', error)
      return '抱歉，AI解释服务暂时不可用，请稍后再试。'
    }
  }

  async generatePracticeScenario(level: string): Promise<any> {
    try {
      const prompt = `
      为${level}水平的学习者生成数据库范式练习场景：
      
      包含：
      1. 真实业务背景（如电商、图书馆、学校管理系统等）
      2. 存在范式问题的表结构
      3. 分步解决指导
      4. 扩展思考题
      
      请用中文生成，确保内容实用且有教育意义。
      `

      const response = await axios.post(`${this.baseURL}/api/ai/generate-scenario`, {
        prompt,
        level
      })
      
      return response.data
    } catch (error) {
      console.error('生成练习场景失败:', error)
      throw new Error('练习场景生成服务暂时不可用')
    }
  }

  async generatePersonalizedPath(userProfile: UserProfile): Promise<LearningPath> {
    try {
      const prompt = `
      基于用户画像生成个性化学习路径：
      - 编程经验：${userProfile.experience}
      - 学习目标：${userProfile.goals.join(', ')}
      - 可用时间：${userProfile.timeAvailable}小时/周
      - 学习风格：${userProfile.learningStyle}
      
      生成包含以下内容的学习路径：
      1. 知识点序列（从基础到高级）
      2. 预估学习时间
      3. 实践项目建议
      4. 检查点设置
      
      请确保路径适合中文用户，内容循序渐进。
      `

      const response = await axios.post(`${this.baseURL}/api/ai/generate-path`, {
        prompt,
        userProfile
      })
      
      return response.data
    } catch (error) {
      console.error('生成学习路径失败:', error)
      throw new Error('个性化路径生成服务暂时不可用')
    }
  }

  private generateAnalysisPrompt(schema: TableSchema[]): string {
    return `
    请分析以下数据库表结构的范式问题：
    ${JSON.stringify(schema, null, 2)}
    
    请提供：
    1. 违反的范式类型（1NF、2NF、3NF、BCNF）
    2. 具体问题描述
    3. 修复建议和步骤
    4. 通俗易懂的中文解释
    5. 置信度评分（0-1）
    
    返回格式为JSON，包含violations数组、currentNormalForm、suggestions数组、explanation字符串和confidence数字。
    `
  }

  async chatWithAI(message: string, context?: any): Promise<string> {
    try {
      const response = await axios.post(`${this.baseURL}/api/ai/chat`, {
        message,
        context,
        systemPrompt: '你是一个专业的数据库范式学习助手，请用中文回答问题，语言要通俗易懂，适合初学者理解。'
      })
      
      return response.data.response
    } catch (error) {
      console.error('AI对话失败:', error)
      return '抱歉，我现在无法回答您的问题，请稍后再试。'
    }
  }
}

export const aiService = new AIService()