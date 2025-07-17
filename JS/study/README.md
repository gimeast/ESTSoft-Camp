# 카카오 동영상 검색 API를 활용한 YouTube 클론 서비스 (무한 스크롤)

## 🎯 학습 목표

-   카카오 동영상 검색 API 연동 및 데이터 활용
-   무한 스크롤(Infinite Scroll) 구현을 위한 Intersection Observer 사용
-   비동기 통신(Fetch API) 및 에러 처리
-   동적 UI 생성 및 조건부 렌더링을 통한 사용자 경험 개선

## 📁 프로젝트 구조

video-search/
├── index.html
├── style.css (필요시 추가)
└── script.js

📊 API 응답 구조 (핵심 필드 예시)
{
    "documents": [
        {
        "title": "동영상 제목",
        "url": "동영상 상세 페이지 URL",
        "datetime": "2023-01-01T12:00:00.000+09:00", // ISO 8601
        "play_time": 120, // 동영상 재생 시간 (초 단위)
        "thumbnail": "썸네일 이미지 URL",
        "author": "채널명 또는 업로더"
        }
    ],
    "meta": {
        "total_count": 500, // 전체 검색 결과 수
        "pageable_count": 500, // 페이지네이션 가능한 결과 수 (page 매개변수 값에 따라 최대 1500)
        "is_end": false // 현재 페이지가 마지막 페이지인지 여부 (true/false)
    }
}
