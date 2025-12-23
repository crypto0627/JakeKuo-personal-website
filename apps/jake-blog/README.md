<div align="center">
<h1>Blog</h1>

<img src="./public/JakeKuo.png" width="50%" height="50%"></img>

</div>

# Description

Use to record my posts with software technical:
- vercel: cloud app deployment place -> locate in HongKong
- nextjs: fullstackk app framework
- cloudflare: domain DNS record
- mongodb atlas: noSQL online db -> locate in HongKong

# Technical problem

- Prod使用MongoDB Atlas + Vervel serverless -> cold start + 跨州網路延遲
- Server components 每次Click都要打MongoDB -> 首頻等待TTFB
- prefetch沒生效，導致UX很慢

# 優化方向
- 使用ISR: Nextjs -> export const revalidate = 300; // 5 分鐘
- 將「增加view」的操作拆到async的fire-and-forgot
- 確保MongoDB client可以global用，不需要每次操作都連，減少cold start SSL handshake
- 調整mongodb connectTimeoutMS、maxPoolSize避免超時
- 
