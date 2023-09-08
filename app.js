const express = require('express');
const app = express();

app.get('/api', (req, res) => {
    const slackName = req.query.slack_name || 'example_name';
    const track = req.query.track || 'backend';
    const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });
    const utcTime = new Date().toISOString();
    const githubFileUrl = 'https://github.com/feeyzo/repo/blob/main/hngstageone.ext';
    const githubRepoUrl = 'https://github.com/Feeyzo/hngstageone.git';

    const response = {
        slack_name: slackName,
        current_day: currentDay,
        utc_time: utcTime,
        track: track,
        github_file_url: githubFileUrl,
        github_repo_url: githubRepoUrl,
        status_code: 200,
    };

    res.json(response);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
