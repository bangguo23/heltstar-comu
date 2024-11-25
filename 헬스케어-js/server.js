const express = require('express');
const path = require('path');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const app = express();
const PORT = 3000;

// 데이터베이스 연결
connectDB();

app.use(express.json());

// 정적 파일 제공 경로 설정
app.use(express.static(path.join(__dirname, 'D:/헬스케어-js')));

// 기본 라우트에서 profile.html 제공
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'D:/헬스케어-js', 'profile.html'));
});

// 사용자 관련 API 라우트 사용
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
