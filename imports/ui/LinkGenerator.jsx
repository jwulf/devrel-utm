import React, { useState } from 'react';

/**
 * 
utm_medium=referral
utm_source=web property url
utm_campaign=content's campaign
utm_term=Devrel's team member FirstName+LastName
utm_content=devrel-team-post
 */

/**
The utm_source is set to the place the link is (since the example was a post to dev.to, that is the utm_source
The utm_medium is a referral
The utm_campaign is .. well, the campaign. I think (and @Rachael Kelly can correct me here) our campaign might be something like q2-devrel since we're trying this out to see how it works.
The utm_term is your name. davidsimmons for me, joshwulf for @Josh Wulf, etc.
The utm_content is whatever this content is. We can use a couple of categories here:
devrel-team-post
devrel-twitter
devrel-linkedin
devrel-facebook if you use facebook
etc.
 */
export const LinkGenerator = () => {
    const medium = 'referral';

    const [url, setUrl] = useState('https://camunda.com');
    const [source, setSource] = useState(localStorage.getItem('source'));
    const [term, setTerm] = useState(localStorage.getItem('term'));
    const [content, setContent] = useState('devrel-team-post');
    const [campaign, setCampaign] = useState(localStorage.getItem('campaign') || 'q2-devrel');
    const [generatedUrl, setGeneratedUrl] = useState('');

    const handleUrlChange = (event) => 
        setUrl(event.target.value);

    const handleSourceChange = event => {
        setSource(event.target.value);
        localStorage.setItem('source', event.target.value);
    }

    const handleTermChange = event => {
        setTerm(event.target.value);
        localStorage.setItem('term', event.target.value);
    }

    const handleSubmit = event => {
        setGeneratedUrl(`${url}?utm_medium=${medium}&utm_source=${source}&utm_campaign=${campaign}&utm_term=${term}&utm_content=${content}`)
        event.preventDefault();
    }

    const handleContentChange = event => 
        setContent(event.target.value);
    
    const handleCampaignChange = event => {
        setCampaign(event.target.value)
        localStorage.setItem('campaign', event.target.value)
    }
    
    return (
        <div>
        <form onSubmit={handleSubmit}>
            <label>
            URL:
            <input type="text" value={url} onChange={handleUrlChange} />
            </label>
            <label>
            Source:
            <input type="text" value={source} onChange={handleSourceChange} />
            </label>
            <label>
            DevRel Team Member:
            <input type="text" value={term} onChange={handleTermChange} />
            </label>
            <label>
            Campaign:
            <input type="text" value={campaign} onChange={handleCampaignChange} />
            </label>
            <label>
          Content:
          <select value={content} onChange={handleContentChange}>
            <option value="devrel-team-post">Team Post</option>
            <option value="devrel-twitter">Twitter</option>
            <option value="devrel-linkedin">LinkedIn</option>
            <option value="devrel-facebook">Facebook</option>
          </select>
        </label>
            <input type="submit" value="Submit" />
        </form>
        <br></br>
        <p>{generatedUrl}</p>
        </div>
    );
};