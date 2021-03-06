const movies = [{
    "id": 0,
    "name": "편지",
    "attendance": 724747,
    "date": "1997-11-22",
    "like": 10,
    "comment": 206,
    "genre": "핑크 영화",
    "rating": "15세 이상 관람가",
    "director": "류승완"
}, {
    "id": 1,
    "name": "접속",
    "attendance": 674933,
    "date": "1997-09-13",
    "like": 0,
    "comment": 564,
    "genre": "하이스트 영화",
    "rating": "12세 이상 관람가",
    "director": "강우석"
}, {
    "id": 2,
    "name": "비트",
    "attendance": 349781,
    "date": "1997-05-03",
    "like": 1,
    "comment": 61,
    "genre": "실험 영화",
    "rating": "전체관람가",
    "director": "강우석"
}, {
    "id": 3,
    "name": "할렐루야",
    "attendance": 310920,
    "date": "1997-08-09",
    "like": 0,
    "comment": 868,
    "genre": "교육 영화",
    "rating": "15세 이상 관람가",
    "director": "스티븐 스필버그"
}, {
    "id": 4,
    "name": "깡패수업",
    "attendance": 176757,
    "date": "1996-12-21",
    "like": 10,
    "comment": 690,
    "genre": "코미디 영화",
    "rating": "12세 이상 관람가",
    "director": "장진"
}, {
    "id": 5,
    "name": "체인지",
    "attendance": 167235,
    "date": "1997-01-18",
    "like": 10,
    "comment": 575,
    "genre": "종교 영화",
    "rating": "15세 이상 관람가",
    "director": "강제규"
}, {
    "id": 6,
    "name": "약속",
    "attendance": 661174,
    "date": "1998-11-14",
    "like": 1,
    "comment": 768,
    "genre": "핑크 영화",
    "rating": "제한관람가",
    "director": "이창동"
}, {
    "id": 7,
    "name": "여고괴담",
    "attendance": 621032,
    "date": "1998-05-30",
    "like": 6,
    "comment": 218,
    "genre": "필름 누아르",
    "rating": "청소년 관람불가",
    "director": "강제규"
}, {
    "id": 8,
    "name": "퇴마록",
    "attendance": 419201,
    "date": "1998-08-15",
    "like": 1,
    "comment": 343,
    "genre": "괴수 영화",
    "rating": "15세 이상 관람가",
    "director": "류승완"
}, {
    "id": 9,
    "name": "정사",
    "attendance": 304666,
    "date": "1998-10-03",
    "like": 1,
    "comment": 716,
    "genre": "공포 영화",
    "rating": "전체관람가",
    "director": "정지영"
}, {
    "id": 10,
    "name": "쉬리",
    "attendance": 2448399,
    "date": "1999-02-13",
    "like": 3,
    "comment": 535,
    "genre": "교육 영화",
    "rating": "제한관람가",
    "director": "김기덕"
}, {
    "id": 11,
    "name": "텔미썸씽",
    "attendance": 730000,
    "date": "1999-11-13",
    "like": 9,
    "comment": 632,
    "genre": "필름 누아르",
    "rating": "전체관람가",
    "director": "장진"
}, {
    "id": 12,
    "name": "용가리",
    "attendance": 500000,
    "date": "1999-07-17",
    "like": 5,
    "comment": 73,
    "genre": "교육 영화",
    "rating": "15세 이상 관람가",
    "director": "홍상수"
}, {
    "id": 13,
    "name": "해피엔드",
    "attendance": 464592,
    "date": "1999-12-11",
    "like": 0,
    "comment": 753,
    "genre": "필름 누아르",
    "rating": "제한관람가",
    "director": "임권택"
}, {
    "id": 14,
    "name": "자귀모",
    "attendance": 420000,
    "date": "1999-08-14",
    "like": 3,
    "comment": 461,
    "genre": "판타지 영화",
    "rating": "제한관람가",
    "director": "임권택"
}, {
    "id": 15,
    "name": "유령",
    "attendance": 365000,
    "date": "1999-07-31",
    "like": 7,
    "comment": 972,
    "genre": "다큐멘터리 영화",
    "rating": "15세 이상 관람가",
    "director": "강우석"
}, {
    "id": 16,
    "name": "링",
    "attendance": 332354,
    "date": "1999-06-12",
    "like": 6,
    "comment": 249,
    "genre": "패러디 영화",
    "rating": "15세 이상 관람가",
    "director": "나홍진"
}, {
    "id": 17,
    "name": "러브",
    "attendance": 174000,
    "date": "1999-09-18",
    "like": 6,
    "comment": 478,
    "genre": "전쟁 영화",
    "rating": "청소년 관람불가",
    "director": "정지영"
}, {
    "id": 18,
    "name": "노랑머리",
    "attendance": 117941,
    "date": "1999-06-26",
    "like": 8,
    "comment": 940,
    "genre": "하이스트 영화",
    "rating": "15세 이상 관람가",
    "director": "변영주"
}, {
    "id": 19,
    "name": "신장개업",
    "attendance": 100915,
    "date": "1999-05-01",
    "like": 5,
    "comment": 951,
    "genre": "가족 영화",
    "rating": "15세 이상 관람가",
    "director": "김택용"
}, {
    "id": 20,
    "name": "마요네즈",
    "attendance": 95875,
    "date": "1999-02-13",
    "like": 2,
    "comment": 850,
    "genre": "SF 영화",
    "rating": "전체관람가",
    "director": "장진"
}, {
    "id": 21,
    "name": "반칙왕",
    "attendance": 787423,
    "date": "2000-02-04",
    "like": 4,
    "comment": 279,
    "genre": "가족 영화",
    "rating": "전체관람가",
    "director": "강제규"
}, {
    "id": 22,
    "name": "비천무",
    "attendance": 717659,
    "date": "2000-07-01",
    "like": 3,
    "comment": 355,
    "genre": "공포 영화",
    "rating": "12세 이상 관람가",
    "director": "김택용"
}, {
    "id": 23,
    "name": "단적비연수",
    "attendance": 616349,
    "date": "2000-11-10",
    "like": 5,
    "comment": 463,
    "genre": "다큐멘터리 영화",
    "rating": "제한관람가",
    "director": "김택용"
}, {
    "id": 24,
    "name": "리베라메",
    "attendance": 530768,
    "date": "2000-11-11",
    "like": 9,
    "comment": 497,
    "genre": "패러디 영화",
    "rating": "12세 이상 관람가",
    "director": "이창동"
}, {
    "id": 25,
    "name": "동감",
    "attendance": 346279,
    "date": "2000-05-27",
    "like": 2,
    "comment": 368,
    "genre": "판타지 영화",
    "rating": "12세 이상 관람가",
    "director": "김기덕"
}, {
    "id": 26,
    "name": "가위",
    "attendance": 334364,
    "date": "2000-07-29",
    "like": 7,
    "comment": 412,
    "genre": "필름 누아르",
    "rating": "12세 이상 관람가",
    "director": "임권택"
}, {
    "id": 27,
    "name": "거짓말",
    "attendance": 303681,
    "date": "2000-01-08",
    "like": 6,
    "comment": 405,
    "genre": "SF 영화",
    "rating": "12세 이상 관람가",
    "director": "임권택"
}, {
    "id": 28,
    "name": "박하사탕",
    "attendance": 290352,
    "date": "2000-01-01",
    "like": 0,
    "comment": 296,
    "genre": "SF 영화",
    "rating": "15세 이상 관람가",
    "director": "홍상수"
}, {
    "id": 29,
    "name": "시월애",
    "attendance": 248597,
    "date": "2000-09-09",
    "like": 10,
    "comment": 194,
    "genre": "필름 누아르",
    "rating": "청소년 관람불가",
    "director": "봉준호"
}, {
    "id": 30,
    "name": "아나키스트",
    "attendance": 236900,
    "date": "2000-04-29",
    "like": 6,
    "comment": 144,
    "genre": "섹스플로이테이션",
    "rating": "전체관람가",
    "director": "임권택"
}, {
    "id": 31,
    "name": "미인",
    "attendance": 197015,
    "date": "2000-08-12",
    "like": 3,
    "comment": 537,
    "genre": "논픽션 영화",
    "rating": "전체관람가",
    "director": "박찬욱"
}, {
    "id": 32,
    "name": "인터뷰",
    "attendance": 157431,
    "date": "2000-04-11",
    "like": 6,
    "comment": 673,
    "genre": "교육 영화",
    "rating": "15세 이상 관람가",
    "director": "장진"
}, {
    "id": 33,
    "name": "하면된다",
    "attendance": 126368,
    "date": "2000-10-28",
    "like": 2,
    "comment": 594,
    "genre": "논픽션 영화",
    "rating": "제한관람가",
    "director": "봉준호"
}, {
    "id": 34,
    "name": "춘향뎐",
    "attendance": 110358,
    "date": "2000-01-29",
    "like": 8,
    "comment": 95,
    "genre": "청춘 영화",
    "rating": "15세 이상 관람가",
    "director": "최동훈"
}, {
    "id": 35,
    "name": "킬리만자로",
    "attendance": 95541,
    "date": "2000-05-20",
    "like": 6,
    "comment": 575,
    "genre": "SF 영화",
    "rating": "제한관람가",
    "director": "봉준호"
}, {
    "id": 36,
    "name": "오!수정",
    "attendance": 90257,
    "date": "2000-05-27",
    "like": 4,
    "comment": 61,
    "genre": "갱스터 영화",
    "rating": "12세 이상 관람가",
    "director": "최동훈"
}, {
    "id": 37,
    "name": "청춘",
    "attendance": 89604,
    "date": "2000-10-14",
    "like": 10,
    "comment": 499,
    "genre": "필름 누아르",
    "rating": "12세 이상 관람가",
    "director": "류승완"
}, {
    "id": 38,
    "name": "싸이렌",
    "attendance": 62135,
    "date": "2000-10-28",
    "like": 9,
    "comment": 771,
    "genre": "SF 영화",
    "rating": "제한관람가",
    "director": "나홍진"
}, {
    "id": 39,
    "name": "순애보",
    "attendance": 46148,
    "date": "2000-12-09",
    "like": 8,
    "comment": 979,
    "genre": "공포 영화",
    "rating": "제한관람가",
    "director": "이창동"
}, {
    "id": 40,
    "name": "신혼여행",
    "attendance": 36218,
    "date": "2000-03-11",
    "like": 0,
    "comment": 348,
    "genre": "갱스터 영화",
    "rating": "청소년 관람불가",
    "director": "변영주"
}, {
    "id": 41,
    "name": "섬",
    "attendance": 32137,
    "date": "2000-04-22",
    "like": 1,
    "comment": 85,
    "genre": "패러디 영화",
    "rating": "15세 이상 관람가",
    "director": "이창동"
}, {
    "id": 42,
    "name": "하피",
    "attendance": 26591,
    "date": "2000-07-22",
    "like": 1,
    "comment": 415,
    "genre": "패러디 영화",
    "rating": "12세 이상 관람가",
    "director": "임권택"
}, {
    "id": 43,
    "name": "비밀",
    "attendance": 22168,
    "date": "2000-06-03",
    "like": 9,
    "comment": 805,
    "genre": "다큐멘터리 영화",
    "rating": "12세 이상 관람가",
    "director": "류승완"
}, {
    "id": 44,
    "name": "물고기자리",
    "attendance": 15674,
    "date": "2000-10-21",
    "like": 4,
    "comment": 245,
    "genre": "호스티스 영화",
    "rating": "15세 이상 관람가",
    "director": "스티븐 스필버그"
}, {
    "id": 45,
    "name": "공포택시",
    "attendance": 14651,
    "date": "2000-09-30",
    "like": 5,
    "comment": 159,
    "genre": "공포 영화",
    "rating": "전체관람가",
    "director": "스티븐 스필버그"
}, {
    "id": 46,
    "name": "이프",
    "attendance": 13591,
    "date": "2000-06-24",
    "like": 0,
    "comment": 772,
    "genre": "교육 영화",
    "rating": "제한관람가",
    "director": "장진"
}, {
    "id": 47,
    "name": "천일동안(종합병원)",
    "attendance": 8881,
    "date": "2000-03-04",
    "like": 4,
    "comment": 257,
    "genre": "섹스플로이테이션",
    "rating": "15세 이상 관람가",
    "director": "강우석"
}, {
    "id": 48,
    "name": "건드레스",
    "attendance": 7128,
    "date": "2000-02-26",
    "like": 0,
    "comment": 156,
    "genre": "교육 영화",
    "rating": "청소년 관람불가",
    "director": "스티븐 스필버그"
}, {
    "id": 49,
    "name": "산책",
    "attendance": 7077,
    "date": "2000-03-04",
    "like": 7,
    "comment": 322,
    "genre": "호스티스 영화",
    "rating": "12세 이상 관람가",
    "director": "김지운"
}, {
    "id": 50,
    "name": "진실게임",
    "attendance": 6993,
    "date": "2000-03-18",
    "like": 5,
    "comment": 373,
    "genre": "갱스터 영화",
    "rating": "12세 이상 관람가",
    "director": "김기덕"
}, {
    "id": 51,
    "name": "베니싱트윈",
    "attendance": 6019,
    "date": "2000-09-23",
    "like": 5,
    "comment": 783,
    "genre": "호스티스 영화",
    "rating": "15세 이상 관람가",
    "director": "스티븐 스필버그"
}, {
    "id": 52,
    "name": "컷런스딥",
    "attendance": 5831,
    "date": "2000-12-15",
    "like": 3,
    "comment": 878,
    "genre": "하이스트 영화",
    "rating": "전체관람가",
    "director": "변영주"
}, {
    "id": 53,
    "name": "학교전설",
    "attendance": 3503,
    "date": "2000-01-01",
    "like": 2,
    "comment": 907,
    "genre": "하이스트 영화",
    "rating": "12세 이상 관람가",
    "director": "장진"
}, {
    "id": 54,
    "name": "정",
    "attendance": 2632,
    "date": "2000-06-17",
    "like": 7,
    "comment": 313,
    "genre": "청춘 영화",
    "rating": "청소년 관람불가",
    "director": "김기덕"
}, {
    "id": 55,
    "name": "사슬",
    "attendance": 2513,
    "date": "2000-10-07",
    "like": 0,
    "comment": 957,
    "genre": "교육 영화",
    "rating": "12세 이상 관람가",
    "director": "임권택"
}, {
    "id": 56,
    "name": "실제상황",
    "attendance": 2285,
    "date": "2000-06-24",
    "like": 0,
    "comment": 963,
    "genre": "코미디 영화",
    "rating": "제한관람가",
    "director": "이창동"
}, {
    "id": 57,
    "name": "구멍",
    "attendance": 1635,
    "date": "2000-03-04",
    "like": 5,
    "comment": 420,
    "genre": "패러디 영화",
    "rating": "전체관람가",
    "director": "류승완"
}, {
    "id": 58,
    "name": "봉자",
    "attendance": 949,
    "date": "2000-11-25",
    "like": 7,
    "comment": 537,
    "genre": "실험 영화",
    "rating": "제한관람가",
    "director": "류승완"
}, {
    "id": 59,
    "name": "스트라이커",
    "attendance": 938,
    "date": "2000-10-21",
    "like": 2,
    "comment": 203,
    "genre": "괴수 영화",
    "rating": "청소년 관람불가",
    "director": "홍상수"
}, {
    "id": 60,
    "name": "그림일기",
    "attendance": 765,
    "date": "2000-04-22",
    "like": 7,
    "comment": 420,
    "genre": "핑크 영화",
    "rating": "12세 이상 관람가",
    "director": "홍상수"
}, {
    "id": 61,
    "name": "깡패수업3",
    "attendance": 519,
    "date": "2000-03-04",
    "like": 3,
    "comment": 242,
    "genre": "핑크 영화",
    "rating": "청소년 관람불가",
    "director": "최동훈"
}, {
    "id": 62,
    "name": "집착(아티스트)",
    "attendance": 317,
    "date": "2000-11-01",
    "like": 3,
    "comment": 420,
    "genre": "판타지 영화",
    "rating": "12세 이상 관람가",
    "director": "장진"
}, {
    "id": 63,
    "name": "침향",
    "attendance": 197,
    "date": "2000-06-10",
    "like": 10,
    "comment": 503,
    "genre": "필름 누아르",
    "rating": "15세 이상 관람가",
    "director": "변영주"
}, {
    "id": 64,
    "name": "깡패법칙",
    "attendance": 114,
    "date": "2000-10-07",
    "like": 8,
    "comment": 503,
    "genre": "코미디 영화",
    "rating": "전체관람가",
    "director": "강우석"
}, {
    "id": 65,
    "name": "친구",
    "attendance": 2579950,
    "date": "2001-03-31",
    "like": 5,
    "comment": 470,
    "genre": "전쟁 영화",
    "rating": "전체관람가",
    "director": "박찬욱"
}, {
    "id": 66,
    "name": "조폭마누라",
    "attendance": 1466400,
    "date": "2001-09-28",
    "like": 4,
    "comment": 946,
    "genre": "괴수 영화",
    "rating": "전체관람가",
    "director": "김택용"
}, {
    "id": 67,
    "name": "두사부일체",
    "attendance": 1215900,
    "date": "2001-12-14",
    "like": 0,
    "comment": 410,
    "genre": "코미디 영화",
    "rating": "15세 이상 관람가",
    "director": "강우석"
}, {
    "id": 68,
    "name": "무사",
    "attendance": 873600,
    "date": "2001-09-07",
    "like": 7,
    "comment": 985,
    "genre": "핑크 영화",
    "rating": "청소년 관람불가",
    "director": "김택용"
}, {
    "id": 69,
    "name": "화산고",
    "attendance": 613300,
    "date": "2001-12-08",
    "like": 10,
    "comment": 883,
    "genre": "공포 영화",
    "rating": "15세 이상 관람가",
    "director": "봉준호"
}, {
    "id": 70,
    "name": "선물",
    "attendance": 461750,
    "date": "2001-03-24",
    "like": 1,
    "comment": 624,
    "genre": "교육 영화",
    "rating": "전체관람가",
    "director": "장진"
}, {
    "id": 71,
    "name": "흑수선",
    "attendance": 414200,
    "date": "2001-11-16",
    "like": 6,
    "comment": 119,
    "genre": "괴수 영화",
    "rating": "청소년 관람불가",
    "director": "임권택"
}, {
    "id": 72,
    "name": "인디안썸머",
    "attendance": 394032,
    "date": "2001-05-05",
    "like": 6,
    "comment": 459,
    "genre": "다큐멘터리 영화",
    "rating": "12세 이상 관람가",
    "director": "이창동"
}, {
    "id": 73,
    "name": "하루",
    "attendance": 294950,
    "date": "2001-01-20",
    "like": 0,
    "comment": 823,
    "genre": "논픽션 영화",
    "rating": "12세 이상 관람가",
    "director": "봉준호"
}, {
    "id": 74,
    "name": "베사메무쵸",
    "attendance": 248000,
    "date": "2001-08-31",
    "like": 1,
    "comment": 504,
    "genre": "실험 영화",
    "rating": "12세 이상 관람가",
    "director": "최동훈"
}, {
    "id": 75,
    "name": "자카르타",
    "attendance": 237700,
    "date": "2000-12-30",
    "like": 1,
    "comment": 177,
    "genre": "필름 누아르",
    "rating": "15세 이상 관람가",
    "director": "박찬욱"
}, {
    "id": 76,
    "name": "파이란",
    "attendance": 230242,
    "date": "2001-04-28",
    "like": 7,
    "comment": 811,
    "genre": "패러디 영화",
    "rating": "15세 이상 관람가",
    "director": "스티븐 스필버그"
}, {
    "id": 77,
    "name": "와이키키브라더스",
    "attendance": 89700,
    "date": "2001-10-26",
    "like": 7,
    "comment": 142,
    "genre": "코미디 영화",
    "rating": "전체관람가",
    "director": "이창동"
}, {
    "id": 78,
    "name": "소름",
    "attendance": 80700,
    "date": "2001-08-04",
    "like": 6,
    "comment": 396,
    "genre": "하이스트 영화",
    "rating": "15세 이상 관람가",
    "director": "이창동"
}, {
    "id": 79,
    "name": "썸머타임",
    "attendance": 80299,
    "date": "2001-05-25",
    "like": 4,
    "comment": 146,
    "genre": "논픽션 영화",
    "rating": "제한관람가",
    "director": "나홍진"
}, {
    "id": 80,
    "name": "세이예스",
    "attendance": 55200,
    "date": "2001-08-17",
    "like": 0,
    "comment": 239,
    "genre": "괴수 영화",
    "rating": "15세 이상 관람가",
    "director": "장진"
}, {
    "id": 81,
    "name": "Go",
    "attendance": 51100,
    "date": "2001-11-23",
    "like": 0,
    "comment": 212,
    "genre": "논픽션 영화",
    "rating": "12세 이상 관람가",
    "director": "김택용"
}, {
    "id": 82,
    "name": "교도소월드컵",
    "attendance": 38100,
    "date": "2001-05-18",
    "like": 5,
    "comment": 932,
    "genre": "가족 영화",
    "rating": "15세 이상 관람가",
    "director": "나홍진"
}, {
    "id": 83,
    "name": "휴머니스트",
    "attendance": 32140,
    "date": "2001-05-12",
    "like": 1,
    "comment": 129,
    "genre": "괴수 영화",
    "rating": "제한관람가",
    "director": "김택용"
}, {
    "id": 84,
    "name": "눈물",
    "attendance": 27900,
    "date": "2001-01-20",
    "like": 9,
    "comment": 760,
    "genre": "필름 누아르",
    "rating": "제한관람가",
    "director": "스티븐 스필버그"
}, {
    "id": 85,
    "name": "노랑머리2",
    "attendance": 26440,
    "date": "2001-07-21",
    "like": 6,
    "comment": 484,
    "genre": "전쟁 영화",
    "rating": "15세 이상 관람가",
    "director": "봉준호"
}, {
    "id": 86,
    "name": "런딤",
    "attendance": 22600,
    "date": "2001-11-09",
    "like": 4,
    "comment": 712,
    "genre": "논픽션 영화",
    "rating": "전체관람가",
    "director": "홍상수"
}, {
    "id": 87,
    "name": "천사몽",
    "attendance": 13900,
    "date": "2001-02-10",
    "like": 1,
    "comment": 576,
    "genre": "필름 누아르",
    "rating": "15세 이상 관람가",
    "director": "홍상수"
}, {
    "id": 88,
    "name": "수취인불명",
    "attendance": 10048,
    "date": "2001-06-02",
    "like": 6,
    "comment": 721,
    "genre": "전쟁 영화",
    "rating": "12세 이상 관람가",
    "director": "김지운"
}, {
    "id": 89,
    "name": "광시곡",
    "attendance": 7000,
    "date": "2001-02-10",
    "like": 4,
    "comment": 561,
    "genre": "괴수 영화",
    "rating": "15세 이상 관람가",
    "director": "변영주"
}, {
    "id": 90,
    "name": "꽃섬",
    "attendance": 6419,
    "date": "2001-11-24",
    "like": 0,
    "comment": 810,
    "genre": "섹스플로이테이션",
    "rating": "제한관람가",
    "director": "김기덕"
}, {
    "id": 91,
    "name": "나비",
    "attendance": 5800,
    "date": "2001-10-13",
    "like": 3,
    "comment": 264,
    "genre": "판타지 영화",
    "rating": "12세 이상 관람가",
    "director": "최동훈"
}, {
    "id": 92,
    "name": "아이러브유",
    "attendance": 3700,
    "date": "2001-08-25",
    "like": 10,
    "comment": 226,
    "genre": "판타지 영화",
    "rating": "15세 이상 관람가",
    "director": "홍상수"
}, {
    "id": 93,
    "name": "라이방",
    "attendance": 3200,
    "date": "2001-11-02",
    "like": 3,
    "comment": 246,
    "genre": "패러디 영화",
    "rating": "청소년 관람불가",
    "director": "강제규"
}, {
    "id": 94,
    "name": "헤라퍼플",
    "attendance": 1314,
    "date": "2001-11-03",
    "like": 3,
    "comment": 587,
    "genre": "갱스터 영화",
    "rating": "15세 이상 관람가",
    "director": "최동훈"
}, {
    "id": 95,
    "name": "스무살",
    "attendance": 1300,
    "date": "2001-04-21",
    "like": 4,
    "comment": 194,
    "genre": "하이스트 영화",
    "rating": "15세 이상 관람가",
    "director": "정지영"
}, {
    "id": 96,
    "name": "고추불패",
    "attendance": 1011,
    "date": "2001-08-25",
    "like": 0,
    "comment": 106,
    "genre": "가족 영화",
    "rating": "12세 이상 관람가",
    "director": "강제규"
}, {
    "id": 97,
    "name": "고해",
    "attendance": 822,
    "date": "2001-05-25",
    "like": 6,
    "comment": 268,
    "genre": "공포 영화",
    "rating": "15세 이상 관람가",
    "director": "최동훈"
}, {
    "id": 98,
    "name": "잎새",
    "attendance": 604,
    "date": "2001-10-20",
    "like": 8,
    "comment": 101,
    "genre": "패러디 영화",
    "rating": "15세 이상 관람가",
    "director": "이창동"
}, {
    "id": 99,
    "name": "고추말리기",
    "attendance": 550,
    "date": "2001-02-10",
    "like": 3,
    "comment": 754,
    "genre": "전쟁 영화",
    "rating": "12세 이상 관람가",
    "director": "김기덕"
}, {
    "id": 100,
    "name": "집으로",
    "attendance": 1596521,
    "date": "2002-04-05",
    "like": 10,
    "comment": 308,
    "genre": "핑크 영화",
    "rating": "제한관람가",
    "director": "강우석"
}, {
    "id": 101,
    "name": "광복절특사",
    "attendance": 911315,
    "date": "2002-11-21",
    "like": 6,
    "comment": 551,
    "genre": "핑크 영화",
    "rating": "전체관람가",
    "director": "정지영"
}, {
    "id": 102,
    "name": "폰",
    "attendance": 765000,
    "date": "2002-07-26",
    "like": 1,
    "comment": 413,
    "genre": "판타지 영화",
    "rating": "전체관람가",
    "director": "변영주"
}, {
    "id": 103,
    "name": "몽정기",
    "attendance": 760698,
    "date": "2002-11-06",
    "like": 1,
    "comment": 709,
    "genre": "필름 누아르",
    "rating": "제한관람가",
    "director": "김지운"
}, {
    "id": 104,
    "name": "연애소설",
    "attendance": 589743,
    "date": "2002-09-13",
    "like": 5,
    "comment": 140,
    "genre": "SF 영화",
    "rating": "제한관람가",
    "director": "김택용"
}, {
    "id": 105,
    "name": "챔피언",
    "attendance": 567000,
    "date": "2002-06-28",
    "like": 10,
    "comment": 891,
    "genre": "섹스플로이테이션",
    "rating": "제한관람가",
    "director": "스티븐 스필버그"
}, {
    "id": 106,
    "name": "오아시스",
    "attendance": 558046,
    "date": "2002-08-15",
    "like": 1,
    "comment": 620,
    "genre": "교육 영화",
    "rating": "15세 이상 관람가",
    "director": "최동훈"
}, {
    "id": 107,
    "name": "취화선",
    "attendance": 443294,
    "date": "2002-05-10",
    "like": 9,
    "comment": 991,
    "genre": "가족 영화",
    "rating": "12세 이상 관람가",
    "director": "김기덕"
}, {
    "id": 108,
    "name": "중독",
    "attendance": 346453,
    "date": "2002-10-25",
    "like": 3,
    "comment": 209,
    "genre": "호스티스 영화",
    "rating": "제한관람가",
    "director": "홍상수"
}, {
    "id": 109,
    "name": "보스상륙작전",
    "attendance": 343256,
    "date": "2002-09-06",
    "like": 10,
    "comment": 834,
    "genre": "하이스트 영화",
    "rating": "15세 이상 관람가",
    "director": "강제규"
}, {
    "id": 110,
    "name": "정글쥬스",
    "attendance": 285249,
    "date": "2002-03-22",
    "like": 8,
    "comment": 343,
    "genre": "갱스터 영화",
    "rating": "청소년 관람불가",
    "director": "김기덕"
}, {
    "id": 111,
    "name": "울랄라씨스터즈",
    "attendance": 245930,
    "date": "2002-04-26",
    "like": 0,
    "comment": 468,
    "genre": "가족 영화",
    "rating": "12세 이상 관람가",
    "director": "류승완"
}, {
    "id": 112,
    "name": "밀애",
    "attendance": 144602,
    "date": "2002-11-08",
    "like": 8,
    "comment": 470,
    "genre": "갱스터 영화",
    "rating": "12세 이상 관람가",
    "director": "장진"
}, {
    "id": 113,
    "name": "패밀리",
    "attendance": 134310,
    "date": "2002-08-23",
    "like": 10,
    "comment": 928,
    "genre": "호스티스 영화",
    "rating": "제한관람가",
    "director": "홍상수"
}, {
    "id": 114,
    "name": "예스터데이",
    "attendance": 125000,
    "date": "2002-06-13",
    "like": 4,
    "comment": 422,
    "genre": "실험 영화",
    "rating": "청소년 관람불가",
    "director": "나홍진"
}, {
    "id": 115,
    "name": "해안선",
    "attendance": 121550,
    "date": "2002-11-22",
    "like": 7,
    "comment": 760,
    "genre": "필름 누아르",
    "rating": "전체관람가",
    "director": "박찬욱"
}, {
    "id": 116,
    "name": "서프라이즈",
    "attendance": 110642,
    "date": "2002-07-05",
    "like": 8,
    "comment": 746,
    "genre": "교육 영화",
    "rating": "12세 이상 관람가",
    "director": "변영주"
}, {
    "id": 117,
    "name": "후아유",
    "attendance": 88630,
    "date": "2002-05-24",
    "like": 4,
    "comment": 251,
    "genre": "공포 영화",
    "rating": "15세 이상 관람가",
    "director": "김기덕"
}, {
    "id": 118,
    "name": "쓰리",
    "attendance": 73750,
    "date": "2002-08-23",
    "like": 10,
    "comment": 74,
    "genre": "하이스트 영화",
    "rating": "15세 이상 관람가",
    "director": "김기덕"
}, {
    "id": 119,
    "name": "하얀방",
    "attendance": 72000,
    "date": "2002-11-15",
    "like": 9,
    "comment": 726,
    "genre": "전쟁 영화",
    "rating": "청소년 관람불가",
    "director": "이창동"
}, {
    "id": 120,
    "name": "2424",
    "attendance": 69850,
    "date": "2002-10-18",
    "like": 8,
    "comment": 638,
    "genre": "SF 영화",
    "rating": "15세 이상 관람가",
    "director": "김기덕"
}, {
    "id": 121,
    "name": "마리이야기",
    "attendance": 54404,
    "date": "2002-01-11",
    "like": 0,
    "comment": 314,
    "genre": "전쟁 영화",
    "rating": "청소년 관람불가",
    "director": "봉준호"
}, {
    "id": 122,
    "name": "버스정류장",
    "attendance": 39600,
    "date": "2002-03-08",
    "like": 9,
    "comment": 782,
    "genre": "갱스터 영화",
    "rating": "제한관람가",
    "director": "김지운"
}, {
    "id": 123,
    "name": "유아독존",
    "attendance": 38708,
    "date": "2002-11-07",
    "like": 6,
    "comment": 147,
    "genre": "다큐멘터리 영화",
    "rating": "청소년 관람불가",
    "director": "강제규"
}, {
    "id": 124,
    "name": "올드보이",
    "attendance": 1140000,
    "date": "2003-11-21",
    "like": 5,
    "comment": 935,
    "genre": "논픽션 영화",
    "rating": "15세 이상 관람가",
    "director": "박찬욱"
}, {
    "id": 125,
    "name": "황산벌",
    "attendance": 960394,
    "date": "2003-10-17",
    "like": 7,
    "comment": 355,
    "genre": "종교 영화",
    "rating": "제한관람가",
    "director": "나홍진"
}, {
    "id": 126,
    "name": "싱글즈",
    "attendance": 859347,
    "date": "2003-07-11",
    "like": 5,
    "comment": 276,
    "genre": "다큐멘터리 영화",
    "rating": "12세 이상 관람가",
    "director": "김택용"
}, {
    "id": 127,
    "name": "실미도",
    "attendance": 694174,
    "date": "2003-12-24",
    "like": 1,
    "comment": 755,
    "genre": "전쟁 영화",
    "rating": "제한관람가",
    "director": "임권택"
}, {
    "id": 128,
    "name": "클래식",
    "attendance": 564348,
    "date": "2003-01-30",
    "like": 10,
    "comment": 166,
    "genre": "종교 영화",
    "rating": "전체관람가",
    "director": "최동훈"
}, {
    "id": 129,
    "name": "똥개",
    "attendance": 434660,
    "date": "2003-07-16",
    "like": 0,
    "comment": 495,
    "genre": "전쟁 영화",
    "rating": "제한관람가",
    "director": "이창동"
}, {
    "id": 130,
    "name": "이중간첩",
    "attendance": 361580,
    "date": "2003-01-23",
    "like": 4,
    "comment": 360,
    "genre": "청춘 영화",
    "rating": "제한관람가",
    "director": "강제규"
}, {
    "id": 131,
    "name": "영어완전정복",
    "attendance": 330121,
    "date": "2003-11-05",
    "like": 7,
    "comment": 758,
    "genre": "다큐멘터리 영화",
    "rating": "청소년 관람불가",
    "director": "김택용"
}, {
    "id": 132,
    "name": "낭만자객",
    "attendance": 292190,
    "date": "2003-12-05",
    "like": 6,
    "comment": 640,
    "genre": "SF 영화",
    "rating": "제한관람가",
    "director": "강우석"
}, {
    "id": 133,
    "name": "거울속으로",
    "attendance": 242958,
    "date": "2003-08-14",
    "like": 10,
    "comment": 52,
    "genre": "호스티스 영화",
    "rating": "12세 이상 관람가",
    "director": "장진"
}, {
    "id": 134,
    "name": "청풍명월",
    "attendance": 191600,
    "date": "2003-07-16",
    "like": 3,
    "comment": 784,
    "genre": "SF 영화",
    "rating": "제한관람가",
    "director": "강제규"
}, {
    "id": 135,
    "name": "나비",
    "attendance": 173613,
    "date": "2003-04-30",
    "like": 0,
    "comment": 150,
    "genre": "논픽션 영화",
    "rating": "12세 이상 관람가",
    "director": "류승완"
}, {
    "id": 136,
    "name": "...ing",
    "attendance": 159396,
    "date": "2003-11-28",
    "like": 10,
    "comment": 713,
    "genre": "가족 영화",
    "rating": "15세 이상 관람가",
    "director": "임권택"
}, {
    "id": 137,
    "name": "마들렌",
    "attendance": 146482,
    "date": "2003-01-10",
    "like": 0,
    "comment": 738,
    "genre": "다큐멘터리 영화",
    "rating": "제한관람가",
    "director": "김택용"
}, {
    "id": 138,
    "name": "원더풀데이즈",
    "attendance": 140080,
    "date": "2003-07-17",
    "like": 7,
    "comment": 95,
    "genre": "다큐멘터리 영화",
    "rating": "12세 이상 관람가",
    "director": "임권택"
}, {
    "id": 139,
    "name": "튜브",
    "attendance": 123020,
    "date": "2003-06-05",
    "like": 3,
    "comment": 210,
    "genre": "판타지 영화",
    "rating": "제한관람가",
    "director": "정지영"
}, {
    "id": 140,
    "name": "천년호",
    "attendance": 101478,
    "date": "2003-11-28",
    "like": 3,
    "comment": 366,
    "genre": "전쟁 영화",
    "rating": "제한관람가",
    "director": "임권택"
}, {
    "id": 141,
    "name": "동승",
    "attendance": 100530,
    "date": "2003-04-11",
    "like": 3,
    "comment": 229,
    "genre": "핑크 영화",
    "rating": "12세 이상 관람가",
    "director": "정지영"
}, {
    "id": 142,
    "name": "블루",
    "attendance": 61223,
    "date": "2003-02-07",
    "like": 0,
    "comment": 648,
    "genre": "핑크 영화",
    "rating": "청소년 관람불가",
    "director": "김기덕"
}, {
    "id": 143,
    "name": "남남북녀",
    "attendance": 55246,
    "date": "2003-08-29",
    "like": 2,
    "comment": 53,
    "genre": "패러디 영화",
    "rating": "청소년 관람불가",
    "director": "봉준호"
}, {
    "id": 144,
    "name": "하늘정원",
    "attendance": 38773,
    "date": "2003-04-04",
    "like": 4,
    "comment": 847,
    "genre": "하이스트 영화",
    "rating": "12세 이상 관람가",
    "director": "김기덕"
}, {
    "id": 145,
    "name": "아카시아",
    "attendance": 35660,
    "date": "2003-10-17",
    "like": 5,
    "comment": 921,
    "genre": "종교 영화",
    "rating": "15세 이상 관람가",
    "director": "나홍진"
}, {
    "id": 146,
    "name": "은장도",
    "attendance": 25641,
    "date": "2003-10-24",
    "like": 7,
    "comment": 746,
    "genre": "실험 영화",
    "rating": "청소년 관람불가",
    "director": "김지운"
}];
