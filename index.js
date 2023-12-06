// 모달을 생성하고 설정하는 함수
function showModal(imageUrl, text) {
  // 기존에 모달이 있다면 제거합니다.
  const existingModal = document.querySelector('.modal');
  if (existingModal) {
    existingModal.remove();
  }

  // 모달 요소를 생성합니다.
  const modal = document.createElement('div');
  modal.className = 'modal hidden';

  // 모달 내용을 담는 컨테이너를 생성합니다.
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content zoomIn';

  // 이미지를 표시할 요소를 생성합니다.
  const image = document.createElement('div');
  image.style.backgroundImage = `url(${imageUrl})`;
  image.alt = 'Door Image';
  image.style.width = '100%';
  image.style.height = '211px';

  // 텍스트를 표시할 요소를 생성합니다.
  const textElement = document.createElement('p');
  textElement.textContent = text;

  // 모달 컨텐트에 이미지와 텍스트를 추가합니다.
  modalContent.appendChild(image);
  modalContent.appendChild(textElement);

  // 모달에 모달 컨텐트를 추가합니다.
  modal.appendChild(modalContent);

  // 모달에 클릭 이벤트 리스너를 추가하여 닫을 수 있도록 합니다.
  modal.addEventListener('click', () => {
    modal.remove(); // 모달을 문서에서 제거합니다.
  });

  // 문서에 모달을 추가합니다.
  document.body.appendChild(modal);
  // 모달을 표시합니다.
  setTimeout(() => modal.classList.remove('hidden'), 0);
}

const modalMessageList = [
  { "number": 1, "message": "과아연 오빠는 매일 하나씩 까볼 수 있을지!" },
  { "number": 2, "message": "벌써 2일차, 시작이 반이다!" },
  { "number": 3, "message": "내가 6일에 만들어서 크리스마스에 끝이 나진 않지만 하나씩 다 까보도록." },
  { "number": 4, "message": "올해 정말 많은 이벤트가 있었지?" },
  { "number": 5, "message": "우리가 연애도 시작하고," },
  { "number": 6, "message": "오빠랑 두번이나 리조트 당첨돼서 놀러가고~" },
  { "number": 7, "message": "오빠는 열심히 이직 준비를 했고," },
  { "number": 8, "message": "힘든 시간이 지나고 이직까지 성공하고!" },
  { "number": 9, "message": "나도 직장인 횟수론 3년차, 제일 힘든 한해였고," },
  { "number": 10, "message": "결국엔 나도 퇴사하고~" },
  { "number": 11, "message": "벌써 우리가 두 번째로 맞이하는 겨울이 와서," },
  { "number": 12, "message": "우리가 처음 맞는 크리스마스까지 왔네!" },
  { "number": 13, "message": "오빠에겐 어떤 한해였을까??" },
  { "number": 14, "message": "솔직히 말해 봐, 나랑 연애해서 너무 좋지????💗" },
  { "number": 15, "message": "내가 완전 최고지??" },
  { "number": 16, "message": "나도 오빠가 최고야!" },
  { "number": 17, "message": "캘린더 만들다보니까 우리 같이 찍은 사진이 별로 없어서 내년엔 더 많이 만나고, 더 많이 사진 찍쟈" },
  { "number": 18, "message": "12월, 우리에겐 처음 제대로 연락하기 시작한 달이기에" },
  { "number": 19, "message": "소중히 하루하루를 보내면서," },
  { "number": 20, "message": "오빠를 만난 것에 감사하며," },
  { "number": 21, "message": "💗사랑해💗" },
  { "number": 22, "message": "오빠가 나보다 더 나 많이 사랑하지??💗 (이건 강요야)" },
  { "number": 23, "message": "앞으로도 많이 사랑해줘" },
  { "number": 24, "message": "오빠보다 조금 더 많이 사랑할게" }
];

