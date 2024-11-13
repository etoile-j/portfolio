export const meetsin = {
    title: "MEETSIN",
    titleDescription: "실시간 비대면 스터디룸 서비스",
    specs: {
        period: "2023.09 - 진행 중",
        teamInfo: "팀 프로젝트 (3인) | 프론트엔드, 백엔드, 디자인 담당",
        skills: {
            공통: ["TypeScript", "Socket.IO", "GitHub Actions"],
            프론트엔드: ["Next.js", "TanStack Query", "Jotai", "SCSS"],
            백엔드: ["NestJS", "MongoDB", "Mongoose", "AWS EC2", "Nginx"],
        },
    },
    highlights: [
        {
            title: "서비스 워커를 이용한 Push Notification 구현으로 다양한 사용자 환경에 대응",
            description: `기존 타이머 기능은 종료 시 소리가 나도록 구현되어 있었으나
            소리를 들을 수 없는 환경에서는 알림이 인지되지 않는 문제가 생겼습니다.
            
            이를 해결하기 위해 타이머 종료 시 Push Notification을 전송해
            사용자가 빠르게 종료를 인지할 수 있도록 개선하였습니다.
            그리고 화면이 활성화된 상태에서는 알림을 보내지 않아 불필요한 알림을 최소화하였습니다.
            
            이 과정을 통해 백그라운드 작업 처리와 서비스 워커의 생명주기에 대해서도 배우게 되었습니다.`,
        },
        {
            title: "Figma를 사용해 UI 디자인",
            description: `직접 디자인해 보는 경험을 통해
            사용자에게 직관적이고 편리한 인터페이스는 무엇인지 고민하게 되었습니다.
            또한 디자인 프로세스를 이해하게 되어 디자이너와 원활한 소통에 도움이 될 것입니다.`,
        },
        {
            title: "Node.js 기반의 프레임워크 NestJS로 백엔드 개발",
            description: `백엔드도 함께 개발해 봄으로써
                RESTful API를 설계하고 구현하는 방법에 대해 알게 되었고,
                NestJS의 모듈 기반 아키텍처를 통해 각 기능을 독립적으로 관리해 
                효과적인 유지 보수를 할 수 있음을 알게 되었습니다.
                이를 통해 관심사의 분리의 중요성도 이해하게 되었습니다.`,
        },
        {
            title: "AWS 비용 절감을 위해 Nginx 리버스 프록시 설정으로 HTTPS 적용",
            description: `AWS의 정책 변화로 Public IP에 요금이 부과되어
            Nginx를 통해 HTTPS를 적용하였습니다.  
            이 과정에서 Nginx의 설정 파일 구조와 문법을 배웠으며
            웹 서버, 도메인, DNS에 대한 이해가 높아졌습니다.`,
        },
        {
            title: "GitHub Actions를 사용한 서버 자동 배포 환경 구축",
            description: `메인 브랜치에 push 이벤트가 발생할 때 서버에 자동으로 배포되도록 하였습니다.
            Yarn 캐시를 활용해 반복적인 종속성 설치 시간을 줄임으로써 빌드와 배포 속도를 개선했습니다.`,
        },
    ],
    links: {
        github: "https://github.com/FE-Ocean/meetsin",
        figma: "",
    },
};

export const ourshop = {
    title: "OUR-SHOP",
    titleDescription: "오픈마켓 형태의 온라인 쇼핑몰",
    specs: {
        period: "2022.09-11 (2개월)",
        teamInfo: "개인 프로젝트",
        skills: {
            all: [
                "React",
                "TypeScript",
                "Styled-Components",
                "React-Query",
                "React-Testing-Library",
                "Jest",
                "MSW",
                "GitHub Actions",
            ],
        },
    },
    highlights: [
        {
            title: "웹 표준, 웹 접근성을 준수한 개발",
            description: `웹 접근성 향상을 위해 시멘틱한 HTML 태그, 대체 텍스트, ARIA 속성 등을
            적극 사용하여 웹 접근성 지침을 준수하였습니다.
            
            또, 맥 OS의 보이스 오버 기능을 이용해 직접 페이지를 탐색해 봄으로써
            시각적 요소 외에 사용자의 경험을 고려하는 개발의 중요성을 깨닫게 되었습니다.`,
        },
        {
            title: "웹 성능 최적화",
            description: `웹 성능 최적화로 사용자 경험 향상을 위해 다양한 시도를 하였습니다.
            - 리액트 쿼리를 통한 무한 스크롤 구현으로 초기 로딩 속도 개선
            - 사이트가 느리다는 느낌을 주는 아이콘 로딩 속도 개선을 위해 이미지 사전 로딩 적용
            - 프로파일러를 활용한 비효율적인 렌더링 개선
            - lighthouse LCP 18.9초 → 1.2초로 개선`,
        },
        {
            title: "Jest와 React-Testing-Library를 사용한 테스트 코드 작성",
            description: `리팩토링 과정에서 매번 변경 사항을 확인하고 에러 여부를 확인하는 불편함을 겪고
        이를 해결하기 위해 테스트 환경을 구축하였습니다.
        MSW로 API를 모킹해 API에 종속되지 않고 테스트를 효과적으로 관리할 수 있었습니다.`,
        },
        {
            title: "Github Actions을 활용한 CI 테스트 자동화",
            description: `배포 시 테스트 코드를 자동으로 실행해 생산성 및 안정성을 향상하였습니다.`,
        },
    ],
    links: {
        github: "https://github.com/etoile-j/OUR-SHOP",
    },
};

export const whobego = {
    title: "who-be-go",
    titleDescription: "후기 무비 고 | 나만의 영화 감상 기록장",
    specs: {
        period: "2022.08 (2주)",
        teamInfo: "팀 프로젝트 (6인) | 프론트엔드 담당",
        skills: { all: ["TypeScript", "HTML", "SCSS"] },
    },
    highlights: [
        {
            title: "Vanilla TypeScript 사용",
            description: `프레임워크나 라이브러리 없이 순수 TypeScript로 개발을 진행하였습니다.
            DOM 조작, 이벤트 처리 작업 등을 직접 구현하여 기본 원리를 깨닫게 되었고
            프레임워크나 라이브러리의 편리함을 느꼈습니다.`,
        },
        {
            title: "Reflow, Repaint를 최소화한 노드 생성",
            description: `사용자가 영화 제목을 검색하면, 검색어와 일치하는 영화 목록을 화면에 표시해야 했습니다.
              이 과정에서 DOM을 직접 조작해야 했는데 DOM 조작 시 리플로우와 리페인트가 발생합니다.
              이런 렌더링 과정은 높은 비용이 들어 성능에 악영향을 줄 수 있습니다.
         
         이를 최소화하기 위해 DocumentFragment 노드를 활용했습니다.
         돔에 추가할 요소들을 생성한 후, 이 요소들을 DocumentFragment 노드의 자식 노드로 추가했습니다.
         그리고 마지막으로 기존 DOM에 DocumentFragment 노드를 추가했습니다.
         
         이 방식으로 불필요한 여러 번의 DOM 변경과 리플로우, 리페인트를
         한 번으로 줄임으로써 렌더링 성능을 최적화할 수 있었습니다.
         이를 구현하는 과정에서 브라우저의 렌더링 메커니즘과 DOM 조작 방식에 대한 이해도 깊어졌습니다.`,
        },
        {
            title: "그리드 레이아웃을 사용한 반응형 구현",
            description: ``,
        },
        {
            title: "CSS 전처리기 Sass 사용",
            description: `Sass 사용을 통해 반복되는 코드의 변수화로 재사용성이 높아져 개발 시간이 절약되었고
           중첩 및 상속을 통해 구조화된 코드를 사용해 가독성을 향상시켰습니다.`,
        },
    ],
    links: {
        github: "https://github.com/FE-Ocean/who-be-go",
        liveService: "https://who-be-go.netlify.app",
    },
};

export const projects = [meetsin, ourshop, whobego];
