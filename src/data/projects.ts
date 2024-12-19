export const portfolio = {
    title: "포트폴리오",
    titleDescription: "(현재 페이지)",
    specs: {
        period: "2024.10 - 11 (21일)",
        teamInfo: "개인 프로젝트",
        skills: { all: ["Next.js", "TypeScript", "TailwindCSS"] },
    },
    highlights: [
        {
            title: "Next.js를 사용한 SSG 구현",
            description: `현재 포트폴리오는 사용자의 요청에 따른 렌더링이 필요 없기 때문에
            정적 사이트 생성을 위해 Next.js를 선택하였습니다.
            
            모든 콘텐츠를 코드에 직접 작성하고, 이미지 등의 리소스를 미리 빌드된 파일로 제공했습니다.`,
        },
        {
            title: "Intersection Observer API 활용",
            description: `Intersection Observer API를 활용해 화면에 보이는 요소를 감지하고
            이를 기반으로 애니메이션과 네비게이션을 동적으로 업데이트하는 기능을 개발했습니다.
            이를 통해 사용자에게 맥락에 맞는 정보와 시각적 효과를 효과적으로 제공했습니다.`,
        },
    ],
    links: {
        github: "https://github.com/etoile-j/portfolio",
        figma: "https://www.figma.com/design/8RLRG95t68BXylSZi3kced/%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4?m=auto&t=GBAnlRgTNpxo3dAy-6",
    },
};

export const meetsin = {
    title: "MEETSIN",
    titleDescription: "실시간 비대면 스터디룸 서비스",
    specs: {
        period: "2023.09 - 진행 중",
        teamInfo: "팀 프로젝트 (3인) | 프론트엔드, 백엔드, 디자인 담당",
        skills: {
            공통: ["TypeScript", "Socket.IO", "GitHub Actions"],
            프론트엔드: ["Next.js", "TanStack Query", "Jotai", "SCSS", "Phaser"],
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
            
            이 과정을 통해 백그라운드 작업 처리와 서비스 워커의 생명주기에 대해서도 알게 되었습니다.`,
        },
        {
            title: "Figma를 사용해 UI 디자인",
            description: `직접 디자인해 보는 경험을 통해
            사용자에게 직관적이고 편리한 인터페이스는 무엇인지 고민해 보게 되었습니다.
            또한 앞으로 디자이너와 협업 시 요구사항을 더 정확하게 이해하고 반영하는 데 도움이 되었습니다.`,
        },
        {
            title: "Node.js 기반의 프레임워크 NestJS로 백엔드 개발",
            description: `백엔드도 함께 개발해 봄으로써 전체적인 시스템의 구조에 대해 알게 되었고
            RESTful API를 설계하고 구현하는 방법에 대해서도 알게 되었습니다.
            
            또한 NestJS의 모듈 기반 아키텍처를 활용해 각 기능을 독립적으로 관리해 
            효과적인 유지 보수를 할 수 있음을 알게 되었습니다.
            이를 통해 관심사의 분리의 중요성도 깨닫게 되었습니다.`,
        },
        {
            title: "AWS EC2와 Nginx를 활용한 서버 구축 및 네트워크 인프라 및 관리",
            description: `AWS를 통해 서버를 구축하면서
            IP 설정, DNS 관리, SSH 연결, 프록시, 로드 밸런싱 등 다양한 네트워크 구성 요소를 학습했습니다.

            또한 AWS의 정책 변화로 Public IP 요금이 발생해
            Nginx 리버스 프록시를 활용해 HTTPS를 적용하였습니다. 
            
            이를 통해 서버 관리 및 네트워크 환경 설정에 필요한 지식들을 쌓을 수 있었습니다.`,
        },
        {
            title: "GitHub Actions를 사용한 서버 자동 배포 환경 구축",
            description: `메인 브랜치에 push 이벤트가 발생할 때 서버에 자동으로 배포되도록 하였습니다.
            Yarn 캐시를 활용해 반복적인 종속성 설치 시간을 줄임으로써 빌드와 배포 속도를 개선했습니다.`,
        },
    ],
    links: {
        github: "https://github.com/FE-Ocean/meetsin",
        figma: "https://www.figma.com/design/VUQzx7GqN5G2Eo89XrX09q/MEETSIN-figma?m=auto&t=VgUsW6OubegAx3QF-6",
        liveService: "https://meetsin.link",
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
            description: `웹 접근성 향상을 위해 시멘틱한 HTML 태그, 대체 텍스트, ARIA 속성 등을 적극 사용하여 
            웹 접근성 지침을 준수하였습니다.
            
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
        {
            title: "다양한 오류 상황에 따른 화면 처리 고려",
            description: `최근 서버가 종료되면서 서버가 응답하지 않을 경우 사용자에게 보이는 화면에 대해 생각하게 되었습니다.

	        현재 상태로는 첫 화면이나 로그인 과정 등에서
            사용자는 왜 시스템이 정상적으로 작동하지 않는지
            인지하기 어려울 수 있다는 점을 깨달았습니다. 
	        이를 통해 다양한 오류 상황에 대한 처리가 미흡했음을 알게 되었고
	
	        앞으로는 예상하지 못한 오류 상황에 대처할 수 있도록 예외 처리 로직을 강화하고
	        비정상적인 상황에서도 사용자에게 명확한 정보를 제공하도록 UI를 개선할 것입니다.`,
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
        skills: { all: ["TypeScript", "HTML", "Sass"] },
    },
    highlights: [
        {
            title: "Vanilla TypeScript 사용",
            description: `프레임워크나 라이브러리 없이 순수 TypeScript로 개발을 진행하였습니다.
            DOM 조작, 이벤트 처리 작업 등을 직접 구현하여 기본 원리를 깨닫게 되었고
            다양한 개발 도구들의 편리함을 느낄 수 있었습니다.`,
        },
        {
            title: "Reflow, Repaint를 최소화한 노드 생성",
            description: `사용자가 영화 제목을 검색하면 검색어와 일치하는 영화 목록을 화면에 표시해야 했습니다.
            이 과정에서 DOM을 직접 조작할 때 발생하는 리플로우와 리페인트는 성능에 부담을 줄 수 있어
            이를 최소화하기 위해 DocumentFragment 노드를 활용했습니다.

            돔에 추가할 요소들을 생성해 DocumentFragment 노드의 자식 노드로 추가 후,
            마지막으로 기존 DOM에 DocumentFragment 노드를 추가했습니다.
            불필요한 여러 번의 DOM 변경과 리플로우, 리페인트를 한 번으로 줄여 렌더링 성능을 최적화하였습니다.
            이를 구현하는 과정에서 브라우저의 렌더링 메커니즘과 DOM 조작 방식을 더 명확히 알게 되었습니다.`,
        },
        {
            title: "그리드 레이아웃을 사용한 반응형 구현",
            description: `미디어 쿼리와 그리드를 활용해 다양한 화면 크기를 고려한 반응형 레이아웃을 구현하였습니다.
            화면 크기에 따라 이미지의 크기와 배치가 동적으로 변화하도록 구성하며
            예상치 못한 문제를 해결하는 과정에서 반응형 구현 능력을 키울 수 있었습니다.`,
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

export const projects = [portfolio, meetsin, ourshop, whobego];
