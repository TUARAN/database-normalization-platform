// 数据库表结构类型定义
export interface TableField {
  id: string
  name: string
  type: string
  isPrimaryKey: boolean
  isForeignKey: boolean
  isNullable: boolean
  defaultValue?: string
  description?: string
}

export interface TableSchema {
  id: string
  name: string
  fields: TableField[]
  x?: number
  y?: number
  width?: number
  height?: number
  hasViolation?: boolean
}

// 范式违规类型
export interface NormalizationViolation {
  id: string
  type: '1NF' | '2NF' | '3NF' | 'BCNF'
  severity: 'error' | 'warning' | 'info'
  message: string
  description: string
  affectedFields: string[]
  suggestion: string
  fixSteps: string[]
}

// AI分析结果
export interface AnalysisResult {
  violations: NormalizationViolation[]
  currentNormalForm: string
  suggestions: string[]
  explanation: string
  confidence: number
}

// 学习路径
export interface LearningStep {
  id: string
  title: string
  description: string
  type: 'concept' | 'practice' | 'quiz' | 'project'
  estimatedTime: number
  prerequisites: string[]
  resources: string[]
  completed: boolean
}

export interface LearningPath {
  id: string
  title: string
  description: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  steps: LearningStep[]
  progress: number
}

// 用户相关类型
export interface UserProfile {
  id: string
  username: string
  email: string
  experience: 'beginner' | 'intermediate' | 'advanced'
  goals: string[]
  timeAvailable: number
  learningStyle: 'visual' | 'auditory' | 'kinesthetic' | 'mixed'
  preferences: {
    language: string
    theme: 'light' | 'dark'
    notifications: boolean
  }
}

// 协作相关类型
export interface CollaborationSession {
  id: string
  name: string
  participants: UserProfile[]
  tableSchema: TableSchema[]
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

// 游戏化元素
export interface Achievement {
  id: string
  title: string
  description: string
  icon: string
  points: number
  unlocked: boolean
  unlockedAt?: Date
}

export interface UserProgress {
  userId: string
  totalPoints: number
  level: number
  achievements: Achievement[]
  completedLessons: string[]
  currentStreak: number
  longestStreak: number
}