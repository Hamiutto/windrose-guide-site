# Vercel 部署指南

## 🚀 部署状态
✅ **本地构建成功**  
✅ **所有依赖已优化**  
✅ **配置文件已创建**  

## 📋 修复的问题

### 1. 依赖优化
- 移除了可能导致问题的 `@astrojs/sitemap` 
- 简化了 Astro 配置
- 确保所有依赖版本兼容

### 2. 构建配置
- 创建了 `.nvmrc` 文件指定 Node.js 18
- 优化了 `package.json` 脚本
- 添加了 `engines` 字段

### 3. Vercel 配置
- 使用 `@vercel/static-build` 构建器
- 明确指定输出目录为 `dist`
- 版本 2 配置格式

## 🔧 当前配置

### package.json
```json
{
  "engines": {
    "node": ">=18.0.0"
  },
  "scripts": {
    "build": "astro build"
  }
}
```

### vercel.json
```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist"
      }
    }
  ]
}
```

### .nvmrc
```
18
```

## 🚀 部署步骤

1. **推送到 GitHub**:
   ```bash
   git add .
   git commit -m "Fix Vercel deployment issues"
   git push origin main
   ```

2. **在 Vercel 中部署**:
   - 连接 GitHub 仓库
   - Vercel 会自动检测配置
   - 使用默认设置部署

3. **验证部署**:
   - 检查构建日志
   - 确认网站正常访问

## 🐛 如果仍然失败

如果仍然遇到错误 126，尝试以下步骤：

1. **在 Vercel 项目设置中**:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

2. **检查 Vercel 构建日志**:
   - 查看具体的错误信息
   - 确认 Node.js 版本是否正确

3. **备用方案**:
   - 删除 `vercel.json`
   - 让 Vercel 自动检测 Astro 项目
   - 使用 Framework Preset: "Astro"

## ✅ 验证清单

- [x] 本地 `npm run build` 成功
- [x] `dist/` 目录生成完整
- [x] 所有页面正确渲染
- [x] 无 TypeScript 错误
- [x] 无 Tailwind CSS 错误
- [x] 配置文件格式正确