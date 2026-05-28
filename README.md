# ✨ Nền Tảng Phỏng Vấn Full-Stack ✨

<p align="center">
  Một nền tảng phỏng vấn lập trình trực tuyến hiện đại với video call, code editor thời gian thực và hệ thống đánh giá tự động.
</p>

---

# 🚀 Tính Năng Nổi Bật

## 🧑‍💻 Trình Soạn Thảo Code Chuẩn VSCode

* Editor mạnh mẽ với giao diện và trải nghiệm tương tự VSCode
* Hỗ trợ highlight syntax và coding realtime

## 🔐 Xác Thực Người Dùng

* Đăng nhập / đăng ký an toàn với Clerk
* Quản lý phiên đăng nhập hiện đại

## 🎥 Phỏng Vấn Video 1-1

* Tạo phòng phỏng vấn trực tuyến
* Hỗ trợ:

  * 🎤 Bật / tắt microphone
  * 📷 Bật / tắt camera
  * 🖥️ Chia sẻ màn hình
  * 🎬 Ghi hình phiên phỏng vấn

## 💬 Chat Thời Gian Thực

* Nhắn tin trực tiếp giữa interviewer và candidate
* Đồng bộ realtime

## ⚙️ Chạy Code An Toàn

* Thực thi code trong môi trường cô lập
* Hỗ trợ nhiều test case

## 🎯 Đánh Giá Tự Động

* Tự động xác định:

  * ✅ Thành công
  * ❌ Thất bại
* Hiển thị kết quả trực quan

## 🎉 Hiệu Ứng & Thông Báo

* Confetti khi vượt qua test case
* Notification khi code fail

## 🧩 Chế Độ Luyện Tập

* Trang Practice Problems riêng
* Coding cá nhân không cần phỏng vấn

## 🔒 Giới Hạn Thành Viên Trong Phòng

* Mỗi phòng chỉ cho phép tối đa 2 người tham gia

## 🧠 Background Jobs

* Xử lý tác vụ bất đồng bộ với Inngest

## 🧰 Backend REST API

* Xây dựng bằng:

  * Node.js
  * Express.js

## ⚡ Data Fetching & Caching

* Tối ưu hiệu năng với TanStack Query

## 🤖 Code Review Tự Động

* Tích hợp CodeRabbit để:

  * Phân tích Pull Request
  * Tối ưu source code

## 🧑‍💻 Quy Trình GitHub Chuyên Nghiệp

* Làm việc với:

  * Branches
  * Pull Requests
  * Merge Workflow

## 🚀 Deployment

* Deploy trên Sevalla
* Tối ưu cho free-tier hosting

---

# 🏗️ Công Nghệ Sử Dụng

## Frontend

* React
* Vite
* TailwindCSS
* TanStack Query

## Backend

* Node.js
* Express.js
* MongoDB

## Realtime & Video

* Stream Video SDK
* WebRTC

## Authentication

* Clerk

## Async Jobs

* Inngest

---

# 🧪 Cấu Hình Biến Môi Trường

## 📦 Backend (`/backend`)

```env
PORT=3000
NODE_ENV=development

DB_URL=your_mongodb_connection_url

INNGEST_EVENT_KEY=your_inngest_event_key
INNGEST_SIGNING_KEY=your_inngest_signing_key

STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret

CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

CLIENT_URL=http://localhost:5173
```

---

## 🎨 Frontend (`/frontend`)

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

VITE_API_URL=http://localhost:3000/api

VITE_STREAM_API_KEY=your_stream_api_key
```

---

# 🔧 Cài Đặt & Chạy Dự Án

## 1️⃣ Clone Repository

```bash
git clone <your_repository_url>
```

---

# ▶️ Chạy Backend

```bash
cd backend

npm install

npm run dev
```

Backend sẽ chạy tại:

```bash
http://localhost:3000
```

---

# ▶️ Chạy Frontend

```bash
cd frontend

npm install

npm run dev
```

Frontend sẽ chạy tại:

```bash
http://localhost:5173
```

---

# 📂 Cấu Trúc Dự Án

```bash
fullstack-interview-platform/
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   └── services/
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── hooks/
│
└── README.md
```

---

# 🌟 Mục Tiêu Dự Án

Xây dựng một nền tảng phỏng vấn lập trình trực tuyến hiện đại giúp:

* Tối ưu quy trình tuyển dụng
* Đánh giá kỹ năng lập trình realtime
* Hỗ trợ coding interview chuyên nghiệp
* Tạo trải nghiệm gần giống các nền tảng lớn như:

  * LeetCode Interview
  * HackerRank
  * CodeSignal

---

# 👨‍💻 Tác Giả

Phát triển bởi TXCuong với định hướng xây dựng hệ thống scalable và realtime hiện đại 🚀
