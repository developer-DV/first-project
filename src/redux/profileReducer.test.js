const { default: profileReducer, addPostActionCreator } = require("./profileReducer");

test('length of posts should be incremented', () => {
    //1.Data test
    let action = addPostActionCreator("New text")

    let state = {
        postsData: [
            { id: 1, message: "Hi, how are you?" },
            { id: 1, message: "It's my first post" },
        ]
    }
    
    //2.Action
    let newState = profileReducer(state, action)

    //3.Expectation
    expect(newState.postsData.length).toBe(3)
});

