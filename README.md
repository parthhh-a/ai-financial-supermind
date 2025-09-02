# 🧠 AI Financial Supermind 💰  
*A dual-mode AI finance platform: Personal Wealth Advisor + Autonomous Hedge Fund Lab*  

![status](https://img.shields.io/badge/status-MVP%20in%20progress-blue)  
![docker](https://img.shields.io/badge/Docker-ready-brightgreen)  
![license](https://img.shields.io/badge/license-MIT-lightgrey)  

---

## 🚀 Project Pitch
**AI Financial Supermind** is an **enterprise-grade full-stack AI project** that demonstrates modern AI + infra skills.  
It runs in **two modes**:

1. **Personal Wealth Advisor** 🧾  
   - LLM-powered chat with **RAG** (Retrieval-Augmented Generation) over financial docs.  
   - Portfolio risk scoring and anomaly detection on transactions.  
   - Dashboards (Superset) for spending, risk, and goals.  

2. **Autonomous Hedge Fund Lab** 📈  
   - Kafka-driven simulated market ticks and trading.  
   - Research Agent (RAG over filings/news).  
   - Strategy Agent (momentum/mean-reversion baseline, later RL).  
   - Risk Manager Agent (exposure limits, VaR checks).  
   - Real-time PnL + exposure dashboards.  

This project proves:  
✅ AI engineering (LLMs, RAG, anomaly detection, basic ML)  
✅ Full-stack (Go, Angular, Flutter)  
✅ Cloud-native infra (Kubernetes, Kafka, Redis, Keycloak, Superset, Jenkins)  
✅ Secure design (RBAC, JWT/2FA, WAF, audit trails)  

---

## 🏗️ Architecture

```
[ Angular / Flutter Apps ]  <--OIDC-->  [ Keycloak ]
        |                                   |
        v                                   |
   [ API Gateway (APISix) ] -----------------+
        |
        v
   [ Go Microservices ]
     ├─ auth-proxy (JWT, RBAC, /me)
     ├─ qna-rag (LLM + ES retrieval)
     ├─ portfolio-risk (PnL, VaR, anomaly)
     ├─ market-ingest (Kafka ticks → DB)
     ├─ strategy-lab (baseline strategies)
     └─ compliance-rationale (logs, alerts)

   [ Infra ]: PostgreSQL, Redis, Kafka, ElasticSearch, MinIO
   [ Analytics ]: Superset dashboards
   [ DevOps ]: Docker, Kubernetes, Jenkins, Prometheus
```

---

## ⚡ Quickstart

### 1. Clone
```bash
git clone https://github.com/parthhh-a/ai-financial-supermind.git
cd ai-financial-supermind
```

### 2. Bring up infra
```bash
docker compose -f infra/compose/docker-compose.yml up -d
```
Services started: **Postgres, Redis, Kafka, Keycloak, Superset, etc.**

- Keycloak → http://localhost:8080 (admin/admin123)  
- Superset → http://localhost:8088 (admin/admin123)  

### 3. Run the Auth Proxy
```bash
cd services/auth-proxy
go run main.go
```
Check:  
```bash
curl http://localhost:8081/me
```

---

## 🔐 Security (baseline MVP)
- Keycloak with roles: `RetailUser`, `HFAnalyst`, `Admin`  
- 2FA (TOTP) enabled in realm config  
- JWT validation in Go auth-proxy  
- API Gateway (planned) with TLS, rate limiting, schema validation  
- Audit logs to ElasticSearch  

---

## 📊 Dashboards
Superset comes pre-wired to Postgres:  
- Wealth Advisor: Spending vs Income, Risk by Category  
- Hedge Fund Lab: Real-time PnL, Exposure Heatmap, Alerts  

---

## 🛠️ Tech Stack
- **Frontend**: Angular, Flutter  
- **Backend**: Go (Gin), Python (ML agents)  
- **Infra**: Kafka, Redis, PostgreSQL, ElasticSearch, MinIO  
- **Auth**: Keycloak (OIDC, RBAC, 2FA)  
- **Analytics**: Superset  
- **DevOps**: Docker, Kubernetes, Jenkins, Prometheus  

---

## 🗺️ Roadmap
- [ ] Angular OIDC login + chat shell  
- [ ] Flutter mobile prototype  
- [ ] RAG with vector embeddings (ES/FAISS)  
- [ ] Baseline trading strategy + backtest CLI  
- [ ] Risk Manager agent with approval policies  
- [ ] Prometheus + Grafana observability  
- [ ] Jenkins pipeline + SonarQube quality gates  

---

## 👤 Author
**Parth Ashtikar**  
AI & Full-Stack Engineer  
- GitHub: [parthhh-a](https://github.com/parthhh-a)  
- LinkedIn: *(add link)*  

---

## 📄 License
MIT – free to use, fork, learn.
