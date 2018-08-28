import React from 'react';
import './successMsg.css';

export default () => {
  return (
    <div role="alert" className="c-msg">
      <h3 className="c-msg__headline">
        <span role="img" aria-label="Party popper">
          🎉
        </span>
        You're now set!
        <span role="img" aria-label="Party popper">
          🎉
        </span>
      </h3>
      <p>
        <strong> But wait...</strong> There are a few things to clean up first:
      </p>
      <ul>
        <li>
          <code>REACT_APP_CTF_CMA_TOKEN</code> has to be removed from the
          Netlify build settings and{' '}
          <a
            href={`https://app.contentful.com/spaces/${
              process.env.REACT_APP_CTF_SPACE
            }/api/cma_tokens`}
          >
            should be revoked in Contentful
          </a>
        </li>
        <li>
          the defined <code>postinstall</code> script inside of the{' '}
          <code>package.json</code> which imported the content can be removed
        </li>
        <li>
          the <code>./scripts</code> directory can be removed including its
          contents
        </li>
        <li>
          the data that was used to bootstrap your new space in{' '}
          <code>./contentful</code> can also be removed
        </li>
        <li>
          and lastly...this component <code>SuccessMsg</code> used in{' '}
          <code>./components/App.js</code> has also done its job and can be
          removed!
        </li>
      </ul>
      <p>
        <strong>Have fun!</strong>
      </p>
    </div>
  );
};
