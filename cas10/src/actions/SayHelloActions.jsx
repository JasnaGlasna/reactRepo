export const sayHello = () => {
    return {
      type: "SAY_HELLO",
      payload: "Hi and welcome to my first Redux App",
    };
  };

  export const sayGoodbay = () => {
    return{
      type: "SAY_GOODBAY",
      payload: "Nice meeting you",
    };
  };
  