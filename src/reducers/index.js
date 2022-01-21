import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL, ADD_SMURF } from "../actions";

export const initialState = {
  smurf: [
    {
      id: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
      name: "Poppa Smurf",
      position: "Village Leader",
      nickname: "Pops",
      description:
        "Papa is the practical village leader and the father figure of 100 or so young Smurfs. He is easily identified by his red Smurf hat, pants, and a shortly-trimmed white beard and moustache.",
    },
  ],
  isLoading: false,
  error: "Ya done goofed",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        smurf: [],
        isLoading: true,
        error: "",
      };
    case FETCH_SUCCESS:
      return {
        smurf: action.payload,
        isLoading: false,
        error: "",
      };
    case FETCH_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case ADD_SMURF:
      return {
        smurf: [
          ...state.smurf,
          {
            name: action.payload.name,
            position: action.payload.position,
            nickname: action.payload.nickname,
            description: action.payload.description,
          },
        ],
        isLoading: false,
        error: "",
      };
    default:
      return state;
  }
};

//**************DO NOT EDIT ANY CODE BEYOND THIS POINT**************//
export default reducer;

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accommodate the start of a smurf fetch.
//4. Add in a reducer case to accommodate the successful smurf api fetch.
//5. Add in a reducer cases to accommodate the failed smurf api fetch.
//6. Add in a reducer case to accommodate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.
