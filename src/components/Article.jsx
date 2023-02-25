import React from "react";

function Article() {
  return (
    <article className="new-articles">
      <h2 className="new-articles-heading">New</h2>
      <div className="articles">
        <div className="article">
          <h3 className="article-heading">
            <a className="article-link-btn" href="">
              Hydrogen VS Electric Cars
            </a>
          </h3>
          <p className="article-content">
            Will hydrogen-fueled cars ever catch up to EVs?
          </p>
        </div>
        <div className="article">
          <h3 className="article-heading">
            <a className="article-link-btn" href="">
              The Downsides of AI Artistry
            </a>
          </h3>
          <p className="article-content">
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
        </div>
        <div className="article">
          <h3 className="article-heading">
            <a className="article-link-btn" href="">
              Is VC Funding Drying Up?
            </a>
          </h3>
          <p className="article-content">
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </div>
      </div>
    </article>
  );
}

export default Article;
