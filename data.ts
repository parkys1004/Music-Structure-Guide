import { Template, BlockSamples } from './types';

export const templates: Template[] = [
    { id: 1, cat: 'kpop', title: 'Standard K-Pop', titleKo: '표준 K-팝', desc: '기승전결이 뚜렷한 대중적인 아이돌 구성', icon: 'fa-star', steps: ['Intro', 'Verse 1', 'Pre-Chorus', 'Chorus', 'Verse 2 (Rap)', 'Pre-Chorus', 'Chorus', 'Bridge', 'Final Chorus', 'Outro'] },
    { id: 2, cat: 'kpop', title: 'Girl Crush', titleKo: '걸크러시', desc: '강렬한 베이스와 임팩트 있는 랩 중심', icon: 'fa-bolt', steps: ['Intro (Narration)', 'Verse', 'Chorus (Drop)', 'Verse 2', 'Chorus', 'Bridge', 'Final Drop', 'Outro'] },
    { id: 3, cat: 'kpop', title: 'Boy Group', titleKo: '보이그룹 퍼포먼스', desc: '다크한 사운드와 파워풀한 유니슨 강조', icon: 'fa-user-group', steps: ['Intro', 'Verse (Rap)', 'Pre-Chorus', 'Chorus', 'Drop (Dance Break)', 'Bridge', 'Final Chorus', 'Outro'] },
    { id: 4, cat: 'kpop', title: 'High Teen', titleKo: '하이틴 / 스쿨', desc: '밝고 에너제틱한 기타 사운드와 청량함', icon: 'fa-graduation-cap', steps: ['Intro', 'Verse', 'Chorus', 'Verse 2 (Rap)', 'Bridge (Chant)', 'Final Chorus', 'Outro'] },
    { id: 5, cat: 'trendy', title: 'Y2K Style', titleKo: '뉴진스 감성', desc: '레트로 비트와 반복되는 킬링 파트', icon: 'fa-radio', steps: ['Intro', 'Chorus (Hook)', 'Verse', 'Chorus', 'Verse 2', 'Chorus', 'Outro'] },
    { id: 6, cat: 'trendy', title: 'Cyberpunk', titleKo: '에스파 스타일', desc: '하이퍼팝 요소와 실험적인 사운드 결합', icon: 'fa-microchip', steps: ['Intro', 'Verse', 'Chorus', 'Verse 2 (Tempo Change)', 'Chorus', 'Bridge', 'Final Chorus', 'Outro'] },
    { id: 7, cat: 'trendy', title: 'Viral Hook', titleKo: '바이럴 훅 송', desc: '숏폼 최적화 중독성 구간 전면 배치', icon: 'fa-mobile-screen', steps: ['Intro', 'Chorus (Challenge)', 'Verse (Rap)', 'Chorus (Challenge)', 'Outro'] },
    { id: 8, cat: 'trendy', title: 'Dreamy', titleKo: '몽환 / 요정', desc: '신비로운 분위기와 마법 같은 멜로디', icon: 'fa-wand-sparkles', steps: ['Intro', 'Verse', 'Chorus', 'Instrumental', 'Verse 2', 'Chorus', 'Outro'] },
    { id: 9, cat: 'emotional', title: 'Ballad / OST', titleKo: '감성 발라드', desc: '피아노에서 오케스트라로 이어지는 서사', icon: 'fa-heart', steps: ['Intro', 'Verse 1', 'Chorus', 'Verse 2', 'Chorus', 'Bridge', 'Final Chorus', 'Outro'] },
    { id: 10, cat: 'emotional', title: 'Rock Ballad', titleKo: '락 발라드', desc: '잔잔한 도입부에서 풀 밴드로 폭발', icon: 'fa-guitar', steps: ['Intro (Guitar)', 'Verse', 'Chorus', 'Verse 2', 'Chorus', 'Instrumental (Solo)', 'Final Chorus', 'Outro'] },
    { id: 11, cat: 'emotional', title: 'City Pop', titleKo: '시티 팝', desc: '80년대 도시 야경의 세련된 레트로', icon: 'fa-city', steps: ['Intro', 'Verse 1', 'Chorus', 'Instrumental (Solo)', 'Verse 2', 'Chorus', 'Outro (Fade)'] },
    { id: 12, cat: 'emotional', title: 'Acoustic Indie', titleKo: '어쿠스틱 인디', desc: '편안한 기타와 속삭이는 보컬', icon: 'fa-leaf', steps: ['Intro', 'Verse 1', 'Chorus', 'Verse 2', 'Bridge (Humming)', 'Chorus', 'Outro'] },
    { id: 13, cat: 'fusion', title: 'Fusion Gugak', titleKo: '조선 팝', desc: '국악기와 현대 트랩 비트의 만남', icon: 'fa-fan', steps: ['Intro (Gayageum)', 'Verse (Pansori)', 'Chorus (Pop Hook)', 'Instrumental (Drop)', 'Verse 2', 'Chorus', 'Outro'] },
    { id: 14, cat: 'fusion', title: 'EDM Trot', titleKo: 'EDM 트로트', desc: '중독적인 멜로디와 강력한 댄스 비트', icon: 'fa-music', steps: ['Intro', 'Verse', 'Chorus', 'Dance Break', 'Verse 2', 'Chorus', 'Outro'] },
    { id: 15, cat: 'fusion', title: 'Latin Fusion', titleKo: '라틴 퓨전', desc: '스페니쉬 기타와 레게톤 비트 결합', icon: 'fa-pepper-hot', steps: ['Intro', 'Verse', 'Chorus (Reggaeton)', 'Verse 2 (Rap)', 'Chorus', 'Outro'] },
    { id: 16, cat: 'fusion', title: 'Hip-Hop', titleKo: '트랩 힙합', desc: '비트 태그와 랩 플로우의 다양한 변화', icon: 'fa-headphones', steps: ['Intro', 'Chorus', 'Verse 1', 'Chorus', 'Verse 2', 'Chorus', 'Outro'] },
    { id: 17, cat: 'mood', title: 'R&B Groove', titleKo: 'R&B 그루브', desc: '그루비한 베이스와 화려한 보컬 런', icon: 'fa-compact-disc', steps: ['Intro', 'Verse', 'Chorus (Falsetto)', 'Verse 2', 'Chorus', 'Instrumental', 'Outro'] },
    { id: 18, cat: 'mood', title: 'Lofi', titleKo: '인트로버트', desc: '나른한 비트와 로파이 감성 무드', icon: 'fa-cloud-moon', steps: ['Intro', 'Verse 1', 'Chorus', 'Verse 2', 'Chorus', 'Outro (Tape Stop)'] },
    { id: 19, cat: 'mood', title: 'Festival EDM', titleKo: 'EDM 페스티벌', desc: '빌드업과 폭발적인 드롭의 정석', icon: 'fa-burst', steps: ['Intro (Build-up)', 'Drop', 'Verse', 'Chorus (Sing-along)', 'Drop', 'Outro'] },
    { id: 20, cat: 'mood', title: 'Grand Epic', titleKo: '대서사시', desc: '콰이어와 마칭 드럼의 웅장한 스케일', icon: 'fa-mountain', steps: ['Intro (Choir)', 'Verse', 'Chorus', 'Bridge (Explosion)', 'Final Chorus', 'Outro'] },
    { id: 21, cat: 'mood', title: 'Musical', titleKo: '뮤지컬 스타일', desc: '연극적 보컬과 극적인 전개 방식', icon: 'fa-masks-theater', steps: ['Intro', 'Verse (Dialogue)', 'Chorus (Ensemble)', 'Bridge (Key Change)', 'Final Chorus', 'Outro'] },
    { id: 22, cat: 'mood', title: 'Jazz Bar', titleKo: '재즈 바 / 솔로', desc: '스윙 리듬과 즉흥적인 솔로 구간', icon: 'fa-wine-glass', steps: ['Intro', 'Verse', 'Chorus', 'Piano Solo', 'Chorus', 'Outro (Scat)'] },
    { id: 23, cat: 'mood', title: 'Cafe', titleKo: '어쿠스틱 카페', desc: '달콤한 보컬과 편안한 공간감', icon: 'fa-mug-hot', steps: ['Intro', 'Verse', 'Chorus', 'Verse 2 (Whistle)', 'Chorus', 'Outro'] },
    { id: 24, cat: 'mood', title: 'Summer', titleKo: '여름 노래', desc: '청량한 트로피컬 하우스 비트', icon: 'fa-umbrella-beach', steps: ['Intro', 'Verse', 'Chorus (High)', 'Verse 2', 'Chorus', 'Bridge', 'Final Chorus', 'Outro'] },
    { id: 25, cat: 'mood', title: 'Winter', titleKo: '겨울 캐럴', desc: '포근한 하모니와 풍성한 겨울 감성', icon: 'fa-snowflake', steps: ['Intro (Bells)', 'Verse', 'Chorus', 'Verse 2', 'Chorus', 'Bridge (Jazz)', 'Final Chorus', 'Outro'] }
];

export const blockSamples: BlockSamples = {
    'Intro': [
        { name: 'Whisper Narration', desc: '나른하게 속삭이는 나레이션 도입' },
        { name: 'Explosive Dance Beat', desc: '시작부터 터지는 강력한 비트' },
        { name: 'Emotional Piano Solo', desc: '서정적인 피아노 선율로 시작' },
        { name: 'Gugak Melody (Gayageum)', desc: '가야금 등 국악기 테마의 도입' },
        { name: 'Counting (One, Two...!)', desc: '구령과 함께 시작하는 에너제틱한 구성' }
    ],
    'Verse': [
        { name: 'Rhythmic Rap', desc: '비트감을 살린 리드미컬한 랩 파트' },
        { name: 'Melodic Singing', desc: '낮은 음역대의 안정적인 보컬' },
        { name: 'Storytelling', desc: '가사의 서사를 차분히 쌓아가는 연출' },
        { name: 'Building Up', desc: '조금씩 악기가 추가되며 고조되는 빌드업' },
        { name: 'Groovy Bass Line', desc: '그루비한 베이스가 강조된 세련된 흐름' }
    ],
    'Chorus': [
        { name: 'Killing Part (Hook)', desc: '가장 강력하고 중독적인 킬링 포인트' },
        { name: 'High Note Explosion', desc: '폭발적인 고음으로 시원한 카타르시스' },
        { name: 'Addictive Repetition', desc: '반복되는 멜로디로 각인시키는 효과' },
        { name: 'Group Harmony', desc: '멤버 전원의 화음이 합쳐진 풍성한 사운드' },
        { name: 'Drop (EDM Style)', desc: '보컬 대신 비트로 승부하는 드롭' }
    ],
    'Bridge': [
        { name: 'Mood Change', desc: '곡의 분위기를 반전시켜 긴장감 조성' },
        { name: 'High Note Ad-lib', desc: '감정을 최고조로 끌어올리는 애드리브' },
        { name: 'Rap Break', desc: '보컬 흐름을 끊고 임팩트를 주는 랩 브레이크' },
        { name: 'Minimal Instrument', desc: '악기를 최소화하여 목소리에 집중' },
        { name: 'Build up to Final', desc: '마지막 후렴을 향한 극적인 고조' }
    ],
    'Drop': [
        { name: 'Dance Break', desc: '화려한 퍼포먼스 중심의 비트 구간' },
        { name: 'Heavy Bass Drop', desc: '묵직한 베이스가 강조된 힙합/EDM 드롭' },
        { name: 'Synth Lead Solo', desc: '현란한 신시사이저가 주도하는 연주' },
        { name: 'Traditional Percussion', desc: '한국적인 타악 리듬이 돋보이는 구간' }
    ],
    'Instrumental': [
        { name: 'Guitar Solo', desc: '록킹한 느낌을 더해주는 기타 연주' },
        { name: 'Haegeum Solo', desc: '해금의 애절하고 신비로운 솔로' },
        { name: 'Piano Interlude', desc: '간주 중 분위기를 전환하는 피아노' },
        { name: 'Synth Solo', desc: '퓨처리스틱한 감각의 전자음 솔로' }
    ],
    'Outro': [
        { name: 'Ending Fairy Pose', desc: '여운을 남기는 페이드 아웃 마무리' },
        { name: 'High Note Finish', desc: '강력한 고음과 함께 끝맺는 엔딩' },
        { name: 'Whisper Ending', desc: '낮은 속삭임으로 미스터리하게 종료' },
        { name: 'Abrupt Stop', desc: '단숨에 소리를 끊어 임팩트를 주는 엔딩' },
        { name: 'Instrumental Fade', desc: '악기 연주가 서서히 잦아드는 마무리' }
    ]
};
