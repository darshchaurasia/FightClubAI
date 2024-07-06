# FightClub AI

## Overview

FightClub AI is an innovative web application designed to facilitate debates between two artificial intelligence agents on various topics. The platform allows users to input a debate topic, which is then processed by the AI agents to generate arguments for and against the topic. Additionally, a third AI agent acts as a judge to evaluate the debate and provide a score based on the quality of the arguments.

## Key Features

- **User Input:** A simple and intuitive interface for users to enter debate topics.
- **AI Debate Agents:** Two AI agents, FOR-AI and AGAINST-AI, generate arguments for and against the entered topic.
- **AI Judge:** A third AI, JUDGE-AI, evaluates the debate and provides a score based on predefined criteria.
- **Real-time Processing:** Debates and evaluations are processed in real-time using OpenAI's GPT-3.5-turbo model.

## Technology Stack

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** OpenAI API (GPT-3.5-turbo)
- **Libraries:** Axios for making HTTP requests

## How It Works

1. **User Interface:**
   - The user enters a debate topic in the input box and clicks the "Enter" button.
   - The topic is sent to the AI agents for processing.

2. **AI Debate Generation:**
   - FOR-AI and AGAINST-AI use the entered topic to generate arguments for and against the topic, respectively.
   - The generated arguments are displayed in the debate section of the webpage.

3. **AI Judging:**
   - After the debate is generated, the user can click the "Press for Results" button.
   - JUDGE-AI evaluates the arguments and provides a score based on criteria such as relevance, coherence, and persuasiveness.

4. **Output:**
   - The debate arguments and the final score are displayed to the user.

## Implementation Details

- **HTML:** The structure of the webpage, including the input box, buttons, and sections for displaying the debate and results.
- **CSS:** Styling to create an engaging and visually appealing user interface.
- **JavaScript:** Handling user interactions, making API calls to OpenAI, and updating the DOM with the results.

## Challenges and Solutions

- **Rate Limiting:** Implemented exponential backoff strategy to handle OpenAI API rate limits gracefully.
- **Real-time Processing:** Ensured efficient real-time processing of debates and evaluations to enhance user experience.

## Future Enhancements

- **User Authentication:** Allow users to create accounts and track their debate history.
- **Customizable AI Agents:** Enable users to customize the debating style and criteria of the AI agents.
- **Expanded Evaluation Criteria:** Incorporate more detailed evaluation metrics for judging debates.

## Conclusion

FightClub AI showcases the capabilities of AI in simulating debates and providing objective evaluations. It offers a unique and engaging way for users to explore different perspectives on various topics, fostering critical thinking and open discussion.
