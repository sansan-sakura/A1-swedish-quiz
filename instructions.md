# Instructions

## State Management Quiz - Zustand or Context API

This week, the task is to build a quiz game using **either** `**Zustand**` or React's **`useContext`** for state management. It's a multiple-choice quiz, so you'll need to define your own questions and a bunch of possible answers to present to your users.

It's up to you to decide what your quiz should be about! You could come up with something fun and whacky like the Buzzfeed quizzes, or you could test your user's general knowledge with trivia questions.

### Requirements

✓ Your quiz should have at least 5 questions.

✓ When the user selects an answer, it should show if they were correct or not.

✓ While going through the quiz, it should show which question you're on, or how many are left - for example 'Question 5 / 15' or '10 questions left'.

✓ When the user has answered all the questions, they should get to a summary screen that tells them how many they got correct or incorrect.

✓ You should challenge yourself to make use of redux by making small components that interact with the store - don't just go for one big component.

✓ Don't forget CSS! Your quiz should be well-styled.

## Getting Started 🤓

In this project setup, we've provided two distinct state management approaches for your quiz game: Zustand and React's `useContext`. Your task is to collaborate as a team and utilize these state management techniques to render the quiz questions sequentially. Each question should display the question text and its associated options. Upon selecting an answer, the application should indicate whether the chosen answer is correct or incorrect, and then guide the user to the subsequent question.

For the `useContext` approach:

- We've initialized a context for the quiz in the `./src/context/QuizContext.js` file. This context will manage the state of your quiz and provide functions to interact with it.
- The starting point for this approach is the `./src/components/CurrentQuestionUseContext.jsx` component. This component fetches the current question from the context and displays it.

For the Zustand approach:

- The Zustand store for the quiz is set up in the `./src/stores/quizStore.js` file. This store will hold the state of your quiz and offer functions to manipulate it.
- The starting point for the Zustand approach is the `./src/components/CurrentQuestionZustand.jsx` component. This component retrieves the current question from the Zustand store and renders it.

Your main objective is to choose one of these state management systems—either useContext or Zustand—and integrate it into your application. Ensure a smooth quiz experience for the user by rendering the questions, presenting the possible answers, and providing feedback on the user's selection before progressing to the next question. While both approaches are provided for learning purposes, for this project, you should commit to just one to maintain clarity and consistency in your codebase.

### Planning

**You should discuss these questions before you fork and clone the repo:**

- Will you use a planning tool (Jamboard, Figma) to plan your design/app structure?
- How are you going to work in the team? Mob or smaller groups etc.
- What is your quiz about?
- Have you decided on a state management approach? Zustand or **`useContext`**?
- Which are your (at least) 5 questions and answers? (Remember, multiple choices required)
- How are you going to show the progress? i.e 1 / 5, 20%, 4 questions left.
- How will the user select the answer? Dropdown, selecting with keyboard commands, buttons, images?
- What will the summary screen look like?
- What components do you need?
- How are you dealing with the styling? CSS or Styled components?
- What stretch goals are you aiming for?

### The Questions Array

You can find the `quiz` state setup in two different locations based on the state management approach:

- For the `useContext` approach: `./src/context/QuizContext.js`
- For the Zustand approach: `./src/stores/quizStore.js`

In both setups, there's a `questions` array with a couple of placeholder objects for you to get started with. You should replace these questions with your own ones.

You're free to restructure things if you want to, but it's recommended to stick with the current setup where each question has:

- `id` - a unique identifier for the question. You can just keep incrementing numbers for these.
- `questionText` - this is the text which is displayed to the user for this question. The example questions use a string of text, but you could turn this into an object if you wanted to include images or other data.
- `options` - an array of possible answers to the question which your user will choose from. Again, in the placeholder questions, we've used strings, but you can switch them to objects if you want to add additional details such as image URLs.
- `correctAnswerIndex` - the index of the item in the `options` array which is the correct answer.

### State Management Actions

Depending on your chosen state management approach, you'll interact with the quiz state differently:

### `submitAnswer`

Use this function when a user selects an answer to the question. You need to pass an object with a key `questionId` whose value is a valid question id (from the question objects) and an `answerIndex` which is the index of the answer they chose.

- Show submitAnswer example for `useContext`

  Given the following question, for example:

  jsxCopy code

  `{ id: 1, questionText: 'Who set the Olympic record for the 100m dash in 2012?', options: ['Usain Bolt', 'Justin Gatlin', 'Tyson Gay', 'Asafa Powell'], correctAnswerIndex: 0 }`

  If the user clicks 'Asafa Powell' (index 3 in the options array), you'd use the context like this:

  jsxCopy code

  `const { submitAnswer } = useQuiz();
submitAnswer(1, 3);`

- Show submitAnswer example for Zustand

  Using the same question, with Zustand:

  jsxCopy code

  `useQuizStore.getState().submitAnswer(1, 3);`

### `goToNextQuestion`

After the user clicks an answer and you show them if they were correct or not, you should show a button to continue to the next question. When they click that button, use this function.

- Show goToNextQuestion example for `useContext`

  jsxCopy code

  `const { goToNextQuestion } = useQuiz();
goToNextQuestion();`

- Show goToNextQuestion example for Zustand

  jsxCopy code

  `useQuizStore.getState().goToNextQuestion();`

### `restart`

At the end of the quiz, if you want to start over, you can use this function.

- Show restart example for `useContext`

  jsxCopy code

  `const { restart } = useQuiz();
restart();`

- Show restart example for Zustand

  jsxCopy code

  `useQuizStore.getState().restart();`

### Selecting from the State

Depending on your chosen state management approach, you'll fetch the quiz data differently:

### For the `useContext` approach:

In the `CurrentQuestionUseContext` component, you can use the `useQuiz` hook to access the quiz state. Here's how you can fetch the current question:

jsxCopy code

`const { questions, currentQuestionIndex } = useQuiz();
const question = questions[currentQuestionIndex];`

To fetch the answer to a specific question:

jsxCopy code

`const { answers } = useQuiz();
const answer = answers.find((a) => a.questionId === question.id);`

### For the Zustand approach:

In the `CurrentQuestionZustand` component, you can use the `useQuizStore` to access the quiz state. Here's how you can fetch the current question:

jsxCopy code

`const questions = useQuizStore((state) => state.questions);
const currentQuestionIndex = useQuizStore((state) => state.currentQuestionIndex);
const question = questions[currentQuestionIndex];`

To fetch the answer to a specific question:

jsxCopy code

`const answers = useQuizStore((state) => state.answers);
const answer = answers.find((a) => a.questionId === question.id);`

### Your page should be responsive:

- showing 4 albums per row on desktop
- 2 per row on tablet
- 1 per row on mobile.

## Design

🎶 You should follow the design screenshots as closely as possible. We've provided icons for the play, heart and more info icons when hovering on an album. Use the following for fonts:

- Album title - 14px Helvetica #ffffff
- Artist name - 14px Helvetica #a0a0a0
