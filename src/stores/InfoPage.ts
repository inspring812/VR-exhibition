// 액션 타입 정의
const CHANGE_TEXT = 'info/CHANGE_TEXT';

interface changeText {
  type: typeof CHANGE_TEXT;
  ARtext: string;
}

type ActionTypes = changeText;

// 액션 생성함수 정의
const changeText = (ARtext: string = 'AR Initialize'): ActionTypes => ({
  type: CHANGE_TEXT,
  ARtext,
});

export const actionCreators = {
  changeText,
};

// 인터페이스
export interface IProps {
  // 컴포넌트 주입
  ARtext: string;
  changeText: Function;
}

export interface IState {
  ARtext: string;
}

export const initialState: IState = {
  ARtext: 'AR text',
};

// 리듀서
export default function InfoPage(
  state = initialState,
  action: ActionTypes | any,
): IState {
  switch (action.type) {
    case CHANGE_TEXT:
      return {
        ...state,
        ARtext: action.ARtext,
      };
    default:
      return state;
  }
}
