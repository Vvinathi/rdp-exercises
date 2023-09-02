import React, { useEffect, useState } from 'react';

function CommitMessage() {
  const [commitMessage, setCommitMessage] = useState('');

  useEffect(() => {
   
    fetch('https://whatthecommit.com/index.json')
      .then((response) => response.json())
      .then((data) => {
       
        const message = data.commit_message;
        setCommitMessage(message);
      })
      .catch((error) => {
        console.error('Error fetching commit message:', error);
      });
  }, []);

  return (
    <div>
      <br></br>
      <div className='border-2 border-lime-400 p-6'>
      <h2 className='text-2xl text-violet-700 p-2'>Random Commit Message:</h2>
      <p className='text-1xl font-mono text-rose-800 bg-yellow-200 p-2'>{commitMessage}</p>
    </div>
    </div>
  );
}

export default CommitMessage;
