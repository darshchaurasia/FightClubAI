const API_KEY = 'YOUR_API_KEY_HERE'; // Replace with your actual API key

async function callChatGPTAPI(topic) {
    try {
        console.log('Sending request to OpenAI API...');
        const response = await axios.post('https://api.openai.com/v1/chat/completions', {
            model: "gpt-3.5-turbo",
            messages: [
                { role: "system", content: "You are an AI that debates topics." },
                { role: "user", content: `Debate the topic: ${topic}` },
            ]
        }, {
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        console.log('API Response:', response);
        return response.data.choices[0].message.content;
    } catch (error) {
        console.error('Error calling ChatGPT API:', error);
        if (error.response && error.response.status === 429) {
            console.log('Rate limit exceeded. Retrying after delay...');
            return 'Rate limit exceeded. Please try again later.';
        }
        return 'Error in generating debate. Please try again.';
    }
}

async function callJudgeAPI(debateText) {
    try {
        console.log('Sending request to OpenAI API for judging...');
        const response = await axios.post('https://api.openai.com/v1/chat/completions', {
            model: "gpt-3.5-turbo",
            messages: [
                { role: "system", content: "You are an AI judge who evaluates debates." },
                { role: "user", content: `Judge the following debate:\n\n${debateText}` },
            ]
        }, {
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        console.log('Judge API Response:', response);
        return response.data.choices[0].message.content;
    } catch (error) {
        console.error('Error calling Judge API:', error);
        if (error.response && error.response.status === 429) {
            console.log('Rate limit exceeded. Retrying after delay...');
            return 'Rate limit exceeded. Please try again later.';
        }
        return 'Error in judging debate. Please try again.';
    }
}

async function startDebate() {
    let topic = document.getElementById('topic').value;
    document.getElementById('debateText').innerHTML = "Generating debate...";
    console.log('Starting debate for topic:', topic);

    const debateText = await callChatGPTAPI(topic);
    document.getElementById('debateText').innerHTML = debateText;
    console.log('Debate generated:', debateText);
}

async function showResults() {
    const debateText = document.getElementById('debateText').innerHTML;

    if (debateText === "Debate will appear here..." || debateText === "Generating debate...") {
        alert('Please start the debate first.');
        return;
    }

    console.log('Showing results for debate:', debateText);
    const results = await callJudgeAPI(debateText);
    alert(results);
    console.log('Results:', results);
}

// Attach event listeners after the DOM is loaded
document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('startButton').addEventListener('click', startDebate);
    document.getElementById('resultsButton').addEventListener('click', showResults);
});
